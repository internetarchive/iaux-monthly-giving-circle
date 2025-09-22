/* eslint-disable arrow-body-style */
import {
  LitElement,
  html,
  PropertyValues,
  nothing,
  css,
  TemplateResult,
} from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '@internetarchive/donation-form-section';

import lockImg from '@internetarchive/icon-lock/index.js';

import '@internetarchive/donation-form/dist/src/form-elements/payment-selector.js';

import {
  DonationPaymentInfo,
  DonationType,
  PaymentProvider,
} from '@internetarchive/donation-form-data-models';

import type { BraintreeManagerInterface } from '@internetarchive/donation-form';
import type { MonthlyPlan } from '../models/plan';
import '../presentational/donation-section-info';
import '../presentational/mgc-button';

import type { MGCButton } from '../presentational/mgc-button';
import '../presentational/mgc-update-status';

@customElement('ia-mgc-edit-payment-method')
export class MGCEditPaymentMethod extends LitElement {
  @property({ type: Object }) plan?: MonthlyPlan;

  @property({ type: String }) patronEmail: string = '';

  @property({ type: Boolean, reflect: true }) currentlyEditing?: boolean = false;

  @property({ type: String, reflect: true }) newPaymentMethod: string = '';

  @property({ type: Object }) braintreeManager?: BraintreeManagerInterface;

  @property({ type: String, reflect: true }) selectedPaymentProvider: string = '';

  @property({ type: Boolean, reflect: true }) contactFormVisible: boolean = false;

  @property({ type: Boolean }) paymentSelectorFirstUpdated: boolean = false;

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

  submitPaymentMethodChange (e: Event) {
    e.preventDefault();

  }

  clearStatusMessaging() {
  }

  get contactFormSection(): TemplateResult {
    const headline =
      this.selectedPaymentProvider === PaymentProvider.Venmo
        ? 'Help us stay in touch'
        : 'Enter payment information';

    const contactFormVisible = this.selectedPaymentProvider === PaymentProvider.CreditCard
     || this.selectedPaymentProvider === PaymentProvider.Venmo;

    console.log('contactFormSectioncontactFormSection', { contactFormVisible });
    return html`
      <donation-form-section
        badgemode="hidebadge"
        headline=${headline}
        id="contactFormSection"
      >
        <div class="credit-card-fields">
          <slot name="contact-form"></slot>
          <slot name="braintree-hosted-fields"></slot>
        </div>
      </donation-form-section>
    `;
  }

  render() {
    const contactFormVisible = this.selectedPaymentProvider === PaymentProvider.CreditCard
     || this.selectedPaymentProvider === PaymentProvider.Venmo;

    return html`
      <donation-form-section badgemode="hidebadge" headline="Payment method">
        ${!this.currentlyEditing
          ? html`<ia-mgc-form-section-info
              @editingRequested=${() => {
                this.currentlyEditing = true;
                this.clearStatusMessaging();
              }}
              ><span>${this.plan?.payment?.paymentMethodType === 'creditCard' ? 'Credit card' : this.plan?.payment?.paymentMethodType}</span>
            </ia-mgc-form-section-info>`
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
                  this.selectedPaymentProvider = '';
                  this.contactFormVisible = false;
                  this.requestUpdate();
                }}
                tabindex="0"
              >
                <slot name="paypal-button" slot="paypal-button"></slot>
              </payment-selector>

              <div class="${contactFormVisible ? '' : 'hidden'}">
                ${this.contactFormSection}
              </div>

              <ia-mgc-button
                id="edit-plan-payment-method-submit"
                class="primary"
                type="submit"
                >Cancel</ia-mgc-button
              >
              <ia-mgc-button
                id="edit-plan-payment-method-submit"
                class="primary"
                type="submit"
                .isDisabled=${!this.selectedPaymentProvider}
                >Update payment method</ia-mgc-button
              >
              <div class="secure-process-note">${lockImg} Your payment will be securely processed</div>
            </form>
          `
        : nothing}
        </donation-form-section>

    `;
  }

  static styles = css`
    payment-selector {
      display: block;
      border: 1px solid red;
      margin-bottom: 5px;
      padding-bottom: 10px;
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
      display: none;
    }
  `;

}


/*
     <donation-form-section
        .sectionBadge=${this.paymentSelectorNumberingStart}
        headline="Choose a payment method"
      >
        <payment-selector
          .paymentProviders=${this.braintreeManager?.paymentProviders}
          @firstUpdated=${this.paymentSelectorFirstUpdated}
          @creditCardSelected=${this.creditCardSelected}
          @venmoSelected=${this.venmoSelected}
          @applePaySelected=${this.applePaySelected}
          @googlePaySelected=${this.googlePaySelected}
          @paypalBlockerSelected=${this.paypalBlockerSelected}
          @resetPaymentMethod=${async () => {
            this.selectedPaymentProvider = undefined;
            this.contactFormVisible = false;
            this.requestUpdate();
          }}
          tabindex="0"
        >
          <slot name="paypal-button" slot="paypal-button"></slot>
        </payment-selector>
      </donation-form-section>

      <div class="contact-form-section ${this.contactFormVisible ? '' : 'hidden'}">
        ${this.contactFormSectionTemplate}
      </div>
      <slot name="recaptcha"></slot>


      

*/