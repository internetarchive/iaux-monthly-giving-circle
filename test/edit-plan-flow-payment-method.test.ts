// eslint-disable-next-line import/no-extraneous-dependencies
import { html, fixture, expect } from '@open-wc/testing';
import { PaymentProvider } from '@internetarchive/donation-form-data-models';

import type {
  MonthlyGivingCircle,
  APlanUpdate,
} from '../src/monthly-giving-circle';
import type { IauxEditPlanForm } from '../src/edit-plan-form';
import type { MGCEditPlanAmount } from '../src/form-sections/amount';
import type { MGCEditPlanDate } from '../src/form-sections/date';
import type { MGCEditPaymentMethod } from '../src/form-sections/payment-method';
import type { MGCButton } from '../src/presentational/mgc-button';
import type { MGCFormSectionInfo } from '../src/presentational/donation-section-info';

import '../src/monthly-giving-circle';
import { makePlan, navigateToEditView } from './helpers/edit-plan-helpers';

describe('Payment method coordination:', () => {
  it('payment method sub-form appears when canEditPaymentMethod is true', async () => {
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
    expect(paymentMethodEl).to.exist;
    expect(paymentMethodEl.currentlyEditing).to.be.false;
  });

  it('payment method sub-form does NOT appear when canEditPaymentMethod is false', async () => {
    const plan = makePlan();
    const el = await fixture<MonthlyGivingCircle>(
      html`<ia-monthly-giving-circle
        .canEdit=${true}
        .plans=${[plan]}
      ></ia-monthly-giving-circle>`,
    );

    await navigateToEditView(el);

    const editPlan = el.querySelector('ia-mgc-edit-plan') as IauxEditPlanForm;
    const paymentMethodEl = editPlan.querySelector(
      'ia-mgc-edit-payment-method',
    );
    expect(paymentMethodEl).to.not.exist;
  });

  it('payment method can be toggled independently of amount and date', async () => {
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

    // Open amount and date sub-forms
    amountEl.currentlyEditing = true;
    dateEl.currentlyEditing = true;
    await amountEl.updateComplete;
    await dateEl.updateComplete;

    // Open payment method via its edit button
    // payment-method uses light DOM, so querySelector directly
    const pmSectionInfo = paymentMethodEl.querySelector(
      'ia-mgc-form-section-info',
    ) as MGCFormSectionInfo;
    expect(pmSectionInfo).to.exist;
    await pmSectionInfo.updateComplete;

    const pmEditBtn = pmSectionInfo.shadowRoot?.querySelector(
      'ia-mgc-button',
    ) as MGCButton;
    expect(pmEditBtn).to.exist;
    await pmEditBtn.updateComplete;

    const pmInnerBtn = pmEditBtn.shadowRoot?.querySelector('button');
    expect(pmInnerBtn).to.exist;
    pmInnerBtn!.click();
    await paymentMethodEl.updateComplete;

    expect(paymentMethodEl.currentlyEditing).to.be.true;
    // Amount and date should still be open
    expect(amountEl.currentlyEditing).to.be.true;
    expect(dateEl.currentlyEditing).to.be.true;

    // Close payment method
    paymentMethodEl.currentlyEditing = false;
    await paymentMethodEl.updateComplete;

    // Amount and date should still be open
    expect(amountEl.currentlyEditing).to.be.true;
    expect(dateEl.currentlyEditing).to.be.true;
  });

  it('selecting PayPal sets selectedPaymentProvider to PaymentProvider.PayPal', async () => {
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

    paymentMethodEl.currentlyEditing = true;
    await paymentMethodEl.updateComplete;

    paymentMethodEl
      .querySelector('payment-selector')!
      .dispatchEvent(new Event('paypalBlockerSelected', { bubbles: true }));
    await paymentMethodEl.updateComplete;

    expect(paymentMethodEl.selectedPaymentProvider).to.equal(
      PaymentProvider.PayPal,
    );
  });

  it('PayPalVaultAuthorized on braintree manager dispatches UpdatePaymentMethod with PayPal provider', async () => {
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

    paymentMethodEl.currentlyEditing = true;
    paymentMethodEl.selectedPaymentProvider = PaymentProvider.PayPal;
    await paymentMethodEl.updateComplete;

    let receivedEvent: CustomEvent | null = null;
    el.addEventListener('UpdatePaymentMethod', (e: Event) => {
      receivedEvent = e as CustomEvent;
    });

    paymentMethodEl.querySelector('ia-mgc-braintree-manager')!.dispatchEvent(
      new CustomEvent('PayPalVaultAuthorized', {
        bubbles: true,
        detail: {
          paymentMethodInfo: {
            description: 'PayPal - donor@example.com',
            nonce: 'nonce-pp-test',
            type: 'PayPalAccount',
            details: { email: 'donor@example.com' },
          },
        },
      }),
    );
    await el.updateComplete;

    expect(receivedEvent).to.not.be.null;
    const { newPaymentMethodRequest } = (
      receivedEvent as unknown as CustomEvent
    ).detail;
    expect(newPaymentMethodRequest.paymentProvider).to.equal(
      PaymentProvider.PayPal,
    );
    expect(newPaymentMethodRequest.paymentMethodInfo.details.email).to.equal(
      'donor@example.com',
    );
  });

  it('PayPalVaultError on braintree manager sets updateStatus to fail', async () => {
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

    paymentMethodEl.currentlyEditing = true;
    paymentMethodEl.selectedPaymentProvider = PaymentProvider.PayPal;
    await paymentMethodEl.updateComplete;

    paymentMethodEl.querySelector('ia-mgc-braintree-manager')!.dispatchEvent(
      new CustomEvent('PayPalVaultError', {
        bubbles: true,
        detail: { error: 'timeout' },
      }),
    );
    await paymentMethodEl.updateComplete;

    expect(paymentMethodEl.updateStatus).to.equal('fail');
  });

  it('submit button is hidden when PayPal is the selected provider', async () => {
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

    paymentMethodEl.currentlyEditing = true;
    paymentMethodEl.selectedPaymentProvider = PaymentProvider.PayPal;
    await paymentMethodEl.updateComplete;

    const submitBtn = paymentMethodEl.querySelector(
      '#edit-plan-payment-method-submit',
    );
    expect(submitBtn).to.not.exist;
  });

  it('updateReceived with paymentMethodUpdate success closes payment method form', async () => {
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
    const amountEl = editPlan.querySelector(
      'ia-mgc-edit-plan-amount',
    ) as MGCEditPlanAmount;
    const dateEl = editPlan.querySelector(
      'ia-mgc-edit-date',
    ) as MGCEditPlanDate;

    // Open payment method sub-form
    paymentMethodEl.currentlyEditing = true;
    await paymentMethodEl.updateComplete;
    expect(paymentMethodEl.currentlyEditing).to.be.true;

    // Simulate a success update via the main component
    const update: APlanUpdate = {
      action: 'paymentMethodUpdate',
      plan,
      status: 'success',
      message: '',
    };
    el.updateReceived(update);
    await paymentMethodEl.updateComplete;

    expect(paymentMethodEl.currentlyEditing).to.be.false;
    expect(paymentMethodEl.updateStatus).to.equal('success');

    // Amount and date sub-forms should be unaffected (still in default closed state)
    expect(amountEl.currentlyEditing).to.be.false;
    expect(dateEl.currentlyEditing).to.be.false;
  });
});
