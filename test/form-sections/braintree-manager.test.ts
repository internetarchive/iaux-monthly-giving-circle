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
});
