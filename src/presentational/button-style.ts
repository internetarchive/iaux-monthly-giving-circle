import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@internetarchive/icon-donate/icon-donate.js';

@customElement('iaux-button-style')
export class MonthlyGivingCircle extends LitElement {
  @property({ type: String }) styleType: 'primary' | 'danger' | 'text' =
    'primary';

  render() {
    return html`<slot></slot>`;
  }

  static styles = css`
    ::slotted(button) {
      height: 30px;
      border: none;
      cursor: pointer;
      color: #fff;
      line-height: normal;
      border-radius: 0.4rem;
      text-align: center;
      vertical-align: middle;
      /* font-size: 1rem; */
      display: inline-block;
      padding: 0.6rem 1.2rem;
      border: 1px solid transparent;

      white-space: nowrap;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -o-user-select: none;
      user-select: none;
    }

    ::slotted(button:disabled),
    ::slotted(button.disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }

    ::slotted(button).transparent {
      background-color: transparent;
    }

    ::slotted(button).slim {
      padding: 0;
    }

    ::slotted(button.primary) {
      background-color: #194880;
      border-color: #c5d1df;
    }

    ::slotted(button.secondary) {
      background: #333;
    }

    ::slotted(button.cancel) {
      background-color: #e51c26;
      border-color: #f8c6c8;
    }

    ::slotted(button.link) {
      color: #4b64ff;
      border: none;
      background: transparent;
      display: flex;
      align-items: flex-end;
      padding: 0;
    }
  `;
}
