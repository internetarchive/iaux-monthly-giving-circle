import {
  LitElement,
  html,
  TemplateResult,
  PropertyValues,
  nothing,
  css,
} from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import type { MonthlyPlan } from '../models/plan';

import type { MGCButton } from '../presentational/mgc-button';
import '@internetarchive/donation-form/dist/src/form-elements/contact-form/contact-form.js';

import '@internetarchive/donation-form-section';

@customElement('ia-mgc-cancel-plan')
export class IauxMgcCancelPlan extends LitElement {
  @property({ type: Object }) plan?: MonthlyPlan;

  @property({ type: Boolean, reflect: true }) patronWantsToKeepPlan = true;

  @property({ type: Boolean, reflect: true }) initialCancelRequest = false;

  @query('form') form!: HTMLFormElement;

  updated(changed: PropertyValues) {
    if (changed.has('plan')) {
      console.log('plan updated', this.plan);
    }
  }

  async cancelThisPlan(e: Event) {
    e.preventDefault();
    this.patronWantsToKeepPlan = false;
    this.dispatchEvent(new Event('cancelPlan'));
  }

  get formId(): string {
    return `cancel-donation-form-${this.plan?.id}`;
  }

  protected render() {
    if (this.initialCancelRequest) {
      return this.confirmCancelation;
    }

    return html`
      <donation-form-section
        badgemode="hidebadge"
        headline="Cancel recurring donation (requires confirmation)"
      >
        <div class="warning">
          <p>
            You can also pause your recurring donation by setting the next
            donation date up to 12 months in the future.
          </p>
          <ia-mgc-button
            class="link cancel"
            .clickHandler=${(e: Event, iaButton: MGCButton) => {
              // eslint-disable-next-line no-param-reassign
              iaButton.isDisabled = true;
              if (this.initialCancelRequest) {
                this.initialCancelRequest = false;
                this.patronWantsToKeepPlan = true;
                return;
              }
              this.initialCancelRequest = true;
            }}
            >Let's cancel my donation</ia-mgc-button
          >
        </div>
      </donation-form-section>

      ${this.initialCancelRequest ? this.confirmCancelation : nothing}
    `;
  }

  get confirmCancelation(): TemplateResult | typeof nothing {
    return html`
    <section class="cancel-donation">
    <donation-form-section badgemode="hidebadge" headline="Cancel recurring donation">

      <ia-mgc-button class='text exit-cancel'  @click=${() => {
        this.initialCancelRequest = false;
        this.patronWantsToKeepPlan = true;
      }}>X</ia-mgc-button>

      <p>Canceling ends your monthly recurring donation to the Internet Archive, effective immediately. You will not be charged moving forward.</p>
      <p>Canceling does not affect your account or access to the Internet Archive, although you will no longer have access to any of the Monthly Giving Circle perks.</p>
      <p>If you have any questions regarding donations, contact us at <a href="mailto:donations@archive.org">donations@archive.org</a></p>

      <form id=${this.formId} @submit=${(e: Event) => this.cancelThisPlan(e)}>
        <div class="checkbox-option-container">
          <input
            id=${`confirm-${this.formId}`}
            type="checkbox"
            required
            @change=${async (e: Event) => {
              e.preventDefault();
              this.patronWantsToKeepPlan = !(e.target as HTMLInputElement)
                .checked;
              await this.updateComplete;
            }}>
          <label for=${`confirm-${this.formId}`}><b>I'm sure I want to cancel my subscription</b></label>
        </div>

        <ia-mgc-button
          class="cancel"
          .isDisabled=${this.patronWantsToKeepPlan}
          id=${`submit-${this.formId}`}
          type="submit"
          .clickHandler=${(e: Event, iaButton: MGCButton) => {
            // eslint-disable-next-line no-param-reassign
            iaButton.isDisabled = true;
            this.cancelThisPlan(e);
          }}
        >I'm sure I want to cancel my recurring donation.</ia-mgc-button>
      </form>
    </section>
    `;
  }

  static styles = css`
    :host {
      --formSectionTitleFontSize: 1.4rem;
    }
    .warning > * {
      margin: 5px 0;
    }

    .cancel-donation {
      display: block;
      border: 2px solid #d9534f;
      background-color: #ffeeee;
    }

    .cancel-donation > * {
      padding: 5px;
      position: relative;
    }

    ia-mgc-button.exit-cancel {
      --button-border: 1px solid;
      --button-border-radius: 50%;
      position: absolute;
      top: -5px;
      right: -10px;
    }

    ia-mgc-button.link.cancel {
      --link-cancel-color: var(--mgc-warning-color-dark, #bb0505);
    }

    ia-mgc-button {
      --button-height: auto;
    }

    ia-mgc-button > * {
      text-align: left;
      text-wrap: wrap;
    }

    h3 {
      position: relative;
    }

    .checkbox-option-container {
      display: flex;
      margin: 10px 0;
    }
  `;
}
