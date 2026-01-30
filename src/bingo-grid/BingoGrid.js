import { LitElement, html } from 'lit';
import { BingoGridCss } from "./css/BingoGrid.css.js";
import { soundManager } from '../SoundManager.js';

class BingoGrid extends LitElement {
    static styles = [BingoGridCss];

    static properties = {
        items: { type: Array },
        marked: { type: Set },
        difficulty: { type: String },
        hasWon: { type: Boolean },
        longPressIndex: { type: Number },
        longPressTimer: { type: Number, state: true },
        wasLongPress: { type: Boolean, state: true }
    };

    constructor() {
        super();
        this.items = [];
        this.marked = new Set([12]); // FREE square pre-marked
        this.difficulty = 'single';
        this.hasWon = false;
        this.longPressIndex = null;
        this.longPressTimer = null;
        this.wasLongPress = false;
    }

    async firstUpdated() {
        await this.loadItems();
    }

    async loadItems() {
        try {
            const response = await fetch(new URL('./temp.json', import.meta.url));
            const data = await response.json();

            // Haal willekeurige items uit elke categorie
            const easyItems = this.getRandomItems(data.easy, 10);
            const mediumItems = this.getRandomItems(data.medium, 10);
            const hardItems = this.getRandomItems(data.hard, 4);

            // Combineer alle items (totaal 24)
            const allItems = [...easyItems, ...mediumItems, ...hardItems];

            // Shuffle de items voor een willekeurige volgorde
            const shuffled = this.shuffleArray(allItems);

            // Voeg FREE toe op positie 12 (midden)
            shuffled.splice(12, 0, { title: "Gratis", description: "Gratis vakje!" });

            this.items = shuffled;
        } catch (error) {
            console.error("Failed to load bingo items:", error);
        }
    }

    getRandomItems(array, count) {
        if (!array || array.length === 0) {
            console.warn('Array is empty or undefined');
            return [];
        }

        // Als er minder items zijn dan gevraagd, return alle items
        if (array.length <= count) {
            return [...array];
        }

        // Shuffle en pak de eerste 'count' items
        const shuffled = this.shuffleArray([...array]);
        return shuffled.slice(0, count);
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    reset() {
        this.marked = new Set([12]);
        this.hasWon = false;
        this.loadItems(); // Laad nieuwe willekeurige items
        this.requestUpdate();
    }

    getTooltipClass(index) {
        // Bereken kolom positie (0-4)
        const col = index % 5;

        // Return class op basis van kolom
        if (col === 0) return 'tooltip-left';
        if (col === 1) return 'tooltip-left-center';
        if (col === 3) return 'tooltip-right-center';
        if (col === 4) return 'tooltip-right';
        return 'tooltip-center';
    }

    handlePressStart(index, event) {
        if (index === 12) return;

        this.wasLongPress = false;

        this.longPressTimer = setTimeout(() => {
            this.wasLongPress = true;
            this.longPressIndex = index;
            this.requestUpdate();
        }, 150);
    }

    handlePressEnd(index, event) {
        if (index === 12) return;

        // Clear timer
        if (this.longPressTimer) {
            clearTimeout(this.longPressTimer);
            this.longPressTimer = null;
        }

        // Verberg tooltip na korte delay zodat click event kan checken
        setTimeout(() => {
            this.longPressIndex = null;
            this.wasLongPress = false;
            this.requestUpdate();
        }, 50);
    }

    handlePressMove() {
        // Cancel long press bij bewegen
        if (this.longPressTimer) {
            clearTimeout(this.longPressTimer);
            this.longPressTimer = null;
        }

        this.longPressIndex = null;
        this.wasLongPress = false;
        this.requestUpdate();
    }

    toggleSquare(index, event) {
        if (index === 12) return;

        // Blokkeer toggle als er een long press was
        if (this.wasLongPress) {
            event.preventDefault();
            return;
        }

        if (this.marked.has(index)) {
            this.marked.delete(index);
            soundManager.play("uncheck");
        } else {
            this.marked.add(index);
            soundManager.play("check");
        }
        this.requestUpdate();
        this.checkWin();
    }

    checkWin() {
        const hasValidBingo = this.hasValidBingo();

        // Als er een geldige bingo is en we nog niet gewonnen hebben, dispatch win event
        if (hasValidBingo && !this.hasWon) {
            this.hasWon = true;
            soundManager.play("win");
            this.announceWin();
        }

        // Als er geen geldige bingo meer is, reset hasWon zodat opnieuw winnen mogelijk is
        if (!hasValidBingo && this.hasWon) {
            this.hasWon = false;
        }
    }

    hasValidBingo() {
        let requiredLines = 0;

        switch(this.difficulty) {
            case 'single':
                requiredLines = 1;
                break;
            case 'double':
                requiredLines = 2;
                break;
            case 'full':
                return this.marked.size === 25;
        }

        let completedLines = 0;

        // Check rows
        for (let i = 0; i < 5; i++) {
            const row = [i * 5, i * 5 + 1, i * 5 + 2, i * 5 + 3, i * 5 + 4];
            if (row.every(idx => this.marked.has(idx))) completedLines++;
        }

        // Check columns
        for (let i = 0; i < 5; i++) {
            const col = [i, i + 5, i + 10, i + 15, i + 20];
            if (col.every(idx => this.marked.has(idx))) completedLines++;
        }

        // Check diagonals
        const diag1 = [0, 6, 12, 18, 24];
        const diag2 = [4, 8, 12, 16, 20];
        if (diag1.every(idx => this.marked.has(idx))) completedLines++;
        if (diag2.every(idx => this.marked.has(idx))) completedLines++;

        return completedLines >= requiredLines;
    }

    announceWin() {
        this.dispatchEvent(new CustomEvent('win', {
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
            <section>
                ${this.items.map((item, index) => {
                    const isMarked = this.marked.has(index);
                    const isFree = index === 12;
                    const showTooltip = this.longPressIndex === index;
                    const title = typeof item === 'string' ? item : item.title;
                    const description = typeof item === 'string' ? '' : item.description;
                    const tooltipClass = this.getTooltipClass(index);

                    return html`
                        <div class="tile-container">
                            ${showTooltip && description ? html`
                                <div class="tooltip ${tooltipClass}">
                                    ${description}
                                </div>
                            ` : ''}
                            <button
                                    class="tile ${isFree ? 'free' : ''} ${isMarked ? 'marked' : ''} ${showTooltip ? 'long-pressing' : ''}"
                                    @click=${(e) => this.toggleSquare(index, e)}
                                    @mousedown=${(e) => this.handlePressStart(index, e)}
                                    @mouseup=${(e) => this.handlePressEnd(index, e)}
                                    @mouseleave=${() => this.handlePressMove()}
                                    @touchstart=${(e) => this.handlePressStart(index, e)}
                                    @touchend=${(e) => this.handlePressEnd(index, e)}
                                    @touchmove=${() => this.handlePressMove()}
                                    @contextmenu=${(e) => e.preventDefault()}
                                    ?disabled=${isFree}
                            >
                                ${isMarked && !isFree ? html`
                                    <span class="checkmark">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                ` : ''}
                                <span class="tile-text">${title}</span>
                            </button>
                        </div>
                    `;
                })}
            </section>
        `;
    }
}

customElements.define('bingo-grid', BingoGrid);