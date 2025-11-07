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
import {
  DonationPaymentInfo,
  DonationType,
} from '@internetarchive/donation-form-data-models';

import type { MonthlyPlan } from '../models/plan';
import '../presentational/donation-section-info';
import '../presentational/mgc-button';
import type { MGCButton } from '../presentational/mgc-button';
import '../presentational/mgc-update-status';

@customElement('ia-mgc-edit-plan-amount')
export class MGCEditPlanAmount extends LitElement {
  @property({ type: Object }) plan?: MonthlyPlan;

  // captures the changes made to the amount && calculates the total amount with fees
  @property({ type: Object }) donationPaymentInfo?: DonationPaymentInfo;

  @property({ type: Number }) newAmount: number = 0;

  @property({ type: Boolean, reflect: true }) currentlyEditing: boolean = false;

  @property({ type: Boolean }) coverFees: boolean = false;

  @property({ type: String }) updateMessage: string = '';

  @property({ type: String }) errorMessage: string = '';

  @property({ type: String }) updateStatus: 'success' | 'fail' | '' = '';

  @query('form') form!: HTMLFormElement;

  updated(changed: PropertyValues) {
    if (changed.has('plan') && this.plan) {
      this.captureAmountChanges();
    }
    if (changed.has('coverFees')) {
      this.captureAmountChanges();
    }
    if (changed.has('currentlyEditing') && this.currentlyEditing) {
      this.form.focus();
    }

    if (changed.has('donationPaymentInfo') && !this.donationPaymentInfo) {
      this.captureAmountChanges();
    }
  }

  protected render() {
    return html`
      <section>
        <donation-form-section badgemode="hidebadge" headline="Amount">
          ${!this.currentlyEditing
            ? html`<ia-mgc-form-section-info
                @editingRequested=${() => {
                  this.currentlyEditing = true;
                  this.clearStatusMessaging();
                }}
                ><span>USD $${this.plan?.amountFormatted}</span>
              </ia-mgc-form-section-info>`
            : nothing}
          ${this.currentlyEditing ? this.editAmountForm : nothing}
        </donation-form-section>
      </section>
    `;
  }

  /* External Function that is called by consumer to tell the form there has been data update */
  async amountUpdated(status: 'success' | 'fail') {
    this.clearInputField();

    this.updateStatus = status;
    this.updateMessage =
      status === 'success' ? 'Amount updated' : 'Failed. Try again.';

    if (status === 'success') {
      this.closeForm();
      await this.updateComplete;

      this.updateStatus = status;
      this.updateMessage = 'Amount updated';

      return;
    }

    (
      this.form.querySelector('ia-mgc-button#update-amount') as MGCButton
    ).isDisabled = false;

    this.captureAmountChanges();

    await this.updateComplete;
  }

  /* Dispatches amount change request */
  requestAmountUpdate(e: Event): void {
    e.preventDefault();

    const input = this.form.querySelector(
      'input[name="amount"]'
    ) as HTMLInputElement;
    this.newAmount = Number(input.value);

    this.captureAmountChanges(this.newAmount);

    console.log('<plan-amount> - update amount', {
      newValue: this.newAmount,
      oldValue: this.plan?.plan.amount,
      display: this.donationPaymentInfo?.amount,
    });
    const newAmount = Number(
      DonationPaymentInfo.calculateTotal(
        Number(this.donationPaymentInfo?.amount),
        this.coverFees
      )
    );
    this.dispatchEvent(
      new CustomEvent('updateAmount', {
        detail: {
          plan: this.plan,
          amount: newAmount,
          baseAmount: this.donationPaymentInfo?.amount,
          coverFees: this.coverFees,
          feeCovered: this.donationPaymentInfo?.feeAmountCovered,
        },
      })
    );
  }

  /* captures form changes */
  captureAmountChanges(newAmount?: number) {
    if (!this.donationPaymentInfo && this.plan) {
      this.donationPaymentInfo = new DonationPaymentInfo({
        donationType: DonationType.Monthly,
        amount: 0,
        coverFees: true,
      });
      return;
    }

    let newPlan;
    if (newAmount) {
      newPlan = new DonationPaymentInfo({
        donationType: DonationType.Monthly,
        amount: newAmount,
        coverFees: true,
      });
    } else {
      const amount = this.donationPaymentInfo
        ? this.donationPaymentInfo.amount
        : this.plan!.amount;

      newPlan = new DonationPaymentInfo({
        donationType: DonationType.Monthly,
        amount,
        coverFees: true,
      });
    }

    this.donationPaymentInfo = newPlan;
  }

