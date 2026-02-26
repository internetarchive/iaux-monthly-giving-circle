import { expect } from '@open-wc/testing';
import { PaymentProvider } from '@internetarchive/donation-form-data-models';
import { PaymentMethodRequest } from '../../src/models/payment-method-request';

describe('PaymentMethodRequest', () => {
  describe('constructor', () => {
    it('assigns paymentMethodInfo', () => {
      const info = {
        description: 'Visa ending in 1234',
        nonce: 'nonce_abc',
        type: 'CreditCard',
        details: { cardType: 'Visa', lastFour: '1234' },
      };
      const req = new PaymentMethodRequest({
        paymentMethodInfo: info,
        donorContactInfo: {},
        paymentProvider: PaymentProvider.CreditCard,
      });
      expect(req.paymentMethodInfo).to.equal(info);
    });

    it('assigns donorContactInfo', () => {
      const donor = { email: 'test@example.com' };
      const req = new PaymentMethodRequest({
        paymentMethodInfo: {
          description: '',
          nonce: '',
          type: '',
          details: {},
        },
        donorContactInfo: donor,
        paymentProvider: PaymentProvider.CreditCard,
      });
      expect(req.donorContactInfo).to.equal(donor);
    });

    it('assigns paymentProvider', () => {
      const req = new PaymentMethodRequest({
        paymentMethodInfo: {
          description: '',
          nonce: '',
          type: '',
          details: {},
        },
        donorContactInfo: {},
        paymentProvider: PaymentProvider.CreditCard,
      });
      expect(req.paymentProvider).to.equal(PaymentProvider.CreditCard);
    });

    it('defaults paymentProvider to "unknown" when not provided', () => {
      const req = new PaymentMethodRequest({
        paymentMethodInfo: {
          description: '',
          nonce: '',
          type: '',
          details: {},
        },
        donorContactInfo: {},
        paymentProvider: undefined as any,
      });
      expect(req.paymentProvider).to.equal('unknown');
    });
  });
});
