/* eslint-disable lines-between-class-members */
import type { PaymentProvider } from '@internetarchive/donation-form-data-models';

export type BTPaymentMethodUpdate = {
  description: string;
  nonce: string;
  type: string;
  details: {
    cardType?: string;
    lastFour?: string;
    lastTwo?: string;
    bin?: string;
    expirationMonth?: string;
    expirationYear?: string;
    description?: string;
  };
};

export class PaymentMethodRequest {
  paymentMethodInfo: BTPaymentMethodUpdate;
  donorContactInfo: any;
  paymentProvider: PaymentProvider;

  constructor(params: {
    paymentMethodInfo: any;
    donorContactInfo: any;
    paymentProvider: PaymentProvider;
  }) {
    this.paymentMethodInfo = params.paymentMethodInfo;
    this.donorContactInfo = params.donorContactInfo;
    this.paymentProvider = params.paymentProvider ?? 'unknown';
  }
}
