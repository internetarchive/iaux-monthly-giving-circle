import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../presentational/ia-button';
import type { IauxButton } from '../presentational/ia-button';

@customElement('ia-mgc-form-section-info')
export class MGCFormSectionInfo extends LitElement {
  protected render() {
    return html`
      <div class="mgc-donation-section-info">
        <p><slot></slot></p>
        <ia-button
          class="ia-button link"
          .clickHandler=${(_event: Event, iaButton: IauxButton) => {
            // eslint-disable-next-line no-param-reassign
            iaButton.isDisabled = true;
            this.dispatchEvent(new Event('editingRequested'));
          }}
        >
          Edit...
        </ia-button>
      </div>
    `;
  }
}
