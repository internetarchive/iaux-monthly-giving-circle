// eslint-disable-next-line import/no-extraneous-dependencies
import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';

import type {
  APlanUpdate,
  MonthlyGivingCircle,
} from '../src/monthly-giving-circle';

import '../src/monthly-giving-circle';
import type { IauxMgcReceipts } from '../src/receipts';
import type { MGCButton } from '../src/presentational/mgc-button';
import { Receipt } from '../src/models/receipt';

describe('Receipts: When requesting an email', () => {
  describe('`<ia-monthly-giving-circle>` fires event: EmailReceiptRequest', () => {
    it('and receives updates via `update`', async () => {
      const el = await fixture<MonthlyGivingCircle>(
        html`<ia-monthly-giving-circle
          .receipts=${[
            new Receipt({
              currency: 'USD',
              net_amount: 100,
              total_amount: 222.88,
              fee_amount: 122.88,
              date: new Date('2023-12-23 14:26:34').toLocaleString('US-EN', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              }),
              isTest: false,
              token: 'foo-token-3',
              fee_covered: true,
              receive_date: new Date('2023-12-23 14:26:34'),
            }),
          ]}
        ></ia-monthly-giving-circle>`,
      );

      expect(el.receipts.length).to.equal(1);

      // open receipt view
      const titleEl = el.querySelector('ia-mgc-title');
      const receiptsDisplayButton = titleEl!.querySelector(
        'ia-mgc-button',
      ) as MGCButton;
      const innerButton = receiptsDisplayButton.shadowRoot?.querySelector(
        'button',
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
          donationId: 'foo-token-3',
        } as APlanUpdate);

        await el.updateComplete;

        expect(receiptElSpy.calledOnce).to.equal(true);
        expect(emailRequested).to.be.null;
      });
      // request an email
      const requestReceiptButton = receiptsEl!.shadowRoot!.querySelector(
        'tr#donation-foo-token-3 ia-mgc-button',
      ) as MGCButton;

      requestReceiptButton!.click();
    });
  });
});
