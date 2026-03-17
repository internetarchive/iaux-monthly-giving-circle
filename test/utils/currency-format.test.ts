import { expect } from '@open-wc/testing';
import { formatCurrency } from '../../src/utils/currency-format';

describe('formatCurrency', () => {
  it('formats USD by default', () => {
    expect(formatCurrency(10)).to.equal('$10.00');
  });

  it('formats fractional amounts to 2 decimal places', () => {
    expect(formatCurrency(7.5)).to.equal('$7.50');
  });

  it('formats zero', () => {
    expect(formatCurrency(0)).to.equal('$0.00');
  });

  it('formats negative amounts', () => {
    expect(formatCurrency(-5)).to.equal('-$5.00');
  });

  it('formats EUR currency', () => {
    expect(formatCurrency(25, 'EUR')).to.equal('€25.00');
  });

  it('formats GBP currency', () => {
    expect(formatCurrency(25, 'GBP')).to.equal('£25.00');
  });

  it('returns "Invalid amount" for NaN', () => {
    expect(formatCurrency(NaN)).to.equal('Invalid amount');
  });

  it('returns "Invalid amount" for Infinity', () => {
    expect(formatCurrency(Infinity)).to.equal('Invalid amount');
  });

  it('returns "Invalid amount" for -Infinity', () => {
    expect(formatCurrency(-Infinity)).to.equal('Invalid amount');
  });

  it('rounds to 2 decimal places', () => {
    expect(formatCurrency(10.999)).to.equal('$11.00');
    expect(formatCurrency(10.001)).to.equal('$10.00');
  });
});
