import { LitElement, html, css, CSSResult, PropertyValueMap } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import {
  HostedFieldContainer,
  HostedFieldName,
} from '@internetarchive/donation-form/dist/src/braintree-manager/payment-providers/credit-card/hosted-field-container';
import {
  BraintreeManager,
  BraintreeManagerInterface,
  HostingEnvironment,
} from '@internetarchive/donation-form';
import type { BraintreeEndpointManagerInterface } from '@internetarchive/donation-form/dist/src/braintree-manager/braintree-interfaces.js';
import type { PaymentClientsInterface } from '@internetarchive/donation-form/dist/src/braintree-manager/payment-clients.js';

import creditCardImg from '@internetarchive/icon-credit-card/index.js';
import calendarImg from '@internetarchive/icon-calendar/index.js';
import lockImg from '@internetarchive/icon-lock/index.js';

import type { MonthlyPlan } from '../../models/plan';

export type PaymentConfig = {
  braintreeAuthToken?: string;
  endpointManager?: BraintreeEndpointManagerInterface;
  paymentClients?: PaymentClientsInterface;
  environment?: HostingEnvironment;
  venmoProfileId?: string;
  googlePayMerchantId?: string;
  referrer: string;
  origin: string;
};

@customElement('ia-mgc-braintree-manager')
export class MGCBraintreeManager extends LitElement {
  @property({ type: Object }) plan?: MonthlyPlan;

  @property({ type: Boolean, reflect: true }) displayCreditCard: boolean =
    false;

  @property({ type: String }) patronEmail: string = '';

  @property({ type: Object }) paymentConfig?: PaymentConfig;

  @property({ type: Object }) braintreeManager?: BraintreeManagerInterface;

  @state() private elementConnected: boolean = false;

  get braintreeInputs(): {
    errorMessage: HTMLDivElement | null;
    number: HTMLDivElement | null;
    cvv: HTMLDivElement | null;
    expirationDate: HTMLDivElement | null;
  } {
    return {
      errorMessage: this.querySelector(
        '#braintree-error-message',
      ) as HTMLDivElement | null,
      number: this.querySelector(
        '#braintree-creditcard',
      ) as HTMLDivElement | null,
      cvv: this.querySelector('#braintree-cvv') as HTMLDivElement | null,
      expirationDate: this.querySelector(
        '#braintree-expiration',
      ) as HTMLDivElement | null,
    };
  }

  createRenderRoot() {
    return this;
  }

  disconnectedCallback(): void {
    this.elementConnected = false;
  }

  connectedCallback(): void {
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();

    console.log('connectedCallback', { paymentConfig: this.paymentConfig });

    this.elementConnected = true;
  }

  protected updated(
    changed: PropertyValueMap<any> | Map<PropertyKey, unknown>,
  ): void {
    const elementHasConnectedToDOM =
      changed.has('elementConnected') && this.elementConnected;
    if (elementHasConnectedToDOM) {
      if (this.paymentConfig) {
        const {
          braintreeAuthToken,
          endpointManager,
          paymentClients,
          environment,
        } = this.paymentConfig || {};

        const needsBraintreeManager =
          !this.braintreeManager &&
          braintreeAuthToken &&
          endpointManager &&
          paymentClients &&
          environment;
        if (needsBraintreeManager) {
          this.setupBraintreeManager();
        }
      }
    }

    if (
      this.braintreeManager &&
      changed.has('displayCreditCard') &&
      this.displayCreditCard
    ) {
      this.setupCreditCardHandler();
    }
  }

  async validateCreditCardFields() {
    const handler =
      await this.braintreeManager?.paymentProviders.creditCardHandler.get();
    let tokenized = false;
    let hostedFieldsResponse = null;
    try {
      hostedFieldsResponse = await handler?.tokenizeHostedFields();
      tokenized = true;
    } catch (e) {
      const error = e as unknown as any;

      handler?.showErrorMessage();

      // todo: move these codes to an enum/type
      switch (error.code) {
        case 'HOSTED_FIELDS_FIELDS_EMPTY':
          // occurs when none of the fields are filled in
          handler?.markFieldErrors([
            HostedFieldName.Number,
            HostedFieldName.CVV,
            HostedFieldName.ExpirationDate,
          ]);
          break;
        case 'HOSTED_FIELDS_FIELDS_INVALID':
          // occurs when certain fields do not pass client side validationto
          // Object.keys(.details.invalidFields).forEach(key => {
          //   handler?.markFieldErrors([key as HostedFieldName]);
          // });
          break;
        case 'HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE':
          // occurs when:
          //   * the client token used for client authorization was generated
          //     with a customer ID and the fail on duplicate payment method
          //     option is set to true
          //   * the card being tokenized has previously been vaulted (with any customer)
          break;
        case 'HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED':
          // occurs when:
          //   * the client token used for client authorization was generated
          //     with a customer ID and the verify card option is set to true
          //     and you have credit card verification turned on in the Braintree
          //     control panel
          //   * the cvv does not pass verfication
          handler?.markFieldErrors([HostedFieldName.CVV]);
          break;
        case 'HOSTED_FIELDS_FAILED_TOKENIZATION':
          // occurs for any other tokenization error on the server
          break;
        case 'HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR':
          // occurs when the Braintree gateway cannot be contacted
          break;
        default:
          // something else happened
          break;
      }
    }

    if (!tokenized) {
      return false;
    }

    return hostedFieldsResponse;
  }

