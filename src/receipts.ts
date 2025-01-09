/* eslint-disable no-console */
import { LitElement, html, css, PropertyValues, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import './presentational/button-style';

type donation = {
  status: string;
  amount: number;
  date: string;
  id: string;
};

type donationEmailStatus = {
  id: string;
  emailStatus: 'success' | 'fail' | 'pending' | '';
};

type receiptDispatcherMap = {
  [id: string]: donationEmailStatus;
};

@customElement('iaux-mgc-receipts')
export class IauxMgcReceipts extends LitElement {
  @property({ type: Array }) receipts = [];

  @property({ type: Object })
  receiptDispatcher: receiptDispatcherMap | null = null;

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
      this.receipts.forEach((donation: donation) => {
        receiptDispatcher[donation.id] = {
          id: donation.id,
          emailStatus: '',
        };
      });
      this.receiptDispatcher = receiptDispatcher;
    }
  }

  emailReceipt(donation: donation) {
    this.dispatchEvent(
      new CustomEvent('EmailReceiptRequest', {
        detail: {
          donation,
        },
      })
    );
  }

  donationAmountFormatted(amount: number) {
    return `USD $${amount}`;
  }

  dateFormatted(date: string) {
    const splitDate = date.split('-');
    const year = splitDate[0];
    const month = parseInt(splitDate[1], 10);
    const day = splitDate[2];

    const monthMap: { [key: number]: string } = {
      1: 'JAN',
      2: 'FEB',
      3: 'MAR',
      4: 'APR',
      5: 'MAY',
      6: 'JUN',
      7: 'JUL',
      8: 'AUG',
      9: 'SEP',
      10: 'OCT',
      11: 'NOV',
      12: 'DEC',
    };

    const displayMonth = monthMap[month];
    return `${displayMonth} ${day}, ${year}`;
  }

  /** callback that confirms status of an receipt email request  */
  async emailSent(receiptEmailed: donationEmailStatus) {
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
  }

  /* renderings */
  emailStatusMessageToDisplay(donationSentStatus: donationEmailStatus): string {
    switch (donationSentStatus.emailStatus) {
      case 'success':
        return '✓ Sent';
      case 'fail':
        return '✖ Failed';
      default:
        return '';
    }
  }

  ctaButtonText(donation: donation, emailStatus?: donationEmailStatus) {
    if (donation.status === 'pending') {
      return 'Unavailable';
    }

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
            ? this.receipts.map((donation: donation) => {
                const emailStatus = this.receiptDispatcher?.[donation.id];

                const emailUnavailable =
                  emailStatus?.emailStatus === 'pending' ||
                  donation.status === 'pending';
                const emailStatusToDisplay =
                  !emailStatus || !emailStatus.emailStatus
                    ? nothing
                    : html`<span
                        class=${`sent-status ${emailStatus.emailStatus}`}
                        >${this.emailStatusMessageToDisplay(emailStatus)}</span
                      >`;
                return html`
                  <tr id=${`donation-${donation.id}`}>
                    <td>
                      <div class="donation-date">
                        ${this.dateFormatted(donation.date)}
                      </div>
                    </td>
                    <td>
                      <div class="donation-amount">
                        ${this.donationAmountFormatted(donation.amount)}
                      </div>
                    </td>
                    <td>
                      <div class="request-receipt">
                        <iaux-button-style
                          class=${classMap({
                            disabled: emailUnavailable,
                            link: 'true',
                          })}
                        >
                          <button
                            @click=${(e: Event) => {
                              (e.target as HTMLButtonElement).disabled = true;
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
                            ?disabled=${emailUnavailable}
                          >
                            ${this.ctaButtonText(donation, emailStatus)}
                          </button>
                        </iaux-button-style>
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
    iaux-button-style {
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

    .sent-status.success,
    .sent-status.fail {
      padding: 5px;
      background: rgb(238, 253, 238);
      width: 55px;
      min-height: 20px;
    }
    .sent-status.success {
      color: rgb(33, 149, 24);
      border-left: 5px solid rgb(33, 149, 24);
    }
    .sent-status.fail {
      color: #bb0505;
      border-left: 5px solid #bb0505;
    }
  `;
}
