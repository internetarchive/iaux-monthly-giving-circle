import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type SubscriptionSummary from './models/subscription-summary';

import './presentational/iaux-button';

// type donation = {
//   status: string;
//   amount: number;
//   date: string;
//   id: string;
// };

@customElement('iaux-mgc-plans')
export class IauxMgcPlans extends LitElement {
  @property({ type: Array }) plans = [];

  donationAmountFormatted(amount: number) {
    return `USD ${amount}`;
  }

  dateFormatted(date: string) {
    const splitDate = date.split('-');
    const year = splitDate[0];
    const month = parseInt(splitDate[1], 10);
    const day = splitDate[2];

    const monthMap: { [key: number]: string } = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December',
    };

    const displayMonth = monthMap[month];
    return `${displayMonth} ${day}, ${year}`;
  }

  protected render() {
    return html`
      <section class="monthly-giving-circle">
        <ul>
          ${this.plans.map((plan: SubscriptionSummary) => {
            const methodType =
              plan.payment?.paymentMethodType ?? 'Method not found';
            const cardType = plan.payment?.cardType ?? 'Card type not found';
            const last4 = plan.payment?.last4
              ? `...${plan.payment.last4}`
              : 'CC number not found';
            const nextBillingDate = plan.payment?.nextBillingDate ?? '';
            console.log(' ******** ');
            console.log('plan: ', plan);
            return html`
              <li>
                <div class="info">
                  <div class="amount">
                    <h3>Amount</h3>
                    <p>${plan.currencyType} ${plan.amount}/month</p>
                    ${plan.isTest ? html`<p>(Test payment)</p>` : nothing}
                  </div>
                  <div class="payment-details">
                    <h3>Method</h3>
                    <p>${methodType}</p>
                    ${plan.payment.cardType === 'creditCard'
                      ? html`<p>${cardType}</p>
                          <p>${last4}</p>`
                      : nothing}
                    ${plan.payment.paymentMethodType === 'Paypal'
                      ? html`<p>
                          Paypal email:
                          <a href=${`mailto:${plan.payment.paypalEmail}`}
                            >${plan.payment.paypalEmail}</a
                          >
                        </p>`
                      : nothing}
                    ${plan.payment.paymentMethodType === 'Venmo'
                      ? html`<p>
                          Venmo username:
                          <a href=${`mailto:${plan.payment.venmoUsername}`}
                            >${plan.payment.paypalEmail}</a
                          >
                        </p>`
                      : nothing}
                    <p>
                      Expires:
                      ${plan.payment.expirationMonth ??
                      'month not found'}/${plan.payment.expirationYear ??
                      'year not found'}
                    </p>
                  </div>
                  <div class="next-donation">
                    <h3>Next Donation</h3>
                    <p>
                      ${nextBillingDate
                        ? html`${nextBillingDate}`
                        : 'not found'}
                    </p>
                  </div>
                </div>
                <iaux-button
                  class="ia-button link edit-donation"
                  .clickHandler=${() => console.log(plan)}
                >
                  Manage this monthly donation
                </iaux-button>
              </li>
            `;
          })}
        </ul>
      </section>
    `;
  }

  static styles = css`
    table {
      width: 100%;
      text-align: left;
      max-width: 600px;
    }
  `;
}
