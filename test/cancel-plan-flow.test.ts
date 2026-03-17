// eslint-disable-next-line import/no-extraneous-dependencies
import { html, fixture, expect } from '@open-wc/testing';

import type {
  MonthlyGivingCircle,
  APlanUpdate,
} from '../src/monthly-giving-circle';

import '../src/monthly-giving-circle';
import type { MGCButton } from '../src/presentational/mgc-button';
import { MonthlyPlan } from '../src/models/plan';

describe('Cancel Plan Flow:', () => {
  const makePlan = (overrides: { isCancelled?: boolean } = {}) =>
    new MonthlyPlan({
      token: 'a.va.lid.T0ken',
      amount: 5,
      currency: 'USD',
      start_date: '2024-07-01 00:00:00',
      is_test: true,
      isCancelled: overrides.isCancelled ?? false,
      btdata: {
        billingDayOfMonth: 22,
        nextBillingDate: {
          date: '2024-08-22 00:00:00.000000',
          timezone_type: 3,
          timezone: 'UTC',
        },
        lastBillingDate: {
          date: '2024-07-22 00:00:00.000000',
          timezone_type: 3,
          timezone: 'UTC',
        },
        status: 'Active',
        paymentMethodType: 'Venmo',
        last4: null,
        cardType: null,
        expirationMonth: null,
        expirationYear: null,
        venmoUsername: 'venmojoe',
      },
    });

  async function navigateToEditView(el: MonthlyGivingCircle) {
    const mgcPlans = el.querySelector('ia-mgc-plans');
    const editButton = mgcPlans!.shadowRoot?.querySelector(
      'ia-mgc-button.edit-donation',
    ) as MGCButton;
    const innerButton = editButton.shadowRoot?.querySelector('button');
    innerButton!.click();
    await el.updateComplete;
  }

  it('cancelPlan event fires with the correct plan when cancel is triggered', async () => {
    const plan = makePlan();
    const el = await fixture<MonthlyGivingCircle>(
      html`<ia-monthly-giving-circle
        .canEdit=${true}
        .plans=${[plan]}
      ></ia-monthly-giving-circle>`,
    );

    await navigateToEditView(el);
    expect(el.viewToDisplay).to.equal('editPlan');
    expect(el.editingThisPlan).to.equal(plan);

    const editForm = el.querySelector('ia-mgc-edit-plan');
    expect(editForm).to.exist;

    let receivedDetail: any;
    el.addEventListener('cancelPlan', (e: Event) => {
      receivedDetail = (e as CustomEvent).detail;
    });

    // Dispatch without bubbles so only the Lit @cancelPlan handler on
    // ia-mgc-edit-plan catches it and re-dispatches with the plan detail.
    editForm!.dispatchEvent(new CustomEvent('cancelPlan'));

    expect(receivedDetail).to.exist;
    expect(receivedDetail.plan).to.equal(plan);
  });

  it('updateReceived with action cancel returns to plans view', async () => {
    const plan = makePlan();
    const el = await fixture<MonthlyGivingCircle>(
      html`<ia-monthly-giving-circle
        .canEdit=${true}
        .plans=${[plan]}
      ></ia-monthly-giving-circle>`,
    );

    await navigateToEditView(el);
    expect(el.viewToDisplay).to.equal('editPlan');
    expect(el.editingThisPlan).to.equal(plan);

    el.updateReceived({
      action: 'cancel',
      plan,
      status: 'success',
      message: '',
    } as APlanUpdate);

    await el.updateComplete;

    expect(el.viewToDisplay).to.equal('plans');
    expect(el.editingThisPlan).to.be.undefined;

    const editForm = el.querySelector('ia-mgc-edit-plan');
    expect(editForm).to.not.exist;
  });

  it('cancelled plan renders as disabled in the plans list', async () => {
    const plan = makePlan({ isCancelled: true });
    const el = await fixture<MonthlyGivingCircle>(
      html`<ia-monthly-giving-circle
        .canEdit=${true}
        .plans=${[plan]}
      ></ia-monthly-giving-circle>`,
    );

    expect(el.viewToDisplay).to.equal('plans');

    const mgcPlans = el.querySelector('ia-mgc-plans');
    expect(mgcPlans).to.exist;

    const li = mgcPlans!.shadowRoot?.querySelector('li');
    expect(li).to.exist;
    expect(li!.classList.contains('cancelled')).to.be.true;

    const editButton = mgcPlans!.shadowRoot?.querySelector(
      'ia-mgc-button.edit-donation',
    ) as MGCButton;
    expect(editButton).to.exist;
    expect(editButton.innerText).to.equal('Plan is cancelled');
    expect(editButton.isDisabled).to.be.true;
  });

  it('updateReceived with plan.hasBeenCancelled also triggers cancel path', async () => {
    const plan = makePlan();
    const el = await fixture<MonthlyGivingCircle>(
      html`<ia-monthly-giving-circle
        .canEdit=${true}
        .plans=${[plan]}
      ></ia-monthly-giving-circle>`,
    );

    await navigateToEditView(el);
    expect(el.viewToDisplay).to.equal('editPlan');

    plan.cancelPlan();
    expect(plan.hasBeenCancelled).to.be.true;

    el.updateReceived({
      action: 'receiptSent',
      plan,
      status: 'success',
      message: '',
    } as APlanUpdate);

    await el.updateComplete;

    expect(el.viewToDisplay).to.equal('plans');
    expect(el.editingThisPlan).to.be.undefined;
  });
});
