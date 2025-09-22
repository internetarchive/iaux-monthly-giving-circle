import { LitElement, html, css, CSSResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import { HostedFieldContainer, HostedFieldContainerInterface } from '@internetarchive/donation-form/dist/src/braintree-manager/payment-providers/credit-card/hosted-field-container';
import { BraintreeManager, BraintreeManagerInterface, HostingEnvironment } from '@internetarchive/donation-form';
import type { BraintreeEndpointManagerInterface } from '@internetarchive/donation-form/dist/src/braintree-manager/braintree-interfaces.js';
import type { PaymentClientsInterface } from '@internetarchive/donation-form/dist/src/braintree-manager/payment-clients.js';
import type { DonationRequest } from '@internetarchive/donation-form-data-models';

import creditCardImg from '@internetarchive/icon-credit-card/index.js';
import calendarImg from '@internetarchive/icon-calendar/index.js';
import lockImg from '@internetarchive/icon-lock/index.js';

import type { MonthlyPlan } from '../../models/plan';

type PaymentConfig = {
  braintreeAuthToken?: string;
  endpointManager?: BraintreeEndpointManagerInterface;
  paymentClients?: PaymentClientsInterface;
  environment?: HostingEnvironment;
  venmoProfileId?: string;
  googlePayMerchantId?: string;
};


@customElement('ia-mgc-braintree-cc-hosted-fields')
export class MGCBraintreeCCHostedFields extends LitElement {
  @property({ type: Object }) plan?: MonthlyPlan;

  @property({ type: String }) patronEmail: string = '';

  @property({ type: Object}) paymentConfig?: PaymentConfig;

  @property({ type: Object }) braintreeManager?: BraintreeManagerInterface;

  @query('#braintree-error-message') braintreeErrorMessage!: HTMLDivElement;

  @query('#braintree-creditcard') braintreeNumberInput!: HTMLDivElement;

  @query('#braintree-cvv') braintreeCVVInput!: HTMLDivElement;

  @query('#braintree-expiration') braintreeExpirationDateInput!: HTMLDivElement;

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    setTimeout(() => {
      this.setupBraintreeManager();
    }, 5000);
  }

  lightDomCSS(): CSSResult {
    return css`
      contact-form form badged-input {
        width: 100%;
      }
    `;
  };

  render() {
    return html`
      <div id="ia-mgc-cc-area">
        <style>
          ${this.lightDomCSS()}
        </style>
        <div id="braintree-error-message"></div>
          <div class="braintree-row">
            <badged-input .icon=${creditCardImg} ?required=${true} class="creditcard">
              <div class="braintree-input" id="braintree-creditcard"></div>
            </badged-input>
          </div>
          <div class="braintree-row">
            <badged-input .icon=${calendarImg} ?required=${true} class="expiration">
              <div class="braintree-input" id="braintree-expiration"></div>
            </badged-input>
            <badged-input .icon=${lockImg} ?required=${true} class="cvv">
              <div class="braintree-input" id="braintree-cvv"></div>
            </badged-input>
          </div>
      </div>
    `;
  }

  private setupBraintreeManager(): void {
    const { braintreeAuthToken, endpointManager, paymentClients, environment } = this.paymentConfig || {};
    if (
      this.braintreeManager === undefined &&
      braintreeAuthToken &&
      endpointManager
      // paymentClients &&
      // environment
    ) {
      console.log('Setting up BraintreeManager', this.braintreeNumberInput);

      this.braintreeManager = new BraintreeManager({
        paymentClients: this.paymentConfig?.paymentClients ?? ({} as PaymentClientsInterface),
        endpointManager: this.paymentConfig?.endpointManager as BraintreeEndpointManagerInterface,
        authorizationToken: this.paymentConfig?.braintreeAuthToken ?? '',
        venmoProfileId: this.paymentConfig?.venmoProfileId,
        googlePayMerchantId: this.paymentConfig?.googlePayMerchantId,
        hostedFieldConfig: {
          hostedFieldStyle: {}, // Provide your custom style object here
          hostedFieldFieldOptions: {}, // Provide your custom field options here
          hostedFieldContainer: new HostedFieldContainer({
            number: this.braintreeNumberInput,
            cvv: this.braintreeCVVInput,
            expirationDate: this.braintreeExpirationDateInput,
            errorContainer: this.braintreeErrorMessage,
          }),
        },
        hostingEnvironment: this.paymentConfig?.environment as HostingEnvironment,
        referrer: window.location.href,
        loggedInUser: this.patronEmail,
        origin: window.location.origin,
      });

      this.braintreeManager.on('paymentProvidersHostedFieldsRetry', (retryNumber: number) => {
        const event = new CustomEvent('paymentProvidersHostedFieldsRetry', {
          detail: { retryNumber },
        });
        this.dispatchEvent(event);
      });

      this.braintreeManager.on('paymentProvidersHostedFieldsFailed', (error: unknown) => {
        const event = new CustomEvent('paymentProvidersHostedFieldsFailed', {
          detail: { error },
        });
        this.dispatchEvent(event);
      });
    }
  }

}
