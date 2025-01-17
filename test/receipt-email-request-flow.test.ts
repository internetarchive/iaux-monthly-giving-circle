// eslint-disable-next-line import/no-extraneous-dependencies
import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';

import type { MonthlyGivingCircle } from '../src/monthly-giving-circle';

import '../src/monthly-giving-circle';
import type { IauxMgcReceipts } from '../src/receipts';

describe('Receipts: When requesting an email', () => {
  describe('`<iaux-monthly-giving-circle>` fires event: EmailReceiptRequest', () => {
    it('and receives updates via `update`', async () => {
      const el = await fixture<MonthlyGivingCircle>(
        html`<iaux-monthly-giving-circle
          .receipts=${[
            {
              amount: 9999.99,
              date: '2020-09-01',
              id: 'foo-id-1',
              is_test: false,
            },
          ]}
        ></iaux-monthly-giving-circle>`
      );

      // open receipt view
      el.querySelector('button')?.click();
      await el.updateComplete;

      // set spies for receipt function
      const receiptsEl = el.querySelector(
        'iaux-mgc-receipts'
      ) as IauxMgcReceipts;
      const receiptElSpy = Sinon.spy(receiptsEl, 'emailSent');

      // set handler for EmailReceiptRequest event
      let emailRequested = false;
      el.addEventListener('EmailReceiptRequest', async () => {
        emailRequested = true;
        expect(emailRequested).to.be.true;

        expect(receiptElSpy.calledOnce).to.equal(true);
      });

      // request an email
      const requestReceiptButton =
        receiptsEl.shadowRoot?.querySelector('button');
      requestReceiptButton!.click();
    });
  });
});
