// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from '@open-wc/testing';
import Sinon from 'sinon';

import '../../src/form-sections/parts/braintree-manager';
import type { MGCBraintreeManager } from '../../src/form-sections/parts/braintree-manager';

describe('MGCBraintreeManager', () => {
  describe('setupBraintreeManager', () => {
    let sandbox: Sinon.SinonSandbox;

    afterEach(() => {
      sandbox.restore();
    });

    it('calls checkVenmoRestoration', async () => {
      sandbox = Sinon.createSandbox();
      const el = document.createElement(
        'ia-mgc-braintree-manager',
      ) as MGCBraintreeManager;

      const checkVenmoSpy = sandbox
        .stub(el as any, 'checkVenmoRestoration')
        .resolves();

      await (el as any).setupBraintreeManager();

      expect(checkVenmoSpy.calledOnce).to.be.true;
    });

    it('replaces googlePayHandler with a null stub when googlePayMerchantId is absent', async () => {
      sandbox = Sinon.createSandbox();
      const el = document.createElement(
        'ia-mgc-braintree-manager',
      ) as MGCBraintreeManager;

      sandbox.stub(el as any, 'checkVenmoRestoration').resolves();

      // No googlePayMerchantId in paymentConfig
      await (el as any).setupBraintreeManager();

      const result =
        await el.braintreeManager?.paymentProviders.googlePayHandler.get();
      expect(result).to.be.null;
    });

    it('does not replace googlePayHandler when googlePayMerchantId is set', async () => {
      sandbox = Sinon.createSandbox();
      const el = document.createElement(
        'ia-mgc-braintree-manager',
      ) as MGCBraintreeManager;

      (el as any).paymentConfig = { googlePayMerchantId: 'merchant-123' };
      sandbox.stub(el as any, 'checkVenmoRestoration').resolves();

      await (el as any).setupBraintreeManager();

      // googlePayHandler should be the real PromisedSingleton, not our null stub
      const handler = el.braintreeManager?.paymentProviders.googlePayHandler;
      expect(handler).to.be.instanceOf(Object);
      // The real handler's get() won't return null immediately (it's a PromisedSingleton)
      expect(typeof handler?.get).to.equal('function');
    });
  });

  describe('checkVenmoRestoration', () => {
    let sandbox: Sinon.SinonSandbox;
    let el: MGCBraintreeManager;
    const PLAN_ID = 'test-plan-id';

    function makeStorage(hasPending = true) {
      return {
        getPending: Sinon.stub().returns(
          hasPending ? { planId: PLAN_ID } : null,
        ),
        clearPending: Sinon.stub(),
      };
    }

    function makeBraintreeManager({
      handlerResult = null as any,
      handlerThrows = null as Error | null,
    } = {}) {
      return {
        paymentProviders: {
          venmoHandler: {
            get: handlerThrows
              ? Sinon.stub().rejects(handlerThrows)
              : Sinon.stub().resolves(handlerResult),
          },
        },
      };
    }

    function makeHandler({
      instanceResult = null as any,
      instanceThrows = null as Error | null,
      startPaymentResult = null as any,
      startPaymentThrows = null as Error | null,
    } = {}) {
      return {
        instance: {
          get: instanceThrows
            ? Sinon.stub().rejects(instanceThrows)
            : Sinon.stub().resolves(instanceResult),
        },
        startPayment: startPaymentThrows
          ? Sinon.stub().rejects(startPaymentThrows)
          : Sinon.stub().resolves(startPaymentResult),
      };
    }

    function makeVenmoInstance(hasResult = true) {
      return { hasTokenizationResult: Sinon.stub().returns(hasResult) };
    }

    beforeEach(() => {
      sandbox = Sinon.createSandbox();
      el = document.createElement(
        'ia-mgc-braintree-manager',
      ) as MGCBraintreeManager;
      (el as any).plan = { id: PLAN_ID };
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('returns early when plan has no id', async () => {
      (el as any).plan = {};
      const storage = makeStorage();
      (el as any).venmoPendingStorage = storage;

      await (el as any).checkVenmoRestoration();

      expect(storage.getPending.called).to.be.false;
    });

    it('returns early when no pending state exists', async () => {
      const storage = makeStorage(false);
      (el as any).venmoPendingStorage = storage;
      (el as any).braintreeManager = makeBraintreeManager();

      await (el as any).checkVenmoRestoration();

      expect(storage.clearPending.called).to.be.false;
    });

    it('clears pending and emits no event when venmo handler is unavailable', async () => {
      const storage = makeStorage();
      (el as any).venmoPendingStorage = storage;
      (el as any).braintreeManager = makeBraintreeManager({
        handlerResult: null,
      });

      let eventFired = false;
      el.addEventListener('VenmoAuthorized', () => {
        eventFired = true;
      });
      el.addEventListener('VenmoError', () => {
        eventFired = true;
      });

      await (el as any).checkVenmoRestoration();

      expect(storage.clearPending.calledWith(PLAN_ID)).to.be.true;
      expect(eventFired).to.be.false;
    });

    it('clears pending and emits no event when venmo instance is unavailable', async () => {
      const storage = makeStorage();
      (el as any).venmoPendingStorage = storage;
      const handler = makeHandler({ instanceResult: null });
      (el as any).braintreeManager = makeBraintreeManager({
        handlerResult: handler,
      });

      let eventFired = false;
      el.addEventListener('VenmoAuthorized', () => {
        eventFired = true;
      });
      el.addEventListener('VenmoError', () => {
        eventFired = true;
      });

      await (el as any).checkVenmoRestoration();

      expect(storage.clearPending.calledWith(PLAN_ID)).to.be.true;
      expect(eventFired).to.be.false;
    });

    it('clears pending and emits no event when hasTokenizationResult is false', async () => {
      const storage = makeStorage();
      (el as any).venmoPendingStorage = storage;
      const instance = makeVenmoInstance(false);
      const handler = makeHandler({ instanceResult: instance });
      (el as any).braintreeManager = makeBraintreeManager({
        handlerResult: handler,
      });

      let eventFired = false;
      el.addEventListener('VenmoAuthorized', () => {
        eventFired = true;
      });
      el.addEventListener('VenmoError', () => {
        eventFired = true;
      });

      await (el as any).checkVenmoRestoration();

      expect(storage.clearPending.calledWith(PLAN_ID)).to.be.true;
      expect(eventFired).to.be.false;
    });

    it('dispatches VenmoAuthorized on successful tokenization', async () => {
      const storage = makeStorage();
      (el as any).venmoPendingStorage = storage;
      const instance = makeVenmoInstance(true);
      const payload = {
        nonce: 'fake-nonce',
        type: 'VenmoAccount',
        details: { username: 'venmouser' },
      };
      const handler = makeHandler({
        instanceResult: instance,
        startPaymentResult: payload,
      });
      (el as any).braintreeManager = makeBraintreeManager({
        handlerResult: handler,
      });

      let authorizedDetail: any = null;
      el.addEventListener('VenmoAuthorized', (e: Event) => {
        authorizedDetail = (e as CustomEvent).detail;
      });

      await (el as any).checkVenmoRestoration();

      expect(authorizedDetail).to.not.be.null;
      expect(authorizedDetail.paymentMethodInfo.nonce).to.equal('fake-nonce');
      expect(authorizedDetail.paymentMethodInfo.details.username).to.equal(
        'venmouser',
      );
    });

    it('clears pending and dispatches VenmoError on unexpected error from venmoHandler.get()', async () => {
      const storage = makeStorage();
      (el as any).venmoPendingStorage = storage;
      (el as any).braintreeManager = makeBraintreeManager({
        handlerThrows: new Error('SDK unavailable'),
      });

      let errorFired = false;
      el.addEventListener('VenmoError', () => {
        errorFired = true;
      });

      await (el as any).checkVenmoRestoration();

      expect(storage.clearPending.calledWith(PLAN_ID)).to.be.true;
      expect(errorFired).to.be.true;
    });

    it('does not dispatch VenmoError for VENMO_APP_CANCELED', async () => {
      const storage = makeStorage();
      (el as any).venmoPendingStorage = storage;
      const instance = makeVenmoInstance(true);
      const cancelErr = Object.assign(new Error('Canceled'), {
        code: 'VENMO_APP_CANCELED',
      });
      const handler = makeHandler({
        instanceResult: instance,
        startPaymentThrows: cancelErr,
      });
      (el as any).braintreeManager = makeBraintreeManager({
        handlerResult: handler,
      });

      let errorFired = false;
      el.addEventListener('VenmoError', () => {
        errorFired = true;
      });

      await (el as any).checkVenmoRestoration();

      expect(storage.clearPending.calledWith(PLAN_ID)).to.be.true;
      expect(errorFired).to.be.false;
    });

    it('does not dispatch VenmoError for VENMO_CANCELED', async () => {
      const storage = makeStorage();
      (el as any).venmoPendingStorage = storage;
      const instance = makeVenmoInstance(true);
      const cancelErr = Object.assign(new Error('Canceled'), {
        code: 'VENMO_CANCELED',
      });
      const handler = makeHandler({
        instanceResult: instance,
        startPaymentThrows: cancelErr,
      });
      (el as any).braintreeManager = makeBraintreeManager({
        handlerResult: handler,
      });

      let errorFired = false;
      el.addEventListener('VenmoError', () => {
        errorFired = true;
      });

      await (el as any).checkVenmoRestoration();

      expect(storage.clearPending.calledWith(PLAN_ID)).to.be.true;
      expect(errorFired).to.be.false;
    });

    it('clears pending and dispatches VenmoError on unexpected startPayment error', async () => {
      const storage = makeStorage();
      (el as any).venmoPendingStorage = storage;
      const instance = makeVenmoInstance(true);
      const handler = makeHandler({
        instanceResult: instance,
        startPaymentThrows: new Error('Network error'),
      });
      (el as any).braintreeManager = makeBraintreeManager({
        handlerResult: handler,
      });

      let errorFired = false;
      el.addEventListener('VenmoError', () => {
        errorFired = true;
      });

      await (el as any).checkVenmoRestoration();

      expect(storage.clearPending.calledWith(PLAN_ID)).to.be.true;
      expect(errorFired).to.be.true;
    });
  });

  describe('startVenmoPayment', () => {
    let sandbox: Sinon.SinonSandbox;
    let el: MGCBraintreeManager;
    const PLAN_ID = 'test-plan-id';

    function makeStorage() {
      return {
        getPending: Sinon.stub().returns(null),
        setPending: Sinon.stub(),
        clearPending: Sinon.stub(),
      };
    }

    function makeVenmoHandler({
      startPaymentResult = null as any,
      startPaymentThrows = null as Error | null,
    } = {}) {
      return {
        startPayment: startPaymentThrows
          ? Sinon.stub().rejects(startPaymentThrows)
          : Sinon.stub().resolves(startPaymentResult),
      };
    }

    function makeBraintreeManager(handler: any = null) {
      return {
        paymentProviders: {
          venmoHandler: { get: Sinon.stub().resolves(handler) },
        },
      };
    }

    beforeEach(() => {
      sandbox = Sinon.createSandbox();
      el = document.createElement(
        'ia-mgc-braintree-manager',
      ) as MGCBraintreeManager;
      (el as any).plan = { id: PLAN_ID };
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('returns early without setting pending when handler is unavailable', async () => {
      const storage = makeStorage();
      (el as any).venmoPendingStorage = storage;
      (el as any).braintreeManager = makeBraintreeManager(null);

      await el.startVenmoPayment();

      expect(storage.setPending.called).to.be.false;
      expect(storage.clearPending.called).to.be.false;
    });

    it('sets pending before payment and clears it on success', async () => {
      const storage = makeStorage();
      (el as any).venmoPendingStorage = storage;
      const payload = {
        nonce: 'fake-nonce',
        type: 'VenmoAccount',
        details: { username: 'venmouser' },
      };
      (el as any).braintreeManager = makeBraintreeManager(
        makeVenmoHandler({ startPaymentResult: payload }),
      );

      await el.startVenmoPayment();

      expect(storage.setPending.calledWith(PLAN_ID)).to.be.true;
      expect(storage.clearPending.calledWith(PLAN_ID)).to.be.true;
    });

    it('dispatches VenmoAuthorized with correct payload on success', async () => {
      const storage = makeStorage();
      (el as any).venmoPendingStorage = storage;
      const payload = {
        nonce: 'fake-nonce',
        type: 'VenmoAccount',
        details: { username: 'venmouser' },
      };
      (el as any).braintreeManager = makeBraintreeManager(
        makeVenmoHandler({ startPaymentResult: payload }),
      );

      let authorizedDetail: any = null;
      el.addEventListener('VenmoAuthorized', (e: Event) => {
        authorizedDetail = (e as CustomEvent).detail;
      });

      await el.startVenmoPayment();

      expect(authorizedDetail).to.not.be.null;
      expect(authorizedDetail.paymentMethodInfo.nonce).to.equal('fake-nonce');
      expect(authorizedDetail.paymentMethodInfo.description).to.equal(
        'Venmo - venmouser',
      );
      expect(authorizedDetail.paymentMethodInfo.details.username).to.equal(
        'venmouser',
      );
    });

    it('clears pending and does not dispatch VenmoError for VENMO_APP_CANCELED', async () => {
      const storage = makeStorage();
      (el as any).venmoPendingStorage = storage;
      const cancelErr = Object.assign(new Error('Canceled'), {
        code: 'VENMO_APP_CANCELED',
      });
      (el as any).braintreeManager = makeBraintreeManager(
        makeVenmoHandler({ startPaymentThrows: cancelErr }),
      );

      let errorFired = false;
      el.addEventListener('VenmoError', () => {
        errorFired = true;
      });

      await el.startVenmoPayment();

      expect(storage.clearPending.calledWith(PLAN_ID)).to.be.true;
      expect(errorFired).to.be.false;
    });

    it('clears pending and does not dispatch VenmoError for VENMO_CANCELED', async () => {
      const storage = makeStorage();
      (el as any).venmoPendingStorage = storage;
      const cancelErr = Object.assign(new Error('Canceled'), {
        code: 'VENMO_CANCELED',
      });
      (el as any).braintreeManager = makeBraintreeManager(
        makeVenmoHandler({ startPaymentThrows: cancelErr }),
      );

      let errorFired = false;
      el.addEventListener('VenmoError', () => {
        errorFired = true;
      });

      await el.startVenmoPayment();

      expect(storage.clearPending.calledWith(PLAN_ID)).to.be.true;
      expect(errorFired).to.be.false;
    });

    it('clears pending and dispatches VenmoError on unexpected error', async () => {
      const storage = makeStorage();
      (el as any).venmoPendingStorage = storage;
      (el as any).braintreeManager = makeBraintreeManager(
        makeVenmoHandler({ startPaymentThrows: new Error('Network error') }),
      );

      let errorFired = false;
      el.addEventListener('VenmoError', () => {
        errorFired = true;
      });

      await el.startVenmoPayment();

      expect(storage.clearPending.calledWith(PLAN_ID)).to.be.true;
      expect(errorFired).to.be.true;
    });
  });

  describe('startGooglePayPayment', () => {
    let sandbox: Sinon.SinonSandbox;
    let el: MGCBraintreeManager;

    function makeGooglePayInstance({
      paymentDataRequestResult = {} as any,
      parseResponseResult = null as any,
      parseResponseThrows = null as Error | null,
    } = {}) {
      return {
        createPaymentDataRequest: Sinon.stub().resolves(
          paymentDataRequestResult,
        ),
        parseResponse: parseResponseThrows
          ? Sinon.stub().rejects(parseResponseThrows)
          : Sinon.stub().resolves(parseResponseResult),
      };
    }

    function makeGooglePayHandler({
      instanceResult = null as any,
      instanceThrows = null as Error | null,
      loadPaymentDataResult = {} as any,
      loadPaymentDataThrows = null as unknown,
    } = {}) {
      return {
        instance: {
          get: instanceThrows
            ? Sinon.stub().rejects(instanceThrows)
            : Sinon.stub().resolves(instanceResult),
        },
        paymentsClient: {
          loadPaymentData: loadPaymentDataThrows
            ? Sinon.stub().rejects(loadPaymentDataThrows)
            : Sinon.stub().resolves(loadPaymentDataResult),
        },
      };
    }

    function makeBraintreeManager(handler: any = null) {
      return {
        paymentProviders: {
          googlePayHandler: { get: Sinon.stub().resolves(handler) },
        },
      };
    }

    beforeEach(() => {
      sandbox = Sinon.createSandbox();
      el = document.createElement(
        'ia-mgc-braintree-manager',
      ) as MGCBraintreeManager;
      (el as any).plan = { amount: 10 };
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('does nothing when handler is unavailable', async () => {
      (el as any).braintreeManager = makeBraintreeManager(null);

      let eventFired = false;
      el.addEventListener('GooglePayVaultAuthorized', () => {
        eventFired = true;
      });

      await el.startGooglePayPayment();

      expect(eventFired).to.be.false;
    });

    it('does nothing when instance is unavailable', async () => {
      const handler = makeGooglePayHandler({ instanceResult: null });
      (el as any).braintreeManager = makeBraintreeManager(handler);

      let eventFired = false;
      el.addEventListener('GooglePayVaultAuthorized', () => {
        eventFired = true;
      });

      await el.startGooglePayPayment();

      expect(eventFired).to.be.false;
      expect(handler.paymentsClient.loadPaymentData.called).to.be.false;
    });

    it('dispatches GooglePayVaultAuthorized with correct payload on success', async () => {
      const payload = {
        nonce: 'fake-nonce',
        type: 'AndroidPayCard',
        details: { cardType: 'Visa', lastFour: '1234' },
      };
      const instance = makeGooglePayInstance({ parseResponseResult: payload });
      const handler = makeGooglePayHandler({ instanceResult: instance });
      (el as any).braintreeManager = makeBraintreeManager(handler);

      let authorizedDetail: any = null;
      el.addEventListener('GooglePayVaultAuthorized', (e: Event) => {
        authorizedDetail = (e as CustomEvent).detail;
      });

      await el.startGooglePayPayment();

      expect(authorizedDetail).to.not.be.null;
      expect(authorizedDetail.paymentMethodInfo.nonce).to.equal('fake-nonce');
      expect(authorizedDetail.paymentMethodInfo.description).to.equal(
        'Google Pay - Visa - 1234',
      );
      expect(authorizedDetail.paymentMethodInfo.details.cardType).to.equal(
        'Visa',
      );
      expect(authorizedDetail.paymentMethodInfo.details.lastFour).to.equal(
        '1234',
      );
    });

    it('dispatches GooglePayError when the Braintree Google Pay client fails to initialize', async () => {
      const handler = makeGooglePayHandler({
        instanceThrows: new Error(
          'Google Pay is not enabled for this merchant',
        ),
      });
      (el as any).braintreeManager = makeBraintreeManager(handler);

      let errorFired = false;
      el.addEventListener('GooglePayError', () => {
        errorFired = true;
      });

      await el.startGooglePayPayment();

      expect(errorFired).to.be.true;
    });

    it('does not dispatch GooglePayError when the user cancels', async () => {
      const cancelErr = { statusCode: 'CANCELED' };
      const instance = makeGooglePayInstance();
      const handler = makeGooglePayHandler({
        instanceResult: instance,
        loadPaymentDataThrows: cancelErr,
      });
      (el as any).braintreeManager = makeBraintreeManager(handler);

      let errorFired = false;
      el.addEventListener('GooglePayError', () => {
        errorFired = true;
      });

      await el.startGooglePayPayment();

      expect(errorFired).to.be.false;
    });

    it('dispatches GooglePayError on unexpected error', async () => {
      const instance = makeGooglePayInstance();
      const handler = makeGooglePayHandler({
        instanceResult: instance,
        loadPaymentDataThrows: new Error('Network error'),
      });
      (el as any).braintreeManager = makeBraintreeManager(handler);

      let errorFired = false;
      el.addEventListener('GooglePayError', () => {
        errorFired = true;
      });

      await el.startGooglePayPayment();

      expect(errorFired).to.be.true;
    });
  });
});
