import { LitElement, html, css, TemplateResult, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@internetarchive/icon-donate/icon-donate.js';

@customElement('iaux-mgc-title')
export class MonthlyGivingCircle extends LitElement {
  @property({ type: String }) titleStyle: 'heart' | 'default' = 'heart';

  get heart(): TemplateResult | typeof nothing {
    return this.titleStyle === 'heart'
      ? html` <div class="icon-donate"><ia-icon-donate></ia-icon-donate></div> `
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
    :host {
      padding-bottom: 5px;
      display: block;
    }

    h2 {
      font-size: 1.5em;
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
    }

    h2 .icon-donate {
      --iconFillColor: red;
      --iconWidth: 1.2em;
      --iconHeight: 1.2em;
    }

    slot[name='action'] {
      padding: 0 !important;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
  `;
}
