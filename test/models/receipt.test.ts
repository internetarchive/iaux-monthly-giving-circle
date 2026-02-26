import { expect } from '@open-wc/testing';
import { Receipt } from '../../src/models/receipt';
import type { AReceipt } from '../../src/models/receipt';

function makeReceipt(overrides: Partial<AReceipt> = {}): Receipt {
  const defaults: AReceipt = {
    currency: 'USD',
    net_amount: 9.5,
    total_amount: 10,
    fee_amount: 0.5,
    fee_covered: true,
    receive_date: new Date('2024-06-15'),
    date: '2024-06-15',
    isTest: false,
    token: 'tok_abc123',
  };
  return new Receipt({ ...defaults, ...overrides });
}

describe('Receipt', () => {
  describe('constructor', () => {
    it('assigns the receipt object', () => {
      const data: AReceipt = {
        currency: 'USD',
        net_amount: 9,
        total_amount: 10,
        fee_amount: 1,
        fee_covered: true,
        receive_date: new Date(),
        date: '2024-01-01',
        isTest: false,
        token: 'tok_1',
      };
      const r = new Receipt(data);
      expect(r.receipt).to.equal(data);
    });
  });

  describe('amount', () => {
    it('returns total_amount fixed to 2 decimals', () => {
      const r = makeReceipt({ total_amount: 10 });
      expect(r.amount).to.equal('10.00');
    });

    it('handles fractional amounts', () => {
      const r = makeReceipt({ total_amount: 7.5 });
      expect(r.amount).to.equal('7.50');
    });
  });

  describe('amountFormatted', () => {
    it('returns formatted string with currency and symbol for USD', () => {
      const r = makeReceipt({ currency: 'USD', total_amount: 10 });
      expect(r.amountFormatted).to.equal('USD $10.00');
    });

    it('returns formatted string without symbol for non-USD', () => {
      const r = makeReceipt({ currency: 'EUR', total_amount: 25 });
      expect(r.amountFormatted).to.equal('EUR 25.00');
    });

    it('falls back to "CURR not found" when currency is undefined', () => {
      const r = makeReceipt();
      (r.receipt as any).currency = undefined;
      expect(r.amountFormatted).to.include('CURR not found');
    });
  });

  describe('isTest', () => {
    it('returns the isTest value from the receipt', () => {
      const r = makeReceipt({ isTest: true });
      expect(r.isTest).to.equal(true);
    });

    it('defaults to false when isTest is undefined', () => {
      const r = makeReceipt();
      (r.receipt as any).isTest = undefined;
      expect(r.isTest).to.equal(false);
    });
  });

  describe('id', () => {
    it('returns the token', () => {
      const r = makeReceipt({ token: 'my-token' });
      expect(r.id).to.equal('my-token');
    });

    it('falls back to "no token found" when token is undefined', () => {
      const r = makeReceipt();
      (r.receipt as any).token = undefined;
      expect(r.id).to.equal('no token found');
    });
  });

  describe('date', () => {
    it('returns the date string', () => {
      const r = makeReceipt({ date: '2024-12-25' });
      expect(r.date).to.equal('2024-12-25');
    });

    it('falls back to "no date found" when date is undefined', () => {
      const r = makeReceipt();
      (r.receipt as any).date = undefined;
      expect(r.date).to.equal('no date found');
    });
  });

  describe('currencySymbol', () => {
    it('returns "$" for USD', () => {
      const r = makeReceipt({ currency: 'USD' });
      expect(r.currencySymbol).to.equal('$');
    });

    it('returns empty string for non-USD currencies', () => {
      const r = makeReceipt({ currency: 'EUR' });
      expect(r.currencySymbol).to.equal('');
    });
  });
});
