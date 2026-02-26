import { expect } from '@open-wc/testing';
import { PaymentProvider } from '@internetarchive/donation-form-data-models';
import { MonthlyPlan } from '../../src/models/plan';
import type { Plan, BtData } from '../../src/models/plan';
import { PaymentMethodRequest } from '../../src/models/payment-method-request';

function makeBtData(overrides: Partial<BtData> = {}): BtData {
  return {
    billingDayOfMonth: 15,
    nextBillingDate: {
      date: '2024-08-15 00:00:00',
      timezone_type: 3,
      timezone: 'UTC',
    },
    lastBillingDate: {
      date: '2024-07-15 00:00:00',
      timezone_type: 3,
      timezone: 'UTC',
    },
    status: 'Active',
    paymentMethodType: 'CreditCard',
    last4: '1234',
    cardType: 'Visa',
    expirationMonth: '12',
    expirationYear: '2026',
    ...overrides,
  };
}

function makePlan(overrides: Partial<Plan> = {}): Plan {
  return {
    token: 'tok_plan_1',
    amount: 5,
    currency: 'USD',
    start_date: '2024-07-01 00:00:00',
    is_test: false,
    btdata: makeBtData(),
    ...overrides,
  };
}

describe('MonthlyPlan', () => {
  describe('constructor', () => {
    it('assigns the plan object', () => {
      const plan = makePlan();
      const mp = new MonthlyPlan(plan);
      expect(mp.plan).to.equal(plan);
    });

    it('sets currency from plan', () => {
      const mp = new MonthlyPlan(makePlan({ currency: 'EUR' }));
      expect(mp.currency).to.equal('EUR');
    });

    it('defaults currency to USD when not provided', () => {
      const plan = makePlan();
      (plan as any).currency = undefined;
      const mp = new MonthlyPlan(plan);
      expect(mp.currency).to.equal('USD');
    });
  });

  describe('id', () => {
    it('returns the plan token', () => {
      const mp = new MonthlyPlan(makePlan({ token: 'my-token' }));
      expect(mp.id).to.equal('my-token');
    });
  });

  describe('currencySymbol', () => {
    it('returns "$" for USD', () => {
      const mp = new MonthlyPlan(makePlan({ currency: 'USD' }));
      expect(mp.currencySymbol).to.equal('$');
    });

    it('returns empty string for non-USD', () => {
      const mp = new MonthlyPlan(makePlan({ currency: 'EUR' }));
      expect(mp.currencySymbol).to.equal('');
    });
  });

  describe('amount', () => {
    it('returns the plan amount as a number', () => {
      const mp = new MonthlyPlan(makePlan({ amount: 25 }));
      expect(mp.amount).to.equal(25);
    });
  });

  describe('amountFormatted', () => {
    it('returns amount fixed to 2 decimal places', () => {
      const mp = new MonthlyPlan(makePlan({ amount: 10 }));
      expect(mp.amountFormatted).to.equal('10.00');
    });

    it('handles fractional amounts', () => {
      const mp = new MonthlyPlan(makePlan({ amount: 7.5 }));
      expect(mp.amountFormatted).to.equal('7.50');
    });
  });

  describe('payment', () => {
    it('returns btdata', () => {
      const btdata = makeBtData();
      const mp = new MonthlyPlan(makePlan({ btdata }));
      expect(mp.payment).to.equal(btdata);
    });
  });

  describe('nextBillingDate', () => {
    it('returns the ISO date string', () => {
      const mp = new MonthlyPlan(makePlan());
      expect(mp.nextBillingDate).to.equal('2024-08-15 00:00:00');
    });

    it('returns empty string when payment is null', () => {
      const mp = new MonthlyPlan(makePlan({ btdata: null as any }));
      expect(mp.nextBillingDate).to.equal('');
    });
  });

  describe('nextBillingDateLocale', () => {
    it('returns a locale-formatted date string', () => {
      const mp = new MonthlyPlan(makePlan());
      // Just verify it's a non-empty string (locale varies by environment)
      expect(mp.nextBillingDateLocale).to.be.a('string');
      expect(mp.nextBillingDateLocale).to.not.equal('not found');
      expect(mp.nextBillingDateLocale.length).to.be.greaterThan(0);
    });

    it('returns "not found" when date is empty', () => {
      const btdata = makeBtData();
      btdata.nextBillingDate.date = '';
      const mp = new MonthlyPlan(makePlan({ btdata }));
      expect(mp.nextBillingDateLocale).to.equal('not found');
    });
  });

  describe('lastBillingDateLocale', () => {
    it('returns a locale-formatted date string', () => {
      const mp = new MonthlyPlan(makePlan());
      expect(mp.lastBillingDateLocale).to.be.a('string');
      expect(mp.lastBillingDateLocale.length).to.be.greaterThan(0);
    });

    it('returns empty string when lastBillingDate.date is null', () => {
      const btdata = makeBtData();
      btdata.lastBillingDate.date = null;
      const mp = new MonthlyPlan(makePlan({ btdata }));
      expect(mp.lastBillingDateLocale).to.equal('');
    });
  });

  describe('hasBeenCancelled', () => {
    it('returns false by default', () => {
      const mp = new MonthlyPlan(makePlan());
      expect(mp.hasBeenCancelled).to.equal(false);
    });

    it('returns true when isCancelled is true', () => {
      const mp = new MonthlyPlan(makePlan({ isCancelled: true }));
      expect(mp.hasBeenCancelled).to.equal(true);
    });
  });

  describe('isTest', () => {
    it('returns the is_test value', () => {
      const mp = new MonthlyPlan(makePlan({ is_test: true }));
      expect(mp.isTest).to.equal(true);
    });
  });

  describe('setAmount', () => {
    it('updates the amount and stores old amount', () => {
      const mp = new MonthlyPlan(makePlan({ amount: 5 }));
      mp.setAmount(20);
      expect(mp.amount).to.equal(20);
      expect(mp.plan.oldAmount).to.equal(5);
    });
  });

  describe('setNextBillingDate', () => {
    it('updates the date and stores old date', () => {
      const mp = new MonthlyPlan(makePlan());
      const oldDate = mp.nextBillingDate;
      mp.setNextBillingDate('2024-09-01 00:00:00');
      expect(mp.nextBillingDate).to.equal('2024-09-01 00:00:00');
      expect(mp.payment?.nextBillingDate.oldDate).to.equal(oldDate);
    });

    it('does nothing when payment is null', () => {
      const mp = new MonthlyPlan(makePlan({ btdata: null as any }));
      mp.setNextBillingDate('2024-09-01 00:00:00');
      expect(mp.payment).to.equal(null);
    });
  });

  describe('cancelPlan', () => {
    it('sets isCancelled to true', () => {
      const mp = new MonthlyPlan(makePlan());
      expect(mp.hasBeenCancelled).to.equal(false);
      mp.cancelPlan();
      expect(mp.hasBeenCancelled).to.equal(true);
    });
  });

  describe('setNewProcessorId', () => {
    it('updates processor_id and stores old value', () => {
      const mp = new MonthlyPlan(makePlan({ processor_id: 'proc_old' }));
      mp.setNewProcessorId('proc_new');
      expect(mp.plan.processor_id).to.equal('proc_new');
      expect(mp.plan.oldProcessorId).to.equal('proc_old');
    });

    it('stores undefined as old when no previous processor_id', () => {
      const mp = new MonthlyPlan(makePlan());
      mp.setNewProcessorId('proc_new');
      expect(mp.plan.processor_id).to.equal('proc_new');
      expect(mp.plan.oldProcessorId).to.equal(undefined);
    });
  });

  describe('setNewPaymentMethod', () => {
    it('merges new payment method into btdata and stores old', () => {
      const mp = new MonthlyPlan(makePlan());
      const oldBtData = mp.payment;

      const request = new PaymentMethodRequest({
        paymentMethodInfo: {
          description: 'New card',
          nonce: 'nonce_123',
          type: 'CreditCard',
          details: {
            cardType: 'Mastercard',
            lastFour: '5678',
            expirationMonth: '06',
            expirationYear: '2028',
          },
        },
        donorContactInfo: {},
        paymentProvider: PaymentProvider.CreditCard,
      });

      mp.setNewPaymentMethod(request);

      expect(mp.plan.old_btData).to.equal(oldBtData);
      expect(mp.plan.btdata.cardType).to.equal('Mastercard');
      expect(mp.plan.btdata.last4).to.equal('5678');
      expect(mp.plan.btdata.expirationMonth).to.equal('06');
      expect(mp.plan.btdata.expirationYear).to.equal('2028');
      // Existing fields preserved via spread
      expect(mp.plan.btdata.billingDayOfMonth).to.equal(15);
    });

    it('defaults last4 to "unknown" when lastFour is not provided', () => {
      const mp = new MonthlyPlan(makePlan());

      const request = new PaymentMethodRequest({
        paymentMethodInfo: {
          description: 'PayPal',
          nonce: 'nonce_456',
          type: 'PayPal',
          details: {},
        },
        donorContactInfo: {},
        paymentProvider: PaymentProvider.CreditCard,
      });

      mp.setNewPaymentMethod(request);
      expect(mp.plan.btdata.last4).to.equal('unknown');
    });

    it('preserves nextBillingDate and lastBillingDate through the merge', () => {
      const mp = new MonthlyPlan(makePlan());

      const request = new PaymentMethodRequest({
        paymentMethodInfo: {
          description: 'New card',
          nonce: 'nonce_789',
          type: 'CreditCard',
          details: {
            cardType: 'Amex',
            lastFour: '9999',
          },
        },
        donorContactInfo: {},
        paymentProvider: PaymentProvider.CreditCard,
      });

      mp.setNewPaymentMethod(request);

      expect(mp.plan.btdata.nextBillingDate.date).to.equal(
        '2024-08-15 00:00:00',
      );
      expect(mp.plan.btdata.lastBillingDate.date).to.equal(
        '2024-07-15 00:00:00',
      );
    });

    it('preserves status field through the merge', () => {
      const mp = new MonthlyPlan(makePlan());

      const request = new PaymentMethodRequest({
        paymentMethodInfo: {
          description: 'New card',
          nonce: 'nonce_abc',
          type: 'CreditCard',
          details: {
            cardType: 'Visa',
            lastFour: '1111',
          },
        },
        donorContactInfo: {},
        paymentProvider: PaymentProvider.CreditCard,
      });

      mp.setNewPaymentMethod(request);
      expect(mp.plan.btdata.status).to.equal('Active');
      expect(mp.plan.btdata.paymentMethodType).to.equal('CreditCard');
    });

    it('stores old_btData as a snapshot when called twice', () => {
      const mp = new MonthlyPlan(makePlan());

      const firstRequest = new PaymentMethodRequest({
        paymentMethodInfo: {
          description: 'First update',
          nonce: 'nonce_1',
          type: 'CreditCard',
          details: {
            cardType: 'Mastercard',
            lastFour: '2222',
            expirationMonth: '03',
            expirationYear: '2027',
          },
        },
        donorContactInfo: {},
        paymentProvider: PaymentProvider.CreditCard,
      });

      mp.setNewPaymentMethod(firstRequest);
      const afterFirstUpdate = mp.plan.btdata;

      const secondRequest = new PaymentMethodRequest({
        paymentMethodInfo: {
          description: 'Second update',
          nonce: 'nonce_2',
          type: 'CreditCard',
          details: {
            cardType: 'Amex',
            lastFour: '3333',
            expirationMonth: '11',
            expirationYear: '2029',
          },
        },
        donorContactInfo: {},
        paymentProvider: PaymentProvider.CreditCard,
      });

      mp.setNewPaymentMethod(secondRequest);

      // old_btData should be the intermediate state, not the original
      expect(mp.plan.old_btData).to.equal(afterFirstUpdate);
      expect(mp.plan.btdata.cardType).to.equal('Amex');
      expect(mp.plan.btdata.last4).to.equal('3333');
    });

    it('handles PayPal details with paypalEmail on original btdata', () => {
      const btdata = makeBtData({
        paymentMethodType: 'PayPal',
        paypalEmail: 'donor@example.com',
        last4: null,
        cardType: null,
      });
      const mp = new MonthlyPlan(makePlan({ btdata }));

      const request = new PaymentMethodRequest({
        paymentMethodInfo: {
          description: 'New PayPal',
          nonce: 'nonce_pp',
          type: 'PayPal',
          details: {
            description: 'new-donor@example.com',
          },
        },
        donorContactInfo: {},
        paymentProvider: PaymentProvider.CreditCard,
      });

      mp.setNewPaymentMethod(request);

      // paypalEmail from original btdata is preserved via spread
      expect(mp.plan.btdata.paypalEmail).to.equal('donor@example.com');
      expect(mp.plan.btdata.last4).to.equal('unknown');
    });

    it('handles Venmo details with venmoUsername on original btdata', () => {
      const btdata = makeBtData({
        paymentMethodType: 'Venmo',
        venmoUsername: '@donor',
        last4: null,
        cardType: null,
      });
      const mp = new MonthlyPlan(makePlan({ btdata }));

      const request = new PaymentMethodRequest({
        paymentMethodInfo: {
          description: 'New Venmo',
          nonce: 'nonce_venmo',
          type: 'Venmo',
          details: {},
        },
        donorContactInfo: {},
        paymentProvider: PaymentProvider.CreditCard,
      });

      mp.setNewPaymentMethod(request);

      expect(mp.plan.btdata.venmoUsername).to.equal('@donor');
      expect(mp.plan.btdata.last4).to.equal('unknown');
    });
  });
});
