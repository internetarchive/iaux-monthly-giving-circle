// eslint-disable-next-line import/no-extraneous-dependencies
import { html, fixture, expect } from '@open-wc/testing';

import '../../src/form-sections/date';
import type { MGCEditPlanDate } from '../../src/form-sections/date';
import { MonthlyPlan } from '../../src/models/plan';
import type { MGCButton } from '../../src/presentational/mgc-button';

const lastPaymentWasOnTheFirstOfThisMonth = new Date();
lastPaymentWasOnTheFirstOfThisMonth.setHours(0, 0, 0, 0);
lastPaymentWasOnTheFirstOfThisMonth.setDate(1);
console.log(
  'lastPaymentWasOnTheFirstOfThisMonth',
  lastPaymentWasOnTheFirstOfThisMonth.toISOString()
);

const nextMonth = new Date();
nextMonth.setMonth(nextMonth.getMonth() + 1);

const nextPaymentFirstOfMonth = new Date(nextMonth);
nextPaymentFirstOfMonth.setHours(0, 0, 0, 0);
nextPaymentFirstOfMonth.setDate(1);
console.log('nextPaymentFirstOfMonth', nextPaymentFirstOfMonth.toISOString());

const twelveMonthsFromNow = new Date();
twelveMonthsFromNow.setMonth(twelveMonthsFromNow.getMonth() + 12);

const twoYearsFromNow = new Date();
twoYearsFromNow.setFullYear(twoYearsFromNow.getFullYear() + 2);
twoYearsFromNow.setHours(0, 0, 0, 0);

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const today = new Date();
today.setHours(0, 0, 0, 0);

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
yesterday.setHours(0, 0, 0, 0);

