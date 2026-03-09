import { formatCurrency } from '../utils/currency-format';

export type AReceipt = {
  currency: string;
  net_amount: number;
  total_amount: number;
  fee_amount: number;
  fee_covered: boolean;
  receive_date: Date;
  date: string;
  isTest: boolean;
  token: string;
};

export class Receipt {
  receipt: AReceipt;

  constructor(receipt: AReceipt) {
    this.receipt = receipt;
  }

  get amountFormatted(): string {
    return formatCurrency(
      this.receipt.total_amount,
      this.receipt.currency ?? 'USD',
    );
  }

  get amount(): string {
    return formatCurrency(
      this.receipt.total_amount,
      this.receipt.currency ?? 'USD',
    );
  }

  get isTest(): boolean {
    return this.receipt.isTest ?? false;
  }

  get id(): string {
    return this.receipt.token ?? 'no token found';
  }

  get date(): string {
    return this.receipt.date ?? 'no date found';
  }

  get currencySymbol(): string {
    if (this.receipt.currency === 'USD') {
      return '$';
    }

    return '';
  }
}