  closeForm() {
    this.clearInputField();
    this.clearStatusMessaging();
    this.currentlyEditing = false;
    this.coverFees = false;
    this.errorMessage = '';
  }

  clearInputField() {
    const input = this.form.querySelector(
      'input[name="amount"]'
    ) as HTMLInputElement;
    input.value = '';
    this.newAmount = 0;
    this.donationPaymentInfo = undefined;
  }

  handleSubmit(e: Event, iaButton?: MGCButton) {
    e.preventDefault();
    this.clearStatusMessaging();

    const button =
      iaButton ?? (this.form.querySelector('#update-amount') as MGCButton);
    if (button) this.updateButtonState(button);

    if (!this.newAmount) {
      this.errorMessage = 'Please enter a new amount';
      if (button) button.isDisabled = false;
      return;
    }

    const input = this.form.querySelector(
      'input[name="amount"]'
    ) as HTMLInputElement;
    const requestedAmount = Number(input.value) ?? 0;
    const amountTooLow = requestedAmount < 1;
    const amountTooHigh = requestedAmount >= 9999;

    if (amountTooLow) {
      this.errorMessage = 'Please enter a valid amount';
    }

    if (amountTooHigh) {
      this.errorMessage =
        'Amount must be less than $9,999. Would you like to donate more? Please contact us at donations@archive.org';
    }

    if (amountTooHigh || amountTooLow) {
      if (button) this.updateButtonState(button);
      return;
    }

    this.requestAmountUpdate(e);
  }

  private async updateButtonState(iaButton: MGCButton) {
    // eslint-disable-next-line no-param-reassign
    (iaButton as MGCButton).isDisabled = true;
    await iaButton?.updateComplete;
  }

  async clearStatusMessaging() {
    this.errorMessage = '';
    this.updateMessage = '';
    this.updateStatus = '';
    await this.updateComplete;
  }

  /* DISPLAY */
  totalAmountWithFees(): number {
    if (this.newAmount === 0) {
      return 0;
    }

    return DonationPaymentInfo.calculateTotal(this.newAmount, this.coverFees);
  }

  get coveredFeesText() {
    return `I'll generously add $${this.donationPaymentInfo?.feeAmountCovered} to cover fees.`;
  }

  get editAmountForm(): TemplateResult {
    return html`
      <section>
        <form
          id="edit-plan-amount"
          @submit=${(e: Event) => this.handleSubmit(e)}
        >
          <p>Current donation amount: $${this.plan?.amountFormatted}</p>
          <div>
            $
            <input
              min="1"
              max="9999"
              type="number"
              id="amount"
              name="amount"
              ?required=${true}
              @focus=${() => this.clearStatusMessaging()}
              @input=${(e: Event) => {
                const newAmount = Number((e.target as HTMLInputElement).value);
                this.captureAmountChanges(newAmount);
                this.newAmount = newAmount;
              }}
            />
            / month
          </div>
          <div>
            <div class="checkbox-option-container">
              <input
                type="checkbox"
                id="cover-fees"
                tabindex="0"
                @change=${(e: Event) => {
                  const input = e.target as HTMLInputElement;
                  const coverFees = input.checked;
                  this.coverFees = coverFees;
                  this.captureAmountChanges();
                }}
              />
              <label for="cover-fees">${this.coveredFeesText}</label>
            </div>
            <p>Total: USD $${this.totalAmountWithFees()}</p>
            <div class="cta-container">
              <ia-mgc-button
                class="ia-button secondary"
                .clickHandler=${(e: Event) => {
                  e.preventDefault();
                  this.closeForm();
                }}
              >
                Cancel
              </ia-mgc-button>
              <ia-mgc-button
                id="update-amount"
                class="ia-button primary"
                type="submit"
                .clickHandler=${(e: Event, iaButton: MGCButton) =>
                  this.handleSubmit(e, iaButton)}
              >
                Update
              </ia-mgc-button>
              <ia-mgc-update-status .status=${this.updateStatus}
                >${this.updateMessage}</ia-mgc-update-status
              >
            </div>
          </div>
          <p class="error">${this.errorMessage}</p>
        </form>
      </section>
    `;
  }

  static styles = css`
    input#amount {
      width: 50px;
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
