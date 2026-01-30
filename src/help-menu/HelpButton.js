// components/HelpButton.js
import { LitElement, html } from 'lit';
import { HelpButtonCss } from './css/HelpButton.css.js';
import { soundManager } from '../SoundManager.js';

class HelpButton extends LitElement {
    static styles = HelpButtonCss;

    static properties = {
        pressing: { type: Boolean, state: true }
    };

    constructor() {
        super();
        this.pressing = false;
    }

    handleClick() {
        soundManager.play('click');
        this.dispatchEvent(new CustomEvent('help-requested', {
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

    handleTouchCancel() {
        this.pressing = false;
    }

    render() {
        return html`
            <button 
                class="${this.pressing ? 'pressing' : ''}"
                @click=${this.handleClick}
                @touchstart=${this.handleTouchStart}
                @touchend=${this.handleTouchEnd}
                @touchmove=${this.handleTouchEnd}
                @touchcancel=${this.handleTouchCancel}
                @contextmenu=${(e) => e.preventDefault()}
                title="Hoe werkt het spel?"
                aria-label="Help"
            >
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        `;
    }
}

customElements.define('help-button', HelpButton);