/* eslint-disable no-param-reassign */
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { MonthlyPlan } from './models/plan';

import './presentational/mgc-button';
import type { MGCButton } from './presentational/mgc-button';

@customElement('ia-mgc-plans')
export class IauxMgcPlans extends LitElement {
  @property({ type: Array }) plans = [];

  @property({ type: Boolean, reflect: true }) canEdit = false;

  protected render() {
    return html`
      <section class="monthly-giving-circle">
        <ul>
          ${this.plans.map((plan: MonthlyPlan) => {
            let methodType =
              plan.payment?.paymentMethodType ?? 'Method not found';
            if (methodType === 'creditCard') {
              methodType = 'Credit card';
            }
            const cardType = plan.payment?.cardType ?? 'Card type not found';
            const last4 = plan.payment?.last4
              ? `...${plan.payment?.last4}`
              : 'CC number not found';

            return html`
              <li class=${`${plan.plan.isCancelled ? 'cancelled' : ''}`}>
                <div class="info">
                  <div class="amount">
                    <h3>Amount</h3>
                    <p>
                      ${plan.currency}
                      ${plan.currencySymbol}${plan.amountFormatted}/month
                    </p>
                    ${plan.isTest
                      ? html`<p class="is-test">(Test payment)</p>`
                      : nothing}
                  </div>
                  <div class="payment-details">
                    <h3>Method</h3>
                    <p>${methodType}</p>
                    ${plan.payment?.paymentMethodType === 'creditCard'
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
                    ${plan.payment?.paymentMethodType !== 'creditCard'
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
                    <p>${plan.nextBillingDateLocale}</p>
                  </div>
                </div>
                ${this.planCTA(plan)}
              </li>
            `;
          })}
        </ul>
      </section>
    `;
  }

  planCTA(plan: MonthlyPlan) {
    if (!this.canEdit) {
      const mailToText = `mailto:donations@archive.org?subject=I'd like to update my monthly donation`;
      return html`<p class="email-edit-plan">
        Need to update your plan further? Please email us at
        <a href=${mailToText}>donations@archive.org</a>.
      </p>`;
    }

    const ctaText = plan.plan.isCancelled
      ? 'Plan is cancelled'
      : 'Manage this monthly donation';

    return html`<ia-mgc-button
      class="ia-button link edit-donation"
      .isDisabled=${plan.plan.isCancelled}
      .clickHandler=${async (e: Event, iaButton: MGCButton) => {
        // disable button
        iaButton.isDisabled = true;
        // open form
        this.dispatchEvent(
          new CustomEvent('editThisPlan', { detail: { plan } }),
        );
      }}
      >${ctaText}</ia-mgc-button
    >`;
  }

  static styles = css`
    :host {
      max-height: 500px;
      overflow-y: auto;
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
    li.cancelled {
      background-color: lightgoldenrodyellow;
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

    ul li .info > * {
      margin: 0 0 0.5rem 0;
    }

    ul li .info > * > * {
      margin: 0;
    }

    .email-edit-plan {
      margin-bottom: 0;
    }

    @media screen and (max-width: 500px) {
      ul li .info {
        display: block;
      }
    }
  `;
}
