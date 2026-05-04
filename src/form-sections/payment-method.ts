/* eslint-disable arrow-body-style */
import { LitElement, html, nothing, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@internetarchive/donation-form-section';
import '@internetarchive/donation-form/dist/src/form-elements/contact-form/contact-form.js';

import lockImg from '@internetarchive/icon-lock/index.js';

import '@internetarchive/donation-form/dist/src/form-elements/payment-selector.js';

import '../form-sections/parts/braintree-manager';

import { PaymentProvider } from '@internetarchive/donation-form-data-models';

import type {
  BraintreeManagerInterface,
  HostingEnvironment,
} from '@internetarchive/donation-form';
import type { ContactForm } from '@internetarchive/donation-form/dist/src/form-elements/contact-form/contact-form.js';
import type { MonthlyPlan } from '../models/plan';
import '../presentational/donation-section-info';
import '../presentational/mgc-button';

import type { MGCButton } from '../presentational/mgc-button';
import '../presentational/mgc-update-status';
import type {
  MGCBraintreeManager,
  PaymentConfig,
} from '../form-sections/parts/braintree-manager';
import { PaymentMethodRequest } from '../models/payment-method-request';
import { VenmoPendingStorage } from '../utils/venmo-pending-storage';

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

  @property({ type: Object }) paymentConfig: PaymentConfig = {
    braintreeAuthToken: '',
    endpointManager: undefined,
    paymentClients: undefined,
    environment: 'Development' as HostingEnvironment.Development,
    venmoProfileId: '',
    googlePayMerchantId: '',
    referrer: '',
    origin: '',
  };

  @property({ type: String }) patronEmail: string = '';

  @property({ type: Boolean, reflect: true }) currentlyEditing?: boolean =
    false;

  @property({ type: String, reflect: true }) newPaymentMethod: string = '';

  @property({ type: Object }) braintreeManager?: BraintreeManagerInterface;

  @property({ type: String, reflect: true }) selectedPaymentProvider: string =
    '';

  @property({ type: Boolean }) paymentSelectorFirstUpdated: boolean = false;

  @property({ type: String }) updateMessage: string = '';

  @property({ type: String }) updateStatus: 'success' | 'fail' | '' = '';

  @property({ type: Object }) venmoPendingStorage?: VenmoPendingStorage;

  createRenderRoot() {
    return this;
  }

  override firstUpdated(): void {
    this.checkAndRestoreVenmoState();
  }

  private checkAndRestoreVenmoState(): void {
    if (!this.plan?.id) return;
    if (this.venmoPendingStorage?.getPending(this.plan.id)) {
      this.currentlyEditing = true;
      this.selectedPaymentProvider = PaymentProvider.Venmo;
    }
  }

  submitPaymentMethodChange(e: Event) {
    e.preventDefault();
  }

  clearStatusMessaging() {
    this.updateMessage = '';
    this.updateStatus = '';
  }

  async paymentMethodUpdated(status: 'success' | 'fail') {
    this.updateStatus = status;
    this.updateMessage =
      status === 'success'
        ? 'Payment method updated'
        : 'Failed to update date, please try again';

    if (status === 'success') {
      this.currentlyEditing = false;
      this.selectedPaymentProvider = '';
      return;
    }
    this.updateRequestButton.isDisabled = false;
  }

  get updateRequestButton(): MGCButton {
    return this.querySelector(
      'ia-mgc-button#edit-plan-payment-method-submit',
    ) as MGCButton;
  }

  get contactFormElement(): ContactForm | null {
    return this.querySelector('contact-form');
  }

  get contactFormSection(): TemplateResult {
    const headline =
      this.selectedPaymentProvider === PaymentProvider.Venmo
        ? 'Help us stay in touch'
        : 'Enter payment information';

    return html`
      <donation-form-section
        badgemode="hidebadge"
        headline=${headline}
        id="contactFormSection"
      >
        <div class="credit-card-fields">
          <slot
            style="
              display: block;
              width: 100%;
              border: 1px solid blue;
              height: inherit;
          "
          ></slot>
        </div>
      </donation-form-section>
    `;
  }

  get paymentFormSection(): TemplateResult | typeof nothing {
    return html``;
  }

  get creditCardElement(): ContactForm | null {
    return this.querySelector('contact-form');
  }

  get braintreeManagerElement(): MGCBraintreeManager | null {
    return this.querySelector('ia-mgc-braintree-manager');
  }

  get paymentMethodDetail(): string {
    const { paymentMethodType, paypalEmail, venmoUsername, cardType, last4 } =
      this.plan?.payment ?? {};
    if (paymentMethodType === 'PayPal') return paypalEmail ?? '';
    if (paymentMethodType === 'Venmo') return venmoUsername ?? '';
    return `${cardType} - ${last4}`;
  }

  render() {
    const displayContactForm =
      this.selectedPaymentProvider === PaymentProvider.CreditCard ||
      this.selectedPaymentProvider === PaymentProvider.Venmo;

    const displayCCFields =
      this.selectedPaymentProvider === PaymentProvider.CreditCard;

    const displayBraintreeManager =
      this.selectedPaymentProvider === PaymentProvider.CreditCard ||
      this.selectedPaymentProvider === PaymentProvider.PayPal ||
      this.selectedPaymentProvider === PaymentProvider.Venmo;

    return html`
      <style>
        ${this.styles}
      </style>
      <donation-form-section badgemode="hidebadge" headline="Payment method">
        ${!this.currentlyEditing
          ? html`<ia-mgc-form-section-info
              @editingRequested=${() => {
                this.currentlyEditing = true;
                this.clearStatusMessaging();
              }}
              ><span>
                ${this.plan?.payment?.paymentMethodType === 'creditCard'
                  ? 'Credit Card'
                  : this.plan?.payment?.paymentMethodType}:
                ${this.paymentMethodDetail}
              </span></ia-mgc-form-section-info
            >`
          : nothing}
        ${this.currentlyEditing
          ? html`
            <form id="edit-plan-payment-method" @submit=${this.submitPaymentMethodChange}>
              <payment-selector
                .paymentProviders=${this.braintreeManager?.paymentProviders}
                @firstUpdated=${(e: Event) => {
                  this.paymentSelectorFirstUpdated = true;
                  (e.target as any)?.showPaypalButton();
                }}
                @creditCardSelected=${() => {
                  this.selectedPaymentProvider = PaymentProvider.CreditCard;
                }}
                @venmoSelected=${() => {
                  this.selectedPaymentProvider = PaymentProvider.Venmo;
                }}
                @applePaySelected=${() => {
                  this.selectedPaymentProvider = PaymentProvider.ApplePay;
                }}
                @googlePaySelected=${() => {
                  this.selectedPaymentProvider = PaymentProvider.GooglePay;
                }}
                @paypalSelected=${() => {
                  this.selectedPaymentProvider = PaymentProvider.PayPal;
                }}
                @resetPaymentMethod=${async () => {
                  this.selectedPaymentProvider = '';
                }}
                tabindex="0"
              >
                <div slot="paypal-button">
                  <div id="ia-mgc-paypal-button"></div>
                </div>
              </payment-selector>

              <div class="${displayContactForm ? '' : 'hidden'}">
                <contact-form .donorEmail=${this.patronEmail}></contact-form>
              </div>

              <ia-mgc-braintree-manager
                class="${displayBraintreeManager ? '' : 'hidden'}"
                .displayCreditCard=${displayCCFields}
                .plan=${this.plan}
                .paymentConfig=${this.paymentConfig}
                .venmoPendingStorage=${this.venmoPendingStorage}
                @BraintreeManagerSetupComplete=${() => {
                  this.braintreeManager =
                    this.braintreeManagerElement?.braintreeManager;
                  this.braintreeManagerElement?.renderPayPalVaultButton();
                }}
                @PayPalVaultAuthorized=${(e: CustomEvent) => {
                  this.handlePayPalVaultAuthorized(e);
                }}
                @PayPalVaultError=${() => {
                  this.updateStatus = 'fail';
                  this.updateMessage = 'PayPal error, please try again';
                }}
                @VenmoAuthorized=${(e: CustomEvent) => {
                  this.handleVenmoAuthorized(e);
                }}
                @VenmoError=${() => {
                  this.showVenmoError('Venmo error, please try again');
                  // Re-dispatch with bubbles so ancestor components can react
                  // (e.g. close a loading/redirect modal).
                  this.dispatchEvent(
                    new CustomEvent('VenmoError', {
                      bubbles: true,
                      composed: true,
                    }),
                  );
                }}
              ></ia-mgc-braintree-manager>

              <ia-mgc-button
                id="edit-plan-payment-method-cancel"
                class="secondary"
                .clickHandler=${() => {
                  if (
                    this.selectedPaymentProvider === PaymentProvider.Venmo &&
                    this.plan?.id
                  ) {
                    this.venmoPendingStorage?.clearPending(this.plan.id);
                  }
                  this.currentlyEditing = false;
                  this.selectedPaymentProvider = '';
                  this.clearStatusMessaging();
                }}
                >Cancel</ia-mgc-button
              >
              ${
                this.selectedPaymentProvider !== PaymentProvider.PayPal &&
                this.selectedPaymentProvider !== PaymentProvider.Venmo
                  ? html`<ia-mgc-button
                      id="edit-plan-payment-method-submit"
                      class="primary"
                      type="submit"
                      .isDisabled=${!this.selectedPaymentProvider}
                      .clickHandler=${async (
                        event: Event,
                        iaButton: MGCButton,
                      ) => {
                        const button = iaButton;
                        button.isDisabled = true;
                        const isContactFormValid =
                          this.creditCardElement?.reportValidity();

                        if (!isContactFormValid) {
                          button.isDisabled = false;
                          return;
                        }

                        const paymentMethodInfo =
                          (await this.braintreeManagerElement?.validateCreditCardFields()) as unknown as any;

                        if (!paymentMethodInfo) {
                          button.isDisabled = false;
                          return;
                        }

                        const newPaymentMethodRequest =
                          new PaymentMethodRequest({
                            paymentMethodInfo,
                            donorContactInfo:
                              this.contactFormElement?.donorContactInfo,
                            paymentProvider: this
                              .selectedPaymentProvider as PaymentProvider,
                          });

                        this.dispatchEvent(
                          new CustomEvent('UpdatePaymentMethod', {
                            detail: { newPaymentMethodRequest },
                          }),
                        );
                      }}
                      >Update payment method</ia-mgc-button
                    >`
                  : nothing
              }
              ${
                this.selectedPaymentProvider === PaymentProvider.Venmo
                  ? html`<ia-mgc-button
                      id="edit-plan-payment-method-venmo-submit"
                      class="primary"
                      .clickHandler=${async (
                        _event: Event,
                        iaButton: MGCButton,
                      ) => {
                        const button = iaButton;
                        button.isDisabled = true;
                        const isContactFormValid =
                          this.contactFormElement?.reportValidity();
                        if (!isContactFormValid) {
                          button.isDisabled = false;
                          return;
                        }
                        this.dispatchEvent(
                          new CustomEvent('VenmoRedirectStarted', {
                            bubbles: true,
                            composed: true,
                          }),
                        );
                        await this.braintreeManagerElement?.startVenmoPayment();
                        button.isDisabled = false;
                      }}
                      >Pay with Venmo</ia-mgc-button
                    >`
                  : nothing
              }
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

  showVenmoError(
    message: string = 'Venmo payment cancelled, please try again.',
  ): void {
    this.updateStatus = 'fail';
    this.updateMessage = message;
  }

  private handleVenmoAuthorized(e: CustomEvent): void {
    const { paymentMethodInfo } = e.detail;
    const newPaymentMethodRequest = new PaymentMethodRequest({
      paymentMethodInfo,
      donorContactInfo: this.contactFormElement?.donorContactInfo ?? {},
      paymentProvider: PaymentProvider.Venmo,
    });
    this.dispatchEvent(
      new CustomEvent('UpdatePaymentMethod', {
        detail: { newPaymentMethodRequest },
      }),
    );
  }

  private handlePayPalVaultAuthorized(e: CustomEvent): void {
    const { paymentMethodInfo } = e.detail;
    const paypalEmail = paymentMethodInfo?.details?.email ?? '';
    const donorContactInfo = this.contactFormElement?.donorContactInfo ?? {
      customer: { email: paypalEmail },
    };
    const newPaymentMethodRequest = new PaymentMethodRequest({
      paymentMethodInfo,
      donorContactInfo,
      paymentProvider: PaymentProvider.PayPal,
    });
    this.dispatchEvent(
      new CustomEvent('UpdatePaymentMethod', {
        detail: { newPaymentMethodRequest },
      }),
    );
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

      ia-mgc-braintree-manager:not([displaycreditcard]) #ia-mgc-cc-area {
        display: none;
      }

      .secure-process-note {
        margin-top: 0.5em;
        font-size: 0.75em;
      }

      .secure-process-note svg {
        width: 1.2rem;
        height: 1.5rem;
        vertical-align: bottom;
      }

      .hidden {
        visibility: hidden;
        height: 1px;
        width: 1px;
      }

      #ia-mgc-paypal-button {
        opacity: 0.001;
        width: var(--paymentButtonWidth, 5rem);
        height: var(--paymentButtonHeight, 3.2rem);
        overflow: hidden;
      }
    `;
  }
}
