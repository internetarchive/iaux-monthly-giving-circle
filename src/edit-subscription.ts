import { LitElement, html, css, CSSResult, PropertyValues, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { MGCEditPlanAmount } from './plan-amount';
import './plan-amount';
import './payment-method';
import './donation-date';
import './cancel-plan';
import type SubscriptionSummary from './models/subscription-summary';

@customElement('iaux-mgc-edit-subscription')
export class MGCEditSubscription extends LitElement {
  @property({ type: Object }) plan?: SubscriptionSummary;

  @property({ type: String }) planId: string = '';

  @property({ type: String }) baseHost: string = 'archive.org';

  @property({ type: String }) amount: string = '';

  @property({ type: String }) paymentMethod: string = '';

  @property({ type: String }) planDate: string = '';

  @property({ type: String }) newAmount: string = '';

  @property({ type: String }) newPaymentMethod: string = '';

  @property({ type: String }) newPlanDate: string = '';

  @property({ type: Array }) openForms: string[] = []; // amount, cancel, date, payment

  protected createRenderRoot() {
    return this;
  }

  updated(changed: PropertyValues) {
    if (changed.has('plan')) {
      console.log('plan updated', this.plan);
    }
  }

  get currencySymbol() {
    if (this.plan?.currencyType === 'USD') {
      return '$';
    }
    return '';
  }

  get displayAmount() {
    return `${this.plan?.currencyType}${this.currencySymbol}${this.plan?.amount}`;
  }

  // 'amount' | 'date' | 'payment' | 'cancel' | ''
  public clearForm(formToClear: string) {
    if (!formToClear) {
      return;
    }

    if (formToClear === 'amount') {
      const el = this.querySelector(
        'iaux-mgc-edit-plan-amount'
      ) as MGCEditPlanAmount;
      el?.closeForm();
    }
  }

  protected render() {
    console.log('EDIT SUBSCRIPTION -- this.plan', this.plan);

    /*

    originalPlanDetails: this.plan,
    newDonationInfo: this.donationPaymentInfo,
    newAmount: Number

    */
    return html`
      <section id="edit-subscription" planId=${this.plan?.id ?? nothing}>
        <iaux-mgc-edit-plan-amount
          .plan=${this.plan}
          @formOpened=${() => {
            const currFormsOpen = this.openForms;
            if (!currFormsOpen.includes('amount')) {
              this.openForms = [...currFormsOpen, 'amount'];
            }
          }}
          @updateAmount=${(e: CustomEvent) => {
            console.log('updateAmount', e.detail);
            const { originalPlanDetails } = e.detail;
            const { newDonationInfo } = e.detail;
            const { newAmount } = e.detail;
            this.dispatchEvent(
              new CustomEvent('editAmount', {
                detail: {
                  originalPlanDetails,
                  newDonationInfo,
                  newAmount,
                },
              })
            );
          }}
        >
        </iaux-mgc-edit-plan-amount>
        <iaux-mgc-edit-plan-payment-methodz
          .plan=${this.plan}
          @formOpened=${() => {
            const currFormsOpen = this.openForms;
            if (!currFormsOpen.includes('payment')) {
              this.openForms = [...currFormsOpen, 'payment'];
            }
          }}
          @editPaymentMethod=${(e: CustomEvent) => {
            alert('Payment method edited');
            const { newPaymentMethod } = e.detail;
            const { plan } = e.detail;
            this.dispatchEvent(
              new CustomEvent('editPaymentMethod', {
                detail: { newPaymentMethod, plan },
              })
            );
          }}
        ></iaux-mgc-edit-plan-payment-methodz>
        <hr />
        <iaux-mgc-edit-donation-date
          .plan=${this.plan}
          @formOpened=${() => {
            const currFormsOpen = this.openForms;
            if (!currFormsOpen.includes('date')) {
              this.openForms = [...currFormsOpen, 'date'];
            }
          }}
          @editDate=${(e: CustomEvent) => {
            alert('Date edited');
            const { newDate } = e.detail;
            const { plan } = e.detail;
            this.dispatchEvent(
              new CustomEvent('editDate', { detail: { newDate, plan } })
            );
          }}
        >
        </iaux-mgc-edit-donation-date>
        <hr />
        <iaux-mgc-cancel-plan
          .plan=${this.plan}
          @formOpened=${() => {
            const currFormsOpen = this.openForms;
            if (!currFormsOpen.includes('cancel')) {
              this.openForms = [...currFormsOpen, 'canncel'];
            }
          }}
          @cancelSubscription=${(e: CustomEvent) => {
            alert('Plan cancelled');
            const { plan } = e.detail;
            this.dispatchEvent(
              new CustomEvent('cancelPlan', { detail: { plan } })
            );
          }}
        ></iaux-mgc-cancel-plan>
      </section>
    `;
  }

  static styles: CSSResult = css`
    section {
      margin: 1rem;
    }

    ul {
      list-style-type: disc;
      padding-left: 1rem;
    }
  `;
}
