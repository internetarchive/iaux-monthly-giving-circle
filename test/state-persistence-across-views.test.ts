// eslint-disable-next-line import/no-extraneous-dependencies
import { html, fixture, expect } from '@open-wc/testing';

import type {
  MonthlyGivingCircle,
  APlanUpdate,
} from '../src/monthly-giving-circle';
import type { IauxMgcPlans } from '../src/plans';

import '../src/monthly-giving-circle';
import {
  makePlan,
  navigateToEditView,
  navigateBackToPlans,
} from './helpers/edit-plan-helpers';
import { MonthlyPlan } from '../src/models/plan';

describe('State persistence across views:', () => {
  let el: MonthlyGivingCircle;
  let plan: MonthlyPlan;

  beforeEach(async () => {
    plan = makePlan();
    el = await fixture<MonthlyGivingCircle>(
      html`<ia-monthly-giving-circle
        .canEdit=${true}
        .plans=${[plan]}
      ></ia-monthly-giving-circle>`,
    );
    await navigateToEditView(el);
  });

  it('updates array is cleared when navigating back', async () => {
    const update: APlanUpdate = {
      action: 'amountUpdate',
      plan,
      status: 'success',
      message: '',
    };
    el.updateReceived(update);
    expect(el.updates.length).to.be.greaterThan(0);

    await navigateBackToPlans(el);

    expect(el.updates.length).to.equal(0);
  });

  it('re-entering edit view preserves the same plan reference and renders the edit form', async () => {
    await navigateBackToPlans(el);
    await navigateToEditView(el);

    expect(el.editingThisPlan).to.equal(plan);
    expect(el.viewToDisplay).to.equal('editPlan');
    expect(el.querySelector('ia-mgc-edit-plan')).to.exist;
  });

  it('mutated plan amount is reflected in plans view after navigating back', async () => {
    plan.setAmount(25);

    await navigateBackToPlans(el);

    const mgcPlans = el.querySelector('ia-mgc-plans') as IauxMgcPlans;
    await mgcPlans.updateComplete;

    const amountText =
      mgcPlans.shadowRoot?.querySelector('.amount p')?.textContent ?? '';
    expect(amountText).to.include('25.00');
  });

  it('dateUpdate replacement plan is not synced back to plans array', async () => {
    const updatedPlan = makePlan();
    updatedPlan.setNextBillingDate('2025-12-25 00:00:00.000000');

    const update: APlanUpdate = {
      action: 'dateUpdate',
      plan: updatedPlan,
      status: 'success',
      message: '',
    };
    el.updateReceived(update);

    // editingThisPlan is replaced but plans array still has the original
    expect(el.editingThisPlan).to.equal(updatedPlan);
    expect(el.plans[0]).to.equal(plan);

    await navigateBackToPlans(el);

    const mgcPlans = el.querySelector('ia-mgc-plans') as IauxMgcPlans;
    await mgcPlans.updateComplete;

    const dateText =
      mgcPlans.shadowRoot?.querySelector('.next-donation p')?.textContent ?? '';
    // Plans view still shows the original date (Aug 2024), not the updated one (Dec 2025)
    expect(dateText).to.include('Aug');
    expect(dateText).to.not.include('Dec');
  });
});
