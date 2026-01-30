import { css } from 'lit';

export const HelpModalCss = css`
    :host {
        --card: #1e293b;
        --foreground: #f1f5f9;
        --muted-foreground: #94a3b8;
        --border: rgba(71, 85, 105, 0.5);
        --primary: #3b82f6;
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
        z-index: 10000;
        padding: 1rem;
        animation: fade-in 0.2s ease;
        overflow-y: auto;
    }

    @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .modal {
        background: var(--card);
        border: 2px solid var(--border);
        border-radius: var(--radius);
        padding: 2rem 2rem 2rem;
        max-width: 37.5rem;
        width: 100%;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        animation: slide-up 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
    }

    @keyframes slide-up {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .close-btn {
        all: unset;
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: var(--muted-foreground);
        border-radius: 0.5rem;
        transition: all 0.2s ease;
    }

    .close-btn svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    @media (hover: hover) and (pointer: fine) {
        .close-btn:hover {
            background: rgba(71, 85, 105, 0.3);
            color: var(--foreground);
        }
    }

    .icon-container {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
    }

    .help-icon {
        width: 4rem;
        height: 4rem;
        color: var(--primary);
    }

    h2 {
        color: var(--foreground);
        font-size: 1.875rem;
        font-weight: 700;
        margin: 0 0 1.5rem 0;
        text-align: center;
    }

    .content {
        height: 26rem;
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;
        overflow-y: auto;
    }

    section {
        background: rgba(51, 65, 85, 0.3);
        padding: 1.5rem;
        border-radius: calc(var(--radius) - 0.25rem);
        border: 1px solid var(--border);
        animation: fade-in 0.3s ease;
    }

    h3 {
        color: var(--foreground);
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0 0 1rem 0;
    }

    p {
        color: var(--muted-foreground);
        line-height: 1.6;
        margin: 0;
    }

    ol, ul {
        color: var(--muted-foreground);
        line-height: 1.8;
        margin: 0.75rem 0 0 0;
        padding-left: 1.5rem;
    }

    li {
        margin-bottom: 0.5rem;
    }

    ul ul {
        margin-top: 0.5rem;
        padding-left: 1.5rem;
    }

    /* Link styling */
    .link-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-left: 0;
        list-style: none;
    }

    .link-list li {
        margin: 0;
    }

    .link-list a {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.3);
        border-radius: 0.5rem;
        color: #60a5fa;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.2s ease;
        overflow-wrap: break-word;
        word-break: break-word;
    }

    .link-icon {
        width: 1.25rem;
        height: 1.25rem;
        flex-shrink: 0;
        color: #ef4444;
    }

    @media (hover: hover) and (pointer: fine) {
        .link-list a:hover {
            background: rgba(59, 130, 246, 0.2);
            border-color: rgba(59, 130, 246, 0.5);
            color: #93c5fd;
            transform: translateX(4px);
        }

        .link-list a:hover .link-icon {
            color: #f87171;
        }
    }

    .link-list a:active {
        transform: scale(0.98);
    }

    strong {
        color: var(--foreground);
        font-weight: 600;
    }

    .badge {
        display: inline-block;
        padding: 0.125rem 0.5rem;
        border-radius: 0.25rem;
        font-weight: 700;
        font-size: 0.875rem;
    }

    .badge.green {
        background: rgba(16, 185, 129, 0.2);
        color: #10b981;
    }

    .badge.orange {
        background: rgba(245, 158, 11, 0.2);
        color: #f59e0b;
    }

    .badge.red {
        background: rgba(239, 68, 68, 0.2);
        color: #ef4444;
    }

    .warning {
        display: flex;
        gap: 0.75rem;
        align-items: flex-start;
        background: rgba(239, 68, 68, 0.1);
        border: 2px solid rgba(239, 68, 68, 0.3);
        padding: 1rem;
        border-radius: 0.5rem;
        color: #fca5a5;
        margin-bottom: 1.5rem;
    }

    .warning svg {
        width: 1.5rem;
        height: 1.5rem;
        color: #ef4444;
        flex-shrink: 0;
        margin-top: 0.125rem;
    }

    /* Pagination */
    .pagination {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }

    .nav-btn {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.3);
        border-radius: 0.5rem;
        cursor: pointer;
        color: var(--primary);
        transition: all 0.2s ease;
        flex-shrink: 0;
    }

    .nav-btn svg {
        width: 1.25rem;
        height: 1.25rem;
    }

    .nav-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }

    @media (hover: hover) and (pointer: fine) {
        .nav-btn:not(:disabled):hover {
            background: rgba(59, 130, 246, 0.2);
            border-color: rgba(59, 130, 246, 0.5);
            transform: scale(1.05);
        }
    }

    .nav-btn:active:not(:disabled) {
        transform: scale(0.95);
    }

    .page-indicator {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        flex: 1;
        justify-content: center;
    }

    .dot {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: rgba(148, 163, 184, 0.3);
        transition: all 0.3s ease;
    }

    .dot.active {
        background: var(--primary);
        width: 2rem;
        border-radius: 0.25rem;
    }

    .btn-close-bottom {
        all: unset;
        display: block;
        width: 100%;
        padding: 1rem;
        background: var(--primary);
        color: white;
        text-align: center;
        font-weight: 600;
        border-radius: calc(var(--radius) - 0.25rem);
        cursor: pointer;
        transition: all 0.2s ease;
        box-sizing: border-box;
    }

    @media (hover: hover) and (pointer: fine) {
        .btn-close-bottom:hover {
            background: #2563eb;
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.4);
        }
    }

    .btn-close-bottom:active {
        transform: scale(0.98);
    }

    @media (max-width: 640px) {
        .modal {
            padding: 1.7rem 1.5rem 1.5rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        h3 {
            font-size: 1.125rem;
        }

        section {
            padding: 1rem;
        }

        .help-icon {
            width: 3rem;
            height: 3rem;
        }

        .link-list a {
            padding: 0.625rem 0.75rem;
            font-size: 0.875rem;
        }

        .link-icon {
            width: 1rem;
            height: 1rem;
        }

        .content {
            height: 24rem;
        }

        .nav-btn {
            width: 2.25rem;
            height: 2.25rem;
        }

        .nav-btn svg {
            width: 1.125rem;
            height: 1.125rem;
        }
    }

    @media (max-width: 400px) {
        .content {
            height: 20rem;
        }
    }
`;