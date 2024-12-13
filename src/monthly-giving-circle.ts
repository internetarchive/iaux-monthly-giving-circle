/* eslint-disable no-debugger */

import { LitElement, html, TemplateResult, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './welcome-message';
import './presentational/mgc-title';
import './receipts';
import './presentational/button-style';

@customElement('iaux-monthly-giving-circle')
export class MonthlyGivingCircle extends LitElement {
  @property({ type: String }) patronName: string = '';

  @property({ type: Array }) receipts = [];

  @property({ type: String }) viewToDisplay: 'welcome' | 'receipts' = 'welcome';

  protected createRenderRoot() {
    return this;
  }

  get showReceiptsCTA(): TemplateResult {
    return html`
      <iaux-button-style>
        <button
          class="link"
          @click=${() => {
            this.viewToDisplay = 'receipts';
          }}
        >
          Show receipts
        </button>
      </iaux-button-style>
    `;
  }

  protected render() {
    console.log('***', this.viewToDisplay, this.receipts);
    if (this.viewToDisplay === 'receipts') {
      return html`
        <iaux-mgc-title titleStyle="default">
          <span slot="title">Recent donations</span>
          <span slot="action">
            <iaux-button-style>
              <button
                class="link"
                @click=${(event: Event) => {
                  const btn = event.target as HTMLButtonElement;
                  btn.disabled = true;

                  this.viewToDisplay = 'welcome';
                }}
              >
                Back to account settings
              </button>
            </iaux-button-style>
          </span>
        </iaux-mgc-title>
        <iaux-mgc-receipts
          .donations=${this.receipts}
          @EmailReceiptRequest=${(event: CustomEvent) => {
            console.log('EmailReceiptRequest', event.detail);
            alert(`Email receipt: ${JSON.stringify(event.detail.donation)}`);
          }}
        ></iaux-mgc-receipts>
      `;
    }

    return html`
      <iaux-mgc-title titleStyle="heart">
        <span slot="title">Monthly Giving Circle</span>
        <span slot="action"
          >${this.receipts.length ? this.showReceiptsCTA : nothing}</span
        >
      </iaux-mgc-title>
      <iaux-mgc-welcome .patronName=${this.patronName}></iaux-mgc-welcome>
    `;
  }
}
