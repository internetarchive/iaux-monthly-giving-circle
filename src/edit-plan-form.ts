import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import '@internetarchive/donation-form/dist/src/form-elements/badged-input';

import { LazyLoaderService } from '@internetarchive/lazy-loader-service';
import {
  BraintreeEndpointManagerInterface,
  HostingEnvironment,
} from '@internetarchive/donation-form/dist/src/braintree-manager/braintree-interfaces.js';
import {
  PaymentClients,
  PaymentClientsInterface,
} from '@internetarchive/donation-form/dist/src/braintree-manager/payment-clients.js';
import type { DonationRequest } from '@internetarchive/donation-form-data-models';

import type { MonthlyPlan } from './models/plan';
import './form-sections/amount';
import './form-sections/date';
import './form-sections/cancel';
import './form-sections/payment-method';
import type { MGCEditPlanAmount } from './form-sections/amount';
import type { MGCEditPlanDate } from './form-sections/date';
import type { MGCEditPaymentMethod } from './form-sections/payment-method';

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
    paymentClients: new PaymentClients(
      new LazyLoaderService(),
      HostingEnvironment.Development,
    ),
    endpointManager: {
      // eslint-disable-next-line arrow-body-style, @typescript-eslint/no-unused-vars
      submitData: async (_request: DonationRequest) => {
        // eslint-disable-next-line no-debugger
        debugger;
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      donationSuccessful: (_response: any) => {
        // eslint-disable-next-line no-debugger
        debugger;
      },
    } as unknown as BraintreeEndpointManagerInterface,
  };

  @query('#braintree-creditcard') braintreeNumberInput!: HTMLDivElement;

  @query('#braintree-expiration') braintreeExpirationDateInput!: HTMLDivElement;

  @query('#braintree-cvv') braintreeCVVInput!: HTMLDivElement;

  @query('#braintree-error-message') braintreeErrorMessage!: HTMLDivElement;

  createRenderRoot() {
    return this;
  }

  paymentMethodUpdates(status: 'success' | 'fail') {
    const paymentMethodForm = this.querySelector(
      'ia-mgc-edit-payment-method',
    ) as MGCEditPaymentMethod;
    paymentMethodForm!.paymentMethodUpdated(status);
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
            const { newPaymentMethodRequest } = e.detail;
            if (this.plan) {
              this.dispatchEvent(
                new CustomEvent('UpdatePaymentMethod', {
                  detail: { plan: this.plan, newPaymentMethodRequest },
                }),
              );
            }
          }}
        >
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
