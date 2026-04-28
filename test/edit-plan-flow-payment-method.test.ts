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
import type { MGCBraintreeManager } from '../src/form-sections/parts/braintree-manager';
import {
  VenmoPendingStorage,
  VENMO_MGC_PENDING_EXPIRY_MS,
} from '../src/utils/venmo-pending-storage';

import '../src/monthly-giving-circle';
import { makePlan, navigateToEditView } from './helpers/edit-plan-helpers';
import { MockStorage } from './helpers/mock-storage';

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
      .dispatchEvent(new Event('paypalSelected', { bubbles: true }));
    await paymentMethodEl.updateComplete;

    expect(paymentMethodEl.selectedPaymentProvider).to.equal(
      PaymentProvider.PayPal,
    );
  });

  it('PayPal slot is rendered in the DOM when currentlyEditing is true', async () => {
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

    const paypalSlot = paymentMethodEl.querySelector('#ia-mgc-paypal-button');
    expect(paypalSlot).to.exist;
  });

  it('Cancel button resets selectedPaymentProvider and closes the form', async () => {
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
    paymentMethodEl.selectedPaymentProvider = PaymentProvider.CreditCard;
    await paymentMethodEl.updateComplete;

    const cancelBtn = paymentMethodEl.querySelector(
      'ia-mgc-button#edit-plan-payment-method-cancel',
    ) as MGCButton;
    const innerBtn = cancelBtn.shadowRoot?.querySelector('button');
    innerBtn!.click();
    await paymentMethodEl.updateComplete;

    expect(paymentMethodEl.currentlyEditing).to.be.false;
    expect(paymentMethodEl.selectedPaymentProvider).to.equal('');
  });

  it('braintreeManagerElement getter returns ia-mgc-braintree-manager', async () => {
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

    expect(paymentMethodEl.braintreeManagerElement).to.exist;
    expect(
      paymentMethodEl.braintreeManagerElement?.tagName.toLowerCase(),
    ).to.equal('ia-mgc-braintree-manager');
  });

  it('BraintreeManagerSetupComplete triggers renderPayPalVaultButton eagerly', async () => {
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

    const braintreeManagerEl = paymentMethodEl.querySelector(
      'ia-mgc-braintree-manager',
    ) as MGCBraintreeManager;

    let renderPayPalCalled = false;
    braintreeManagerEl.renderPayPalVaultButton = async () => {
      renderPayPalCalled = true;
    };

    braintreeManagerEl.dispatchEvent(
      new Event('BraintreeManagerSetupComplete', { bubbles: true }),
    );
    await paymentMethodEl.updateComplete;

    expect(renderPayPalCalled).to.be.true;
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

describe('Venmo redirect restoration (firstUpdated):', () => {
  it('does nothing when no pending Venmo state exists', async () => {
    const plan = makePlan();
    const mockStorage = new MockStorage();
    const venmoPendingStorage = new VenmoPendingStorage(mockStorage);

    const el = await fixture<MonthlyGivingCircle>(
      html`<ia-monthly-giving-circle
        .canEdit=${true}
        .canEditPaymentMethod=${true}
        .plans=${[plan]}
        .venmoPendingStorage=${venmoPendingStorage}
      ></ia-monthly-giving-circle>`,
    );

    await navigateToEditView(el);

    const editPlan = el.querySelector('ia-mgc-edit-plan') as IauxEditPlanForm;
    const paymentMethodEl = editPlan.querySelector(
      'ia-mgc-edit-payment-method',
    ) as MGCEditPaymentMethod;

    expect(paymentMethodEl.currentlyEditing).to.be.false;
    expect(paymentMethodEl.selectedPaymentProvider).to.equal('');
  });

  it('auto-opens edit form with Venmo when a valid pending key exists', async () => {
    const plan = makePlan();
    const mockStorage = new MockStorage();
    const venmoPendingStorage = new VenmoPendingStorage(mockStorage);

    // Pre-set a fresh pending key for this plan
    venmoPendingStorage.setPending(plan.id);

    const el = await fixture<MonthlyGivingCircle>(
      html`<ia-monthly-giving-circle
        .canEdit=${true}
        .canEditPaymentMethod=${true}
        .plans=${[plan]}
        .venmoPendingStorage=${venmoPendingStorage}
      ></ia-monthly-giving-circle>`,
    );

    await navigateToEditView(el);

    const editPlan = el.querySelector('ia-mgc-edit-plan') as IauxEditPlanForm;
    const paymentMethodEl = editPlan.querySelector(
      'ia-mgc-edit-payment-method',
    ) as MGCEditPaymentMethod;

    expect(paymentMethodEl.currentlyEditing).to.be.true;
    expect(paymentMethodEl.selectedPaymentProvider).to.equal(
      PaymentProvider.Venmo,
    );
  });

  it('does not open edit form when pending key is expired', async () => {
    const plan = makePlan();
    const mockStorage = new MockStorage();
    const venmoPendingStorage = new VenmoPendingStorage(mockStorage);

    // Manually write an expired entry
    mockStorage.setItem(
      `venmo_mgc_pending_${plan.id}`,
      JSON.stringify({
        planId: plan.id,
        timestamp: Date.now() - VENMO_MGC_PENDING_EXPIRY_MS - 1000,
      }),
    );

    const el = await fixture<MonthlyGivingCircle>(
      html`<ia-monthly-giving-circle
        .canEdit=${true}
        .canEditPaymentMethod=${true}
        .plans=${[plan]}
        .venmoPendingStorage=${venmoPendingStorage}
      ></ia-monthly-giving-circle>`,
    );

    await navigateToEditView(el);

    const editPlan = el.querySelector('ia-mgc-edit-plan') as IauxEditPlanForm;
    const paymentMethodEl = editPlan.querySelector(
      'ia-mgc-edit-payment-method',
    ) as MGCEditPaymentMethod;

    expect(paymentMethodEl.currentlyEditing).to.be.false;
  });

  it('VenmoAuthorized from braintree-manager dispatches UpdatePaymentMethod with Venmo provider', async () => {
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
    paymentMethodEl.selectedPaymentProvider = PaymentProvider.Venmo;
    await paymentMethodEl.updateComplete;

    let receivedEvent: CustomEvent | null = null;
    el.addEventListener('UpdatePaymentMethod', (e: Event) => {
      receivedEvent = e as CustomEvent;
    });

    paymentMethodEl.querySelector('ia-mgc-braintree-manager')!.dispatchEvent(
      new CustomEvent('VenmoAuthorized', {
        bubbles: true,
        detail: {
          paymentMethodInfo: {
            description: 'Venmo - johndoe',
            nonce: 'nonce-venmo-test',
            type: 'VenmoAccount',
            details: { username: 'johndoe' },
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
      PaymentProvider.Venmo,
    );
    expect(newPaymentMethodRequest.paymentMethodInfo.details.username).to.equal(
      'johndoe',
    );
  });

  it('VenmoError from braintree-manager sets updateStatus to fail', async () => {
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
    paymentMethodEl.selectedPaymentProvider = PaymentProvider.Venmo;
    await paymentMethodEl.updateComplete;

    paymentMethodEl.querySelector('ia-mgc-braintree-manager')!.dispatchEvent(
      new CustomEvent('VenmoError', {
        bubbles: true,
        detail: { error: 'network error' },
      }),
    );
    await paymentMethodEl.updateComplete;

    expect(paymentMethodEl.updateStatus).to.equal('fail');
    expect(paymentMethodEl.updateMessage).to.equal(
      'Venmo error, please try again',
    );
  });
});

describe('Venmo payment UI:', () => {
  async function setupVenmoEditing() {
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
    paymentMethodEl.selectedPaymentProvider = PaymentProvider.Venmo;
    await paymentMethodEl.updateComplete;
    return paymentMethodEl;
  }

  it('paymentMethodDetail returns venmoUsername for a Venmo plan', async () => {
    const plan = makePlan();
    plan.plan.btdata.paymentMethodType = 'Venmo';
    plan.plan.btdata.venmoUsername = 'johndoe';

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

    expect(paymentMethodEl.paymentMethodDetail).to.equal('johndoe');
  });

  it('venmoSelected event sets selectedPaymentProvider to Venmo', async () => {
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
      .dispatchEvent(new Event('venmoSelected'));
    await paymentMethodEl.updateComplete;

    expect(paymentMethodEl.selectedPaymentProvider).to.equal(
      PaymentProvider.Venmo,
    );
  });

  it('Venmo button does not call startVenmoPayment when contact form is invalid', async () => {
    const paymentMethodEl = await setupVenmoEditing();

    (paymentMethodEl.querySelector('contact-form') as any).reportValidity =
      () => false;

    const btEl = paymentMethodEl.querySelector(
      'ia-mgc-braintree-manager',
    ) as MGCBraintreeManager;
    let startVenmoCalled = false;
    (btEl as any).startVenmoPayment = async () => {
      startVenmoCalled = true;
    };

    const venmoBtn = paymentMethodEl.querySelector(
      '#edit-plan-payment-method-venmo-submit',
    ) as MGCButton;
    venmoBtn.shadowRoot?.querySelector('button')!.click();
    await new Promise(r => {
      setTimeout(r, 0);
    });

    expect(startVenmoCalled).to.be.false;
  });

  it('Venmo button calls startVenmoPayment when contact form is valid', async () => {
    const paymentMethodEl = await setupVenmoEditing();

    (paymentMethodEl.querySelector('contact-form') as any).reportValidity =
      () => true;

    const btEl = paymentMethodEl.querySelector(
      'ia-mgc-braintree-manager',
    ) as MGCBraintreeManager;
    let startVenmoCalled = false;
    (btEl as any).startVenmoPayment = async () => {
      startVenmoCalled = true;
    };

    const venmoBtn = paymentMethodEl.querySelector(
      '#edit-plan-payment-method-venmo-submit',
    ) as MGCButton;
    venmoBtn.shadowRoot?.querySelector('button')!.click();
    await new Promise(r => {
      setTimeout(r, 50);
    });

    expect(startVenmoCalled).to.be.true;
  });

  it('VenmoRedirectStarted is dispatched when Venmo button is clicked with valid contact form', async () => {
    const paymentMethodEl = await setupVenmoEditing();

    (paymentMethodEl.querySelector('contact-form') as any).reportValidity =
      () => true;

    const btEl = paymentMethodEl.querySelector(
      'ia-mgc-braintree-manager',
    ) as MGCBraintreeManager;
    (btEl as any).startVenmoPayment = async () => {};

    let redirectStarted = false;
    paymentMethodEl.addEventListener('VenmoRedirectStarted', () => {
      redirectStarted = true;
    });

    const venmoBtn = paymentMethodEl.querySelector(
      '#edit-plan-payment-method-venmo-submit',
    ) as MGCButton;
    venmoBtn.shadowRoot?.querySelector('button')!.click();
    await new Promise(r => {
      setTimeout(r, 50);
    });

    expect(redirectStarted).to.be.true;
  });

  it('VenmoRedirectStarted is NOT dispatched when contact form is invalid', async () => {
    const paymentMethodEl = await setupVenmoEditing();

    (paymentMethodEl.querySelector('contact-form') as any).reportValidity =
      () => false;

    let redirectStarted = false;
    paymentMethodEl.addEventListener('VenmoRedirectStarted', () => {
      redirectStarted = true;
    });

    const venmoBtn = paymentMethodEl.querySelector(
      '#edit-plan-payment-method-venmo-submit',
    ) as MGCButton;
    venmoBtn.shadowRoot?.querySelector('button')!.click();
    await new Promise(r => {
      setTimeout(r, 50);
    });

    expect(redirectStarted).to.be.false;
  });

  it('showVenmoError() sets updateStatus to fail with default cancel message', async () => {
    const paymentMethodEl = await setupVenmoEditing();

    paymentMethodEl.showVenmoError();
    await paymentMethodEl.updateComplete;

    expect(paymentMethodEl.updateStatus).to.equal('fail');
    expect(paymentMethodEl.updateMessage).to.equal(
      'Venmo payment cancelled, please try again.',
    );
  });

  it('showVenmoError(message) uses the provided message', async () => {
    const paymentMethodEl = await setupVenmoEditing();

    paymentMethodEl.showVenmoError('Custom Venmo error');
    await paymentMethodEl.updateComplete;

    expect(paymentMethodEl.updateStatus).to.equal('fail');
    expect(paymentMethodEl.updateMessage).to.equal('Custom Venmo error');
  });

  it('VenmoError from braintree-manager re-dispatches with bubbles', async () => {
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
    paymentMethodEl.selectedPaymentProvider = PaymentProvider.Venmo;
    await paymentMethodEl.updateComplete;

    let bubbledVenmoError = false;
    el.addEventListener('VenmoError', () => {
      bubbledVenmoError = true;
    });

    paymentMethodEl.querySelector('ia-mgc-braintree-manager')!.dispatchEvent(
      new CustomEvent('VenmoError', {
        bubbles: true,
        detail: { error: 'network error' },
      }),
    );
    await paymentMethodEl.updateComplete;

    expect(bubbledVenmoError).to.be.true;
  });
});
