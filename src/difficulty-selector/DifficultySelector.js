import { LitElement, html } from 'lit';
import { DifficultySelectorCss } from './css/DifficultySelector.css.js';
import { TouchEffectsMixin } from '../TouchEffects.css.js';
import { soundManager } from '../SoundManager.js';

class DifficultySelector extends LitElement {
    static styles = [DifficultySelectorCss, TouchEffectsMixin];

    static properties = {
        pressingButton: { type: String, state: true }
    };

    constructor() {
        super();
        this.pressingButton = null;
    }

    selectDifficulty(difficulty) {
        soundManager.play('click');
        this.dispatchEvent(new CustomEvent('difficulty-selected', {
            detail: { difficulty },
            bubbles: true,
            composed: true
        }));
    }

    handleTouchStart(difficulty) {
        this.pressingButton = difficulty;
    }

    handleTouchEnd() {
        this.pressingButton = null;
    }

    render() {
        return html`
            <div class="backdrop">
                <div class="modal" data-nosnippet>
                    <h1>Welkom bij Dashcam Bingo</h1>
                    
                    <h2 class="subtitle">Kies je moeilijkheidsgraad en streep verkeersgekte af</h2>

                    <div class="buttons">
                        <button
                                class="difficulty-btn touch-interactive ${this.pressingButton === 'single' ? 'pressing' : ''}"
                                @click=${() => this.selectDifficulty('single')}
                                @touchstart=${() => this.handleTouchStart('single')}
                                @touchend=${this.handleTouchEnd}
                                @touchmove=${this.handleTouchEnd}
                                @touchcancel=${this.handleTouchEnd}
                                @contextmenu=${(e) => e.preventDefault()}
                        >
                            <div class="icon-wrapper icon-wrapper-green">
                                <svg class="icon" viewBox="0 0 28 28">
                                    <!-- Eerste rij - gevuld (wit) -->
                                    <circle cx="6" cy="6" r="2.5" fill="white"/>
                                    <circle cx="14" cy="6" r="2.5" fill="white"/>
                                    <circle cx="22" cy="6" r="2.5" fill="white"/>

                                    <!-- Tweede rij - leeg (donkerder groen met opacity) -->
                                    <circle cx="6" cy="14" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="14" cy="14" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="22" cy="14" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>

                                    <!-- Derde rij - leeg (donkerder groen met opacity) -->
                                    <circle cx="6" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="14" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="22" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                </svg>
                            </div>
                            <span class="title">Enkele Rij</span>
                            <span class="description">Win door 1 rij horizontaal, verticaal of diagonaal helemaal af te vinken</span>
                        </button>

                        <button
                                class="difficulty-btn touch-interactive ${this.pressingButton === 'double' ? 'pressing' : ''}"
                                @click=${() => this.selectDifficulty('double')}
                                @touchstart=${() => this.handleTouchStart('double')}
                                @touchend=${this.handleTouchEnd}
                                @touchmove=${this.handleTouchEnd}
                                @touchcancel=${this.handleTouchEnd}
                                @contextmenu=${(e) => e.preventDefault()}
                        >
                            <div class="icon-wrapper icon-wrapper-orange">
                                <svg class="icon" viewBox="0 0 28 28">
                                    <!-- Eerste rij - gevuld (wit) -->
                                    <circle cx="6" cy="6" r="2.5" fill="white"/>
                                    <circle cx="14" cy="6" r="2.5" fill="white"/>
                                    <circle cx="22" cy="6" r="2.5" fill="white"/>

                                    <!-- Tweede rij - gevuld (wit) -->
                                    <circle cx="6" cy="14" r="2.5" fill="white"/>
                                    <circle cx="14" cy="14" r="2.5" fill="white"/>
                                    <circle cx="22" cy="14" r="2.5" fill="white"/>

                                    <!-- Derde rij - leeg (donkerder blauw met opacity) -->
                                    <circle cx="6" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="14" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="22" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                </svg>
                            </div>
                            <span class="title">Dubbele Rij</span>
                            <span class="description">Win door 2 rijen horizontaal, verticaal of diagonaal helemaal af te vinken</span>
                        </button>

                        <button
                                class="difficulty-btn touch-interactive ${this.pressingButton === 'full' ? 'pressing' : ''}"
                                @click=${() => this.selectDifficulty('full')}
                                @touchstart=${() => this.handleTouchStart('full')}
                                @touchend=${this.handleTouchEnd}
                                @touchmove=${this.handleTouchEnd}
                                @touchcancel=${this.handleTouchEnd}
                                @contextmenu=${(e) => e.preventDefault()}
                        >
                            <div class="icon-wrapper icon-wrapper-red">
                                <svg class="icon" viewBox="0 0 28 28">
                                    <!-- Alle rijen - gevuld (wit) -->
                                    <circle cx="6" cy="6" r="2.5" fill="white"/>
                                    <circle cx="14" cy="6" r="2.5" fill="white"/>
                                    <circle cx="22" cy="6" r="2.5" fill="white"/>

                                    <circle cx="6" cy="14" r="2.5" fill="white"/>
                                    <circle cx="14" cy="14" r="2.5" fill="white"/>
                                    <circle cx="22" cy="14" r="2.5" fill="white"/>

                                    <circle cx="6" cy="22" r="2.5" fill="white"/>
                                    <circle cx="14" cy="22" r="2.5" fill="white"/>
                                    <circle cx="22" cy="22" r="2.5" fill="white"/>
                                </svg>
                            </div>
                            <span class="title">Volle Kaart</span>
                            <span class="description">Win door alle vakjes op de kaart af te vinken</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('difficulty-selector', DifficultySelector);