'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import useProgressStore from '@/store/progressStore';
import { DAY_NAMES, DAY_THEMES, isDayUnlockedByDate } from '@/utils/dateUtils';
import FloatingHearts from '@/components/effects/FloatingHearts';
import CursorTrail from '@/components/effects/CursorTrail';
import ReactionNote from '@/components/reactions/ReactionNote';

// Import day components
import Day1RoseDay from '@/components/days/Day1RoseDay';
import Day2ProposeDay from '@/components/days/Day2ProposeDay';
import Day3ChocolateDay from '@/components/days/Day3ChocolateDay';
import Day4TeddyDay from '@/components/days/Day4TeddyDay';
import Day5PromiseDay from '@/components/days/Day5PromiseDay';
import Day6HugDay from '@/components/days/Day6HugDay';
import Day7KissDay from '@/components/days/Day7KissDay';
import Day8Valentine from '@/components/days/Day8Valentine';

const DAY_COMPONENTS: { [key: number]: React.ComponentType } = {
    1: Day1RoseDay,
    2: Day2ProposeDay,
    3: Day3ChocolateDay,
    4: Day4TeddyDay,
    5: Day5PromiseDay,
    6: Day6HugDay,
    7: Day7KissDay,
    8: Day8Valentine,
};

export default function DayPage({ params }: { params: { dayNumber: string } }) {
    const router = useRouter();
    const dayNumber = parseInt(params.dayNumber);
    const { isAuthenticated, isDayUnlocked, completeDay } = useProgressStore();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
            return;
        }

        // Check if day is unlocked by date, not localStorage
        if (!isDayUnlockedByDate(dayNumber)) {
            router.push('/home');
            return;
        }
    }, [isAuthenticated, dayNumber, router]);

    const DayComponent = DAY_COMPONENTS[dayNumber];
    const dayName = DAY_NAMES[dayNumber as keyof typeof DAY_NAMES];
    const theme = DAY_THEMES[dayNumber as keyof typeof DAY_THEMES];

    if (!DayComponent) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Day not found</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-friends-apartment-wall via-friends-perk-cream to-friends-pastel-lavender relative overflow-hidden">
            {/* Background Effects */}
            <FloatingHearts />
            <CursorTrail />

            {/* Header */}
            <header className="relative z-10 py-6 px-4">
                <div className="container mx-auto flex items-center justify-between">
                    <motion.button
                        onClick={() => router.push('/home')}
                        className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white transition-colors shadow-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-2xl">←</span>
                        <span className="font-semibold">Back to Episodes</span>
                    </motion.button>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-friends-purple">
                            Episode {dayNumber}: {dayName}
                        </h1>
                        <p className="text-lg text-friends-perk-brown font-handwritten">
                            {theme}
                        </p>
                    </motion.div>

                    <motion.button
                        onClick={() => {
                            completeDay(dayNumber);
                            router.push('/home');
                        }}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-md font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        ✓ Complete
                    </motion.button>
                </div>
            </header>

            {/* Day Content */}
            <main className="relative z-10 container mx-auto px-4 py-8">
                <DayComponent />
            </main>

            {/* Reaction Note */}
            <ReactionNote dayNumber={dayNumber} />
        </div>
    );
}
