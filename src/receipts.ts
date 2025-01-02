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

type donationEmailStatusMapType = {
  [id: string]: donationEmailStatus;
};

@customElement('iaux-mgc-receipts')
export class IauxMgcReceipts extends LitElement {
  @property({ type: Array }) receipts = [];

  @property({ type: Object })
  donationEmailStatusMap: donationEmailStatusMapType | null = null;

  shouldUpdate(changed: PropertyValues) {
    if (changed.has('donationEmailStatusMap')) {
      return true;
    }
    return true;
  }

  updated(changed: PropertyValues) {
    if (changed.has('receipts')) {
      this.updateReceiptSentMap();
    }
  }

  updateReceiptSentMap() {
    if (!this.receipts.length) {
      this.donationEmailStatusMap = null;
    } else {
      const donationEmailStatusMap: donationEmailStatusMapType = {};
      this.receipts.forEach((donation: donation) => {
        donationEmailStatusMap[donation.id] = {
          id: donation.id,
          emailStatus: '',
        };
      });
      this.donationEmailStatusMap = donationEmailStatusMap;
    }
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
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December',
    };

    const displayMonth = monthMap[month];
    return `${displayMonth} ${day}, ${year}`;
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

  public emailSent(receiptEmailed: donationEmailStatus) {
    const statusMap = {
      ...this.donationEmailStatusMap,
    } as donationEmailStatusMapType;
    const { id } = receiptEmailed;
    statusMap[id] = receiptEmailed;
    this.donationEmailStatusMap = statusMap;
    // this.requestUpdate();
  }

  emailStatusMessageToDisplay(donationSentStatus: donationEmailStatus): string {
    switch (donationSentStatus.emailStatus) {
      case 'success':
        return 'Email sent';
      case 'fail':
        return 'Email did not send';
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
            <th class="status">Status</th>
            <th class="action">Action</th>
          </tr>
          ${this.receipts.length
            ? this.receipts.map((donation: donation) => {
                const emailStatus = this.donationEmailStatusMap?.[donation.id];

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
                    <td class="status">
                      <div class="donation-status">${donation.status}</div>
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
                              if (this.donationEmailStatusMap) {
                                const statusMap = {
                                  ...this.donationEmailStatusMap,
                                } as donationEmailStatusMapType;
                                statusMap[donation.id].emailStatus = 'pending';
                                this.donationEmailStatusMap = statusMap;
                                console.log(
                                  'this.donationEmailStatusMap',
                                  this.donationEmailStatusMap
                                );
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

    th.date {
      width: 110px;
    }
    th.amount {
      width: 80px;
    }
    th.status {
      width: 70px;
    }
    th.action {
      width: 200px;
    }
    iaux-button-style {
      display: inline-block;
      padding-right: 5px;
    }
    .sent-status.success {
      color: rgb(33, 149, 24);
      cursor: pointer;
      border-left: 5px solid rgb(33, 149, 24);
    }
    .sent-status.fail {
      color: #bb0505;
      border-left: 5px solid #bb0505;
    }
  `;
}
