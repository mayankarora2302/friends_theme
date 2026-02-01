'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SoundBox from '@/components/audio/SoundBox';
import PhotoGallery from '@/components/ui/PhotoGallery';
import { getPhotosForDay, getHeroPhoto } from '@/utils/photoManifest';

export default function Day5PromiseDay() {
    const images = getPhotosForDay(5, 3);

    const promises = [
        "I promise to always make you laugh, even on the hardest days",
        "I promise to be your biggest cheerleader and your safe place",
        "I promise to love you more with each passing day",
        "I promise to build a beautiful future together with you",
        "I promise to be your lobster, forever and always 🦞",
    ];

    return (
        <div className="space-y-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <h2 className="text-4xl font-bold text-friends-purple mb-4">
                    🤝 Promise Day 🤝
                </h2>
                <p className="text-xl font-handwritten text-gray-700 max-w-2xl mx-auto">
                    &quot;Handwritten vows from the heart, sealed with love...&quot;
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
                            src={getHeroPhoto(5)}
                            alt="Promise Day Memory"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                    </div>
                    <div className="p-4 bg-white">
                        <p className="text-lg font-handwritten text-center text-gray-800">
                            Promises we&apos;ll keep forever 🤝
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Sound Box */}
            <SoundBox
                audioSrc="/assets/audio/Jordana & TV Girl - Better in the Dark.mp3"
                title="Better in the Dark"
                artist="TV Girl"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-2xl p-8"
            >
                <h3 className="text-3xl font-bold text-center mb-8 text-friends-purple">
                    My Promises to You 💌
                </h3>
                <div className="space-y-6 max-w-2xl mx-auto">
                    {promises.map((promise, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="sticky-note"
                        >
                            <p className="text-lg text-gray-800">
                                {index + 1}. {promise}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                <h3 className="text-3xl font-bold text-center mb-8 text-friends-purple">
                    Our Promise Memories 📸
                </h3>
                <PhotoGallery images={images} layout="polaroid" />
            </motion.div>
        </div>
    );
}
