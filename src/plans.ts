import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { MonthlyPlan } from './models/plan';

import './presentational/iaux-button';

// type donationSummary = {
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
          ${this.plans.map((plan: MonthlyPlan) => {
            console.log(' ******** ');
            console.log('plan: ', plan);
            const methodType =
              plan.payment?.paymentMethodType ?? 'Method not found';
            const cardType = plan.payment?.cardType ?? 'Card type not found';
            const last4 = plan.payment?.last4
              ? `...${plan.payment?.last4}`
              : 'CC number not found';

            return html`
              <li>
                <div class="info">
                  <div class="amount">
                    <h3>Amount</h3>
                    <p>
                      ${plan.currency}
                      ${plan.currencySymbol}${plan.amount}/month
                    </p>
                    ${plan.isTest
                      ? html`<p class="is-test">(Test payment)</p>`
                      : nothing}
                  </div>
                  <div class="payment-details">
                    <h3>Method</h3>
                    <p>${methodType}</p>
                    ${plan.payment?.cardType === 'creditCard'
                      ? html`<p>${cardType}</p>
                          <p>${last4}</p>`
                      : nothing}
                    ${plan.payment?.paymentMethodType === 'Paypal'
                      ? html`<p>
                          Paypal email:
                          <a href=${`mailto:${plan.payment?.paypalEmail}`}
                            >${plan.payment?.paypalEmail}</a
                          >
                        </p>`
                      : nothing}
                    ${plan.payment?.paymentMethodType === 'Venmo'
                      ? html`<p>
                          Venmo username:
                          <a href=${`mailto:${plan.payment?.venmoUsername}`}
                            >${plan.payment?.paypalEmail}</a
                          >
                        </p>`
                      : nothing}
                    ${plan.payment?.cardType !== 'creditCard'
                      ? html`<p>
                          Expires:
                          ${plan.payment?.expirationMonth ??
                          'month not found'}/${plan.payment?.expirationYear ??
                          'year not found'}
                        </p>`
                      : nothing}
                  </div>
                  <div class="next-donation">
                    <h3>Next Donation</h3>
                    <p>${plan.nextBillingDate}</p>
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
    :host {
      max-height: 500px;
      overflow-y: scroll;
      display: block;
    }

    .is-test {
      font-size: 0.8rem;
    }

    li {
      border: 1px solid #23765d;
      background-color: #eeffee;
      display: block;
      width: inherit;
    }
    table {
      width: 100%;
      text-align: left;
      max-width: 600px;
    }

    ul {
      padding: 0;
      list-style-type: none;
      margin: 0;
    }

    ul li {
      border: 1px solid #23765d;
      background-color: #eeffee;
      margin: 0.5rem 0;
      padding: 0.5rem 0.5rem 1rem 0.5rem;
      position: relative;
    }

    ul li button.edit-donation {
      height: 30px;
      display: block;
      position: absolute;
      bottom: 0;
    }

    ul li .info {
      display: grid;
      min-height: 90px;
      grid-template-columns: 0.5fr 1fr 0.5fr;
      grid-template-rows: 1fr;
      gap: 0px 5px;
      grid-auto-flow: row;
      grid-template-areas: 'amount details next-donation';
    }

    ul li .info .amount {
      grid-area: amount;
    }

    ul li .info .payment-details {
      grid-area: details;
    }

    ul li .info .next-donation {
      grid-area: next-donation;
    }

    @media screen and (max-width: 500px) {
      ul li .info {
        display: block;
        border: 1px solid yellow;
      }
    }

    ul li .info > * {
      margin: 0 0 0.5rem 0;
    }

    ul li .info > * > * {
      margin: 0;
    }
  `;
}
