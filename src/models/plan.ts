import type { PaymentMethodRequest } from './payment-method-request';

export type BtData = {
  billingDayOfMonth: number;
  nextBillingDate: {
    date: string;
    timezone_type: number;
    timezone: string;
    oldDate?: string; // optional for updates ISO UTC date string
  };
  lastBillingDate: {
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

  get currencySymbol(): string {
    return this.currency === 'USD' ? '$' : '';
  }

  get amount(): number {
    return this.plan.amount;
  }

  get amountFormatted(): string {
    return this.plan.amount.toFixed(2);
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

  get nextBillingDateLocale(): string {
    const dateStr = this.payment?.nextBillingDate.date ?? '';
    const nextBillingDate = dateStr
      ? new Date(dateStr).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      : 'not found';
    return nextBillingDate;
  }

  get lastBillingDateLocale(): string {
    if (!this.payment?.lastBillingDate.date) {
      return '';
    }

    const lastBillingDate = new Date(
      this.payment.lastBillingDate.date,
    ).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    return lastBillingDate ?? 'not found';
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
    const mergedBtData = {
      ...this.plan.btdata,
      ...newPaymentMethodRequest.paymentMethodInfo.details,
      ...{
        last4:
          newPaymentMethodRequest.paymentMethodInfo.details.lastFour ??
          'unknown',
      },
    };
    this.plan.old_btData = currentPaymentMethod;
    this.plan.btdata = mergedBtData;
  }
}
