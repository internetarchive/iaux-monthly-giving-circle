import { LitElement, html, css, TemplateResult, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import iconDonate from '@internetarchive/icon-donate/index.js';

@customElement('iaux-mgc-title')
export class MonthlyGivingCircle extends LitElement {
  @property({ type: String }) titleStyle: 'heart' | 'default' = 'heart';

  get heart(): TemplateResult | typeof nothing {
    // const heart = html`${iconDonate}`;

    return this.titleStyle === 'heart'
      ? html`
          <div class="icon-donate">${iconDonate}</div>
          <span>Monthly Giving Circle</span>
        `
      : nothing;
  }

  render() {
    return html`
      <div>
        <h2>
          <div class="title-section">
            ${this.heart}
            <slot name="title"></slot>
          </div>
          <slot name="action"></slot>
        </h2>
      </div>
    `;
  }

  static styles = css`
    h2 {
      font-size: 1.5rem;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      margin: 0;
      justify-content: space-between;
      gap: 10px;
      align-items: flex-end;
    }

    h2 .title-section {
      width: 100%;
      display: flex;
    }

    h2 .icon-donate {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: flex-end;
      align-items: center;
      justify-content: flex-start;
      width: 2rem;
    }

    h2 .icon-donate .fill-color {
      fill: red;
    }

    slot[name='action'] {
      font-size: 1rem;
      padding: 0 !important;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
  `;
}