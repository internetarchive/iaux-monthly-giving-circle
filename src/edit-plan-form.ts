import { LitElement, html, TemplateResult, css, CSSResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import '@internetarchive/donation-form/dist/src/form-elements/contact-form/contact-form.js';
import '@internetarchive/donation-form/dist/src/form-elements/badged-input';

import {
  LazyLoaderService,
  LazyLoaderServiceInterface,
} from '@internetarchive/lazy-loader-service';
import type { BraintreeManagerInterface } from '@internetarchive/donation-form';
// import { HostedFieldContainer, HostedFieldContainerInterface } from '@internetarchive/donation-form/dist/src/braintree-manager/payment-providers/credit-card/hosted-field-container';
import { BraintreeEndpointManagerInterface, HostingEnvironment } from '@internetarchive/donation-form/dist/src/braintree-manager/braintree-interfaces.js';
import { PaymentClients, PaymentClientsInterface } from '@internetarchive/donation-form/dist/src/braintree-manager/payment-clients.js';
import type { DonationRequest, DonationResponse } from '@internetarchive/donation-form-data-models';

import creditCardImg from '@internetarchive/icon-credit-card/index.js';
import calendarImg from '@internetarchive/icon-calendar/index.js';
import lockImg from '@internetarchive/icon-lock/index.js';

import type { MonthlyPlan } from './models/plan';
import './form-sections/amount';
import './form-sections/date';
import './form-sections/cancel';
import './form-sections/payment-method';
import './form-sections/parts/braintree-cc-hosted-fields';
import type { MGCEditPlanAmount } from './form-sections/amount';
import type { MGCEditPlanDate } from './form-sections/date';

@customElement('ia-mgc-edit-plan')
export class IauxEditPlanForm extends LitElement {
  @property({ type: Object }) plan?: MonthlyPlan;

  @property({ type: String }) patronEmail: string = '';

  @property({ type: Object }) updateAmountHandler?: (
    plan: MonthlyPlan,
    amountUpdates: {
      amount: number;
      baseAmount: number;
      coverFees: boolean;
      feeCovered: number;
    },
  ) => void;

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
    paymentClients: new PaymentClients(new LazyLoaderService(), HostingEnvironment.Development),
    endpointManager: {
      // eslint-disable-next-line arrow-body-style
      submitData: async (request: DonationRequest) => {
        // Implement your submit logic here
        // Return a DonationResponse object with at least a 'value' property
        return Promise.resolve({
          value: {}, // Replace with actual donation response value
          success: true,
        } as DonationResponse);
      },
      donationSuccessful: (response: any) => 
        // Implement your donation success logic here
        true
    } as BraintreeEndpointManagerInterface,
  };

  @query('#braintree-creditcard') braintreeNumberInput!: HTMLDivElement;

  @query('#braintree-expiration') braintreeExpirationDateInput!: HTMLDivElement;

  @query('#braintree-cvv') braintreeCVVInput!: HTMLDivElement;

  @query('#braintree-error-message') braintreeErrorMessage!: HTMLDivElement;

  createRenderRoot() {
    return this;
  }

  amountUpdates(status: 'success' | 'fail') {
    const amountForm = this.querySelector(
      'ia-mgc-edit-plan-amount',
    ) as MGCEditPlanAmount;
    amountForm!.amountUpdated(status);
  }

  dateUpdates(status: 'success' | 'fail') {
    const dateForm = this.querySelector('ia-mgc-edit-date') as MGCEditPlanDate;
    dateForm!.dateUpdated(status);
  }

  render() {
    return html`
      <section class="mgc-edit-plan">
        <ia-mgc-edit-plan-amount
          .plan=${this.plan}
          @updateAmount=${(e: CustomEvent) => {
            const { amount, baseAmount, coverFees, feeCovered } = e.detail;
            if (this.plan) {
              this.updateAmountHandler?.(this.plan, {
                amount,
                baseAmount,
                coverFees,
                feeCovered,
              });
            }
          }}
        ></ia-mgc-edit-plan-amount>
        <hr />
        <ia-mgc-edit-payment-method
          .plan=${this.plan}
          .patronEmail=${this.patronEmail}
          .paymentConfig=${this.paymentConfig}
          @UpdatePaymentMethod=${(e: CustomEvent) => {
            const { newPaymentMethod } = e.detail;
            if (this.plan) {
              this.dispatchEvent(
                new CustomEvent('updatePaymentMethod', {
                  detail: { plan: this.plan, newPaymentMethod },
                })
              );
            }
          }}
        >
          <slot name="paypal-button" slot="paypal-button"></slot>
          <div slot="contact-form">
            <contact-form .donorEmail=${this.patronEmail}></contact-form>
          </div>
          <div slot="braintree-hosted-fields">
            <ia-mgc-braintree-cc-hosted-fields
              .plan=${this.plan}
              .paymentConfig=${this.paymentConfig}
              @BraintreeManagerSetupComplete=${() => {
                debugger;
              }}
            ></ia-mgc-braintree-cc-hosted-fields>
          </div>
        </ia-mgc-edit-payment-method>
      <hr />
      <ia-mgc-edit-date
        @updateDate=${(e: CustomEvent) => {
          const { newDate } = e.detail;
          if (this.plan) {
              this.dispatchEvent(
                new CustomEvent('updateDate', {
                  detail: { plan: this.plan, newDate },
                }),
              );
            }
          }}
          .plan=${this.plan}
        ></ia-mgc-edit-date>
        <hr />
        <ia-mgc-cancel-plan
          .plan=${this.plan}
          @cancelPlan=${() => {
            this.dispatchEvent(new Event('cancelPlan'));
          }}
        ></ia-mgc-cancel-plan>
        <hr />
        <p class="email-edit-plan">
          Need to update your plan further? Please email us at
          <a href=${this.mailToText()}>donations@archive.org</a>.
        </p>
      </section>
    `;
  }

  mailToText(): string {
    return `mailto:donations@archive.org?subject=I'd like to update my monthly donation`;
  }
}
