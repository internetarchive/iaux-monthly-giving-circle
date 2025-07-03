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

type InvalidDateErrorCode =
  | 'invalid_date'
  | 'date_too_early'
  | 'second_donation_this_month'
  | 'date_out_of_range'
  | '';

enum InvalidDateErrorMessages {
  invalid_date = 'Please enter a valid date format (YYYY-MM-DD)',
  date_too_early = 'Date must be at least tomorrow.',
  second_donation_this_month = 'The date you selected will result in an additional donation for this month.',
  date_out_of_range = 'New donation date must be within the next 12 months.',
}
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
      this.dateInput.focus();
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
                  ${this.plan?.nextBillingDateLocale}
                  <ia-mgc-update-status .status=${this.updateStatus}
                    >${this.updateMessage}</ia-mgc-update-status
                  >
                </p>
                <ia-button
                  id="open-edit-date-form"
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

    this.allowEditing = false;
    await this.updateComplete;
  }

  /* Dispatches edit-date change request */
  requestDateUpdate(e: Event): void {
    e.preventDefault();
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
    this.allowEditing = false;
  }

  clearInputField() {
    this.dateInput.value = '';
    this.newDate = undefined;
  }

  async clearStatusMessaging() {
    this.errorMessage = '';
    this.warningMessage = '';
    this.updateMessage = '';
    this.updateStatus = '';
    await this.updateComplete;
  }

  /* @param string dateString -  YYYYY-MM-DD */
  validateChosenDate(dateString: string): {
    valid: boolean;
    errorCode: InvalidDateErrorCode | '';
  } {
    if (!dateString) {
      return {
        valid: false,
        errorCode: 'invalid_date',
      };
    }

    let validDate;
    try {
      validDate = new Date(`${dateString}T00:00:00`);
    } catch (error) {
      return {
        valid: false,
        errorCode: 'invalid_date',
      };
    }

    // Check if minimum date is at least tomorrow
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1); // Set to tomorrow

    const chosenDate = new Date(validDate);
    chosenDate.setHours(0, 0, 0, 0);

    if (chosenDate < today) {
      return {
        valid: false,
        errorCode: 'date_too_early',
      };
    }

    // Check if the new date is within the next 12 months
    const twelveMonthsFromNow = new Date(today);
    twelveMonthsFromNow.setFullYear(twelveMonthsFromNow.getFullYear() + 1);

    if (chosenDate > twelveMonthsFromNow) {
      return {
        valid: false,
        errorCode: 'date_out_of_range',
      };
    }

    // Check if there has been a donation in the last month
    const lastDonationDate = this.plan?.payment.lastBillingDate.date
      ? new Date(this.plan?.payment.lastBillingDate.date)
      : null;

    if (lastDonationDate) {
      const lastDonationMonth = lastDonationDate.getMonth();
      const lastDonationYear = lastDonationDate.getFullYear();

      const thisYear = validDate.getFullYear();
      const thisMonth = validDate.getMonth();
      const isInLastMonth =
        thisYear === lastDonationYear && thisMonth === lastDonationMonth;

      if (isInLastMonth) {
        return {
          valid: true,
          errorCode: 'second_donation_this_month',
        };
      }
    }

    return {
      valid: true,
      errorCode: '',
    };
  }

  /* DISPLAY */
  get minDate(): string {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1); // Set to tomorrow
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const dateString = String(tomorrow.getDate()).padStart(2, '0');
    return `${year}-${month}-${dateString}`;
  }

  get maxDate(): string {
    const today = new Date();
    const year = today.getFullYear() + 1; // Allow up to one year in the future
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const dateString = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${dateString}`;
  }

  get editDateForm(): TemplateResult {
    return html`
      <section>
        <form id="edit-date">
          <p id="form-info-last-donation-date">
            Last donation date: ${this.plan?.lastBillingDateLocale}
          </p>

          <p id="form-info-next-donation-date">
            Next donation date: ${this.plan?.nextBillingDateLocale}
          </p>
          <div class="date-holder">
            <input
              required
              type="date"
              id="edit-date"
              name="edit-date"
              min=${this.minDate}
              max=${this.maxDate}
              value=""
              @focus=${() => this.clearStatusMessaging()}
              @change=${async () => {
                this.clearStatusMessaging();
                await this.updateComplete;

                const inputValue = this.dateInput.value;
                const { valid, errorCode } =
                  this.validateChosenDate(inputValue);

                this.allowEditing = valid;

                if (errorCode) {
                  if (errorCode === 'second_donation_this_month') {
                    this.errorMessage = InvalidDateErrorMessages[errorCode];
                    this.warningMessage =
                      'You have already made a donation this month.';
                  } else {
                    this.errorMessage = InvalidDateErrorMessages[errorCode];
                    this.newDate = undefined;
                    return;
                  }
                }

                const chosenDate = new Date(`${inputValue}T00:00:00`);
                const newDate = new Date(chosenDate).toISOString();
                this.newDate = newDate;
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
          <p class="error error-msg">
            ${this.warningMessage
              ? html`<span>${this.warningMessage}</span><br />`
              : ''}
            ${this.errorMessage}
          </p>
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
