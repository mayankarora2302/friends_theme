import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ReactionMessage {
    id: string;
    dayNumber: number;
    message: string;
    timestamp: number;
}

interface ProgressState {
    // Authentication
    isAuthenticated: boolean;
    setAuthenticated: (value: boolean) => void;

    // Episode Progress
    completedDays: number[];
    completeDay: (dayNumber: number) => void;
    isDayCompleted: (dayNumber: number) => boolean;

    // Unlocking Logic
    unlockedDays: number[];
    unlockDay: (dayNumber: number) => void;
    isDayUnlocked: (dayNumber: number) => boolean;

    // Reactions
    reactions: ReactionMessage[];
    addReaction: (dayNumber: number, message: string) => void;
    getReactionsForDay: (dayNumber: number) => ReactionMessage[];

    // Audio Preferences
    isMusicPlaying: boolean;
    toggleMusic: () => void;
    volume: number;
    setVolume: (volume: number) => void;

    // Reset
    reset: () => void;
}

const useProgressStore = create<ProgressState>()(
    persist(
        (set, get) => ({
            // Initial State
            isAuthenticated: false,
            completedDays: [],
            unlockedDays: [1], // Day 1 is unlocked by default
            reactions: [],
            isMusicPlaying: false,
            volume: 0.5,

            // Authentication
            setAuthenticated: (value: boolean) => set({ isAuthenticated: value }),

            // Episode Progress
            completeDay: (dayNumber: number) => {
                const { completedDays } = get();
                if (!completedDays.includes(dayNumber)) {
                    const newCompleted = [...completedDays, dayNumber];

                    // Only mark as completed, do NOT unlock next day
                    // Days unlock based on date only (handled in home page)
                    set({
                        completedDays: newCompleted
                    });
                }
            },

            isDayCompleted: (dayNumber: number) => {
                return get().completedDays.includes(dayNumber);
            },

            // Unlocking
            unlockDay: (dayNumber: number) => {
                const { unlockedDays } = get();
                if (!unlockedDays.includes(dayNumber)) {
                    set({ unlockedDays: [...unlockedDays, dayNumber] });
                }
            },

            isDayUnlocked: (dayNumber: number) => {
                return get().unlockedDays.includes(dayNumber);
            },

            // Reactions
            addReaction: (dayNumber: number, message: string) => {
                const newReaction: ReactionMessage = {
                    id: `${Date.now()}-${Math.random()}`,
                    dayNumber,
                    message,
                    timestamp: Date.now(),
                };
                set({ reactions: [...get().reactions, newReaction] });
            },

            getReactionsForDay: (dayNumber: number) => {
                return get().reactions.filter(r => r.dayNumber === dayNumber);
            },

            // Audio
            toggleMusic: () => set({ isMusicPlaying: !get().isMusicPlaying }),
            setVolume: (volume: number) => set({ volume }),

            // Reset
            reset: () => set({
                isAuthenticated: false,
                completedDays: [],
                unlockedDays: [1],
                reactions: [],
                isMusicPlaying: false,
                volume: 0.5,
            }),
        }),
        {
            name: 'friends-valentine-storage',
        }
    )
);

export default useProgressStore;
