// eslint-disable-next-line import/no-extraneous-dependencies
import { html, fixture, expect } from '@open-wc/testing';

import type {
  MonthlyGivingCircle,
  APlanUpdate,
} from '../src/monthly-giving-circle';
import type { IauxEditPlanForm } from '../src/edit-plan-form';
import type { MGCEditPlanAmount } from '../src/form-sections/amount';
import type { MGCEditPlanDate } from '../src/form-sections/date';
import type { MGCEditPaymentMethod } from '../src/form-sections/payment-method';

import '../src/monthly-giving-circle';
import { makePlan, navigateToEditView } from './helpers/edit-plan-helpers';

describe('Error/failure callbacks:', () => {
  it('updateReceived with amountUpdate fail keeps amount form open', async () => {
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

    // Open amount sub-form
    amountEl.currentlyEditing = true;
    await amountEl.updateComplete;
    expect(amountEl.currentlyEditing).to.be.true;

    // Simulate a fail update
    const update: APlanUpdate = {
      action: 'amountUpdate',
      plan,
      status: 'fail',
      message: '',
    };
    el.updateReceived(update);
    await amountEl.updateComplete;

    expect(amountEl.currentlyEditing).to.be.true;
    expect(amountEl.updateStatus).to.equal('fail');
  });

  it('updateReceived with dateUpdate fail keeps date form open', async () => {
    const plan = makePlan();
    const el = await fixture<MonthlyGivingCircle>(
      html`<ia-monthly-giving-circle
        .canEdit=${true}
        .plans=${[plan]}
      ></ia-monthly-giving-circle>`,
    );

    await navigateToEditView(el);

    const editPlan = el.querySelector('ia-mgc-edit-plan') as IauxEditPlanForm;
    const dateEl = editPlan.querySelector(
      'ia-mgc-edit-date',
    ) as MGCEditPlanDate;

    // Open date sub-form
    dateEl.currentlyEditing = true;
    await dateEl.updateComplete;
    expect(dateEl.currentlyEditing).to.be.true;

    // Simulate a fail update
    const update: APlanUpdate = {
      action: 'dateUpdate',
      plan,
      status: 'fail',
      message: '',
    };
    el.updateReceived(update);
    await dateEl.updateComplete;

    expect(dateEl.currentlyEditing).to.be.true;
    expect(dateEl.updateStatus).to.equal('fail');
  });

  it('updateReceived with paymentMethodUpdate fail keeps payment method form open', async () => {
    const plan = makePlan();
    const el = await fixture<MonthlyGivingCircle>(
      html`<ia-monthly-giving-circle
        .canEdit=${true}
        .canEditPaymentMethod=${true}
        .plans=${[plan]}
      ></ia-monthly-giving-circle>`,
    );

    await navigateToEditView(el);

    const editPlan = el.querySelector('ia-mgc-edit-plan') as IauxEditPlanForm;
    const paymentMethodEl = editPlan.querySelector(
      'ia-mgc-edit-payment-method',
    ) as MGCEditPaymentMethod;

    // Open payment method sub-form
    paymentMethodEl.currentlyEditing = true;
    await paymentMethodEl.updateComplete;
    expect(paymentMethodEl.currentlyEditing).to.be.true;

    // Simulate a fail update
    const update: APlanUpdate = {
      action: 'paymentMethodUpdate',
      plan,
      status: 'fail',
      message: '',
    };
    el.updateReceived(update);
    await paymentMethodEl.updateComplete;

    expect(paymentMethodEl.currentlyEditing).to.be.true;
    expect(paymentMethodEl.updateStatus).to.equal('fail');
  });

  it('failure in one sub-form does not affect other sub-forms', async () => {
    const plan = makePlan();
    const el = await fixture<MonthlyGivingCircle>(
      html`<ia-monthly-giving-circle
        .canEdit=${true}
        .canEditPaymentMethod=${true}
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
    const paymentMethodEl = editPlan.querySelector(
      'ia-mgc-edit-payment-method',
    ) as MGCEditPaymentMethod;

    // Open all three sub-forms
    amountEl.currentlyEditing = true;
    dateEl.currentlyEditing = true;
    paymentMethodEl.currentlyEditing = true;
    await amountEl.updateComplete;
    await dateEl.updateComplete;
    await paymentMethodEl.updateComplete;

    // Fail only the amount update
    const update: APlanUpdate = {
      action: 'amountUpdate',
      plan,
      status: 'fail',
      message: '',
    };
    el.updateReceived(update);
    await amountEl.updateComplete;
    await dateEl.updateComplete;
    await paymentMethodEl.updateComplete;

    // Amount should show fail
    expect(amountEl.updateStatus).to.equal('fail');
    expect(amountEl.currentlyEditing).to.be.true;

    // Date and payment method should be unaffected
    expect(dateEl.updateStatus).to.equal('');
    expect(dateEl.currentlyEditing).to.be.true;
    expect(paymentMethodEl.updateStatus).to.equal('');
    expect(paymentMethodEl.currentlyEditing).to.be.true;
  });
});