  async setupCreditCardHandler() {
    // braintree turn on hosted fields
    const handler =
      await this.braintreeManager?.paymentProviders.creditCardHandler.get();
    try {
      await handler?.tokenizeHostedFields();
    } catch (e) {
      // todo: show error message only about fields not loading
    }

    handler?.removeFieldErrors([
      HostedFieldName.Number,
      HostedFieldName.CVV,
      HostedFieldName.ExpirationDate,
    ]);
  }

  render() {
    return html` <div>${this.creditCardTemplate}</div> `;
  }

  lightDomCSS(): CSSResult {
    return css`
      contact-form form badged-input {
        width: 100%;
      }

      #ia-mgc-cc-area .braintree-input {
        width: 100%;
        display: block;
        height: stretch;
        height: -webkit-fill-available;
      }
    `;
  }

  get creditCardTemplate() {
    return html`
      <div id="ia-mgc-cc-area" style="border: 1px sold red;">
        <style>
          ${this.lightDomCSS()}
        </style>
        <div id="braintree-error-message"></div>
        <div class="braintree-row">
          <badged-input
            .icon=${creditCardImg}
            ?required=${true}
            class="creditcard"
          >
            <div class="braintree-input" id="braintree-creditcard"></div>
          </badged-input>
        </div>
        <div class="braintree-row">
          <badged-input
            .icon=${calendarImg}
            ?required=${true}
            class="expiration"
          >
            <div class="braintree-input" id="braintree-expiration"></div>
          </badged-input>
          <badged-input .icon=${lockImg} ?required=${true} class="cvv">
            <div class="braintree-input" id="braintree-cvv"></div>
          </badged-input>
        </div>
      </div>
    `;
  }

  private async setupBraintreeManager(): Promise<void> {
    this.braintreeManager = new BraintreeManager({
      paymentClients:
        this.paymentConfig?.paymentClients ?? ({} as PaymentClientsInterface),
      endpointManager: this.paymentConfig
        ?.endpointManager as BraintreeEndpointManagerInterface,
      authorizationToken: this.paymentConfig?.braintreeAuthToken ?? '',
      venmoProfileId: this.paymentConfig?.venmoProfileId,
      googlePayMerchantId: this.paymentConfig?.googlePayMerchantId,
      hostedFieldConfig: {
        hostedFieldStyle: {}, // Provide your custom style object here
        hostedFieldFieldOptions: {
          number: {
            selector: '#braintree-creditcard',
            placeholder: 'Card number',
          },
          cvv: {
            selector: '#braintree-cvv',
            placeholder: 'CVC',
          },
          expirationDate: {
            selector: '#braintree-expiration',
            placeholder: 'MM / YY',
          },
        }, // Provide your custom field options here
        hostedFieldContainer: new HostedFieldContainer({
          number: this.braintreeInputs.number as HTMLDivElement,
          cvv: this.braintreeInputs.cvv as HTMLDivElement,
          expirationDate: this.braintreeInputs.expirationDate as HTMLDivElement,
          errorContainer: this.braintreeInputs.errorMessage as HTMLDivElement,
        }),
      },
      hostingEnvironment: this.paymentConfig?.environment as HostingEnvironment,
      referrer: window.location.href,
      loggedInUser: this.patronEmail,
      origin: window.location.origin,
    });

    this.braintreeManager.on(
      'paymentProvidersHostedFieldsRetry',
      (retryNumber: number) => {
        const event = new CustomEvent('paymentProvidersHostedFieldsRetry', {
          detail: { retryNumber },
        });
        this.dispatchEvent(event);
      },
    );

    this.braintreeManager.on(
      'paymentProvidersHostedFieldsFailed',
      (error: unknown) => {
        const event = new CustomEvent('paymentProvidersHostedFieldsFailed', {
          detail: { error },
        });
        this.dispatchEvent(event);
      },
    );

    this.dispatchEvent(new Event('BraintreeManagerSetupComplete'));
  }

  get contactForm(): HTMLFormElement | null {
    return this.querySelector('form[name="contact-form"]');
  }

  async setupPaymentHandlers() {
    // const creditCardFlowHandler = this.paymentConfig?.paymentFlowHandlers?.creditCardHandler;
    const creditCardHandler =
      await this.braintreeManager?.paymentProviders.creditCardHandler.get();
    creditCardHandler?.hideErrorMessage();
    // const valid = this.contactForm?.reportValidity();
    // const hostedFieldsResponse = await creditCardFlowHandler?.tokenizeFields();
    // console.log("CC hostedFieldsResponse", hostedFieldsResponse);
  }
}
