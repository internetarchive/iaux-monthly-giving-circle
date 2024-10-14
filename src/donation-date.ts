import { LitElement, html, PropertyValues, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import type SubscriptionSummary from './models/subscription-summary';

import '@internetarchive/donation-form/dist/src/form-elements/contact-form/contact-form';

@customElement('iaux-mgc-edit-donation-date')
export class MonthlyGivingCircle extends LitElement {
  @property({ type: String }) displayDate: string = '';

  @property({ type: Object }) plan?: SubscriptionSummary;

  @property({ type: Boolean }) currentlyEditing: boolean = false;

  protected createRenderRoot() {
    return this;
  }

  get dateFormatted(): string {
    return '';
  }

  get maxDate(): string {
    return '';
  }

  get minDate(): string {
    return '';
  }

  get nextBillingDate(): string {
    const formatted = this.plan?.payment.nextBillingDate.date
      ? new Date(this.plan?.payment.nextBillingDate.date).toLocaleDateString()
      : 'not found';
    return formatted;
  }

  @query('form#edit-donation-date') form!: HTMLFormElement;

  updated(changed: PropertyValues) {
    if (changed.has('currentlyEditing') && this.currentlyEditing) {
      this.form.focus();
    }
  }

  protected render() {
    return html`
      <section>
        <h3>Donation date - Next billing date: ${this.nextBillingDate}</h3>
        ${!this.currentlyEditing
          ? html`<p>${this.nextBillingDate}</p>
              <button
                class="link ia-button"
                @click=${() => {
                  this.currentlyEditing = true;
                }}
              >
                Edit...
              </button>`
          : nothing}
        ${this.currentlyEditing ? this.editDateForm : nothing}
      </section>
    `;
  }

  get editDateForm() {
    return html`
      <section>
        ${this.plan?.summary.oldDate
          ? html`<p>Previous date: ${this.plan?.summary.oldDate}</p>`
          : nothing}
        <form id="edit-donation-date">
          <p>${this.displayDate}</p>
          <input
            required
            type="date"
            id="date"
            name="new-date"
            .value=${this.dateFormatted}
            min=${this.minDate}
            max=${this.maxDate}
          />
          <div>
            <button
              class="ia-button secondary"
              type="button"
              @click=${(e: Event) => {
                e.preventDefault();
                const newDate = this.form.querySelector(
                  'input[name="new-date"]'
                ) as HTMLInputElement;
                const newDateValue = newDate!.value;
                console.log('cancel date', {
                  newDateValue,
                  displayDate: this.displayDate,
                });
              }}
            >
              Cancel
            </button>
            <button
              class="ia-button primary"
              type="submit"
              @click=${(e: Event) => {
                e.preventDefault();
                const newDate = this.form.querySelector(
                  'input[name="new-date"]'
                ) as HTMLInputElement;
                const newDateValue = newDate!.value;
                if (!newDateValue) {
                  return;
                }
                this.dispatchEvent(
                  new CustomEvent('updateDate', {
                    detail: { newDateValue, plan: this.plan },
                  })
                );
                console.log('update date', {
                  newDateValue,
                  displayDate: this.displayDate,
                });
              }}
            >
              Update
            </button>
          </div>
        </form>
      </section>
    `;
  }
}