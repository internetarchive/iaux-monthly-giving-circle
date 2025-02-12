import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { MonthlyPlan } from './models/plan';

@customElement('ia-mgc-edit-plan')
export class MGCWelcome extends LitElement {
  @property({ type: Object }) plan?: MonthlyPlan;

  render() {
    return html`
      <section class="mgc-edit-plan">
        <ia-mgc-cancel-form
          .plan=${this.plan}
          .cancelPlan=${(plan: MonthlyPlan) => {
            this.dispatchEvent(
              new CustomEvent('cancelPlan', { detail: { plan } })
            );
          }}
        ></ia-mgc-cancel-form>
      </section>
    `;
  }
}
