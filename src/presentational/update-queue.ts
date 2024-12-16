import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@internetarchive/icon-donate/icon-donate.js';

type anUpdate = {
  message: string;
  status: 'success' | 'fail';
};

@customElement('iaux-update-queue')
export class MonthlyGivingCircle extends LitElement {
  @property({ type: Array }) updates: anUpdate[] = [];

  render() {
    if (!this.updates.length) {
      return nothing;
    }

    return html`
      <ul>
        ${this.updates.map(update => this.updateBlock(update))}
      </ul>
    `;
  }

  updateBlock(update: anUpdate) {
    const icon = update.status === 'success' ? '✓' : '✖';
    return html` <li class="${update.status}">${icon} ${update.message}</li> `;
  }

  static styles = css`
    ul {
      display: grid;
      background: rgb(238, 253, 238);
      margin: 1.5rem 0px;
      width: fit-content;
      list-style-type: none;
      padding: 0;
    }
    li {
      padding: 10px;
    }
    li.success {
      color: rgb(33, 149, 24);
      cursor: pointer;
      border-left: 5px solid rgb(33, 149, 24);
    }
    li.fail {
      color: #bb0505;
      border-left: 5px solid #bb0505;
    }
  `;
}