const plan = new MonthlyPlan({
  token: 'a.va.lid.T0ken',
  amount: 5,
  currency: 'USD',
  start_date: '2024-07-01 00:00:00',
  is_test: true,
  btdata: {
    billingDayOfMonth: 22,
    nextBillingDate: {
      date: nextPaymentFirstOfMonth.toISOString(),
      timezone_type: 3,
      timezone: 'UTC',
    },
    lastBillingDate: {
      date: lastPaymentWasOnTheFirstOfThisMonth.toISOString(),
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

const nextBillingDateYYYYMMDD = `${nextPaymentFirstOfMonth.getFullYear()}-${String(
  nextPaymentFirstOfMonth.getMonth() + 1
).padStart(2, '0')}-${String(nextPaymentFirstOfMonth.getDate()).padStart(
  2,
  '0'
)}`;

describe('<ia-mgc-edit-date>', () => {
  it('input validates before allowing form submission', async () => {
    const el = await fixture<MGCEditPlanDate>(
      html`<ia-mgc-edit-date .plan=${plan}></ia-mgc-edit-date>`
    );

    const holder = el.shadowRoot?.querySelector('ia-mgc-form-section-info');
    expect(holder).to.equal(3);
    expect(holder?.textContent).to.contain(plan.nextBillingDateLocale);

    const cta = holder?.shadowRoot?.querySelector('ia-mgc-button');
    expect(cta).to.exist;

    // does not show form
    expect(el.form).to.not.exist;

    // does show form on Edit... click
    cta!.shadowRoot!.querySelector('button')!.click();
    await el.updateComplete;

    expect(el.form).to.exist;

    expect(el.hasAttribute('currentlyediting')).to.be.true;

    // form now displays
    expect(el.form.getAttribute('id')).to.equal('edit-date');

    const lastDateLabel = el.form.querySelector(
      '#form-info-last-donation-date'
    );
    const nextDateLabel = el.form.querySelector(
      '#form-info-next-donation-date'
    );

    expect(lastDateLabel).to.contain.text(plan.lastBillingDateLocale);
    expect(nextDateLabel).to.contain.text(plan.nextBillingDateLocale);

    const requestDateUpdateButton = el.form.querySelector(
      'ia-mgc-button#edit-date'
    ) as MGCButton;
    expect(requestDateUpdateButton).to.exist;
    expect(requestDateUpdateButton!.hasAttribute('isdisabled')).to.be.true;

    expect(el.form.getAttribute('id')).to.equal('edit-date');

    // input has min and max range set
    // min is tomorrow, max is 12 months from now
    const dateInput = el.form.querySelector('input');
    expect(dateInput).to.exist;
    expect(dateInput!.getAttribute('type')).to.equal('date');
    expect(dateInput!.getAttribute('min')).to.equal(
      `${tomorrow.getFullYear()}-${String(tomorrow.getMonth() + 1).padStart(
        2,
        '0'
      )}-${String(tomorrow.getDate()).padStart(2, '0')}`
    );
    expect(dateInput!.getAttribute('max')).to.equal(
      `${twelveMonthsFromNow.getFullYear()}-${String(
        twelveMonthsFromNow.getMonth() + 1
      ).padStart(2, '0')}-${String(twelveMonthsFromNow.getDate()).padStart(
        2,
        '0'
      )}`
    );
    expect(dateInput!.value).to.equal(nextBillingDateYYYYMMDD);

    // checks if input value is invalid
    // date before today
    dateInput!.value = '2008-11-11';
    dateInput!.dispatchEvent(new Event('change'));
    await el.updateComplete;

    expect(el.errorMessage).to.contain('Date must be at least tomorrow.');
    expect(requestDateUpdateButton!.hasAttribute('isdisabled')).to.be.true;

    // date within 12 months
    const twoYearsFromNowStr = `${twoYearsFromNow.getFullYear()}-${String(
      twoYearsFromNow.getMonth() + 1
    ).padStart(2, '0')}-${String(twoYearsFromNow.getDate()).padStart(2, '0')}`;
    dateInput!.value = twoYearsFromNowStr;
    dateInput!.dispatchEvent(new Event('change'));
    await el.updateComplete;

    expect(el.errorMessage).to.contain(
      'New donation date must be within the next 12 months.'
    );
    expect(requestDateUpdateButton!.hasAttribute('isdisabled')).to.be.true;

    // sets warning message when chosen date is in the same month as last payment
    const lastDayOfCurrentMonth = new Date();
    lastDayOfCurrentMonth.setHours(0, 0, 0, 0);
    lastDayOfCurrentMonth.setMonth(lastDayOfCurrentMonth.getMonth() + 1);
    lastDayOfCurrentMonth.setDate(0);

    const lastDayOfCurrentMonthStr = `${lastDayOfCurrentMonth.getFullYear()}-${String(
      lastDayOfCurrentMonth.getMonth() + 1
    ).padStart(2, '0')}-${lastDayOfCurrentMonth.getDate()}`;
    dateInput!.value = lastDayOfCurrentMonthStr;
    dateInput!.dispatchEvent(new Event('change'));
    await el.updateComplete;

    expect(el.warningMessage).to.contain(
      'You have already made a donation this month.'
    );
    expect(el.errorMessage).to.contain(
      'The date you selected will result in an additional donation for this month.'
    );
    expect(el.allowEditing).to.be.true;
    expect(requestDateUpdateButton!.hasAttribute('isdisabled')).to.be.true;
    expect(el.newDate).to.contain(
      `${lastDayOfCurrentMonth.getFullYear()}-${String(
        lastDayOfCurrentMonth.getMonth() + 1
      ).padStart(2, '0')}-${String(lastDayOfCurrentMonth.getDate()).padStart(
        2,
        '0'
      )}`
    );

    // can submit when date is valid
    const nextMonthStr = `${nextMonth.getFullYear()}-${String(
      nextMonth.getMonth() + 1
    ).padStart(2, '0')}-${String(nextMonth.getDate()).padStart(2, '0')}`;
    dateInput!.value = nextMonthStr;
    dateInput!.dispatchEvent(new Event('change'));

    await el.updateComplete;

    expect(el.errorMessage).to.contain('');
    expect(el.newDate).to.contain(nextMonthStr);
    expect(el.allowEditing).to.be.true;
    expect(requestDateUpdateButton!.hasAttribute('isdisabled')).to.be.false;
    console.log(' ~~~ last test, button: ', requestDateUpdateButton);

    // clicking Update fires a Custom Event
    el.addEventListener('updateDate', (event: Event) => {
      console.log('updateDate event received ####', event);
      const { newDate } = (event as CustomEvent).detail;
      expect(newDate).to.contain(nextMonthStr);
    });

    requestDateUpdateButton.shadowRoot?.querySelector('button')?.click();
    await el.updateComplete;
  });
});
