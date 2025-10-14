/* eslint-disable lines-between-class-members */
import type { PaymentProvider } from '@internetarchive/donation-form-data-models';

export type BTPaymentMethodUpdate = {
  nonce: string;
  type: string;
}

export class PaymentMethodRequest {
  paymentMethodInfo: any
  donorContactInfo: any
  paymentProvider: PaymentProvider
  
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
