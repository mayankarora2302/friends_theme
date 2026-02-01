'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import SoundBox from '@/components/audio/SoundBox';
import PhotoGallery from '@/components/ui/PhotoGallery';
import { getPhotosForDay, getHeroPhoto } from '@/utils/photoManifest';

export default function Day7KissDay() {
    const [flipped, setFlipped] = useState<number[]>([]);
    const [matched, setMatched] = useState<number[]>([]);
    const [firstCard, setFirstCard] = useState<number | null>(null);

    const images = getPhotosForDay(7, 4);

    // Create pairs for memory game
    const cards = [...images, ...images].sort(() => Math.random() - 0.5);

    const handleCardClick = (index: number) => {
        if (flipped.includes(index) || matched.includes(index)) return;

        const newFlipped = [...flipped, index];
        setFlipped(newFlipped);

        if (firstCard === null) {
            setFirstCard(index);
        } else {
            // Check for match
            if (cards[firstCard] === cards[index]) {
                setMatched([...matched, firstCard, index]);
            }

            // Reset after delay
            setTimeout(() => {
                setFlipped([]);
                setFirstCard(null);
            }, 1000);
        }
    };

    const resetGame = () => {
        setFlipped([]);
        setMatched([]);
        setFirstCard(null);
    };

    return (
        <div className="space-y-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <h2 className="text-4xl font-bold text-friends-romantic-heart mb-4">
                    💋 Kiss Day 💋
                </h2>
                <p className="text-xl font-handwritten text-gray-700 max-w-2xl mx-auto">
                    &quot;Polaroid flashbacks of our sweetest moments...&quot;
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
                            src={getHeroPhoto(7)}
                            alt="Kiss Day Memory"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                    </div>
                    <div className="p-4 bg-white">
                        <p className="text-lg font-handwritten text-center text-gray-800">
                            Sealed with a kiss 💋
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Sound Box */}
            <SoundBox
                audioSrc="/assets/audio/Suki Waterhouse - Good Looking (Official Video).mp3"
                title="Good Looking"
                artist="Suki Waterhouse"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-2xl p-8"
            >
                <h3 className="text-2xl font-bold text-center mb-6 text-friends-romantic-heart">
                    Memory Match Game 💕
                </h3>
                <p className="text-center mb-6 font-handwritten text-lg">
                    Match the pairs to reveal our beautiful memories!
                </p>

                <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-6">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="aspect-square cursor-pointer"
                            onClick={() => handleCardClick(index)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className={`
                relative w-full h-full rounded-lg overflow-hidden shadow-lg
                ${matched.includes(index) ? 'opacity-50' : ''}
              `}>
                                <AnimatePresence mode="wait">
                                    {flipped.includes(index) || matched.includes(index) ? (
                                        <motion.div
                                            key="front"
                                            initial={{ rotateY: 90 }}
                                            animate={{ rotateY: 0 }}
                                            exit={{ rotateY: 90 }}
                                            transition={{ duration: 0.3 }}
                                            className="w-full h-full bg-cover bg-center"
                                            style={{ backgroundImage: `url(${card})` }}
                                        />
                                    ) : (
                                        <motion.div
                                            key="back"
                                            initial={{ rotateY: 90 }}
                                            animate={{ rotateY: 0 }}
                                            exit={{ rotateY: 90 }}
                                            transition={{ duration: 0.3 }}
                                            className="w-full h-full bg-gradient-to-br from-friends-purple to-friends-romantic-rose flex items-center justify-center text-4xl"
                                        >
                                            ❤️
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {matched.length === cards.length && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                    >
                        <h4 className="text-2xl font-bold text-friends-romantic-heart mb-4">
                            You found all our memories! 💕
                        </h4>
                        <button onClick={resetGame} className="btn-friends">
                            Play Again
                        </button>
                    </motion.div>
                )}
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <h3 className="text-3xl font-bold text-center mb-8 text-friends-romantic-heart">
                    Our Kiss Day Memories 📸
                </h3>
                <PhotoGallery images={images} layout="polaroid" />
            </motion.div>
        </div>
    );
}
