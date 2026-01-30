import { css } from 'lit';

export const WinnerModalCss = css`
    :host {
        --card: #1e293b;
        --foreground: #f1f5f9;
        --muted-foreground: #94a3b8;
        --border: rgba(71, 85, 105, 0.5);
        --primary: #3b82f6;
        --success: #10b981;
        --success-dark: #059669;
        --radius: 0.75rem;
    }

    .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.75);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 1rem;
        animation: fade-in 0.3s ease;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .modal {
        background: linear-gradient(to bottom right, #1e293b, #0f172a);
        border: 3px solid var(--success);
        border-radius: calc(var(--radius) * 1.5);
        padding: 3rem 2rem 2rem;
        max-width: 500px;
        width: 100%;
        box-shadow: 0 25px 50px -12px rgba(16, 185, 129, 0.6),
        0 0 100px rgba(16, 185, 129, 0.3);
        animation: winner-pop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        position: relative;
        text-align: center;
    }

    @keyframes winner-pop {
        0% {
            transform: scale(0.3) rotate(-10deg);
            opacity: 0;
        }
        50% {
            transform: scale(1.05) rotate(2deg);
        }
        100% {
            transform: scale(1) rotate(0);
            opacity: 1;
        }
    }

    .icon-container {
        position: absolute;
        top: -3rem;
        left: 50%;
        transform: translateX(-50%);
    }

    .trophy-icon {
        font-size: 6rem;
        animation: trophy-bounce 1s ease infinite;
        filter: drop-shadow(0 10px 20px rgba(255, 215, 0, 0.5));
    }

    @keyframes trophy-bounce {
        0%, 100% {
            transform: translateY(0) rotate(-5deg);
        }
        50% {
            transform: translateY(-10px) rotate(5deg);
        }
    }

    h2 {
        color: var(--success);
        font-size: clamp(2.5rem, 6vw, 3.5rem);
        font-weight: 900;
        margin: 0 0 0.5rem 0;
        letter-spacing: 0.1em;
        text-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
        animation: bingo-flash 1.5s ease infinite;
    }

    @keyframes bingo-flash {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.8;
            text-shadow: 0 0 30px rgba(16, 185, 129, 0.8);
        }
    }

    .congrats {
        color: var(--foreground);
        font-size: 1.25rem;
        margin: 0 0 2.5rem 0;
        line-height: 1.5;
    }

    .buttons {
        display: flex;
        gap: 0.75rem;
        flex-direction: column;
        justify-content: center;
    }

    .btn {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 1rem 1.5rem;
        border-radius: calc(var(--radius) - 0.25rem);
        font-weight: 600;
        font-size: 1rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s ease;
        box-sizing: border-box;
    }

    .btn .icon {
        width: 1.25rem;
        height: 1.25rem;
        transition: transform 0.3s ease;
    }

    .btn-view {
        background: #334155;
        border: 2px solid var(--border);
        color: var(--foreground);
    }

    /* Hover alleen op desktop */
    @media (hover: hover) and (pointer: fine) {
        .btn-view:hover {
            background: #475569;
            border-color: var(--primary);
            box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.4);
        }

        .btn-view:hover .icon {
            transform: scale(1.1);
        }
    }

    .btn-play-again {
        background: linear-gradient(to right, var(--success), var(--success-dark));
        border: 2px solid transparent;
        color: white;
        box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.4);
    }

    /* Hover alleen op desktop */
    @media (hover: hover) and (pointer: fine) {
        .btn-play-again:hover {
            background: linear-gradient(to right, #34d399, var(--success));
            box-shadow: 0 8px 12px -1px rgba(16, 185, 129, 0.6);
            transform: translateY(-2px);
        }

        .btn-play-again:hover .icon {
            transform: rotate(-180deg);
        }
    }

    .btn:active {
        transform: scale(0.98);
    }

    @media (min-width: 640px) {
        .buttons {
            flex-direction: row;
        }
    }

    @media (max-width: 640px) {
        .modal {
            padding: 2.5rem 1.5rem 1.5rem;
        }

        .trophy-icon {
            font-size: 4.5rem;
        }

        .icon-container {
            top: -2.5rem;
        }

        h2 {
            font-size: 2.5rem;
        }

        .congrats {
            font-size: 1rem;
        }
    }
`;