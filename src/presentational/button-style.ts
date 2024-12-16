import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@internetarchive/icon-donate/icon-donate.js';

@customElement('iaux-button-style')
export class MonthlyGivingCircle extends LitElement {
  @property({ type: String }) styleType: 'primary' | 'danger' | 'text' =
    'primary';

  render() {
    return html`<slot buttonStyle=${this.styleType}></slot>`;
  }

  static styles = css`
    ::slotted(*) {
      height: 30px;
      border: none;
      cursor: pointer;
      color: #fff;
      line-height: normal;
      border-radius: 0.4rem;
      text-align: center;
      vertical-align: middle;
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

    :host(.disabled) ::slotted(*:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }

    :host(.transparent) ::slotted(*) {
      background-color: transparent;
    }

    :host(.slim) ::slotted(*) {
      padding: 0;
    }

    :host(.primary) ::slotted(*) {
      background-color: #194880;
      border-color: #c5d1df;
    }

    :host(.secondary) ::slotted(*) {
      background: #333;
    }

    :host(.cancel) ::slotted(*) {
      background-color: #e51c26;
      border-color: #f8c6c8;
    }

    :host(.link) ::slotted(*) {
      color: #4b64ff;
      border: none;
      background: transparent;
      display: flex;
      align-items: flex-end;
      padding: 0;
    }
  `;
}
