// eslint-disable-next-line import/no-extraneous-dependencies
import { html, fixture, expect } from '@open-wc/testing';

import type { MGCWelcome } from '../src/welcome-message';

import '../src/welcome-message';

describe('MGCWelcome', () => {
  describe('default rendering', () => {
    it('renders welcome message with benefits list', async () => {
      const el = await fixture<MGCWelcome>(
        html`<ia-mgc-welcome></ia-mgc-welcome>`,
      );

      const section = el.shadowRoot?.querySelector('section');
      expect(section).to.exist;

      const listItems = el.shadowRoot?.querySelectorAll('li');
      expect(listItems?.length).to.equal(3);
    });

    it('renders join link with default values', async () => {
      const el = await fixture<MGCWelcome>(
        html`<ia-mgc-welcome></ia-mgc-welcome>`,
      );

      const joinLink = el.shadowRoot?.querySelector(
        'a.join-mgc',
      ) as HTMLAnchorElement;
      expect(joinLink).to.exist;
      expect(joinLink.href).to.equal(
        'https://archive.org/donate/?amt=5&contrib_type=monthly&origin=iawww-usrsttng',
      );
      expect(joinLink.target).to.equal('_blank');
      expect(joinLink.textContent).to.include(
        'Click here to join the Monthly Giving Circle',
      );
    });

    it('renders contact email link', async () => {
      const el = await fixture<MGCWelcome>(
        html`<ia-mgc-welcome></ia-mgc-welcome>`,
      );

      const links = el.shadowRoot?.querySelectorAll('a.link');
      const contactLink = links?.[1] as HTMLAnchorElement;
      expect(contactLink).to.exist;
      expect(contactLink.href).to.include('mailto:donations@archive.org');
      expect(contactLink.textContent).to.include(
        'Contact us at donations@archive.org',
      );
    });
  });

  describe('custom properties', () => {
    it('uses custom baseHost in join link', async () => {
      const el = await fixture<MGCWelcome>(
        html`<ia-mgc-welcome baseHost="test.archive.org"></ia-mgc-welcome>`,
      );

      const joinLink = el.shadowRoot?.querySelector(
        'a.join-mgc',
      ) as HTMLAnchorElement;
      expect(joinLink.href).to.equal(
        'https://test.archive.org/donate/?amt=5&contrib_type=monthly&origin=iawww-usrsttng',
      );
    });

    it('uses custom defaultMonthlyDonationAmount in join link', async () => {
      const el = await fixture<MGCWelcome>(
        html`<ia-mgc-welcome
          .defaultMonthlyDonationAmount=${10}
        ></ia-mgc-welcome>`,
      );

      const joinLink = el.shadowRoot?.querySelector(
        'a.join-mgc',
      ) as HTMLAnchorElement;
      expect(joinLink.href).to.equal(
        'https://archive.org/donate/?amt=10&contrib_type=monthly&origin=iawww-usrsttng',
      );
    });

    it('uses both custom baseHost and amount in join link', async () => {
      const el = await fixture<MGCWelcome>(
        html`<ia-mgc-welcome
          baseHost="staging.archive.org"
          .defaultMonthlyDonationAmount=${25}
        ></ia-mgc-welcome>`,
      );

      const joinLink = el.shadowRoot?.querySelector(
        'a.join-mgc',
      ) as HTMLAnchorElement;
      expect(joinLink.href).to.equal(
        'https://staging.archive.org/donate/?amt=25&contrib_type=monthly&origin=iawww-usrsttng',
      );
    });
  });

  describe('mailToInquiryLink getter', () => {
    it('returns mailto link with empty patron name by default', async () => {
      const el = await fixture<MGCWelcome>(
        html`<ia-mgc-welcome></ia-mgc-welcome>`,
      );

      expect(el.mailToInquiryLink).to.include('mailto:donations@archive.org');
      expect(el.mailToInquiryLink).to.include(
        'subject=Tell%20me%20more%20about%20the%20Monthly%20Giving%20Circle',
      );
      expect(el.mailToInquiryLink).to.match(/Best%2C%20$/);
    });

    it('appends encoded patron name to mailto link', async () => {
      const el = await fixture<MGCWelcome>(
        html`<ia-mgc-welcome patronName="John Doe"></ia-mgc-welcome>`,
      );

      expect(el.mailToInquiryLink).to.include('mailto:donations@archive.org');
      expect(el.mailToInquiryLink).to.include('Best%2C%20John%20Doe');
    });

    it('properly encodes special characters in patron name', async () => {
      const el = await fixture<MGCWelcome>(
        html`<ia-mgc-welcome patronName="José García"></ia-mgc-welcome>`,
      );

      expect(el.mailToInquiryLink).to.include('Jos%C3%A9%20Garc%C3%ADa');
    });
  });

  describe('default property values', () => {
    it('has empty string as default patronName', async () => {
      const el = await fixture<MGCWelcome>(
        html`<ia-mgc-welcome></ia-mgc-welcome>`,
      );

      expect(el.patronName).to.equal('');
    });

    it('has archive.org as default baseHost', async () => {
      const el = await fixture<MGCWelcome>(
        html`<ia-mgc-welcome></ia-mgc-welcome>`,
      );

      expect(el.baseHost).to.equal('archive.org');
    });

    it('has 5 as default monthly donation amount', async () => {
      const el = await fixture<MGCWelcome>(
        html`<ia-mgc-welcome></ia-mgc-welcome>`,
      );

      expect(el.defaultMonthlyDonationAmount).to.equal(5);
    });
  });
});
