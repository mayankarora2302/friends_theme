'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SoundBox from '@/components/audio/SoundBox';
import PhotoGallery from '@/components/ui/PhotoGallery';
import { getPhotosForDay, getHeroPhoto } from '@/utils/photoManifest';

export default function Day4TeddyDay() {
    const images = getPhotosForDay(4, 4);

    return (
        <div className="space-y-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <h2 className="text-4xl font-bold text-friends-pastel-pink mb-4">
                    🧸 Teddy Day 🧸
                </h2>
                <p className="text-xl font-handwritten text-gray-700 max-w-2xl mx-auto">
                    &quot;Cozy comfort and warm hugs, just like your favorite hoodie...&quot;
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
                            src={getHeroPhoto(4)}
                            alt="Teddy Day Memory"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                    </div>
                    <div className="p-4 bg-white">
                        <p className="text-lg font-handwritten text-center text-gray-800">
                            Cozy comfort with you 🧸
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Sound Box */}
            <SoundBox
                audioSrc="/assets/audio/Rakhlo Tum Chupake - Arpit Bala _ Lyrics.mp3"
                title="Rakhlo Tum Chupake"
                artist="Arpit Bala"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-2xl p-8 text-center"
            >
                <div className="text-8xl mb-6">🧸</div>
                <h3 className="text-3xl font-bold text-friends-pastel-pink mb-6">
                    Virtual Teddy Hug 🤗
                </h3>
                <p className="text-xl font-handwritten text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    You&apos;re my comfort, my safe place, my home. Just like a teddy bear brings warmth,
                    you bring joy to every moment. Here&apos;s a virtual hug that says: I love you,
                    today and always! 💕
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <h3 className="text-3xl font-bold text-center mb-8 text-friends-pastel-pink">
                    Our Cozy Moments 📸
                </h3>
                <PhotoGallery images={images} layout="polaroid" />
            </motion.div>
        </div>
    );
}
