import { LitElement, html } from 'lit';
import { HelpModalCss } from './css/HelpModal.css.js';
import { soundManager } from '../SoundManager.js';

class HelpModal extends LitElement {
    static styles = HelpModalCss;

    static properties = {
        open: { type: Boolean },
        currentPage: { type: Number, state: true },
        touchStartX: { type: Number, state: true },
        touchEndX: { type: Number, state: true }
    };

    constructor() {
        super();
        this.open = false;
        this.currentPage = 0;
        this.pages = [
            'intro',
            'rules',
        ];
        this.touchStartX = 0;
        this.touchEndX = 0;
    }

    updated(changedProperties) {
        if (changedProperties.has('open') && this.open) {
            this.currentPage = 0;
        }
    }

    handleClose() {
        soundManager.play('click');
        this.dispatchEvent(new CustomEvent('close', {
            bubbles: true,
            composed: true
        }));
    }

    handleBackdropClick(e) {
        if (e.target === e.currentTarget) {
            this.handleClose();
        }
    }

    nextPage() {
        soundManager.play('click');
        if (this.currentPage < this.pages.length - 1) {
            this.currentPage++;
        }
    }

    prevPage() {
        soundManager.play('click');
        if (this.currentPage > 0) {
            this.currentPage--;
        }
    }

    handleTouchStart(e) {
        this.touchStartX = e.changedTouches[0].screenX;
    }

    handleTouchEnd(e) {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
    }

    handleSwipe() {
        const swipeThreshold = 75; // Minimum swipe distance in pixels
        const difference = this.touchStartX - this.touchEndX;

        if (Math.abs(difference) > swipeThreshold) {
            if (difference > 0) {
                // Swipe left - next page
                this.nextPage();
            } else {
                // Swipe right - previous page
                this.prevPage();
            }
        }
    }

    renderPage() {
        switch(this.pages[this.currentPage]) {
            case 'intro':
                return html`
                    <section>
                        <h3>What is DnD Bingo?</h3>
                        <p>DnD Bingo is supposed to be played while in a DnD session.</p>
                        <br>
                        <p>Pay attention during your DnD session and cross events off your bingo card.</p>
                        <br>
                        <p>When you get <strong>Bingo</strong> you win.</p>
                    </section>
                `;

            case 'rules':
                return html`
                    <section>
                        <h3>Rules</h3>
                        <ol>
                            <li><strong>Choose your difficulty:</strong>
                                <ul>
                                    <li><span class="badge green">I</span> Single Row - 1 row to get bingo</li>
                                    <li><span class="badge orange">II</span> Double Row - 2 rows to get bingo</li>
                                    <li><span class="badge red">III</span> Full Card - All boxes to get bingo</li>
                                </ul>
                            </li>
                            <li><strong>Start a DnD session</li>
                            <li><strong>Pay attention and cross off events from your card</li>
                            <li><strong>Bingo!</strong> when you reach your difficulty goal</li>
                        </ol>
                    </section>
                `;
        }
    }

    render() {
        if (!this.open) return html``;

        return html`
            <div class="backdrop" @click=${this.handleBackdropClick}>
                <div class="modal">
                    <button class="close-btn" @click=${this.handleClose} aria-label="Sluiten">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div class="icon-container">
                        <svg class="help-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                        </svg>
                    </div>

                    <h2>DnD Bingo explained</h2>

                    <div 
                        class="content"
                        @touchstart=${this.handleTouchStart}
                        @touchend=${this.handleTouchEnd}
                    >
                        ${this.renderPage()}
                    </div>

                    <div class="pagination">
                        <button 
                            class="nav-btn" 
                            @click=${this.prevPage}
                            ?disabled=${this.currentPage === 0}
                            aria-label="Previous page"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div class="page-indicator">
                            ${this.pages.map((_, index) => html`
                                <span class="dot ${index === this.currentPage ? 'active' : ''}"></span>
                            `)}
                        </div>

                        <button 
                            class="nav-btn" 
                            @click=${this.nextPage}
                            ?disabled=${this.currentPage === this.pages.length - 1}
                            aria-label="Next page"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <button class="btn-close-bottom" @click=${this.handleClose}>
                        Understood, let's play!
                    </button>
                </div>
            </div>
        `;
    }
}

customElements.define('help-modal', HelpModal);