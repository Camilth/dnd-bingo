import { LitElement, html } from 'lit';
import { WinnerModalCss } from './css/WinnerModal.css.js';
import { TouchEffectsMixin } from '../TouchEffects.css.js';
import { soundManager } from '../SoundManager.js';

class WinnerModal extends LitElement {
    static styles = [WinnerModalCss, TouchEffectsMixin];

    static properties = {
        open: { type: Boolean },
        pressingButton: { type: String, state: true }
    };

    constructor() {
        super();
        this.open = false;
        this.pressingButton = null;
    }

    handleClose() {
        soundManager.play('click');
        this.dispatchEvent(new CustomEvent('close', {
            bubbles: true,
            composed: true
        }));
    }

    handlePlayAgain() {
        soundManager.play('click');
        this.dispatchEvent(new CustomEvent('play-again', {
            bubbles: true,
            composed: true
        }));
    }

    handleBackdropClick(e) {
        if (e.target === e.currentTarget) {
            this.handleClose();
        }
    }

    handleTouchStart(button) {
        this.pressingButton = button;
    }

    handleTouchEnd() {
        this.pressingButton = null;
    }

    render() {
        if (!this.open) return html``;

        return html`
            <div class="backdrop" @click=${this.handleBackdropClick}>
                <div class="modal">
                    <div class="icon-container">
                        <div class="trophy-icon">🏆</div>
                    </div>
                    
                    <h2>BINGO!</h2>
                    <p class="congrats">Gefeliciteerd! Je hebt gewonnen!</p>
                    
                    <div class="buttons">
                        <button 
                            class="btn btn-view touch-interactive ${this.pressingButton === 'view' ? 'pressing' : ''}"
                            @click=${this.handleClose}
                            @touchstart=${() => this.handleTouchStart('view')}
                            @touchend=${this.handleTouchEnd}
                            @touchmove=${this.handleTouchEnd}
                            @contextmenu=${(e) => e.preventDefault()}
                        >
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span>Open Kaart</span>
                        </button>
                        <button 
                            class="btn btn-play-again touch-interactive ${this.pressingButton === 'play-again' ? 'pressing' : ''}"
                            @click=${this.handlePlayAgain}
                            @touchstart=${() => this.handleTouchStart('play-again')}
                            @touchend=${this.handleTouchEnd}
                            @touchmove=${this.handleTouchEnd}
                            @contextmenu=${(e) => e.preventDefault()}
                        >
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span>Opnieuw Spelen</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('winner-modal', WinnerModal);