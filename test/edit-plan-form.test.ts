// eslint-disable-next-line import/no-extraneous-dependencies
import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';

import type { IauxEditPlanForm } from '../src/edit-plan-form';
import '../src/edit-plan-form';
import { MonthlyPlan } from '../src/models/plan';

const plan = new MonthlyPlan({
  token: 'a.va.lid.T0ken',
  amount: 5,
  currency: 'USD',
  start_date: '2024-07-01 00:00:00',
  is_test: true,
  btdata: {
    billingDayOfMonth: 22,
    nextBillingDate: {
      date: '2024-08-22 00:00:00.000000',
      timezone_type: 3,
      timezone: 'UTC',
    },
    status: 'Active',
    paymentMethodType: 'Venmo',
    last4: null,
    cardType: null,
    expirationMonth: null,
    expirationYear: null,
  },
});

describe('IauxEditPlanForm', () => {
  it('has edit amount form', async () => {
    const el = await fixture<IauxEditPlanForm>(
      html`<ia-mgc-edit-plan .plan=${plan}></ia-mgc-edit-plan>`
    );

    const editAmountForm = el.querySelector('ia-mgc-edit-plan-amount');
    expect(editAmountForm).to.exist;
  });
  it('has cancel form', async () => {
    const el = await fixture<IauxEditPlanForm>(
      html`<ia-mgc-edit-plan .plan=${plan}></ia-mgc-edit-plan>`
    );

    const cancelForm = el.querySelector('ia-mgc-cancel-plan');
    expect(cancelForm).to.exist;

    el.cancelPlanHandler = Sinon.stub();
    await el.updateComplete;

    cancelForm!.dispatchEvent(new Event('cancelPlan'));
    expect(el.cancelPlanHandler).to.have.been.called;
  });
});
