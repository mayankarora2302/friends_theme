/**
 * Asset loader utilities for dynamically loading images and audio
 */

/**
 * Get all image files from the assets/images directory
 * Note: In Next.js, we need to explicitly reference files or use a build-time script
 */
export function getImageAssets(): string[] {
    // Images should be placed in public/assets/images/
    // They can be referenced as /assets/images/filename.jpg
    // This is a placeholder - actual images will be loaded dynamically
    return [];
}

/**
 * Get all audio files from the assets/audio directory
 */
export function getAudioAssets(): string[] {
    // Audio files should be placed in public/assets/audio/
    // They can be referenced as /assets/audio/filename.mp3
    return [];
}

/**
 * Get random image from assets
 */
export function getRandomImage(images: string[]): string {
    if (images.length === 0) return '/assets/images/placeholder.jpg';
    return images[Math.floor(Math.random() * images.length)];
}

/**
 * Get images for a specific day
 * Convention: Images can be named with day prefix (e.g., day1_photo1.jpg)
 */
export function getImagesForDay(dayNumber: number, allImages: string[]): string[] {
    const prefix = `day${dayNumber}_`;
    return allImages.filter(img => img.includes(prefix));
}

/**
 * Preload image
 */
export function preloadImage(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = src;
    });
}

/**
 * Preload multiple images
 */
export async function preloadImages(sources: string[]): Promise<void> {
    await Promise.all(sources.map(src => preloadImage(src)));
}

/**
 * Get image path helper
 */
export function getImagePath(filename: string): string {
    return `/assets/images/${filename}`;
}

/**
 * Get audio path helper
 */
export function getAudioPath(filename: string): string {
    return `/assets/audio/${filename}`;
}

/**
 * Check if file exists (client-side approximation)
 */
export async function checkFileExists(url: string): Promise<boolean> {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch {
        return false;
    }
}
