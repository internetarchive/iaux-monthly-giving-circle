import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { MonthlyPlan } from './models/plan';
import './cancel-plan';

@customElement('ia-mgc-edit-plan')
export class MGCWelcome extends LitElement {
  @property({ type: Object }) plan?: MonthlyPlan;

  render() {
    return html`
      <section class="mgc-edit-plan">
        <p>edit plan form</p>
        <iaux-mgc-cancel-plan
          .plan=${this.plan}
          .cancelPlan=${(plan: MonthlyPlan) => {
            this.dispatchEvent(
              new CustomEvent('cancelPlan', { detail: { plan } })
            );
          }}
        ></iaux-mgc-cancel-plan>
      </section>
    `;
  }
}
