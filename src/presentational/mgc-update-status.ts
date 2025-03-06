import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ia-mgc-update-status')
export class MGCUpdateStatus extends LitElement {
  @property({ type: String }) status: 'success' | 'fail' | '' = '';

  get glyph() {
    if (this.status === 'success') {
      return '✓';
    }
    if (this.status === 'fail') {
      return '✖';
    }
    return '';
  }

  render() {
    if (!this.status) {
      return nothing;
    }

    return html`
      <span class="sent-status ${this.status}"
        >${this.glyph} <slot></slot
      ></span>
    `;
  }

  static styles = css`
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
