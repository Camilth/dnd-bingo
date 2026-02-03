import { LitElement, html, css } from 'lit';
import './bingo-grid/BingoGrid.js';
import './difficulty-selector/DifficultySelector.js';
import './reset-button/ResetButton.js';
import './confirmation-modal/ConfirmationModal.js';
import './winner-modal/WinnerModal.js';
import './sound-toggle/SoundToggle.js';
import './help-menu/HelpButton.js';
import './help-menu/HelpModal.js';

class DndApp extends LitElement {
    static styles = css`
        :host {
            display: flex;
            font-family: system-ui;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100vh;
            height: 100dvh;
            background: #0f172a;
            overflow: hidden;
            box-sizing: border-box;
            padding: 1rem;
        }

        .content-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
        }

        .title-container {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
        }

        h1 {
            text-align: center;
            margin: 0;
            flex-shrink: 0;
            font-size: 2.25rem;
            font-weight: 700;
            color: #f1f5f9;
            letter-spacing: -0.025em;
        }

        .title-underline {
            width: 120px;
            height: 3px;
            background: linear-gradient(90deg,
            transparent 0%,
            #3b82f6 50%,
            transparent 100%
            );
            border-radius: 2px;
        }

        .game-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        @media (max-width: 640px) {
            :host {
                padding: 0.5rem;
            }

            .content-wrapper {
                gap: 1rem;
            }

            h1 {
                font-size: 1.75rem;
            }

            .title-underline {
                width: 100px;
                height: 2.5px;
            }

            .game-container {
                gap: 0.75rem;
            }
        }

        @media (max-width: 400px) {
            :host {
                padding: 0.25rem;
            }

            .content-wrapper {
                gap: 0.75rem;
            }

            h1 {
                font-size: 1.5rem;
            }

            .title-underline {
                width: 80px;
                height: 2px;
            }

            .game-container {
                gap: 0.5rem;
            }
        }
    `;

    static properties = {
        gameStarted: { type: Boolean },
        difficulty: { type: String },
        showConfirmation: { type: Boolean },
        showWinner: { type: Boolean },
        showHelp: { type: Boolean }
    };

    constructor() {
        super();
        this.gameStarted = false;
        this.difficulty = '';
        this.showConfirmation = false;
        this.showWinner = false;
        this.showHelp = false;
    }

    connectedCallback() {
        super.connectedCallback();
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.width = '100%';
        document.body.style.height = '100%';
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }

    handleDifficultySelect(e) {
        this.difficulty = e.detail.difficulty;
        this.gameStarted = true;
    }

    handleResetRequest() {
        this.showConfirmation = true;
    }

    handleConfirmReset(e) {
        if (e.detail.confirmed) {
            this.resetGame();
        }
        this.showConfirmation = false;
    }

    handleCancelReset() {
        this.showConfirmation = false;
    }

    handleWin() {
        this.showWinner = true;
    }

    handleCloseWinner() {
        this.showWinner = false;
    }

    handlePlayAgain() {
        this.showWinner = false;
        this.resetGame();
    }

    handleHelpOpen() {
        this.showHelp = true;
    }

    handleHelpClose() {
        this.showHelp = false;
    }

    resetGame() {
        this.gameStarted = false;
        this.difficulty = '';
        this.shadowRoot.querySelector('bingo-grid')?.reset();
    }

    render() {
        return html`
            <help-button @help-requested=${this.handleHelpOpen}></help-button>
            <sound-toggle></sound-toggle>
            <div class="content-wrapper">
                <div class="title-container">
                    <h1>DnD Bingo</h1>
                    <div class="title-underline"></div>
                </div>

                <div class="game-container">
                    <bingo-grid
                            .difficulty=${this.difficulty}
                            @win=${this.handleWin}>
                    </bingo-grid>
                    ${this.gameStarted ? html`
                        <reset-button @reset-requested=${this.handleResetRequest}></reset-button>
                    ` : ''}
                </div>
            </div>

            ${!this.gameStarted ? html`
                <difficulty-selector
                        @difficulty-selected=${this.handleDifficultySelect}>
                </difficulty-selector>
            ` : ''}

            <help-modal
                    .open=${this.showHelp}
                    @close=${this.handleHelpClose}>
            </help-modal>

            <confirmation-modal
                    ?open=${this.showConfirmation}
                    @confirm=${this.handleConfirmReset}
                    @cancel=${this.handleCancelReset}>
            </confirmation-modal>

            <winner-modal
                    ?open=${this.showWinner}
                    @close=${this.handleCloseWinner}
                    @play-again=${this.handlePlayAgain}>
            </winner-modal>
        `;
    }
}

customElements.define('dnd-app', DndApp);