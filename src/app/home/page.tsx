'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import useProgressStore from '@/store/progressStore';
import { DAY_NAMES, DAY_THEMES, isDayUnlockedByDate } from '@/utils/dateUtils';
import { getHeroPhoto } from '@/utils/photoManifest';
import FloatingHearts from '@/components/effects/FloatingHearts';
import CursorTrail from '@/components/effects/CursorTrail';
import EpisodeTracker from '@/components/navigation/EpisodeTracker';

export default function HomePage() {
    const router = useRouter();
    const { isAuthenticated, isDayUnlocked, unlockDay } = useProgressStore();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
            return;
        }

        // Unlock days based on current date
        for (let day = 1; day <= 8; day++) {
            if (isDayUnlockedByDate(day)) {
                unlockDay(day);
            }
        }
    }, [isAuthenticated, router, unlockDay]);

    const handleEpisodeClick = (dayNumber: number) => {
        // Only allow navigation if the date has passed
        if (isDayUnlockedByDate(dayNumber)) {
            router.push(`/day/${dayNumber}`);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-friends-apartment-wall via-friends-perk-cream to-friends-pastel-lavender relative overflow-hidden">
            {/* Background Effects */}
            <FloatingHearts />
            <CursorTrail />

            {/* Header */}
            <header className="relative z-10 py-8 px-4">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-center"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-friends-purple mb-2 drop-shadow-lg">
                        The One With Our Love
                    </h1>
                    <p className="text-xl text-friends-perk-brown font-handwritten">
                        Our Valentine&apos;s Week Journey
                    </p>
                </motion.div>
            </header>

            {/* Hero Photo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative z-10 px-4 mb-8 flex justify-center"
            >
                <div className="polaroid-frame max-w-md">
                    <div className="relative w-full h-80 bg-gray-200 overflow-hidden">
                        <Image
                            src={getHeroPhoto(0)}
                            alt="Our Love Story"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                    </div>
                    <div className="p-4 bg-white">
                        <p className="text-xl font-handwritten text-center text-gray-800">
                            Our Beautiful Journey Together 💕
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Episode Progress Tracker */}
            <div className="relative z-10 px-4 mb-8">

                <EpisodeTracker />
            </div>

            {/* Episode Grid */}
            <main className="relative z-10 container mx-auto px-4 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((dayNumber) => {
                        // Episode unlocks ONLY based on date, not localStorage
                        // This ensures episodes are locked until their Valentine's Week date
                        const unlocked = isDayUnlockedByDate(dayNumber);
                        const dayName = DAY_NAMES[dayNumber as keyof typeof DAY_NAMES];
                        const theme = DAY_THEMES[dayNumber as keyof typeof DAY_THEMES];

                        return (
                            <motion.div
                                key={dayNumber}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: dayNumber * 0.1 }}
                                onClick={() => handleEpisodeClick(dayNumber)}
                                className={`episode-card ${!unlocked ? 'vhs-locked cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                                <div className={`${!unlocked ? 'vhs-tape' : ''}`}>
                                    {/* Episode Number */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm font-bold text-friends-purple uppercase tracking-wider">
                                            Episode {dayNumber}
                                        </span>
                                        {unlocked ? (
                                            <span className="text-2xl">🎬</span>
                                        ) : (
                                            <span className="text-2xl">🔒</span>
                                        )}
                                    </div>

                                    {/* Episode Title */}
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                        {dayName}
                                    </h3>

                                    {/* Episode Theme */}
                                    <p className="text-gray-600 font-handwritten text-lg mb-4">
                                        {theme}
                                    </p>

                                    {/* Episode Icon */}
                                    <div className="text-4xl text-center">
                                        {getEpisodeIcon(dayNumber)}
                                    </div>

                                    {/* Locked Overlay */}
                                    {!unlocked && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-lg">
                                            <div className="text-center">
                                                <div className="text-6xl mb-2">🔒</div>
                                                <p className="text-white font-bold text-lg">Coming Soon</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </main>

            {/* Footer Quote */}
            <footer className="relative z-10 py-8 text-center">
                <p className="text-xl text-friends-purple font-handwritten italic">
                    &quot;This is the story of how we became each other&apos;s lobster&quot; 🦞💕
                </p>
            </footer>
        </div>
    );
}

function getEpisodeIcon(dayNumber: number): string {
    const icons: { [key: number]: string } = {
        1: '🌹',
        2: '💍',
        3: '🍫',
        4: '🧸',
        5: '🤝',
        6: '🤗',
        7: '💋',
        8: '❤️',
    };
    return icons[dayNumber] || '💕';
}
