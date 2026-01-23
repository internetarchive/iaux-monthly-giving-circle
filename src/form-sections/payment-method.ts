/* eslint-disable arrow-body-style */
import {
  LitElement,
  html,
  PropertyValues,
  nothing,
  css,
  TemplateResult,
} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@internetarchive/donation-form-section';
import '@internetarchive/donation-form/dist/src/form-elements/contact-form/contact-form.js';

import lockImg from '@internetarchive/icon-lock/index.js';

import '@internetarchive/donation-form/dist/src/form-elements/payment-selector.js';

import '../form-sections/parts/braintree-manager';

import {
  PaymentProvider,
} from '@internetarchive/donation-form-data-models';

import type { BraintreeManagerInterface, PaymentClientsInterface } from '@internetarchive/donation-form';
import type { ContactForm } from '@internetarchive/donation-form/dist/src/form-elements/contact-form/contact-form.js';
import type { MonthlyPlan } from '../models/plan';
import '../presentational/donation-section-info';
import '../presentational/mgc-button';


import type { MGCButton } from '../presentational/mgc-button';
import '../presentational/mgc-update-status';
import type { MGCBraintreeManager } from '../form-sections/parts/braintree-manager';
import { PaymentMethodRequest } from '../models/payment-method-request';

/**
 * <ia-mgc-edit-payment-method> 
 * - collecting the data to send to the service
 *   - contact form
 *   - braintree manager
 * 
 * - handles submission
 * - handles toggling the view between display and edit modes
 * 
 */
@customElement('ia-mgc-edit-payment-method')
export class MGCEditPaymentMethod extends LitElement {
  @property({ type: Object }) plan?: MonthlyPlan;

  @property({ type: Object }) paymentConfig: {
    referrer: string;
    origin: string;
    braintreeAuthToken: string;
    venmoProfileId: string;
    googlePayMerchantId: string;
    environment: string;
    paymentClients: PaymentClientsInterface | undefined;
    endpointManager: object;
  } = {
    referrer: '',
    origin: '',
    braintreeAuthToken: 'sandbox_x634jsj7_7zybks4ybp63pbmd',
    venmoProfileId: '1953896702662410263',
    googlePayMerchantId: '',
    environment: 'dev',
    paymentClients: undefined,
    endpointManager: {},
  };

  @property({ type: String }) patronEmail: string = '';

  @property({ type: Boolean, reflect: true }) currentlyEditing?: boolean = false;

  @property({ type: String, reflect: true }) newPaymentMethod: string = '';

  @property({ type: Object }) braintreeManager?: BraintreeManagerInterface;

  @property({ type: String, reflect: true }) selectedPaymentProvider: string = '';

  @property({ type: Boolean }) paymentSelectorFirstUpdated: boolean = false;

  @property({ type: String }) updateMessage: string = '';

  @property({ type: String }) updateStatus: 'success' | 'fail' | '' = '';

  // @property({ type: Boolean }) creditCardSelected: boolean = false;

  // @property({ type: Boolean }) venmoSelected: boolean = false;

  // @property({ type: Boolean }) applePaySelected: boolean = false;

  // @property({ type: Boolean }) googlePaySelected: boolean = false;

  // @property({ type: Boolean }) paypalBlockerSelected: boolean = false;

  /*
    .paymentProviders=${this.braintreeManager?.paymentProviders}
    @firstUpdated=${this.paymentSelectorFirstUpdated}
    @creditCardSelected=${this.creditCardSelected}
    @venmoSelected=${this.venmoSelected}
    @applePaySelected=${this.applePaySelected}
    @googlePaySelected=${this.googlePaySelected}
    @paypalBlockerSelected=${this.paypalBlockerSelected}
  */

  createRenderRoot() {
    return this;
  }

  submitPaymentMethodChange (e: Event) {
    e.preventDefault();

  }

  clearStatusMessaging() {
    this.updateMessage = '';
    this.updateStatus = '';
  }

  async paymentMethodUpdated(status: 'success' | 'fail') {
        // todo finish response view

    // paymentMethodUpdated
    // this.clearInputField();

    this.updateStatus = status;
    this.updateMessage =
      status === 'success' ? 'Payment method updated' : 'Failed to update date, please try again';

    if (status === 'success') {
      this.currentlyEditing = false;
      this.selectedPaymentProvider = '';
      return;
    }
debugger;
    this.updateRequestButton.isDisabled = false;
  }

  get updateRequestButton(): MGCButton {
    return this.querySelector('ia-mgc-button#edit-plan-payment-method-submit') as MGCButton;
  }

  get contactFormElement(): ContactForm | null {
    return this.querySelector('contact-form');
  }

  get contactFormSection(): TemplateResult {
    const headline =
      this.selectedPaymentProvider === PaymentProvider.Venmo
        ? 'Help us stay in touch'
        : 'Enter payment information';

    const displayContactForm = this.selectedPaymentProvider === PaymentProvider.CreditCard
     || this.selectedPaymentProvider === PaymentProvider.Venmo;

    console.log('contactFormSectioncontactFormSection', { displayContactForm });
    return html`
      <donation-form-section
        badgemode="hidebadge"
        headline=${headline}
        id="contactFormSection"
      >
        <div class="credit-card-fields">
          <slot style="
              display: block;
              width: 100%;
              border: 1px solid blue;
              height: inherit;
          "></slot>
        </div>
      </donation-form-section>
    `;
  }

  get paymentFormSection(): TemplateResult | typeof nothing {
    return html`
    
    `;
  }

