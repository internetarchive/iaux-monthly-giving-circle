import {
  LitElement,
  html,
  PropertyValues,
  nothing,
  css,
  TemplateResult,
} from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '@internetarchive/donation-form-section';

import type { MonthlyPlan } from '../models/plan';
import '../presentational/ia-button';
import type { IauxButton } from '../presentational/ia-button';
import '../presentational/mgc-update-status';

@customElement('ia-mgc-edit-date')
export class MGCEditPlanDate extends LitElement {
  @property({ type: Object }) plan?: MonthlyPlan;

  @property({ type: String }) newDate?: string;

  @property({ type: Boolean, reflect: true }) currentlyEditing: boolean = false;

  @property({ type: Boolean }) allowEditing: boolean = false;

  @property({ type: String }) updateMessage: string = '';

  @property({ type: String }) errorMessage: string = '';

  @property({ type: String }) warningMessage: string = '';

  @property({ type: String }) updateStatus: 'success' | 'fail' | '' = '';

  @query('form') form!: HTMLFormElement;

  @query('form ia-button#edit-date') formSubmitButton!: IauxButton;

  @query('form input[name="edit-date"]')
  dateInput!: HTMLInputElement;

  willUpdate(changed: PropertyValues) {
    if (this.dateInput && changed.has('plan') && this.plan) {
      this.dateInput.setAttribute('min', this.minDate);
      this.dateInput.setAttribute('max', this.maxDate);
    }
  }

  updated(changed: PropertyValues) {
    if (changed.has('currentlyEditing') && this.currentlyEditing) {
      this.form.focus();
    }
  }

  protected render() {
    return html`
      <section>
        <donation-form-section
          badgemode="hidebadge"
          headline="Change next donation date"
        >
          ${!this.currentlyEditing
            ? html` <p class="current-date">
                  ${this.plan?.nextBillingDate}
                  <ia-mgc-update-status .status=${this.updateStatus}
                    >${this.updateMessage}</ia-mgc-update-status
                  >
                </p>
                <ia-button
                  id="edit-date"
                  class="ia-button link"
                  .clickHandler=${() => {
                    this.currentlyEditing = true;
                    this.clearStatusMessaging();
                  }}
                >
                  Edit...
                </ia-button>`
            : nothing}
          ${this.currentlyEditing ? this.editDateForm : nothing}
        </donation-form-section>
      </section>
    `;
  }

  /* External Function that is called by consumer to tell the form there has been data update */
  async dateUpdated(status: 'success' | 'fail') {
    this.clearInputField();

    this.updateStatus = status;
    this.updateMessage =
      status === 'success'
        ? 'Date updated'
        : 'Failed to update date, please try again';

    if (status === 'success') {
      this.closeForm();
      await this.updateComplete;
      return;
    }

    (this.form.querySelector('ia-button#edit-date') as IauxButton).isDisabled =
      false;

    await this.updateComplete;
  }

  /* Dispatches edit-date change request */
  requestDateUpdate(e: Event): void {
    e.preventDefault();
    console.log('<plan-date> - requestDateUpdate', {
      newValue: this.newDate,
    });
    this.dispatchEvent(
      new CustomEvent('updateDate', {
        detail: {
          plan: this.plan,
          newDate: this.newDate,
        },
      })
    );
  }

  closeForm() {
    this.clearInputField();
    this.clearStatusMessaging();
    this.currentlyEditing = false;
  }

  clearInputField() {
    const input = this.form.querySelector(
      'input[name="edit-date"]'
    ) as HTMLInputElement;
    input.value = '';
    this.newDate = undefined;
  }

  async clearStatusMessaging() {
    this.errorMessage = '';
    this.warningMessage = '';
    this.updateMessage = '';
    this.updateStatus = '';
    await this.updateComplete;
  }

