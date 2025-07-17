import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './mgc-button';
import type { MGCButton } from './mgc-button';

@customElement('ia-mgc-form-section-info')
export class MGCFormSectionInfo extends LitElement {
  protected render() {
    return html`
      <div class="mgc-donation-section-info">
        <p><slot></slot></p>
        <ia-mgc-button
          class="ia-button link"
          .clickHandler=${(_event: Event, iaButton: MGCButton) => {
            // eslint-disable-next-line no-param-reassign
            iaButton.isDisabled = true;
            this.dispatchEvent(new Event('editingRequested'));
          }}
        >
          Edit...
        </ia-mgc-button>
      </div>
    `;
  }
}
