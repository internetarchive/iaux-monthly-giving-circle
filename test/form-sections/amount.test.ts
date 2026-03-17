// eslint-disable-next-line import/no-extraneous-dependencies
import { html, fixture, expect } from '@open-wc/testing';

import {
  DonationPaymentInfo,
  DonationType,
} from '@internetarchive/donation-form-data-models';
import '../../src/form-sections/amount';
import type { MGCEditPlanAmount } from '../../src/form-sections/amount';
import { formatCurrency } from '../../src/utils/currency-format';
import { MonthlyPlan } from '../../src/models/plan';

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
    lastBillingDate: {
      date: '2024-07-22 00:00:00.000000',
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

describe('<ia-mgc-edit-plan-amount>', () => {
  it('displays with call to edit', async () => {
    const el = await fixture<MGCEditPlanAmount>(
      html`<ia-mgc-edit-plan-amount .plan=${plan}></ia-mgc-edit-plan-amount>`,
    );

    const holder = el.shadowRoot?.querySelector('ia-mgc-form-section-info');
    expect(holder).to.exist;
    expect(holder?.textContent).to.contain('$5');

    const cta = holder?.shadowRoot?.querySelector('ia-mgc-button');
    expect(cta).to.exist;

    // do not show form
    expect(el.form).to.not.exist;

    cta!.shadowRoot!.querySelector('button')!.click();
    await el.updateComplete;

    expect(el.hasAttribute('currentlyediting')).to.be.true;

    // form now displays
    expect(el.form.getAttribute('id')).to.equal('edit-plan-amount');
  });

  describe('coveredFeesText', () => {
    it('returns fallback text when donationPaymentInfo is undefined', async () => {
      const el = await fixture<MGCEditPlanAmount>(
        html`<ia-mgc-edit-plan-amount .plan=${plan}></ia-mgc-edit-plan-amount>`,
      );
      el.donationPaymentInfo = undefined;
      expect(el.coveredFeesText).to.equal("I'll generously cover the fees.");
    });

    it('returns text with formatted fee amount when fees are covered', async () => {
      const el = await fixture<MGCEditPlanAmount>(
        html`<ia-mgc-edit-plan-amount .plan=${plan}></ia-mgc-edit-plan-amount>`,
      );
      const paymentInfo = new DonationPaymentInfo({
        donationType: DonationType.Monthly,
        amount: 10,
        coverFees: true,
      });
      el.donationPaymentInfo = paymentInfo;
      const expectedFee = formatCurrency(paymentInfo.feeAmountCovered);
      expect(el.coveredFeesText).to.equal(
        `I'll generously add ${expectedFee} to cover fees.`,
      );
    });

    it('returns fallback text when fees are not covered', async () => {
      const el = await fixture<MGCEditPlanAmount>(
        html`<ia-mgc-edit-plan-amount .plan=${plan}></ia-mgc-edit-plan-amount>`,
      );
      el.donationPaymentInfo = new DonationPaymentInfo({
        donationType: DonationType.Monthly,
        amount: 10,
        coverFees: false,
      });
      expect(el.coveredFeesText).to.equal("I'll generously cover the fees.");
    });
  });
});
