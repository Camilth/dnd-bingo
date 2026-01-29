import { LitElement, html, css } from 'lit';

class DashcamApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: system-ui;
      padding: 1rem;
    }
    h1 {
      text-align: center;
    }
    button {
      font-size: 1.2rem;
      padding: 1rem;
      width: 100%;
    }
  `;

  render() {
    return html`
      <h1>🚗 Dashcam Bingo</h1>
      <button @click=${this.installApp}>Install App</button>
    `;
  }

  installApp() {
    if (window.deferredPrompt) {
      window.deferredPrompt.prompt();
    } else {
      alert('Install via browser menu');
    }
  }
}

customElements.define('dashcam-app', DashcamApp);
