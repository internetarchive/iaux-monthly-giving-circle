/* eslint-disable no-debugger */

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './welcome-message';
import './presentational/mgc-title';

@customElement('iaux-monthly-giving-circle')
export class MonthlyGivingCircle extends LitElement {
  @property({ type: String }) patronName: string = '';

  protected createRenderRoot() {
    return this;
  }

  protected render() {
    return html`
      <iaux-mgc-title titleStyle="heart"></iaux-mgc-title>
      <iaux-mgc-welcome .patronName=${this.patronName}></iaux-mgc-welcome>
    `;
  }
}