  /* DISPLAY */
  get minDate(): string {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1); // Set to tomorrow
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    return `${year}-${month}-${tomorrow.getDate()}`;
  }

  get maxDate(): string {
    const today = new Date();
    const year = today.getFullYear() + 1; // Allow up to one year in the future
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const lastDayOfMonth = new Date(year, today.getMonth() + 1, 0).getDate();
    return `${year}-${month}-${lastDayOfMonth}`; // Last day of the month
  }

  get editDateForm(): TemplateResult {
    console.log('editdate', {
      min: this.minDate,
      max: this.maxDate,
      plan: this.plan,
      nextBillingDate: this.plan?.nextBillingDate,
      lastBillingDate: this.plan?.lastBillingDateLocale,
    });
    return html`
      <section>
        <form id="edit-date">
          <p>Last donation date: ${this.plan?.lastBillingDateLocale}</p>

          <p>Next donation date: ${this.plan?.nextBillingDate}</p>
          <div class="date-holder">
            <input
              type="date"
              id="edit-date"
              name="edit-date"
              min=${this.minDate}
              max=${this.maxDate}
              value=""
              @focus=${() => this.clearStatusMessaging()}
              @change=${async (e: Event) => {
                this.clearStatusMessaging();
                await this.updateComplete;

                console.log(
                  'date changed',
                  (e.target as HTMLInputElement).value
                );
                console.log('date changed THIS', this);

                const inputValue = (e.target as HTMLInputElement).value;
                if (!inputValue) {
                  this.errorMessage = 'Please enter a date';
                  this.allowEditing = true;
                  return; // wait until date field returns a valid string
                }

                let validDate;
                try {
                  validDate = new Date(
                    (e.target as HTMLInputElement)?.value as string
                  );
                } catch (error) {
                  console.error('Invalid date format:', error);
                  this.errorMessage =
                    'Please enter a valid date format (YYYY-MM-DD)';
                  return; // wait until date field returns a valid string
                }

                // Check if minimum date is at least tomorrow
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const tomorrow = new Date(today);
                tomorrow.setDate(today.getDate() + 1); // Set to tomorrow
                tomorrow.setHours(0, 0, 0, 0);
                const chosenDate = new Date(validDate);
                chosenDate.setHours(0, 0, 0, 0);
                if (chosenDate < today) {
                  this.errorMessage = 'Date must be at least tomorrow.';
                  this.allowEditing = false;
                  return;
                }

                console.log('validDate', validDate);

                const newDate = new Date(validDate).toISOString();
                this.newDate = newDate;
                console.log('newDate', newDate);

                // Check if the date is in the past

                // Check if there has been a donation in the last month

                const hasLastDonationInfo =
                  this.plan?.payment.lastBillingDate.date &&
                  new Date(this.plan?.payment.lastBillingDate.date);

                if (hasLastDonationInfo) {
                  const lastDonationDate = new Date(
                    this.plan?.payment.lastBillingDate.date ?? ''
                  );
                  const lastDonationMonth = lastDonationDate.getMonth();
                  const lastDonationYear = lastDonationDate.getFullYear();

                  const thisYear = validDate.getFullYear();
                  const thisMonth = validDate.getMonth();
                  const isInLastMonth =
                    thisYear === lastDonationYear &&
                    thisMonth === lastDonationMonth;

                  if (isInLastMonth) {
                    this.warningMessage =
                      'You have already made a donation this month. Is that cool with you?';
                    this.allowEditing = true;
                    return;
                  }
                }
                // Check if there has been a donation in the last 30 days
                console.log('newDate', newDate);

                this.allowEditing = true;
              }}
            />
          </div>
          <div>
            <div class="cta-container">
              <ia-button
                class="ia-button secondary"
                .clickHandler=${(e: Event) => {
                  e.preventDefault();
                  this.closeForm();
                }}
              >
                Cancel
              </ia-button>
              <ia-button
                id="edit-date"
                class="ia-button primary"
                type="submit"
                .isDisabled=${!this.allowEditing}
                .clickHandler=${async (e: Event, iaButton: IauxButton) => {
                  this.clearStatusMessaging();

                  if (!this.newDate) {
                    this.errorMessage = 'Please enter a valid date';
                    return;
                  }

                  // eslint-disable-next-line no-param-reassign
                  (iaButton as IauxButton).isDisabled = true;
                  await iaButton.updateComplete;

                  // check if request is in range

                  this.requestDateUpdate(e);
                }}
              >
                Update
              </ia-button>
              <ia-mgc-update-status .status=${this.updateStatus}
                >${this.updateMessage}</ia-mgc-update-status
              >
            </div>
          </div>
          <p class="error">${this.warningMessage}</p>
          <p class="error">${this.errorMessage}</p>
        </form>
      </section>
    `;
  }

  static styles = css`
    input[name='edit-date'] {
      margin: 10px 0;
      min-width: 140px;
    }

    .cta-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: center;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
    }

    p.error {
      color: var(--mgc-warning-color-dark, #bb0505);
    }

    ia-mgc-update-status {
      display: inline-block;
      margin-left: 1rem;
    }

    .checkbox-option-container {
      margin: 10px 0;
      display: flex;
    }
  `;
}
