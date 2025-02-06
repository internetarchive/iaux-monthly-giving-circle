// eslint-disable-next-line import/no-extraneous-dependencies
import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';

import type { MonthlyGivingCircle } from '../src/monthly-giving-circle';

import '../src/monthly-giving-circle';
import type { IauxMgcReceipts } from '../src/receipts';
import type { IauxButton } from '../src/presentational/ia-button';

describe('Receipts: When requesting an email', () => {
  describe('`<ia-monthly-giving-circle>` fires event: EmailReceiptRequest', () => {
    it('and receives updates via `update`', async () => {
      const el = await fixture<MonthlyGivingCircle>(
        html`<ia-monthly-giving-circle
          .receipts=${[
            {
              amount: 9999.99,
              date: '2020-09-01',
              id: 'foo-id-1',
              is_test: false,
            },
          ]}
        ></ia-monthly-giving-circle>`
      );

      // open receipt view
      const titleEl = el.querySelector('ia-mgc-title');
      const receiptsDisplayButton = titleEl!.querySelector(
        'ia-button'
      ) as IauxButton;
      const innerButton = receiptsDisplayButton.shadowRoot?.querySelector(
        'button'
      ) as HTMLButtonElement;
      innerButton.click();

      await el.updateComplete;

      // set spies for receipt function
      const receiptsEl = el.querySelector('ia-mgc-receipts') as IauxMgcReceipts;
      const receiptElSpy = Sinon.spy(receiptsEl, 'emailSent');

      const mainElementUpdateReceivedSpy = Sinon.spy(el, 'updateReceived');

      // set handler for EmailReceiptRequest event
      let emailRequested = false;
      el.addEventListener('EmailReceiptRequest', async () => {
        emailRequested = true;
        expect(emailRequested).to.be.true;
        expect(mainElementUpdateReceivedSpy.calledOnce).to.equal(444);

        el.updateReceived({
          message: 'Email sent',
          status: 'success',
          donationId: 'foo-id-1',
        });

        await el.updateComplete;

        expect(receiptElSpy.calledOnce).to.equal(true);
      });

      // request an email
      const requestReceiptButton = receiptsEl!.shadowRoot!.querySelector(
        'tr#donation-foo-id-1 ia-button'
      ) as IauxButton;
      requestReceiptButton!.click();
    });
  });
});
