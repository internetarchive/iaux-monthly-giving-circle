import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { MonthlyPlan } from './models/plan';
import './form-sections/cancel';
import './form-sections/amount';
import type { MGCEditPlanAmount } from './form-sections/amount';

@customElement('ia-mgc-edit-plan')
export class IauxEditPlanForm extends LitElement {
  @property({ type: Object }) plan?: MonthlyPlan;

  @property({ type: Object }) cancelPlanHandler?: (plan: MonthlyPlan) => void;

  @property({ type: Object }) updateAmountHandler?: (
    plan: MonthlyPlan,
    amountUpdates: {
      amount: number;
      baseAmount: number;
      coverFees: boolean;
      feeCovered: number;
    }
  ) => void;

  createRenderRoot() {
    return this;
  }

  amountUpdates(status: 'success' | 'fail') {
    const amountForm = this.querySelector(
      'ia-mgc-edit-plan-amount'
    ) as MGCEditPlanAmount;
    amountForm!.amountUpdated(status);
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
        <p class="email-edit-plan">
          Need to update your plan further? Please email us at
          <a href=${this.mailToText}>donations@archive.org</a>.
        </p>
      </section>
    `;
  }

  mailToText(): string {
    return `mailto:donations@archive.org?subject=I'd like to update my monthly donation`;
  }
}
