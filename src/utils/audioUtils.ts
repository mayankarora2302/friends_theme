/**
 * Web Audio API utilities for sound effects and music playback
 */

let audioContext: AudioContext | null = null;

/**
 * Initialize Audio Context (must be called after user interaction)
 */
export function initAudioContext(): AudioContext {
    if (!audioContext) {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContext;
}

/**
 * Get or create Audio Context
 */
export function getAudioContext(): AudioContext | null {
    return audioContext;
}

/**
 * Play a sound effect
 */
export function playSound(url: string, volume: number = 0.5): void {
    const audio = new Audio(url);
    audio.volume = volume;
    audio.play().catch(err => console.log('Audio play failed:', err));
}

/**
 * Hover sound effects
 */
export const HOVER_SOUNDS = {
    laugh: '/assets/audio/laugh.mp3',
    shutter: '/assets/audio/shutter.mp3',
    coffee: '/assets/audio/coffee.mp3',
    click: '/assets/audio/click.mp3',
};

/**
 * Play hover sound
 */
export function playHoverSound(soundType: keyof typeof HOVER_SOUNDS, volume: number = 0.3): void {
    // Only play if audio context is initialized (user has interacted)
    if (audioContext && audioContext.state === 'running') {
        playSound(HOVER_SOUNDS[soundType], volume);
    }
}

/**
 * Create audio player with controls
 */
export class AudioPlayer {
    private audio: HTMLAudioElement;
    private context: AudioContext | null;
    private gainNode: GainNode | null;
    private source: MediaElementAudioSourceNode | null;

    constructor(src: string) {
        this.audio = new Audio(src);
        this.audio.loop = false;
        this.context = null;
        this.gainNode = null;
        this.source = null;
    }

    async init(): Promise<void> {
        this.context = initAudioContext();
        this.gainNode = this.context.createGain();
        this.source = this.context.createMediaElementSource(this.audio);
        this.source.connect(this.gainNode);
        this.gainNode.connect(this.context.destination);
    }

    play(): Promise<void> {
        return this.audio.play();
    }

    pause(): void {
        this.audio.pause();
    }

    stop(): void {
        this.audio.pause();
        this.audio.currentTime = 0;
    }

    setVolume(volume: number): void {
        if (this.gainNode) {
            this.gainNode.gain.value = volume;
        }
        this.audio.volume = volume;
    }

    setLoop(loop: boolean): void {
        this.audio.loop = loop;
    }

    get currentTime(): number {
        return this.audio.currentTime;
    }

    get duration(): number {
        return this.audio.duration;
    }

    get isPlaying(): boolean {
        return !this.audio.paused;
    }

    onEnded(callback: () => void): void {
        this.audio.addEventListener('ended', callback);
    }

    onTimeUpdate(callback: () => void): void {
        this.audio.addEventListener('timeupdate', callback);
    }

    destroy(): void {
        this.stop();
        if (this.source) {
            this.source.disconnect();
        }
        if (this.gainNode) {
            this.gainNode.disconnect();
        }
    }
}

/**
 * Load audio files from directory
 */
export async function loadAudioFiles(directory: string): Promise<string[]> {
    try {
        // This would need to be implemented server-side or with a build-time script
        // For now, return empty array - files will be referenced directly
        return [];
    } catch (error) {
        console.error('Error loading audio files:', error);
        return [];
    }
}

/**
 * Preload audio file
 */
export function preloadAudio(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const audio = new Audio();
        audio.addEventListener('canplaythrough', () => resolve(), { once: true });
        audio.addEventListener('error', reject, { once: true });
        audio.src = src;
    });
}
