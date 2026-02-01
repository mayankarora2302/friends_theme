'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SoundBox from '@/components/audio/SoundBox';
import PhotoGallery from '@/components/ui/PhotoGallery';
import { getPhotosForDay, getHeroPhoto } from '@/utils/photoManifest';

export default function Day3ChocolateDay() {
    const images = getPhotosForDay(3, 4);

    return (
        <div className="space-y-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <h2 className="text-4xl font-bold text-friends-perk-brown mb-4">
                    🍫 Chocolate Day 🍫
                </h2>
                <p className="text-xl font-handwritten text-gray-700 max-w-2xl mx-auto">
                    &quot;Welcome to Central Perk, where every moment is as sweet as chocolate...&quot;
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
                            src={getHeroPhoto(3)}
                            alt="Chocolate Day Memory"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                    </div>
                    <div className="p-4 bg-white">
                        <p className="text-lg font-handwritten text-center text-gray-800">
                            Sweet moments at Central Perk 🍫
                        </p>
                    </div>
                </div>
            </motion.div>

            <SoundBox
                audioSrc="/assets/audio/Voh Dekhnay Mein - Lyrical Song _ Ali Zafar, Aditi Rao Hydari _ Evergreen Romantic Song.mp3"
                title="Voh Dekhnay Mein"
                artist="Ali Zafar"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-2xl p-8 text-center"
            >
                <h3 className="text-3xl font-bold text-friends-perk-brown mb-6">
                    Sweet Memories ☕🍫
                </h3>
                <p className="text-xl font-handwritten text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    Just like the perfect cup of coffee at Central Perk, you make every day sweeter.
                    Every chocolate we share is a moment of joy, every laugh a memory we treasure.
                    Here&apos;s to our sweet journey together! 💕
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <h3 className="text-3xl font-bold text-center mb-8 text-friends-perk-brown">
                    Our Sweet Moments 📸
                </h3>
                <PhotoGallery images={images} layout="polaroid" />
            </motion.div>
        </div>
    );
}
