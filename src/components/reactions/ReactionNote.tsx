'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useProgressStore from '@/store/progressStore';

interface ReactionNoteProps {
    dayNumber: number;
}

export default function ReactionNote({ dayNumber }: ReactionNoteProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const { addReaction, getReactionsForDay } = useProgressStore();
    const reactions = getReactionsForDay(dayNumber);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            addReaction(dayNumber, message);
            setMessage('');
            setIsOpen(false);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {/* Floating Action Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-yellow-400 hover:bg-yellow-500 rounded-full shadow-lg flex items-center justify-center text-3xl transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                📝
            </motion.button>

            {/* Reaction Count Badge */}
            {reactions.length > 0 && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                >
                    {reactions.length}
                </motion.div>
            )}

            {/* Sticky Note Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="absolute bottom-20 right-0 w-80"
                    >
                        <div className="sticky-note">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">
                                Leave a Note 💕
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Share your thoughts about this day..."
                                    className="w-full h-32 p-3 bg-white/50 border-2 border-yellow-600/30 rounded-lg resize-none focus:outline-none focus:border-yellow-600/60 font-handwritten text-lg"
                                    maxLength={200}
                                />

                                <div className="flex gap-2">
                                    <button
                                        type="submit"
                                        className="flex-1 bg-friends-purple text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors font-bold"
                                    >
                                        Stick It! 📌
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg transition-colors"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </form>

                            {/* Previous Reactions */}
                            {reactions.length > 0 && (
                                <div className="mt-4 pt-4 border-t-2 border-yellow-600/30">
                                    <h4 className="font-bold mb-2 text-gray-700">Your Notes:</h4>
                                    <div className="space-y-2 max-h-40 overflow-y-auto">
                                        {reactions.map((reaction) => (
                                            <div
                                                key={reaction.id}
                                                className="p-2 bg-white/50 rounded text-sm"
                                            >
                                                {reaction.message}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
