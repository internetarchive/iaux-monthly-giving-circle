/* eslint-disable no-debugger */

import { LitElement, html, TemplateResult, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './welcome-message';
import './presentational/mgc-title';
import './receipts';
import type { IauxMgcReceipts } from './receipts';
import './presentational/button-style';

export type anUpdate = {
  message: string;
  status: 'success' | 'fail';
};

@customElement('iaux-monthly-giving-circle')
export class MonthlyGivingCircle extends LitElement {
  @property({ type: String }) patronName: string = '';

  @property({ type: Array }) receipts = [];

  @property({ type: Array }) updates: anUpdate[] = [];

  @property({ type: String, reflect: true }) viewToDisplay:
    | 'welcome'
    | 'receipts' = 'welcome';

  protected createRenderRoot() {
    return this;
  }

  get receiptListElement(): IauxMgcReceipts {
    return this.querySelector('iaux-mgc-receipts') as IauxMgcReceipts;
  }

  updateReceived(update: {
    message: string;
    status: 'success' | 'fail';
    donationId: string;
  }) {
    this.receiptListElement.emailSent({
      id: update.donationId,
      emailStatus: update.status,
    });
    this.updates.unshift(update);
  }

  get showReceiptsCTA(): TemplateResult {
    return html`
      <iaux-button-style class="link">
        <button
          @click=${() => {
            this.viewToDisplay = 'receipts';
            this.dispatchEvent(new CustomEvent('ShowReceipts'));
          }}
        >
          View recent donation history
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
            <iaux-button-style class="link">
              <button
                class="close-receipts"
                @click=${(event: Event) => {
                  const btn = event.target as HTMLButtonElement;
                  btn.disabled = true;

                  this.viewToDisplay = 'welcome';
                  this.dispatchEvent(new CustomEvent('ShowWelcome'));
                  this.updates = [];
                }}
              >
                Back to account settings
              </button>
            </iaux-button-style>
          </span>
        </iaux-mgc-title>
        <iaux-mgc-receipts
          .receipts=${this.receipts}
          @EmailReceiptRequest=${(event: CustomEvent) => {
            console.log('EmailReceiptRequest', event.detail);
            this.dispatchEvent(
              new CustomEvent('EmailReceiptRequest', {
                detail: { ...event.detail },
              })
            );
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
