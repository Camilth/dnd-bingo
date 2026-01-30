// components/css/HelpButtonCss.js
import { css } from 'lit';

export const HelpButtonCss = css`
    :host {
        position: fixed;
        top: 1rem;
        left: 1rem;
        z-index: 9999;
    }

    button {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.8rem;
        height: 3.8rem;
        background: rgba(30, 41, 59, 0.95);
        border: 2px solid rgba(71, 85, 105, 0.5);
        border-radius: 0.75rem;
        cursor: pointer;
        transition: all 0.2s ease;
        backdrop-filter: blur(8px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        color: #f1f5f9;

        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        user-select: none;
        touch-action: manipulation;
    }

    .icon {
        width: 1.9rem;
        height: 1.9rem;
        transition: transform 0.2s ease;
    }

    @media (hover: hover) and (pointer: fine) {
        button:hover {
            background: rgba(51, 65, 85, 0.95);
            border-color: rgba(148, 163, 184, 0.5);
            transform: scale(1.05);
        }

        button:hover .icon {
            transform: scale(1.1) rotate(15deg);
        }
    }

    button:active,
    button.pressing {
        transform: scale(0.95);
    }

    @media (max-width: 640px) {
        :host {
            top: 2.5rem;
            left: 0.5rem;
        }

        button {
            width: 3rem;
            height: 3rem;
        }

        .icon {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`;