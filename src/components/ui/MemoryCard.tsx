'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MemoryCardProps {
    image: string;
    title: string;
    story: string;
    date?: string;
}

export default function MemoryCard({ image, title, story, date }: MemoryCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="perspective-1000 w-full max-w-sm mx-auto">
            <motion.div
                className="relative w-full h-[500px] cursor-pointer"
                onClick={() => setIsFlipped(!isFlipped)}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring' }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front of Card - Photo */}
                <div
                    className="absolute inset-0 backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <div className="polaroid-frame h-full">
                        <div className="relative w-full h-[400px] bg-gray-200 overflow-hidden">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 400px"
                            />
                        </div>
                        <div className="p-6 bg-white">
                            <h4 className="text-2xl font-handwritten text-center text-gray-800">
                                {title}
                            </h4>
                            {date && (
                                <p className="text-sm text-gray-500 text-center mt-1 font-handwritten">
                                    {date}
                                </p>
                            )}
                            <p className="text-xs text-gray-400 text-center mt-3 italic">
                                Click to reveal the story 💕
                            </p>
                        </div>
                    </div>
                </div>

                {/* Back of Card - Story */}
                <div
                    className="absolute inset-0 backface-hidden"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                    }}
                >
                    <div className="sticky-note h-full flex flex-col justify-center p-8 bg-friends-pastel-yellow">
                        <div className="space-y-4">
                            <h4 className="text-2xl font-bold text-friends-purple text-center mb-4">
                                {title}
                            </h4>
                            <p className="text-lg font-handwritten text-gray-800 leading-relaxed">
                                {story}
                            </p>
                            {date && (
                                <p className="text-sm text-gray-600 text-right font-handwritten italic mt-6">
                                    - {date}
                                </p>
                            )}
                            <p className="text-xs text-gray-500 text-center mt-6 italic">
                                Click to flip back ↩️
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
