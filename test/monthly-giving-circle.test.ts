// eslint-disable-next-line import/no-extraneous-dependencies
import { html, fixture, expect } from '@open-wc/testing';

import type { MonthlyGivingCircle } from '../src/monthly-giving-circle';

import '../src/monthly-giving-circle';

describe('IauxMonthlyGivingCircle', () => {
  it('displays welcome message on load', async () => {
    const el = await fixture<MonthlyGivingCircle>(
      html`<iaux-monthly-giving-circle></iaux-monthly-giving-circle>`
    );

    expect(el.querySelector('iaux-mgc-welcome')).to.not.be.null;
  });
});
