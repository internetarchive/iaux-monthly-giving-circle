/* eslint-disable no-debugger */

import { LitElement, html, TemplateResult, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './welcome-message';
import './receipts';
import type { IauxMgcReceipts } from './receipts';
import './presentational/iaux-button';
import './plans';
import './presentational/mgc-title';

export type anUpdate = {
  message: string;
  status: 'success' | 'fail';
  donationId: string;
};


@customElement('iaux-monthly-giving-circle')
export class MonthlyGivingCircle extends LitElement {
  @property({ type: String }) patronName: string = '';

  @property({ type: Array }) receipts = [];

  @property({ type: Array }) updates: anUpdate[] = [];

  @property({ type: Array }) plans = [];

  @property({ type: String }) viewToDisplay: 'welcome' | 'receipts' = 'welcome';

  protected createRenderRoot() {
    return this;
  }

  get receiptListElement(): IauxMgcReceipts {
    return this.querySelector('iaux-mgc-receipts') as IauxMgcReceipts;
  }

  updateReceived(update: anUpdate) {
    this.receiptListElement.emailSent({
      id: update.donationId,
      emailStatus: update.status,
    });
    this.updates.unshift(update);
  }

  get showReceiptsCTA(): TemplateResult {
    return html`
      <iaux-button
        class="link slim"
        .clickHandler=${() => {
          this.viewToDisplay = 'receipts';
          this.dispatchEvent(new CustomEvent('ShowReceipts'));
        }}
      >
        View recent donation history
      </iaux-button>
    `;
  }

  protected render() {
    if (this.viewToDisplay === 'receipts') {
      return html`
        <iaux-mgc-title titleStyle="default">
          <span slot="title">Recent donations</span>
          <span slot="action">
            <iaux-button
              class="link slim"
              id="close-receipts"
              .clickHandler=${async () => {
                this.viewToDisplay = 'welcome';
                this.dispatchEvent(new CustomEvent('ShowWelcome'));
                this.updates = [];
                await this.updateComplete;
              }}
            >
              Back to account settings
            </iaux-button>
          </span>
        </iaux-mgc-title>
        <iaux-mgc-receipts
          .receipts=${this.receipts}
          @EmailReceiptRequest=${(event: CustomEvent) => {
            this.dispatchEvent(
              new CustomEvent('EmailReceiptRequest', {
                detail: { ...event.detail },
              })
            );
          }}
        ></iaux-mgc-receipts>
      `;
    }

    if (this.plans.length) {
      return html`
        <iaux-mgc-title titleStyle="heart">
          <span slot="title">Monthly Giving Circle</span>
          <span slot="action"
            >${this.receipts.length ? this.showReceiptsCTA : nothing}</span
          >
        </iaux-mgc-title>
        <iaux-mgc-plans .plans=${this.plans}></iaux-mgc-plans>
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
