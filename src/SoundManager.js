class SoundManager {
    constructor() {
        this.sounds = {};
        this.enabled = this.loadEnabledState();
        this.volume = 0.7;

        // Laad sounds
        this.loadSounds();
    }

    loadEnabledState() {
        const saved = localStorage.getItem('soundEnabled');
        return saved === null ? true : saved === 'true';
    }

    saveEnabledState() {
        localStorage.setItem('soundEnabled', this.enabled.toString());
    }

    loadSounds() {
        this.loadAudioFile('click', './sounds/click.wav');
        this.loadAudioFile('tick', './sounds/tick.wav');
        this.loadAudioFile('win', './sounds/win.wav');
        this.loadAudioFile('check', './sounds/check.mp3');
        this.loadAudioFile('uncheck', './sounds/uncheck.mp3');
    }

    loadAudioFile(name, url) {
        const audio = new Audio(url);
        audio.volume = this.volume;
        audio.preload = 'auto';

        audio.setAttribute('controlsList', 'nodownload');
        audio.setAttribute('disablepictureinpicture', '');
        audio.removeAttribute('controls');

        audio.addEventListener('error', (e) => {
            console.error(`❌ Failed to load sound "${name}" from ${url}`);
            console.error('Error details:', {
                error: e,
                src: audio.src,
                networkState: audio.networkState,
                readyState: audio.readyState
            });
        });

        this.sounds[name] = () => {
            if (!this.enabled) return;

            // Clone audio zodat je hem snel achter elkaar kunt afspelen
            const sound = audio.cloneNode();
            sound.volume = this.volume;
            sound.setAttribute('controlsList', 'nodownload');
            sound.setAttribute('disablepictureinpicture', '');
            sound.removeAttribute('controls');
            sound.play().catch(e => console.log('Audio play failed:', e));
            sound.addEventListener('ended', () => {
                sound.remove();
            });
        };
    }

    play(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName]();
        }
    }

    toggle() {
        this.enabled = !this.enabled;
        this.saveEnabledState();

        // Dispatch event zodat de knop kan updaten
        window.dispatchEvent(new CustomEvent('sound-toggled', {
            detail: { enabled: this.enabled }
        }));

        return this.enabled;
    }

    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
    }

    isEnabled() {
        return this.enabled;
    }
}

// Singleton instance
export const soundManager = new SoundManager();