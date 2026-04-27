export const VENMO_MGC_PENDING_KEY_PREFIX = 'venmo_mgc_pending_';
export const VENMO_MGC_PENDING_EXPIRY_MS = 60 * 60 * 1000; // 1 hour

export type VenmoMGCPendingState = {
  planId: string;
  timestamp: number;
};

/**
 * Persists a "Venmo payment in progress" flag to storage so the edit-payment
 * flow can be resumed if Venmo redirects the user back in a new browser tab.
 *
 * Mirrors the class-based pattern of `VenmoRestorationStateHandler` from
 * `iaux-donation-form` for easy porting to donation-manager.
 *
 * Accepts an optional `Storage` injection for unit testing.
 */
export class VenmoPendingStorage {
  private storage: Storage | undefined;

  constructor(storageOverride?: Storage) {
    this.storage = storageOverride ?? this.resolveStorage();
  }

  setPending(planId: string): void {
    const state: VenmoMGCPendingState = { planId, timestamp: Date.now() };
    try {
      this.storage?.setItem(
        `${VENMO_MGC_PENDING_KEY_PREFIX}${planId}`,
        JSON.stringify(state),
      );
    } catch {
      // localStorage/sessionStorage unavailable — degrade gracefully
    }
  }

  getPending(planId: string): VenmoMGCPendingState | null {
    let raw: string | null = null;
    try {
      raw =
        this.storage?.getItem(`${VENMO_MGC_PENDING_KEY_PREFIX}${planId}`) ??
        null;
    } catch {
      return null;
    }
    if (!raw) return null;
    try {
      const state = JSON.parse(raw) as VenmoMGCPendingState;
      if (Date.now() - state.timestamp > VENMO_MGC_PENDING_EXPIRY_MS) {
        this.clearPending(planId);
        return null;
      }
      return state;
    } catch {
      this.clearPending(planId);
      return null;
    }
  }

  clearPending(planId: string): void {
    try {
      this.storage?.removeItem(`${VENMO_MGC_PENDING_KEY_PREFIX}${planId}`);
    } catch {
      // noop
    }
  }

  private resolveStorage(): Storage | undefined {
    for (const s of [localStorage, sessionStorage]) {
      try {
        s.setItem('__venmo_test__', '1');
        s.removeItem('__venmo_test__');
        return s;
      } catch {
        // try next
      }
    }
    return undefined;
  }
}
