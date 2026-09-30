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

  describe('cancelled plan in the plans list', () => {
    async function renderPlans(plans: MonthlyPlan[]) {
      const el = await fixture<MonthlyGivingCircle>(
        html`<ia-monthly-giving-circle
          .canEdit=${true}
          .plans=${plans}
        ></ia-monthly-giving-circle>`,
      );
      const mgcPlans = el.querySelector('ia-mgc-plans')!;
      await (mgcPlans as any).updateComplete;
      return mgcPlans.shadowRoot!;
    }

    function planButton(li: Element) {
      const host = li.querySelector('ia-mgc-button') as MGCButton;
      return host.shadowRoot!.querySelector('button')!;
    }

    it('shows "Plan is cancelled" as plain status text in the card\'s own text color', async () => {
      const root = await renderPlans([makePlan({ isCancelled: true })]);
      const li = root.querySelector('li.cancelled')!;
      const button = planButton(li);
      const style = getComputedStyle(button);

      expect(li.querySelector('ia-mgc-button')?.textContent?.trim()).to.equal(
        'Plan is cancelled',
      );
      expect(style.color).to.equal(getComputedStyle(li).color);
      // not faded like a normal disabled button
      expect(style.opacity).to.equal('1');
      // no grey disabled fill or border behind the text
      expect(style.backgroundColor).to.equal('rgba(0, 0, 0, 0)');
      expect(style.borderTopWidth).to.equal('0px');
    });

    it('leaves an active plan\'s "Manage" link blue and full strength', async () => {
      const root = await renderPlans([
        makePlan({ isCancelled: true }),
        makePlan(),
      ]);
      const activeLi = root.querySelector('li:not(.cancelled)')!;
      const style = getComputedStyle(planButton(activeLi));

      expect(
        activeLi.querySelector('ia-mgc-button')?.textContent?.trim(),
      ).to.equal('Manage this monthly donation');
      expect(style.color).to.equal('rgb(75, 100, 255)');
      expect(style.opacity).to.equal('1');
    });
  });

  describe('cancel confirmation button', () => {
    async function openCancelConfirmation() {
      const plan = makePlan();
      const el = await fixture<MonthlyGivingCircle>(
        html`<ia-monthly-giving-circle
          .canEdit=${true}
          .plans=${[plan]}
        ></ia-monthly-giving-circle>`,
      );
      await navigateToEditView(el);

      const cancelForm = el.querySelector('ia-mgc-cancel-plan') as any;
      await cancelForm.updateComplete;
      const startCancel = cancelForm.shadowRoot.querySelector(
        'ia-mgc-button.link.cancel',
      ) as MGCButton;
      startCancel.shadowRoot!.querySelector('button')!.click();
      await cancelForm.updateComplete;

      const root = cancelForm.shadowRoot as ShadowRoot;
      const confirmHost = root.querySelector(
        'ia-mgc-button.cancel:not(.link)',
      ) as MGCButton;
      await confirmHost.updateComplete;
      return {
        cancelForm,
        root,
        confirmHost,
        confirmButton: () => confirmHost.shadowRoot!.querySelector('button')!,
      };
    }

    it('is labelled "Cancel recurring donation" behind an "I\'m sure" checkbox', async () => {
      const { root, confirmHost } = await openCancelConfirmation();

      expect(confirmHost.textContent?.trim()).to.equal(
        'Cancel recurring donation',
      );
      expect(root.querySelector('label')?.textContent?.trim()).to.equal(
        "I'm sure I want to cancel my recurring donation.",
      );
    });

    it('stays a faded red with white text and a pink border until confirmed', async () => {
      const { confirmButton } = await openCancelConfirmation();
      const button = confirmButton();
      const style = getComputedStyle(button);

      expect(button.disabled).to.be.true;
      // red cancel fill kept while disabled, not the grey default
      expect(style.backgroundColor).to.equal('rgb(217, 83, 79)');
      expect(style.opacity).to.equal('0.5');
      expect(style.color).to.equal('rgb(255, 255, 255)');
      expect(style.borderTopColor).to.equal('rgb(241, 130, 134)');
      expect(style.borderTopWidth).to.equal('1px');
    });

    it('goes full red once confirmed, same border, without changing size', async () => {
      const { cancelForm, root, confirmHost, confirmButton } =
        await openCancelConfirmation();
      const { offsetWidth, offsetHeight } = confirmButton();

      (root.querySelector('input[type=checkbox]') as HTMLInputElement).click();
      await cancelForm.updateComplete;
      await confirmHost.updateComplete;

      const button = confirmButton();
      const style = getComputedStyle(button);
      expect(button.disabled).to.be.false;
      expect(style.opacity).to.equal('1');
      expect(style.backgroundColor).to.equal('rgb(217, 83, 79)');
      expect(style.color).to.equal('rgb(255, 255, 255)');
      expect(style.borderTopColor).to.equal('rgb(241, 130, 134)');
      expect(style.borderTopWidth).to.equal('1px');
      expect(button.offsetWidth).to.equal(offsetWidth);
      expect(button.offsetHeight).to.equal(offsetHeight);
    });

    it('shows the italic pause reminder below the confirmation box', async () => {
      const { root } = await openCancelConfirmation();
      const note = root.querySelector('.pause-note')!;

      expect(note.previousElementSibling?.classList.contains('cancel-donation'))
        .to.be.true;
      expect(note.textContent?.replace(/\s+/g, ' ').trim()).to.equal(
        'You can also pause your recurring donation by setting the next donation date up to 12 months in the future.',
      );
      expect(getComputedStyle(note).fontStyle).to.equal('italic');
    });
  });
});
