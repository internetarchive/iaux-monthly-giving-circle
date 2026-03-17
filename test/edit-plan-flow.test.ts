// eslint-disable-next-line import/no-extraneous-dependencies
import { html, fixture, expect } from '@open-wc/testing';

import type {
  MonthlyGivingCircle,
  APlanUpdate,
} from '../src/monthly-giving-circle';
import type { IauxEditPlanForm } from '../src/edit-plan-form';
import type { MGCEditPlanAmount } from '../src/form-sections/amount';
import type { MGCEditPlanDate } from '../src/form-sections/date';
import type { IauxMgcCancelPlan } from '../src/form-sections/cancel';
import type { MGCButton } from '../src/presentational/mgc-button';
import type { MGCFormSectionInfo } from '../src/presentational/donation-section-info';

import '../src/monthly-giving-circle';
import { makePlan, navigateToEditView } from './helpers/edit-plan-helpers';

describe('Edit Plan Flow:', () => {
  it('updateAmount event fires from the edit view with the correct plan', async () => {
    const plan = makePlan();
    const el = await fixture<MonthlyGivingCircle>(
      html`<ia-monthly-giving-circle
        .canEdit=${true}
        .plans=${[plan]}
      ></ia-monthly-giving-circle>`,
    );

    await navigateToEditView(el);
    expect(el.viewToDisplay).to.equal('editPlan');

    const editPlan = el.querySelector('ia-mgc-edit-plan') as IauxEditPlanForm;
    expect(editPlan).to.exist;

    let receivedDetail: any;
    el.addEventListener('updateAmount', (e: Event) => {
      receivedDetail = (e as CustomEvent).detail;
    });

    // The amount sub-form calls updateAmountHandler (a callback prop),
    // which in turn dispatches updateAmount on the main component.
    // Simulate by calling the handler directly.
    editPlan.updateAmountHandler?.(plan, {
      amount: 15,
      baseAmount: 15,
      coverFees: false,
      feeCovered: 0,
    });

    expect(receivedDetail).to.exist;
    expect(receivedDetail.plan).to.equal(plan);
    expect(receivedDetail.amountOptions.amount).to.equal(15);
  });

  it('updateReceived with amountUpdate success closes amount sub-form', async () => {
    const plan = makePlan();
    const el = await fixture<MonthlyGivingCircle>(
      html`<ia-monthly-giving-circle
        .canEdit=${true}
        .plans=${[plan]}
      ></ia-monthly-giving-circle>`,
    );

    await navigateToEditView(el);

    const editPlan = el.querySelector('ia-mgc-edit-plan') as IauxEditPlanForm;
    const amountEl = editPlan.querySelector(
      'ia-mgc-edit-plan-amount',
    ) as MGCEditPlanAmount;
    expect(amountEl).to.exist;

    // Open the amount sub-form
    amountEl.currentlyEditing = true;
    await amountEl.updateComplete;
    expect(amountEl.currentlyEditing).to.be.true;

    // Simulate a success update
    const update: APlanUpdate = {
      action: 'amountUpdate',
      plan,
      status: 'success',
      message: '',
    };
    el.updateReceived(update);
    await amountEl.updateComplete;

    expect(amountEl.currentlyEditing).to.be.false;
    expect(amountEl.updateStatus).to.equal('success');
  });

  it('sub-forms can be toggled independently while in edit view', async () => {
    const plan = makePlan();
    const el = await fixture<MonthlyGivingCircle>(
      html`<ia-monthly-giving-circle
        .canEdit=${true}
        .plans=${[plan]}
      ></ia-monthly-giving-circle>`,
    );

    await navigateToEditView(el);

    const editPlan = el.querySelector('ia-mgc-edit-plan') as IauxEditPlanForm;

    // --- Open Amount sub-form ---
    const amountEl = editPlan.querySelector(
      'ia-mgc-edit-plan-amount',
    ) as MGCEditPlanAmount;
    expect(amountEl).to.exist;
    await amountEl.updateComplete;

    const amountSectionInfo = amountEl.shadowRoot?.querySelector(
      'ia-mgc-form-section-info',
    ) as MGCFormSectionInfo;
    expect(amountSectionInfo).to.exist;
    await amountSectionInfo.updateComplete;

    const amountEditBtn = amountSectionInfo?.shadowRoot?.querySelector(
      'ia-mgc-button',
    ) as MGCButton;
    expect(amountEditBtn).to.exist;
    await amountEditBtn.updateComplete;

    const amountInnerBtn = amountEditBtn.shadowRoot?.querySelector('button');
    expect(amountInnerBtn).to.exist;
    amountInnerBtn!.click();
    await amountEl.updateComplete;

    expect(amountEl.currentlyEditing).to.be.true;
    const amountForm = amountEl.shadowRoot?.querySelector(
      'form#edit-plan-amount',
    );
    expect(amountForm).to.exist;

    // --- Open Date sub-form ---
    const dateEl = editPlan.querySelector(
      'ia-mgc-edit-date',
    ) as MGCEditPlanDate;
    expect(dateEl).to.exist;
    await dateEl.updateComplete;

    const dateSectionInfo = dateEl.shadowRoot?.querySelector(
      'ia-mgc-form-section-info',
    ) as MGCFormSectionInfo;
    expect(dateSectionInfo).to.exist;
    await dateSectionInfo.updateComplete;

    const dateEditBtn = dateSectionInfo?.shadowRoot?.querySelector(
      'ia-mgc-button',
    ) as MGCButton;
    expect(dateEditBtn).to.exist;
    await dateEditBtn.updateComplete;

    const dateInnerBtn = dateEditBtn?.shadowRoot?.querySelector('button');
    expect(dateInnerBtn).to.exist;
    dateInnerBtn!.click();
    await dateEl.updateComplete;

    expect(dateEl.currentlyEditing).to.be.true;
    const dateForm = dateEl.shadowRoot?.querySelector('form#edit-date');
    expect(dateForm).to.exist;

    // Amount should still be open
    expect(amountEl.currentlyEditing).to.be.true;

    // --- Open Cancel section ---
    const cancelEl = editPlan.querySelector(
      'ia-mgc-cancel-plan',
    ) as IauxMgcCancelPlan;
    expect(cancelEl).to.exist;

    const cancelBtn = cancelEl.shadowRoot?.querySelector(
      'ia-mgc-button.link.cancel',
    ) as MGCButton;
    const cancelInnerBtn = cancelBtn?.shadowRoot?.querySelector('button');
    cancelInnerBtn!.click();
    await cancelEl.updateComplete;

    expect(cancelEl.initialCancelRequest).to.be.true;
    const cancelSection = cancelEl.shadowRoot?.querySelector(
      'section.cancel-donation',
    );
    expect(cancelSection).to.exist;

    // Amount and Date should still be open
    expect(amountEl.currentlyEditing).to.be.true;
    expect(dateEl.currentlyEditing).to.be.true;
  });

  it('sub-forms can be closed independently', async () => {
    const plan = makePlan();
    const el = await fixture<MonthlyGivingCircle>(
      html`<ia-monthly-giving-circle
        .canEdit=${true}
        .plans=${[plan]}
      ></ia-monthly-giving-circle>`,
    );

    await navigateToEditView(el);

    const editPlan = el.querySelector('ia-mgc-edit-plan') as IauxEditPlanForm;

    const amountEl = editPlan.querySelector(
      'ia-mgc-edit-plan-amount',
    ) as MGCEditPlanAmount;
    const dateEl = editPlan.querySelector(
      'ia-mgc-edit-date',
    ) as MGCEditPlanDate;
    const cancelEl = editPlan.querySelector(
      'ia-mgc-cancel-plan',
    ) as IauxMgcCancelPlan;

    // Open all sub-forms
    amountEl.currentlyEditing = true;
    dateEl.currentlyEditing = true;
    await amountEl.updateComplete;
    await dateEl.updateComplete;

    // Open cancel
    cancelEl.initialCancelRequest = true;
    await cancelEl.updateComplete;

    // Close cancel via exit button
    const exitCancelBtn = cancelEl.shadowRoot?.querySelector(
      'ia-mgc-button.text.exit-cancel',
    ) as MGCButton;
    expect(exitCancelBtn).to.exist;
    const exitCancelInnerBtn =
      exitCancelBtn?.shadowRoot?.querySelector('button');
    exitCancelInnerBtn!.click();
    await cancelEl.updateComplete;

    expect(cancelEl.initialCancelRequest).to.be.false;
    expect(amountEl.currentlyEditing).to.be.true;
    expect(dateEl.currentlyEditing).to.be.true;

    // Close amount
    amountEl.currentlyEditing = false;
    await amountEl.updateComplete;

    expect(amountEl.currentlyEditing).to.be.false;
    expect(dateEl.currentlyEditing).to.be.true;

    // Close date
    dateEl.currentlyEditing = false;
    await dateEl.updateComplete;

    expect(dateEl.currentlyEditing).to.be.false;
    expect(amountEl.currentlyEditing).to.be.false;
  });

  it('"Back to account settings" returns to plans view from edit view', async () => {
    const plan = makePlan();
    const el = await fixture<MonthlyGivingCircle>(
      html`<ia-monthly-giving-circle
        .canEdit=${true}
        .plans=${[plan]}
      ></ia-monthly-giving-circle>`,
    );

    await navigateToEditView(el);
    expect(el.viewToDisplay).to.equal('editPlan');
    expect(el.querySelector('ia-mgc-edit-plan')).to.exist;

    // Find "Back to account settings" button
    const backButton = el.querySelector(
      'ia-mgc-button#close-edit-plan',
    ) as MGCButton;
    expect(backButton).to.exist;

    const innerButton = backButton.shadowRoot?.querySelector('button');
    innerButton!.click();
    await el.updateComplete;

    expect(el.viewToDisplay).to.equal('plans');
    expect(el.querySelector('ia-mgc-edit-plan')).to.not.exist;
    expect(el.querySelector('ia-mgc-plans')).to.exist;
  });
});
