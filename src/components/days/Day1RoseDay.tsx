'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SoundBox from '@/components/audio/SoundBox';
import PhotoGallery from '@/components/ui/PhotoGallery';
import { getPhotosForDay, getHeroPhoto } from '@/utils/photoManifest';

export default function Day1RoseDay() {
    const [score, setScore] = useState(0);
    const [gameActive, setGameActive] = useState(false);
    const [roses, setRoses] = useState<Array<{ id: number; x: number; y: number; isBroken: boolean }>>([]);

    // Use actual photos from the manifest
    const images = getPhotosForDay(1, 4);

    useEffect(() => {
        if (!gameActive) return;

        const interval = setInterval(() => {
            const newRose = {
                id: Date.now(),
                x: Math.random() * 80 + 10, // 10-90% of screen width
                y: -10,
                isBroken: Math.random() < 0.2, // 20% chance of broken petal
            };
            setRoses((prev) => [...prev, newRose]);
        }, 1000);

        return () => clearInterval(interval);
    }, [gameActive]);

    useEffect(() => {
        if (!gameActive) return;

        const moveInterval = setInterval(() => {
            setRoses((prev) => {
                const updated = prev.map((rose) => ({
                    ...rose,
                    y: rose.y + 2,
                }));
                return updated.filter((rose) => rose.y < 100);
            });
        }, 50);

        return () => clearInterval(moveInterval);
    }, [gameActive]);

    const catchRose = (rose: typeof roses[0]) => {
        if (rose.isBroken) {
            setScore((prev) => Math.max(0, prev - 5));
        } else {
            setScore((prev) => prev + 10);
        }
        setRoses((prev) => prev.filter((r) => r.id !== rose.id));
    };

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <h2 className="text-4xl font-bold text-friends-romantic-rose mb-4">
                    🌹 Rose Day 🌹
                </h2>
                <p className="text-xl font-handwritten text-gray-700 max-w-2xl mx-auto">
                    &quot;Monica&apos;s apartment balcony, where every rose tells our story...&quot;
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
                            src={getHeroPhoto(1)}
                            alt="Rose Day Memory"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                    </div>
                    <div className="p-4 bg-white">
                        <p className="text-lg font-handwritten text-center text-gray-800">
                            Every rose tells our story 🌹
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Sound Box */}
            <SoundBox
                audioSrc="/assets/audio/Shillong - Suryansh Bhatt.mp3"
                title="Shillong"
                artist="Suryansh Bhatt"
            />

            {/* Rose Catching Game */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-2xl p-8"
            >
                <h3 className="text-2xl font-bold text-center mb-4 text-friends-purple">
                    Catch the Roses! 🌹
                </h3>
                <p className="text-center mb-6 font-handwritten text-lg">
                    Catch the beautiful roses, avoid the broken petals!
                </p>

                <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-friends-romantic-rose">
                        Score: {score}
                    </span>
                </div>

                {!gameActive ? (
                    <button
                        onClick={() => {
                            setGameActive(true);
                            setScore(0);
                            setRoses([]);
                        }}
                        className="btn-friends mx-auto block"
                    >
                        Start Game
                    </button>
                ) : (
                    <>
                        <div className="relative w-full h-96 bg-gradient-to-b from-friends-pastel-pink to-friends-pastel-lavender rounded-lg overflow-hidden">
                            {roses.map((rose) => (
                                <motion.div
                                    key={rose.id}
                                    className="absolute cursor-pointer text-5xl"
                                    style={{
                                        left: `${rose.x}%`,
                                        top: `${rose.y}%`,
                                    }}
                                    onClick={() => catchRose(rose)}
                                    whileHover={{ scale: 1.2 }}
                                >
                                    {rose.isBroken ? '🥀' : '🌹'}
                                </motion.div>
                            ))}
                        </div>

                        <button
                            onClick={() => setGameActive(false)}
                            className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors mx-auto block"
                        >
                            Stop Game
                        </button>
                    </>
                )}
            </motion.div>

            {/* You're My Lobster Message Board */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="glass rounded-2xl p-8 text-center"
            >
                <h3 className="text-3xl font-bold text-friends-purple mb-4">
                    You&apos;re My Lobster! 🦞
                </h3>
                <p className="text-xl font-handwritten text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    Just like lobsters mate for life, you&apos;re the one I choose, today and always.
                    Every rose I give you is a promise, every petal a memory we&apos;ve created together.
                    Here&apos;s to our forever... 💕
                </p>
            </motion.div>

            {/* Photo Gallery */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                <h3 className="text-3xl font-bold text-center mb-8 text-friends-purple">
                    Our Rose Day Memories 📸
                </h3>
                <PhotoGallery images={images} layout="polaroid" />
            </motion.div>

            {/* Romantic Quote */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-center py-8"
            >
                <p className="text-2xl font-handwritten italic text-friends-romantic-rose">
                    &quot;A rose by any other name would smell as sweet, but you by any other name would still be my everything.&quot;
                </p>
            </motion.div>
        </div>
    );
}
