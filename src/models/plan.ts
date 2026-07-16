import { PaymentProvider } from '@internetarchive/donation-form-data-models';

import type { PaymentMethodRequest } from './payment-method-request';
import { formatCurrency } from '../utils/currency-format';

export type BtData = {
  billingDayOfMonth: number;
  nextBillingDate: {
    date: string;
    timezone_type: number;
    timezone: string;
    oldDate?: string; // optional for updates ISO UTC date string
  };
  lastBillingDate?: {
    date: string | null;
    timezone_type: number;
    timezone: string;
  };
  status: string; // active, inactive
  paymentMethodType: string; // cc, paypal, venmo, etc
  last4: string | null;
  cardType: string | null;
  expirationMonth: string | null;
  expirationYear: string | null;
  paypalEmail?: string;
  venmoUsername?: string;
};

export type Plan = {
  token: string;
  amount: number;
  currency: string;
  start_date: string; // UTC
  is_test: boolean;
  btdata: BtData;
  oldAmount?: number;
  oldDate?: string;
  isCancelled?: boolean;
  processor_id?: string; // used when editing date
  oldProcessorId?: string;
  old_btData?: any;
  new_payment_method_details?: PaymentMethodRequest; // used when updating payment method
};

export class MonthlyPlan {
  plan: Plan;

  currency: string;

  constructor(plan: Plan) {
    this.plan = plan;
    this.currency = plan.currency ?? 'USD'; // not in data
  }

  get id(): string {
    // use token as unique id
    return this.plan.token;
  }

  get amount(): number {
    return this.plan.amount;
  }

  get amountFormatted(): string {
    return formatCurrency(this.plan.amount, this.currency);
  }

  get payment(): BtData | null {
    return this.plan.btdata;
  }

  setAmount(newAmount: number) {
    this.plan.oldAmount = this.plan.amount;
    this.plan.amount = newAmount;
  }

  get nextBillingDate(): string {
    // iso08601 date string
    return this.payment?.nextBillingDate?.date ?? '';
  }

  setNextBillingDate(newDate: string) {
    // iso08601 date string
    if (this.payment) {
      this.payment.nextBillingDate.oldDate = this.payment.nextBillingDate.date;
      this.payment.nextBillingDate.date = newDate;
    }
  }

  private formatDateUTC(dateStr: string): string {
    const date = new Date(dateStr);
    if (Number.isNaN(date.getTime())) return 'Invalid date';
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    }).format(date);
  }

  get nextBillingDateLocale(): string {
    const dateStr = this.payment?.nextBillingDate?.date ?? '';
    if (!dateStr) return 'not found';
    return this.formatDateUTC(dateStr);
  }

  get lastBillingDateLocale(): string {
    const dateStr = this.payment?.lastBillingDate?.date ?? '';
    if (!dateStr) return '';
    return this.formatDateUTC(dateStr);
  }

  get hasBeenCancelled(): boolean {
    return this.plan.isCancelled === true;
  }

  get isTest(): boolean {
    return this.plan.is_test;
  }

  cancelPlan(): void {
    this.plan.isCancelled = true;
  }

  setNewProcessorId(newProcessorId: string): void {
    const currentProcessorId = this.plan.processor_id;
    this.plan.processor_id = newProcessorId;
    this.plan.oldProcessorId = currentProcessorId;
  }

  setNewPaymentMethod(newPaymentMethodRequest: PaymentMethodRequest): void {
    const currentPaymentMethod = this.payment;
    const { details, type } = newPaymentMethodRequest.paymentMethodInfo;
    const paypalEmail = details.email ?? details.description ?? 'not_found';

    let mergedBtData: BtData;
    switch (newPaymentMethodRequest.paymentProvider) {
      case PaymentProvider.PayPal:
        mergedBtData = {
          ...this.plan.btdata,
          paymentMethodType: 'PayPal',
          paypalEmail,
          cardType: null,
          last4: null,
          expirationMonth: null,
          expirationYear: null,
        };
        break;
      case PaymentProvider.Venmo:
        mergedBtData = {
          ...this.plan.btdata,
          paymentMethodType: PaymentProvider.Venmo,
          venmoUsername: details.username,
          cardType: null,
          last4: null,
          expirationMonth: null,
          expirationYear: null,
        };
        break;
      case PaymentProvider.GooglePay:
        mergedBtData = {
          ...this.plan.btdata,
          paymentMethodType: PaymentProvider.GooglePay,
          cardType: details.cardType ?? null,
          last4: details.lastFour ?? null,
          expirationMonth: null,
          expirationYear: null,
        };
        break;
      case PaymentProvider.ApplePay:
        mergedBtData = {
          ...this.plan.btdata,
          paymentMethodType: PaymentProvider.ApplePay,
          cardType: details.cardType ?? null,
          // Apple Pay's tokenization payload only exposes the last two digits
          // of the underlying card (dpanLastTwo), not the last four like every
          // other provider here.
          last4: details.lastTwo ?? null,
          expirationMonth: null,
          expirationYear: null,
        };
        break;
      default:
        mergedBtData = {
          ...this.plan.btdata,
          ...details,
          paymentMethodType: type,
          last4: details.lastFour ?? 'unknown',
        };
    }

    this.plan.old_btData = currentPaymentMethod;
    this.plan.btdata = mergedBtData;
  }
}
