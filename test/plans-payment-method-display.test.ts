// eslint-disable-next-line import/no-extraneous-dependencies
import { html, fixture, expect } from '@open-wc/testing';
import { PaymentProvider } from '@internetarchive/donation-form-data-models';

import type { MonthlyGivingCircle } from '../src/monthly-giving-circle';
import type { IauxMgcPlans } from '../src/plans';
import { MonthlyPlan } from '../src/models/plan';
import type { BtData } from '../src/models/plan';

import '../src/monthly-giving-circle';

function makePlanWithPayment(btdataOverrides: Partial<BtData>): MonthlyPlan {
  return new MonthlyPlan({
    token: 'test-token',
    amount: 10,
    currency: 'USD',
    start_date: '2024-07-01 00:00:00',
    is_test: true,
    btdata: {
      billingDayOfMonth: 15,
      nextBillingDate: {
        date: '2024-08-15 00:00:00.000000',
        timezone_type: 3,
        timezone: 'UTC',
      },
      status: 'Active',
      // Real backend/legacy data uses this exact lowercase-camel casing (see
      // demo/data.json), not the PaymentProvider.CreditCard enum string
      // ('Credit Card') — matching it here keeps this fixture representative.
      paymentMethodType: 'creditCard',
      last4: '1234',
      cardType: 'Visa',
      expirationMonth: '12',
      expirationYear: '2025',
      ...btdataOverrides,
    },
  });
}

async function renderPlansFor(plan: MonthlyPlan): Promise<IauxMgcPlans> {
  const el = await fixture<MonthlyGivingCircle>(
    html`<ia-monthly-giving-circle
      .canEdit=${true}
      .plans=${[plan]}
    ></ia-monthly-giving-circle>`,
  );
  const mgcPlans = el.querySelector('ia-mgc-plans') as IauxMgcPlans;
  await mgcPlans.updateComplete;
  return mgcPlans;
}

describe('Plans view payment method display:', () => {
  it('Google Pay plan shows cardType and last4, and no Expires text', async () => {
    const plan = makePlanWithPayment({
      paymentMethodType: PaymentProvider.GooglePay,
      cardType: 'Mastercard',
      last4: '9999',
      expirationMonth: null,
      expirationYear: null,
    });
    const mgcPlans = await renderPlansFor(plan);
    const detailsText =
      mgcPlans.shadowRoot?.querySelector('.payment-details')?.textContent ?? '';

    expect(detailsText).to.include('Mastercard');
    expect(detailsText).to.include('...9999');
    expect(detailsText).to.not.include('Expires');
    expect(detailsText).to.not.include('not found');
  });

  it('credit card plan shows cardType, last4, and real Expires text', async () => {
    // Uses the real backend casing ('creditCard'), not the PaymentProvider
    // enum string — the cardType/last4 line is now shown based on value
    // presence rather than matching paymentMethodType, so it's robust to
    // that casing difference.
    const plan = makePlanWithPayment({});
    const mgcPlans = await renderPlansFor(plan);
    const detailsText =
      mgcPlans.shadowRoot?.querySelector('.payment-details')?.textContent ?? '';

    expect(detailsText).to.include('Credit card');
    expect(detailsText).to.include('Visa');
    expect(detailsText).to.include('...1234');
    expect(detailsText).to.include('Expires:');
    expect(detailsText).to.include('12/2025');
    expect(detailsText).to.not.include('not found');
  });

  it('PayPal plan does not show a cardType/last4 line', async () => {
    const plan = makePlanWithPayment({
      paymentMethodType: PaymentProvider.PayPal,
      cardType: null,
      last4: null,
      expirationMonth: null,
      expirationYear: null,
      paypalEmail: 'donor@example.com',
    });
    const mgcPlans = await renderPlansFor(plan);
    const detailsText =
      mgcPlans.shadowRoot?.querySelector('.payment-details')?.textContent ?? '';

    expect(detailsText).to.include('Paypal email');
    expect(detailsText).to.not.include('CC number not found');
    expect(detailsText).to.not.include('Card type not found');
  });
});