  get creditCardElement(): ContactForm | null {
    return this.querySelector('contact-form');
  }

  get braintreeManagerElement(): MGCBraintreeManager | null {
    return this.querySelector('ia-mgc-braintree-manager');
  }

  render() {
    const displayContactForm = this.selectedPaymentProvider === PaymentProvider.CreditCard
     || this.selectedPaymentProvider === PaymentProvider.Venmo;

    const displayCCFields = this.selectedPaymentProvider === PaymentProvider.CreditCard;

    console.log('selectedPaymentProvider', { selectedPaymentProvider: this.selectedPaymentProvider })
    return html`
      <style>${this.styles}</style>
      <donation-form-section badgemode="hidebadge" headline="Payment method">
        ${!this.currentlyEditing
          ? html`<ia-mgc-form-section-info
              @editingRequested=${() => {
                this.currentlyEditing = true;
                this.clearStatusMessaging();
              }}
              ><span>
                ${this.plan?.payment?.paymentMethodType === 'creditCard' ? 'Credit Card' : this.plan?.payment?.paymentMethodType}:
                ${this.plan?.payment?.cardType} - ${this.plan?.payment?.last4}
              </span>
              <ia-mgc-update-status .status=${this.updateStatus}
                >${this.updateMessage}</ia-mgc-update-status
              ></ia-mgc-form-section-info>`
        : nothing}
      ${this.currentlyEditing
        ? html`
            <form id="edit-plan-payment-method" @submit=${this.submitPaymentMethodChange}>
              <payment-selector
                .paymentProviders=${this.braintreeManager?.paymentProviders}
                @firstUpdated=${() => { this.paymentSelectorFirstUpdated = true; }}
                @creditCardSelected=${() => { this.selectedPaymentProvider = PaymentProvider.CreditCard; }}
                @venmoSelected=${() => { this.selectedPaymentProvider = PaymentProvider.Venmo; }}
                @applePaySelected=${() => { this.selectedPaymentProvider = PaymentProvider.ApplePay; }}
                @googlePaySelected=${() => { this.selectedPaymentProvider = PaymentProvider.GooglePay; }}
                @paypalBlockerSelected=${() => { this.selectedPaymentProvider = 'paypalBlocker'; }}
                @resetPaymentMethod=${async () => {
                  debugger;
                  this.selectedPaymentProvider = '';
                  // this.requestUpdate();
                }}
                tabindex="0"
              >
                <slot name="paypal-button" slot="paypal-button"></slot>
              </payment-selector>

              <div class="${displayContactForm ? '' : 'hidden'}">
                <contact-form .donorEmail=${this.patronEmail}></contact-form>
              </div>
              

              <ia-mgc-braintree-manager
                class="${displayCCFields ? '' : 'hidden'}"
                .displayCreditCard=${this.selectedPaymentProvider === PaymentProvider.CreditCard}
                .plan=${this.plan}
                .paymentConfig=${this.paymentConfig}
                @BraintreeManagerSetupComplete=${() => {
                  debugger;
                }}
              ></ia-mgc-braintree-manager>

              <ia-mgc-button
                id="edit-plan-payment-method-cancel"
                class="secondary"
                .clickHandler=${() => {
                  this.currentlyEditing = false;
                  this.selectedPaymentProvider = '';
                  this.clearStatusMessaging();
                }}
                >Cancel</ia-mgc-button
              >
              <ia-mgc-button
                id="edit-plan-payment-method-submit"
                class="primary"
                type="submit"
                .isDisabled=${!this.selectedPaymentProvider}
                .clickHandler=${async (event: Event, iaButton: MGCButton) => {
                  console.log({ iaButton, event });

                  const button = iaButton;
                  button.isDisabled = true;
                  // validate credit card
                  // if not valid, show error and return
                  const isContactFormValid = this.creditCardElement?.reportValidity();

                  if (!isContactFormValid) {
                    button.isDisabled = false;
                    return;
                  }

                  const paymentMethodInfo = await this.braintreeManagerElement?.validateCreditCardFields() as unknown as any;

                  if (!paymentMethodInfo) {
                    button.isDisabled = false;
                    return;
                  }

                  const newPaymentMethodRequest = new PaymentMethodRequest({
                      paymentMethodInfo,
                      donorContactInfo: this.contactFormElement?.donorContactInfo,
                      paymentProvider: this.selectedPaymentProvider as PaymentProvider,
                  });

                  this.dispatchEvent(new CustomEvent('UpdatePaymentMethod', {
                    detail: { newPaymentMethodRequest },
                  }));
                }}
                >Update payment method</ia-mgc-button
              >
              <ia-mgc-update-status .status=${this.updateStatus}
                >${this.updateMessage}</ia-mgc-update-status
              ></ia-mgc-form-section-info>
              <div class="secure-process-note">
                ${lockImg} Your payment will be securely processed
              </div>
            </form>
          `
        : nothing}
        </donation-form-section>

    `;
  }

  get styles() {
    return css`
      payment-selector {
        display: block;
        margin-bottom: 5px;
        padding-bottom: 10px;
      }

      ia-mgc-braintree-manager {
        display: block;
        margin: 10px 0;
      }

      .secure-process-note {
        margin-top: 0.5em;
        font-size: 0.75em;
      }

      .secure-process-note svg{
        width: 1.2rem;
        height: 1.5rem;
        vertical-align: bottom;
      }

      .hidden {
        visibility: hidden;
        height: 1px;
        width: 1px;
      }`;
  }

}
