/**
 * Date utilities for Valentine's Week episode unlocking
 * Valentine's Week 2026 dates
 * Each day unlocks on its respective date
 */
export const VALENTINE_WEEK_2026 = {
    1: new Date('2026-02-07'), // Rose Day - Feb 7
    2: new Date('2026-02-08'), // Propose Day - Feb 8
    3: new Date('2026-02-09'), // Chocolate Day - Feb 9
    4: new Date('2026-02-10'), // Teddy Day - Feb 10
    5: new Date('2026-02-11'), // Promise Day - Feb 11
    6: new Date('2026-02-12'), // Hug Day - Feb 12
    7: new Date('2026-02-13'), // Kiss Day - Feb 13
    8: new Date('2026-02-14'), // Valentine's Day - Feb 14
};

export const DAY_NAMES = {
    1: 'Rose Day',
    2: 'Propose Day',
    3: 'Chocolate Day',
    4: 'Teddy Day',
    5: 'Promise Day',
    6: 'Hug Day',
    7: 'Kiss Day',
    8: "Valentine's Day",
};

export const DAY_THEMES = {
    1: "Monica's Apartment Balcony",
    2: "Chandler's Confession",
    3: 'Central Perk Café',
    4: 'Cozy Comfort',
    5: 'Handwritten Vows',
    6: 'Emotional Warmth',
    7: 'Polaroid Flashbacks',
    8: 'Soulmate Ending',
};

/**
 * Check if a specific day should be unlocked based on current date
 * Episodes unlock on their respective Valentine's Week dates
 */
export function isDayUnlockedByDate(dayNumber: number): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const unlockDate = VALENTINE_WEEK_2026[dayNumber as keyof typeof VALENTINE_WEEK_2026];
    if (!unlockDate) return false;

    // Normalize unlock date to midnight for accurate comparison
    const normalizedUnlockDate = new Date(unlockDate);
    normalizedUnlockDate.setHours(0, 0, 0, 0);

    return today >= normalizedUnlockDate;
}

/**
 * Get the current active day based on today's date
 */
export function getCurrentDay(): number {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let day = 8; day >= 1; day--) {
        const dayDate = VALENTINE_WEEK_2026[day as keyof typeof VALENTINE_WEEK_2026];
        if (today >= dayDate) {
            return day;
        }
    }

    return 0; // Before Valentine's Week
}

/**
 * Get days remaining until a specific day unlocks
 */
export function getDaysUntilUnlock(dayNumber: number): number {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const unlockDate = VALENTINE_WEEK_2026[dayNumber as keyof typeof VALENTINE_WEEK_2026];
    if (!unlockDate) return -1;

    const diffTime = unlockDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays > 0 ? diffDays : 0;
}

/**
 * Format date for display
 */
export function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}

/**
 * Calculate "Together Since" duration
 * Default date: August 16, 2025 (from password 16082025)
 */
export function getTogetherSinceDuration(sinceDate: Date = new Date('2025-08-16')): {
    years: number;
    months: number;
    days: number;
    totalDays: number;
} {
    const today = new Date();
    const diffTime = today.getTime() - sinceDate.getTime();
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const years = Math.floor(totalDays / 365);
    const remainingDays = totalDays % 365;
    const months = Math.floor(remainingDays / 30);
    const days = remainingDays % 30;

    return { years, months, days, totalDays };
}
