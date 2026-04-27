import { expect } from '@open-wc/testing';
import {
  VenmoPendingStorage,
  VENMO_MGC_PENDING_KEY_PREFIX,
  VENMO_MGC_PENDING_EXPIRY_MS,
} from '../../src/utils/venmo-pending-storage';
import { MockStorage } from '../helpers/mock-storage';

describe('VenmoPendingStorage', () => {
  const PLAN_ID = 'plan-token-abc123';
  const KEY = `${VENMO_MGC_PENDING_KEY_PREFIX}${PLAN_ID}`;

  describe('constructor', () => {
    it('accepts an injected storage', () => {
      const mock = new MockStorage();
      const storage = new VenmoPendingStorage(mock);
      storage.setPending(PLAN_ID);
      expect(mock.getItem(KEY)).to.not.be.null;
    });
  });

  describe('setPending', () => {
    it('writes JSON with planId and a recent timestamp', () => {
      const mock = new MockStorage();
      const storage = new VenmoPendingStorage(mock);
      const before = Date.now();
      storage.setPending(PLAN_ID);
      const after = Date.now();

      const raw = mock.getItem(KEY);
      expect(raw).to.not.be.null;
      const parsed = JSON.parse(raw!);
      expect(parsed.planId).to.equal(PLAN_ID);
      expect(parsed.timestamp).to.be.at.least(before);
      expect(parsed.timestamp).to.be.at.most(after);
    });

    it('does not throw when storage is unavailable', () => {
      const storage = new VenmoPendingStorage(undefined);
      // Should not throw
      expect(() => storage.setPending(PLAN_ID)).to.not.throw();
    });

    it('does not throw when setItem throws', () => {
      const throwing = {
        ...new MockStorage(),
        setItem: () => {
          throw new Error('storage full');
        },
      } as unknown as Storage;
      const storage = new VenmoPendingStorage(throwing);
      expect(() => storage.setPending(PLAN_ID)).to.not.throw();
    });
  });

  describe('getPending', () => {
    it('returns state when key exists and is fresh', () => {
      const mock = new MockStorage();
      const storage = new VenmoPendingStorage(mock);
      storage.setPending(PLAN_ID);

      const result = storage.getPending(PLAN_ID);
      expect(result).to.not.be.null;
      expect(result!.planId).to.equal(PLAN_ID);
    });

    it('returns null when key is absent', () => {
      const mock = new MockStorage();
      const storage = new VenmoPendingStorage(mock);

      expect(storage.getPending(PLAN_ID)).to.be.null;
    });

    it('returns null and clears key when expired', () => {
      const mock = new MockStorage();
      const storage = new VenmoPendingStorage(mock);
      const expiredState = {
        planId: PLAN_ID,
        timestamp: Date.now() - VENMO_MGC_PENDING_EXPIRY_MS - 1000,
      };
      mock.setItem(KEY, JSON.stringify(expiredState));

      const result = storage.getPending(PLAN_ID);
      expect(result).to.be.null;
      expect(mock.getItem(KEY)).to.be.null;
    });

    it('returns null and clears key on malformed JSON', () => {
      const mock = new MockStorage();
      const storage = new VenmoPendingStorage(mock);
      mock.setItem(KEY, 'not-valid-json{{{');

      const result = storage.getPending(PLAN_ID);
      expect(result).to.be.null;
      expect(mock.getItem(KEY)).to.be.null;
    });

    it('returns null when storage getItem throws', () => {
      const throwingStorage = {
        ...new MockStorage(),
        getItem: () => {
          throw new Error('storage unavailable');
        },
      } as unknown as Storage;
      const storage = new VenmoPendingStorage(throwingStorage);
      expect(storage.getPending(PLAN_ID)).to.be.null;
    });
  });

  describe('clearPending', () => {
    it('removes the key from storage', () => {
      const mock = new MockStorage();
      const storage = new VenmoPendingStorage(mock);
      storage.setPending(PLAN_ID);
      expect(mock.getItem(KEY)).to.not.be.null;

      storage.clearPending(PLAN_ID);
      expect(mock.getItem(KEY)).to.be.null;
    });

    it('does not throw when key does not exist', () => {
      const mock = new MockStorage();
      const storage = new VenmoPendingStorage(mock);
      expect(() => storage.clearPending(PLAN_ID)).to.not.throw();
    });

    it('does not throw when storage is unavailable', () => {
      const storage = new VenmoPendingStorage(undefined);
      expect(() => storage.clearPending(PLAN_ID)).to.not.throw();
    });
  });
});
