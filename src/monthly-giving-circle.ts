/* eslint-disable no-debugger */

import { LitElement, html, TemplateResult, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './welcome-message';
import './plans';
import './presentational/mgc-title';
import './receipts';
import type { IauxMgcReceipts } from './receipts';
import './presentational/ia-button';
import type { MonthlyPlan } from './models/plan';
import './edit-plan-form';
import type { IauxEditPlanForm } from './edit-plan-form';

export type APlanUpdate = {
  plan?: MonthlyPlan;
  donationId?: string;
  status: 'success' | 'fail';
  action: 'receiptSent' | 'cancel' | 'amountUpdate';
  message: string;
};

enum DisplayChangeEvents {
  welcome = 'ShowWelcome',
  receipts = 'ShowReceipts',
  plans = 'ShowPlans',
  editPlan = 'ShowEditForm',
}

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

  get editFormElement(): IauxEditPlanForm {
    return this.querySelector('ia-mgc-edit-plan') as IauxEditPlanForm;
  }

  /* Update Callback */
  updateReceived(update: APlanUpdate) {
    // log update
    this.updates.unshift(update);

    const { plan, donationId = '' } = update;
    const idToUse = plan?.id ?? donationId;

    const updateIsForEditingPlan =
      this.editingThisPlan && this.editingThisPlan.id === idToUse;

    if (!updateIsForEditingPlan) {
      // error, handle
      console.error('Update not for editing plan', {
        idReceived: idToUse,
        ExpectedId: this.editingThisPlan?.id,
      });
      // eslint-disable-next-line no-alert
      alert('Something happened, please refresh and try again');
      return;
    }

    if (update.action === 'amountUpdate') {
      this.editFormElement.amountUpdates(update.status);
      return;
    }

    if (update.action === 'cancel' || plan?.hasBeenCancelled) {
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
            .cancelPlanHandler=${(plan: MonthlyPlan) => {
              console.log('cancelPlan', plan);
              this.dispatchEvent(
                new CustomEvent('cancelPlan', {
                  detail: { plan },
                })
              );
            }}
            .updateAmountHandler=${(
              plan: MonthlyPlan,
              options: {
                amount: number;
                baseAmount: number;
                coverFees: boolean;
                feeCovered: number;
              }
            ) => {
              console.log('updateAmount', plan, { ...options });
              this.dispatchEvent(
                new CustomEvent('updateAmount', {
                  detail: { plan, amountOptions: options },
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
    let cta = html``;

    const receiptsCTA = html`
      <ia-button
        class="link slim"
        .clickHandler=${async () => {
          this.viewToDisplay = 'receipts';
          await this.updateComplete;
          this.dispatchEvent(new Event(DisplayChangeEvents.receipts));
        }}
      >
        View recent donation history
      </ia-button>
    `;

    const displayReceiptsLink =
      this.receipts.length &&
      (this.viewToDisplay === 'plans' || this.viewToDisplay === 'welcome');

    switch (this.viewToDisplay) {
      case 'receipts':
        title = 'Recent donations';
        titleStyle = 'default';
        cta = html`<ia-button
          class="link slim"
          id="close-receipts"
          .clickHandler=${async () => {
            this.viewToDisplay = this.plans.length ? 'plans' : 'welcome';
            const eventType = this.plans.length
              ? DisplayChangeEvents.plans
              : DisplayChangeEvents.welcome;
            this.dispatchEvent(new Event(eventType));
            this.updates = [];
            await this.updateComplete;
          }}
        >
          Back to account settings
        </ia-button>`;
        break;

      case 'editPlan':
        title = 'Monthly Giving Circle';
        titleStyle = 'default';
        cta = html`<ia-button
          class="primary"
          id="close-edit-plan"
          .clickHandler=${async () => {
            this.viewToDisplay = this.plans.length ? 'plans' : 'welcome';
            const eventType = this.plans.length
              ? DisplayChangeEvents.plans
              : DisplayChangeEvents.welcome;
            this.dispatchEvent(new Event(eventType));
            this.updates = [];
            await this.updateComplete;
          }}
        >
          Back to account settings
        </ia-button>`;
        break;

      default:
        title = 'Monthly Giving Circle';
        titleStyle = 'heart';
        if (displayReceiptsLink) {
          cta = receiptsCTA;
        }
        break;
    }

    return html`
      <ia-mgc-title titleStyle=${titleStyle}>
        <span slot="title">${title}</span>
        <span slot="action">${cta}</span>
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
              @editThisPlan=${async (event: CustomEvent) => {
                this.editingThisPlan = event.detail.plan;
                this.viewToDisplay = 'editPlan';
                this.dispatchEvent(new Event(DisplayChangeEvents.editPlan));
                await this.updateComplete;
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
