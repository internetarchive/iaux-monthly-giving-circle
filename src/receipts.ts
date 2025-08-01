/* eslint-disable no-console */
import { LitElement, html, css, PropertyValues, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Receipt } from './models/receipt';

import './presentational/mgc-button';
import type { MGCButton } from './presentational/mgc-button';

type ReceiptEmailStatus = {
  id: string;
  emailStatus: 'success' | 'fail' | 'pending' | '';
};

type receiptDispatcherMap = {
  [id: string]: ReceiptEmailStatus;
};

@customElement('ia-mgc-receipts')
export class IauxMgcReceipts extends LitElement {
  @property({ type: Array }) receipts = [];

  @property({ type: Object })
  receiptDispatcher: receiptDispatcherMap | null = null;

  shouldUpdate(changed: PropertyValues) {
    if (changed.has('receiptDispatcher')) {
      return true;
    }
    return false;
  }

  updated(changed: PropertyValues) {
    if (changed.has('receipts')) {
      this.updateReceiptSentMap();
    }
    if (changed.has('receiptDispatcher')) {
      console.log('receiptDispatcher UPDATED ---- ', this.receiptDispatcher);
    }
  }

  updateReceiptSentMap() {
    if (!this.receipts.length) {
      this.receiptDispatcher = null;
    } else {
      const receiptDispatcher: receiptDispatcherMap = {};
      this.receipts.forEach((receipt: Receipt) => {
        receiptDispatcher[receipt.id] = {
          id: receipt.id,
          emailStatus: '',
        };
      });
      this.receiptDispatcher = receiptDispatcher;
    }
  }

  emailReceipt(receipt: Receipt) {
    this.dispatchEvent(
      new CustomEvent('EmailReceiptRequest', {
        detail: {
          donation: receipt,
        },
      })
    );
  }

  /** callback that confirms status of an receipt email request  */
  async emailSent(receiptEmailed: ReceiptEmailStatus) {
    const currStatusMap = this.receiptDispatcher;
    this.receiptDispatcher = null;
    await this.updateComplete;
    const statusMap = {
      ...currStatusMap,
    } as receiptDispatcherMap;
    const { id } = receiptEmailed;
    statusMap[id] = receiptEmailed;

    this.receiptDispatcher = { ...statusMap };
    console.log(
      'RECEIPTS -- emailSent',
      this.receiptDispatcher,
      receiptEmailed
    );

    // re-enable email request button
    const escapedId = CSS.escape(id);
    const button = this.shadowRoot?.querySelector(
      `#donation-${escapedId} ia-mgc-button`
    ) as MGCButton;
    button.isDisabled = false;
  }

  /* renderings */
  emailStatusMessageToDisplay(receiptSentStatus: ReceiptEmailStatus): string {
    switch (receiptSentStatus.emailStatus) {
      case 'success':
        return 'Sent';
      case 'fail':
        return 'Failed';
      default:
        return '';
    }
  }

  ctaButtonText(donation: Receipt, emailStatus?: ReceiptEmailStatus) {
    if (emailStatus?.emailStatus === 'pending') {
      return 'Sending...';
    }

    return 'Email receipt';
  }

  protected render() {
    return html`
      <section id="recent-donations-list">
        <table>
          <tr>
            <th class="date">Date</th>
            <th class="amount">Amount</th>
            <th class="action">Action</th>
          </tr>
          ${this.receipts.length
            ? this.receipts.map((donation: Receipt) => {
                const emailStatus = this.receiptDispatcher?.[donation.id];

                const emailUnavailable = emailStatus?.emailStatus === 'pending';
                const emailStatusToDisplay =
                  !emailStatus || !emailStatus.emailStatus
                    ? nothing
                    : html`<ia-mgc-update-status
                        .status=${emailStatus.emailStatus}
                        >${this.emailStatusMessageToDisplay(
                          emailStatus
                        )}</ia-mgc-update-status
                      >`;
                return html`
                  <tr
                    id=${`donation-${donation.id}`}
                    class=${`${donation.isTest ? 'test' : ''}`}
                  >
                    <td>
                      <div class="donation-date">${donation.date}</div>
                    </td>
                    <td>
                      <div class="donation-amount">
                        ${donation.amountFormatted}
                      </div>
                    </td>
                    <td>
                      <div class="request-receipt">
                        <ia-mgc-button
                          class="link slim"
                          style="--link-button-flex-align-items: center;"
                          .clickHandler=${async (
                            event: Event,
                            MGCButton: MGCButton
                          ) => {
                            const initialClick = !emailUnavailable;
                            if (initialClick) {
                              // eslint-disable-next-line no-param-reassign
                              MGCButton.isDisabled = true;
                              await MGCButton.updateComplete;
                            }

                            if (emailUnavailable) return;
                            this.emailReceipt(donation);
                            if (this.receiptDispatcher) {
                              const statusMap = {
                                ...this.receiptDispatcher,
                              } as receiptDispatcherMap;
                              statusMap[donation.id].emailStatus = 'pending';
                              this.receiptDispatcher = statusMap;
                            }
                          }}
                        >
                          ${this.ctaButtonText(donation, emailStatus)}
                        </ia-mgc-button>
                        ${emailStatusToDisplay}
                      </div>
                    </td>
                  </tr>
                `;
              })
            : html`<p>No recent donations found</p>`}
        </table>
      </section>
    `;
  }

  static styles = css`
    table {
      text-align: left;
      table-layout: fixed;
      min-width: 600px;
    }

    button {
      padding: 1rem 0;
    }

    td {
      padding: 0;
    }

    th.date {
      width: 55px;
    }
    th.amount {
      width: 55px;
    }
    th.action {
      width: 200px;
    }
    ia-mgc-button-style {
      display: inline-block;
    }

    .request-receipt {
      display: flex;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
    }
  `;
}
