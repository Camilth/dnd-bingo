import { LitElement, html } from 'lit';
import { ConfirmationModalCss } from './css/ConfirmationModal.css.js';
import '../TouchEffects.css.js';
import {TouchEffectsMixin} from "../TouchEffects.css.js";
import { soundManager } from '../SoundManager.js';

class ConfirmationModal extends LitElement {
    static styles = [ConfirmationModalCss, TouchEffectsMixin];

    static properties = {
        open: { type: Boolean },
        pressingButton: { type: String, state: true }
    };

    constructor() {
        super();
        this.open = false;
        this.pressingButton = null;
    }

    handleConfirm() {
        soundManager.play('click');
        this.dispatchEvent(new CustomEvent('confirm', {
            detail: { confirmed: true },
            bubbles: true,
            composed: true
        }));
    }

    handleCancel() {
        soundManager.play('click');
        this.dispatchEvent(new CustomEvent('cancel', {
            bubbles: true,
            composed: true
        }));
    }

    handleBackdropClick(e) {
        if (e.target === e.currentTarget) {
            this.handleCancel();
        }
    }

    handleTouchStart(buttonName) {
        this.pressingButton = buttonName;
    }

    handleTouchEnd() {
        this.pressingButton = null;
    }

    render() {
        if (!this.open) return html``;

        return html`
      <div class="backdrop" @click=${this.handleBackdropClick}>
        <div class="modal">
          <h3>Are you sure?</h3>
          <p>Your current progress will be lost and the game will reset.</p>
          
          <div class="buttons">
            <button 
                class="btn btn-cancel touch-interactive ${this.pressingButton === 'cancel' ? 'pressing' : ''}"
                @click=${this.handleCancel}
                @touchstart=${() => this.handleTouchStart('cancel')}
                @touchend=${this.handleTouchEnd}
                @touchmove=${this.handleTouchEnd}
                @contextmenu=${(e) => e.preventDefault()}
            >
                No, cancel
            </button>
            <button 
                class="btn btn-confirm touch-interactive ${this.pressingButton === 'confirm' ? 'pressing' : ''}"
                @click=${this.handleConfirm}
                @touchstart=${() => this.handleTouchStart('confirm')}
                @touchend=${this.handleTouchEnd}
                @touchmove=${this.handleTouchEnd}
                @contextmenu=${(e) => e.preventDefault()}
            >
                Yes, start over
            </button>
          </div>
        </div>
      </div>
    `;
    }
}

customElements.define('confirmation-modal', ConfirmationModal);