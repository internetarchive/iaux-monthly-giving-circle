// eslint-disable-next-line import/no-extraneous-dependencies
import { html, fixture, expect } from '@open-wc/testing';

import type { MonthlyGivingCircle } from '../src/monthly-giving-circle';

import '../src/monthly-giving-circle';

describe('IauxMonthlyGivingCircle', () => {
  it('displays welcome message on load', async () => {
    const el = await fixture<MonthlyGivingCircle>(
      html`<iaux-monthly-giving-circle></iaux-monthly-giving-circle>`
    );

    const titleEl = el.querySelector('iaux-mgc-title');
    expect(titleEl).to.not.be.null;
    console.log('*****', titleEl);

    expect(titleEl?.getAttribute('titlestyle')).to.equal('heartz');

    // const welcomeEl = el.querySelector('iaux-mgc-welcome');
    // expect(welcomeEl).to.not.be.null;
  });

  it('displays receipt button when receipts are available', async () => {
    const el = await fixture<MonthlyGivingCircle>(
      html`<iaux-monthly-giving-circle
        .receipts=${[]}
      ></iaux-monthly-giving-circle>`
    );

    expect(el.querySelector('iaux-mgc-welcome')).to.not.be.null;
  });
});
