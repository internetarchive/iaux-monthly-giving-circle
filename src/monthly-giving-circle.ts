/* eslint-disable no-debugger */

import { LitElement, html, TemplateResult, nothing, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './welcome-message';
import './plans';
import './presentational/mgc-title';
import './receipts';
import type { IauxMgcReceipts } from './receipts';
import './presentational/ia-button';
import type { MonthlyPlan } from './models/plan';
import './edit-plan-form';

export type APlanUpdate = {
  plan?: MonthlyPlan;
  donationId?: string;
  status: 'success' | 'fail';
  action: 'receiptSent' | 'cancel';
  message: string;
};

@customElement('ia-monthly-giving-circle')
export class MonthlyGivingCircle extends LitElement {
  @property({ type: String }) patronName: string = '';

  @property({ type: Array }) receipts = [];

  @property({ type: Array }) updates: APlanUpdate[] = [];

  @property({ type: Array }) plans = [];

  @property({ type: Object }) editingThisPlan?: MonthlyPlan;

  @property({ type: String, reflect: true }) viewToDisplay:
    | 'welcome'
    | 'receipts'
    | 'plans'
    | 'editPlan' = 'welcome';

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

  /* Update Callback */
  updateReceived(update: APlanUpdate) {
    // log update
    this.updates.unshift(update);

    const { plan, donationId = '' } = update;
    const idToUse = plan?.id ?? donationId;
    const editingPlanIsUpdating = this.editingThisPlan?.id === idToUse;

    if (editingPlanIsUpdating) {
      console.log('edit received, mismatch plans', {
        planCurrentlyEditing: this.editingThisPlan,
        planReceived: update.plan,
      });
      return;
    }

    if (plan?.hasBeenCancelled) {
      this.editingThisPlan = undefined;
      this.viewToDisplay = 'plans';
      return;
    }

    this.receiptListElement.emailSent({
      id: idToUse,
      emailStatus: update.status,
    });
  }

  /* VIEWS */
  protected render() {
    const isEditingPlan =
      this.viewToDisplay === 'editPlan' && this.editingThisPlan;
    return html`
      ${this.sectionTitle}
      ${isEditingPlan
        ? html`<ia-mgc-edit-plan
            .plan=${this.editingThisPlan}
            @cancelPlan=${(event: CustomEvent) => {
              console.log('cancelPlan', event.detail);
              this.dispatchEvent(
                new CustomEvent('cancelPlan', {
                  detail: { ...event.detail },
                })
              );
            }}
          ></ia-mgc-edit-plan>`
        : this.nonEditView}
    `;
  }

  get sectionTitle(): TemplateResult {
    let title = '';
    let titleStyle = '';

    switch (this.viewToDisplay) {
      case 'receipts':
        title = 'Recent donations';
        titleStyle = 'default';
        break;

      case 'editPlan':
        title = 'Edit plan';
        titleStyle = 'default';
        break;

      default:
        title = 'Monthly Giving Circle';
        titleStyle = 'heart';
        break;
    }

    const displayReceiptsLink =
      this.receipts.length &&
      (this.viewToDisplay === 'plans' || this.viewToDisplay === 'welcome');
    const receiptsCTA = html`
      <ia-button
        class="link slim"
        .clickHandler=${async () => {
          this.viewToDisplay = 'receipts';
          await this.updateComplete;
          this.dispatchEvent(new CustomEvent('ShowReceipts'));
        }}
      >
        View recent donation history
      </ia-button>
    `;
    return html`
      <ia-mgc-title titleStyle=${titleStyle}>
        <span slot="title">${title}</span>
        <span slot="action"
          >${displayReceiptsLink ? receiptsCTA : nothing}</span
        >
      </ia-mgc-title>
    `;
  }

  get nonEditView(): TemplateResult {
    if (this.viewToDisplay === 'receipts') {
      return html`
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
      `;
    }

    return html`
      ${this.viewToDisplay === 'plans' && this.plans.length
        ? html`
            <ia-mgc-plans
              @editThisPlan=${(event: CustomEvent) => {
                this.editingThisPlan = event.detail.plan;
                this.viewToDisplay = 'editPlan';
              }}
              .plans=${this.plans}
            ></ia-mgc-plans>
          `
        : html`<ia-mgc-welcome
            .patronName=${this.patronName}
          ></ia-mgc-welcome>`}
    `;
  }
}
