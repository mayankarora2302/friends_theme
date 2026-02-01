'use client';

import { motion } from 'framer-motion';
import useProgressStore from '@/store/progressStore';
import { DAY_NAMES } from '@/utils/dateUtils';

export default function EpisodeTracker() {
    const { completedDays, isDayUnlocked } = useProgressStore();

    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6 text-friends-purple font-handwritten">
                Episode Progress
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((dayNumber) => {
                    const unlocked = isDayUnlocked(dayNumber);
                    const completed = completedDays.includes(dayNumber);
                    const dayName = DAY_NAMES[dayNumber as keyof typeof DAY_NAMES];

                    return (
                        <motion.div
                            key={dayNumber}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: dayNumber * 0.05 }}
                            className="relative"
                        >
                            {/* VHS Tape Style */}
                            <div
                                className={`
                  w-24 h-16 rounded-lg flex flex-col items-center justify-center
                  transition-all duration-300
                  ${completed ? 'bg-gradient-to-br from-green-400 to-green-600' :
                                        unlocked ? 'bg-gradient-to-br from-friends-purple to-purple-600' :
                                            'bg-gray-400'}
                  ${!unlocked ? 'opacity-50 blur-sm' : ''}
                  shadow-lg
                `}
                            >
                                <div className="text-white text-xs font-bold">EP {dayNumber}</div>
                                <div className="text-white text-lg">
                                    {completed ? '✓' : unlocked ? '▶' : '🔒'}
                                </div>
                            </div>

                            {/* Tooltip */}
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-center text-gray-700">
                                {dayName}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
