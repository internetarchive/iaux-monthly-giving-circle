/* eslint-disable no-debugger */

import { LitElement, html, TemplateResult, nothing, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './welcome-message';
import './plans';
import './presentational/mgc-title';
import './receipts';
import type { IauxMgcReceipts } from './receipts';
import './presentational/ia-button';

export type AnUpdate = {
  message: string;
  status: 'success' | 'fail';
  donationId: string;
};

@customElement('ia-monthly-giving-circle')
export class MonthlyGivingCircle extends LitElement {
  @property({ type: String }) patronName: string = '';

  @property({ type: Array }) receipts = [];

  @property({ type: Array }) updates: AnUpdate[] = [];

  @property({ type: Array }) plans = [];

  @property({ type: String, reflect: true }) viewToDisplay:
    | 'welcome'
    | 'receipts'
    | 'plans' = 'welcome';

  protected createRenderRoot() {
    return this;
  }

  updated(changed: PropertyValues) {
    if (changed.has('plans')) {
      this.viewToDisplay = this.plans.length ? 'plans' : 'welcome';
    }
  }

  get receiptListElement(): IauxMgcReceipts {
    return this.querySelector('ia-mgc-receipts') as IauxMgcReceipts;
  }

  updateReceived(update: AnUpdate) {
    this.receiptListElement.emailSent({
      id: update.donationId,
      emailStatus: update.status,
    });
    this.updates.unshift(update);
  }

  get showReceiptsCTA(): TemplateResult {
    return html`
      <ia-button
        class="link slim"
        .clickHandler=${() => {
          this.viewToDisplay = 'receipts';
          this.dispatchEvent(new CustomEvent('ShowReceipts'));
        }}
      >
        View recent donation history
      </ia-button>
    `;
  }

  get headerSection(): TemplateResult {
    if (this.viewToDisplay === 'receipts') {
      return html`
        <ia-mgc-title titleStyle="default">
          <span slot="title">Recent donations</span>
          <span slot="action">
            <ia-button
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
            </ia-button>
          </span>
        </ia-mgc-title>
      `;
    }

    if (this.plans.length) {
      return html`
        <ia-mgc-title titleStyle="heart">
          <span slot="title">Monthly Giving Circle</span>
          <span slot="action"
            >${this.receipts.length ? this.showReceiptsCTA : nothing}</span
          >
        </ia-mgc-title>
      `;
    }

    return html`
      <ia-mgc-title titleStyle="heart">
        <span slot="title">Monthly Giving Circle</span>
        <span slot="action"
          >${this.receipts.length ? this.showReceiptsCTA : nothing}</span
        >
      </ia-mgc-title>
    `;
  }

  protected render() {
    return html`
      ${this.headerSection}
      ${this.viewToDisplay === 'receipts'
        ? html`
            <ia-mgc-receipts
              .receipts=${this.receipts}
              @EmailReceiptRequest=${(event: CustomEvent) => {
                console.log('EmailReceiptRequest', event.detail);
                this.dispatchEvent(
                  new CustomEvent('EmailReceiptRequest', {
                    detail: { ...event.detail },
                  })
                );
              }}
            ></ia-mgc-receipts>
          `
        : nothing}
      ${this.viewToDisplay === 'plans'
        ? html` <ia-mgc-plans .plans=${this.plans}></ia-mgc-plans> `
        : nothing}
      ${this.viewToDisplay === 'welcome'
        ? html`
            <ia-mgc-welcome .patronName=${this.patronName}></ia-mgc-welcome>
          `
        : nothing}
    `;
  }
}
