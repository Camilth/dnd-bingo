import { LitElement, html } from 'lit';
import { ResetButtonCss } from './css/ResetButton.css.js';
import { TouchEffectsMixin } from '../TouchEffects.css.js';
import { soundManager } from '../SoundManager.js';

class ResetButton extends LitElement {
    static styles = [ResetButtonCss, TouchEffectsMixin];

    static properties = {
        pressing: { type: Boolean, state: true }
    };

    constructor() {
        super();
        this.pressing = false;
    }

    handleClick() {
        soundManager.play('click');
        this.dispatchEvent(new CustomEvent('reset-requested', {
            bubbles: true,
            composed: true
        }));
    }

    handleTouchStart() {
        this.pressing = true;
    }

    handleTouchEnd() {
        this.pressing = false;
    }

    render() {
        return html`
            <button 
                class="reset-btn touch-interactive ${this.pressing ? 'pressing' : ''}"
                @click=${this.handleClick}
                @touchstart=${this.handleTouchStart}
                @touchend=${this.handleTouchEnd}
                @touchmove=${this.handleTouchEnd}
                @contextmenu=${(e) => e.preventDefault()}
            >
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Try Again</span>
            </button>
        `;
    }
}

customElements.define('reset-button', ResetButton);