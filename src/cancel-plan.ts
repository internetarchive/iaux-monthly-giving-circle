import { LitElement, html, TemplateResult, PropertyValues, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import type SubscriptionSummary from './models/subscription-summary';

import '@internetarchive/donation-form/dist/src/form-elements/contact-form/contact-form.js';

import '@internetarchive/donation-form-section';

@customElement('iaux-mgc-cancel-plan')
export class IauxMgcCancelPlan extends LitElement {
  @property({ type: Object }) plan?: SubscriptionSummary;

  @property({ type: Boolean, reflect: true }) requestToCancel = false;

  @property({ type: Boolean, reflect: true }) initialCancelRequest = false;

  @query('form') form!: HTMLFormElement;

  protected createRenderRoot() {
    return this;
  }

  updated(changed: PropertyValues) {
    if (changed.has('plan')) {
      console.log('plan updated', this.plan);
    }

    if (changed.has('requestToCancel')) {
      if (this.requestToCancel) {
        this.form?.querySelector('button')?.removeAttribute('disabled');
      }
    }
  }

  async cancelPlan(e: Event) {
    e.preventDefault();
    this.requestToCancel = true;
    const cancelbutton = this.shadowRoot?.querySelector(
      `button#${`submit-${this.formId}`}`
    );
    cancelbutton?.setAttribute('disabled', 'true');
    console.log('canceling subscription', { plan: this.plan });
    this.dispatchEvent(
      new CustomEvent('cancelPlan', {
        detail: { plan: this.plan },
      })
    );
  }

  get formId(): string {
    return `cancel-donation-form-${this.plan?.id}`;
  }

  protected render() {
    return html`
      <donation-form-section
        badgemode="hidebadge"
        headline="Cancel recurring donation (requires confirmation)"
      >
        <div class="warning">
          ${this.plan?.summary.isCancelled
            ? html`<p>
                Previous donation amount: $${this.plan?.summary.oldAmount}
              </p>`
            : nothing}
          <p>
            You can also pause your recurring donation by setting the next
            donation date up to 12 months in the future.
          </p>
          <button
            class="ia-button"
            @click=${() => {
              if (this.initialCancelRequest) {
                this.initialCancelRequest = false;
                this.requestToCancel = false;
                return;
              }
              this.initialCancelRequest = true;
              this.requestToCancel = false;
            }}
          >
            Let's cancel my donation
          </button>
        </div>
      </donation-form-section>
      <hr />
      ${this.initialCancelRequest ? this.confirmCancelation : nothing}
    `;
  }

  get confirmCancelation(): TemplateResult | typeof nothing {
    return html`
    <section class="cancel-donation">
    <donation-form-section badgemode="hidebadge" headline="Cancel recurring donation">

      <button class="x"  @click=${() => {
        this.initialCancelRequest = false;
        this.requestToCancel = false;
      }}>X</button>

      <p>Canceling ends your monthly recurring donation to the Internet Archive, effective immediately. You will not be charged moving forward.</p>
      <p>Canceling does not affect your account or access to the Internet Archive, although you will no longer have access to any of the Monthly Giving Circle perks.</p>
      <p>If you have any questions regarding donations, contact us at <a href="mailto:donations@archive.org">donations@archive.org</a></p>

      <form id=${this.formId} @submit=${(e: Event) => this.cancelPlan(e)}>
        <div class="checkbox-option-container">
          <input id=${`confirm-${this.formId}`} type="checkbox" required @change=${(
      e: Event
    ) => {
      this.requestToCancel = (e.target as HTMLInputElement).checked;
      if (this.requestToCancel) {
        this.form?.querySelector('button')?.removeAttribute('disabled');
      } else {
        this.form?.querySelector('button')?.setAttribute('disabled', 'true');
      }
    }}>
          <label for=${`confirm-${this.formId}`}><b>I'm sure I want to cancel my subscription</b></label>
        </div>

        <button class="ia-button" disabled="true" id=${`submit-${this.formId}`} type="submit">I'm sure I want to cancel my recurring donation.</button>
      </form>
    </section>
    `;
  }
}
