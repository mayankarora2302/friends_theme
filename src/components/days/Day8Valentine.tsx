'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SoundBox from '@/components/audio/SoundBox';
import MemoryCard from '@/components/ui/MemoryCard';
import { getTogetherSinceDuration } from '@/utils/dateUtils';
import { getMemoryPhotos, getHeroPhoto } from '@/utils/photoManifest';

export default function Day8Valentine() {
    const [showConfetti, setShowConfetti] = useState(false);
    const [duration, setDuration] = useState(getTogetherSinceDuration());

    // Use the 3 special memory photos for the interactive gallery
    const memoryPhotos = getMemoryPhotos();

    useEffect(() => {
        const interval = setInterval(() => {
            setDuration(getTogetherSinceDuration());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const triggerConfetti = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
    };

    return (
        <div className="space-y-12 relative">
            {/* Confetti Effect */}
            {showConfetti && typeof window !== 'undefined' && (
                <div className="fixed inset-0 pointer-events-none z-50">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-3xl confetti"
                            initial={{
                                x: Math.random() * window.innerWidth,
                                y: -50,
                                rotate: 0,
                            }}
                            animate={{
                                y: window.innerHeight + 50,
                                rotate: 720,
                            }}
                            transition={{
                                duration: 3,
                                delay: Math.random() * 0.5,
                            }}
                        >
                            {['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)]}
                        </motion.div>
                    ))}
                </div>
            )}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <h2 className="text-5xl font-bold text-friends-romantic-heart mb-4">
                    ❤️ Valentine&apos;s Day Finale ❤️
                </h2>
                <p className="text-2xl font-handwritten text-gray-700 max-w-2xl mx-auto">
                    &quot;The One Where We Celebrate Forever...&quot;
                </p>
            </motion.div>

            {/* Hero Photo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center mb-8"
            >
                <div className="polaroid-frame max-w-md">
                    <div className="relative w-full h-80 bg-gray-200 overflow-hidden">
                        <Image
                            src={getHeroPhoto(8)}
                            alt="Valentine's Day Memory"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                    </div>
                    <div className="p-4 bg-white">
                        <p className="text-lg font-handwritten text-center text-gray-800">
                            Forever and always ❤️
                        </p>
                    </div>
                </div>
            </motion.div>

            <SoundBox
                audioSrc="/assets/audio/The Black Eyed Peas - I Gotta Feeling (Lyrics)-1.mp3"
                title="I Gotta Feeling"
                artist="Black Eyed Peas"
            />

            {/* Together Since Timer */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-2xl p-8 text-center"
            >
                <h3 className="text-3xl font-bold text-friends-purple mb-6">
                    Together Since 💕
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                    <div className="bg-white/50 rounded-lg p-6">
                        <div className="text-4xl font-bold text-friends-romantic-heart">
                            {duration.years}
                        </div>
                        <div className="text-gray-600 font-handwritten">Years</div>
                    </div>
                    <div className="bg-white/50 rounded-lg p-6">
                        <div className="text-4xl font-bold text-friends-romantic-rose">
                            {duration.months}
                        </div>
                        <div className="text-gray-600 font-handwritten">Months</div>
                    </div>
                    <div className="bg-white/50 rounded-lg p-6">
                        <div className="text-4xl font-bold text-friends-purple">
                            {duration.days}
                        </div>
                        <div className="text-gray-600 font-handwritten">Days</div>
                    </div>
                    <div className="bg-white/50 rounded-lg p-6">
                        <div className="text-4xl font-bold text-friends-perk-orange">
                            ∞
                        </div>
                        <div className="text-gray-600 font-handwritten">To Go</div>
                    </div>
                </div>
                <p className="mt-6 text-xl font-handwritten text-gray-700">
                    {duration.totalDays.toLocaleString()} days of love and counting! 💕
                </p>
            </motion.div>

            {/* Final Love Letter */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="glass rounded-2xl p-8"
            >
                <h3 className="text-3xl font-bold text-center mb-8 text-friends-romantic-heart">
                    Ryan's Love Letter to Shubhra 💌
                </h3>
                <div className="max-w-3xl mx-auto font-handwritten text-xl text-gray-800 leading-relaxed">
                    <p className="text-right text-lg text-gray-600 mb-6">
                        To my dearest Shubhra,
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="typing-effect-container"
                    >
                        <p className="whitespace-pre-line">
                            Baby, 😘 Happy Valentine's Day! 🌹 I wanna tell you how much you mean to me. I love everything about you hublu sen, from the way you smile to the way you make me feel. Your kindness, simplicity, and grace - it all draws me in. You're the sunshine that brightens up my day 🌞. I love how you care for others, your infectious laugh, and even your quirks. You're literally the best thing that's happened to me 💕. Grateful to have you in my life.. Love you soooooo much
                            Every moment with you feels like a dream 💫. The way you understand me, support me, and make me feel seen. it's like nothing I've ever experienced before. Your touch ignites a fire  in my heart, and your love is my safe haven for me. I adore how we connect on every level - mind, body, and soul 💫. Your kindness blows me away 🌈 - the way you care for those around you, your compassion, and your generosity.you're a rare gem amd i hope i never loose you by my side. And your simplicity? 😍 It's beautiful, just like you. You make life more beautiful, more meaningful.I love you.Stay by me forever.  - Ryan
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.5, duration: 0.5 }}
                        className="text-2xl text-center text-friends-romantic-heart font-bold mt-8"
                    >
                        Forever yours, Shubhra 🦞💕
                    </motion.p>
                </div>
            </motion.div>

            {/* Interactive Memory Gallery */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                <h3 className="text-3xl font-bold text-center mb-8 text-friends-romantic-heart">
                    Our Beautiful Journey 📸
                </h3>
                <p className="text-center text-lg font-handwritten text-gray-700 mb-8">
                    Click each photo to reveal the story behind our special moments 💕
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {memoryPhotos.map((memory, index) => (
                        <MemoryCard
                            key={index}
                            image={memory.image}
                            title={memory.title}
                            story={memory.story}
                            date={memory.date}
                        />
                    ))}
                </div>
            </motion.div>

            {/* Final CTA */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                className="text-center py-12"
            >
                <motion.button
                    onClick={triggerConfetti}
                    className="btn-friends text-2xl px-12 py-6"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    🎉 The One Where We Go See Each Other 🎉
                </motion.button>
                <p className="mt-6 text-xl font-handwritten text-gray-700">
                    Click to celebrate our love! 💕
                </p>
            </motion.div>
        </div>
    );
}
