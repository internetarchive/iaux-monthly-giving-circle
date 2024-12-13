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
                    <td>${donation.date}</td>
                    <td>${this.donationAmountFormatted(donation.amount)}</td>
                    <td class="status">${donation.status}</td>
                    <td>
                      <iaux-button-style>
                        <button
                          class="link"
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
    }
  `;
}
