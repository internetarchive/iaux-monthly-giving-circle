// eslint-disable-next-line import/no-extraneous-dependencies
import { html, fixture, expect } from '@open-wc/testing';

import type { MonthlyGivingCircle } from '../src/monthly-giving-circle';

import '../src/monthly-giving-circle';

describe('IauxMonthlyGivingCircle', () => {
  it('displays welcome message on load', async () => {
    const el = await fixture<MonthlyGivingCircle>(
      html`<iaux-monthly-giving-circle></iaux-monthly-giving-circle>`
    );

    expect(el.viewToDisplay).to.equal('welcome');

    const titleEl = el.querySelector('iaux-mgc-title');
    expect(titleEl).to.not.be.null;
    expect(titleEl!.getAttribute('titlestyle')).to.equal('heart');
    expect(titleEl!.children.length).to.equal(2);
    expect((titleEl!.children[0] as HTMLElement).innerText).to.equal(
      'Monthly Giving Circle'
    );

    const welcomeEl = el.querySelector('iaux-mgc-welcome');
    const joinLink = welcomeEl!.shadowRoot?.querySelector(
      'a.join-mgc'
    ) as HTMLAnchorElement;
    expect(joinLink).to.not.be.null;
    expect(joinLink.href).to.equal(
      'https://archive.org/donate/?amt=5&contrib_type=monthly&origin=iawww-usrsttng'
    );
  });

  describe('Receipts View - CTA & onclick display:', () => {
    it('Displays receipts CTA when receipts are available', async () => {
      const el = await fixture<MonthlyGivingCircle>(
        html`<iaux-monthly-giving-circle
          .receipts=${[
            {
              amount: 9999.99,
              date: '2020-09-01',
              donor: 'John Doe',
              paymentMethod: 'Credit Card',
              status: 'Completed',
              id: 'foo-id-1',
            },
          ]}
        ></iaux-monthly-giving-circle>`
      );

      const titleEl = el.querySelector('iaux-mgc-title');
      const receiptsButton = titleEl!.querySelector('button');
      expect(receiptsButton).to.exist;
      expect(receiptsButton!.innerText).to.equal(
        'View recent donation history'
      );

      el.receipts = [];
      await el.updateComplete;

      const newTitleEl = el.querySelector('iaux-mgc-title');
      expect(newTitleEl).to.exist;

      const newReceiptsButton = newTitleEl!.querySelector('button');
      expect(newReceiptsButton).to.not.exist;
    });

    it('Display receipts table when receipts CTA is clicked', async () => {
      const el = await fixture<MonthlyGivingCircle>(
        html`<iaux-monthly-giving-circle
          .receipts=${[
            {
              amount: 9999.99,
              date: '2020-09-01',
              donor: 'John Doe',
              paymentMethod: 'Credit Card',
              status: 'Completed',
              id: 'foo-id-1',
            },
          ]}
        ></iaux-monthly-giving-circle>`
      );

      const titleEl = el.querySelector('iaux-mgc-title');
      const receiptsButton = titleEl!.querySelector('button');
      expect(receiptsButton).to.exist;
      receiptsButton!.click();

      await el.updateComplete;

      expect(el.viewToDisplay).to.equal('receipts');

      const welcomeEl = el.querySelector('iaux-mgc-welcome');
      expect(welcomeEl).to.not.exist;

      // shows proper title
      const titleEl2 = el.querySelector('iaux-mgc-title');
      expect(titleEl2).to.exist;
      expect(titleEl2!.getAttribute('titlestyle')).to.equal('default');
      const titleValueEl = titleEl2?.querySelector(
        'span[slot="title"]'
      ) as HTMLSpanElement;
      expect(titleValueEl).to.exist;
      expect(titleValueEl.innerText).to.equal('Recent donations');

      // shows back button
      const backButton = titleEl2?.querySelector(
        'button.close-receipts'
      ) as HTMLButtonElement;
      expect(backButton!.innerText).to.equal('Back to account settings');

      // shows receipts element
      const receiptsEl = el.querySelector('iaux-mgc-receipts');
      expect(receiptsEl).to.exist;

      // goes back to welcome page if back button is clicked
      backButton!.click();
      await el.updateComplete;

      expect(el.viewToDisplay).to.equal('welcome');

      const titleEl3 = el.querySelector('iaux-mgc-title');
      expect(titleEl3).to.exist;
      expect(titleEl3!.getAttribute('titlestyle')).to.equal('heart');
      const welcomeTitle = titleEl3?.querySelector(
        'span[slot="title"]'
      ) as HTMLSpanElement;
      expect(welcomeTitle.innerText).to.equal('Monthly Giving Circle');
    });
  });
});
