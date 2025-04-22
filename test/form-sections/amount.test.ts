// eslint-disable-next-line import/no-extraneous-dependencies
import { html, fixture, expect } from '@open-wc/testing';

import '../../src/form-sections/amount';
import type { MGCEditPlanAmount } from '../../src/form-sections/amount';
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
      html`<ia-mgc-edit-plan-amount .plan=${plan}></ia-mgc-edit-plan-amount>`
    );

    const amountLabel = el.shadowRoot?.querySelector('.current-amount');
    expect(amountLabel).to.exist;
    expect(amountLabel?.textContent).to.contain('$5');

    const cta = el.shadowRoot?.querySelector('ia-button#edit-amount');
    expect(cta).to.exist;

    // do not show form
    expect(el.form).to.not.exist;

    cta!.shadowRoot!.querySelector('button')!.click();
    await el.updateComplete;

    expect(el.hasAttribute('currentlyediting')).to.be.true;

    // form now displays
    expect(el.form.getAttribute('id')).to.equal('edit-plan-amount');
  });
});
