import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './presentational/button-style';

type donation = {
  status: string;
  amount: number;
  date: string;
  id: string;
};

@customElement('iaux-mgc-receipts')
export class MGCWelcome extends LitElement {
  @property({ type: Array }) donations = [];

  donationAmountFormatted(amount: number) {
    return `USD ${amount}`;
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

  protected render() {
    return html`
      <section id="recent-donations-list">
        <table>
          <tr>
            <th>Donor</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          ${this.donations.length
            ? this.donations.map((donation: donation) => {
                const emailUnavailable = donation.status === 'pending';
                return html`
                  <tr id=${`donation-${donation.id}`}>
                    <td>${this.dateFormatted(donation.date)}</td>
                    <td>${this.donationAmountFormatted(donation.amount)}</td>
                    <td class="status">${donation.status}</td>
                    <td>
                      <iaux-button-style class="link">
                        <button
                          @click=${() => {
                            if (emailUnavailable) return;
                            this.emailReceipt(donation);
                          }}
                          ?disabled=${emailUnavailable}
                        >
                          ${emailUnavailable ? 'Unavailable' : 'Email receipt'}
                        </button>
                      </iaux-button-style>
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
      width: 100%;
      text-align: left;
      max-width: 600px;
    }

    button {
      padding: 1rem 0;
    }
  `;
}
