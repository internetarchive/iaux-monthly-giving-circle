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
});
