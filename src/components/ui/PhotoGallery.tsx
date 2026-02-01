'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PhotoGalleryProps {
    images: string[];
    layout?: 'polaroid' | 'grid' | 'masonry';
}

export default function PhotoGallery({ images, layout = 'polaroid' }: PhotoGalleryProps) {
    if (images.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500 font-handwritten text-xl">
                    Add your photos to public/assets/images/ to see them here! 📸
                </p>
            </div>
        );
    }

    if (layout === 'polaroid') {
        return (
            <div className="flex flex-wrap justify-center gap-8 p-8">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                        transition={{ delay: index * 0.1 }}
                        className="polaroid"
                    >
                        <div className="relative w-64 h-64 bg-gray-100">
                            <Image
                                src={image}
                                alt={`Memory ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={index < 3}
                            />
                        </div>
                        <div className="mt-3 text-center font-handwritten text-gray-700 text-lg">
                            Memory #{index + 1} 💕
                        </div>
                    </motion.div>
                ))}
            </div>
        );
    }

    if (layout === 'grid') {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative aspect-square rounded-lg overflow-hidden shadow-lg group"
                    >
                        <Image
                            src={image}
                            alt={`Photo ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </motion.div>
                ))}
            </div>
        );
    }

    // Masonry layout
    return (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 p-6">
            {images.map((image, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-6 break-inside-avoid"
                >
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={image}
                            alt={`Photo ${index + 1}`}
                            width={400}
                            height={300}
                            className="w-full h-auto"
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
