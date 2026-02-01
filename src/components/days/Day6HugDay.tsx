'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SoundBox from '@/components/audio/SoundBox';
import PhotoGallery from '@/components/ui/PhotoGallery';
import { getPhotosForDay, getHeroPhoto } from '@/utils/photoManifest';

export default function Day6HugDay() {
    const images = getPhotosForDay(6, 3);

    const sendVirtualHug = () => {
        // Trigger haptic feedback on mobile
        if ('vibrate' in navigator) {
            navigator.vibrate([200, 100, 200, 100, 200]); // Heartbeat pattern
        }
    };

    return (
        <div className="space-y-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <h2 className="text-4xl font-bold text-friends-romantic-rose mb-4">
                    🤗 Hug Day 🤗
                </h2>
                <p className="text-xl font-handwritten text-gray-700 max-w-2xl mx-auto">
                    &quot;Soft static and emotional warmth, wrapped in love...&quot;
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
                            src={getHeroPhoto(6)}
                            alt="Hug Day Memory"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                    </div>
                    <div className="p-4 bg-white">
                        <p className="text-lg font-handwritten text-center text-gray-800">
                            Wrapped in your arms 🤗
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Sound Box */}
            <SoundBox
                audioSrc="/assets/audio/Ik Kudi - Arpit Bala & Wolf.Cryman _ (Lyrics).mp3"
                title="Ik Kudi"
                artist="Arpit Bala & Wolf.Cryman"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-2xl p-8 text-center"
            >
                <h3 className="text-3xl font-bold text-friends-romantic-rose mb-6">
                    Virtual Hug 💕
                </h3>
                <p className="text-xl font-handwritten text-gray-700 mb-8 max-w-2xl mx-auto">
                    Distance means nothing when someone means everything. Here&apos;s a virtual hug
                    that wraps you in all my love and warmth!
                </p>

                <motion.button
                    onClick={sendVirtualHug}
                    className="btn-friends text-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Send Hug 🤗
                </motion.button>

                <motion.div
                    className="mt-8 text-6xl"
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    💓
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <h3 className="text-3xl font-bold text-center mb-8 text-friends-romantic-rose">
                    Our Warm Moments 📸
                </h3>
                <PhotoGallery images={images} layout="polaroid" />
            </motion.div>
        </div>
    );
}
