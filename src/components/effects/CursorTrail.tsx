'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Heart {
    id: number;
    x: number;
    y: number;
}

export default function CursorTrail() {
    const [hearts, setHearts] = useState<Heart[]>([]);
    const [nextId, setNextId] = useState(0);

    useEffect(() => {
        let lastTime = 0;
        const throttleDelay = 100; // Create heart every 100ms

        const handleMouseMove = (e: MouseEvent) => {
            const currentTime = Date.now();
            if (currentTime - lastTime < throttleDelay) return;
            lastTime = currentTime;

            const newHeart: Heart = {
                id: nextId,
                x: e.clientX,
                y: e.clientY,
            };

            setHearts((prev) => [...prev, newHeart]);
            setNextId((prev) => prev + 1);

            // Remove heart after animation
            setTimeout(() => {
                setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
            }, 1000);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [nextId]);

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            <AnimatePresence>
                {hearts.map((heart) => (
                    <motion.div
                        key={heart.id}
                        initial={{
                            x: heart.x - 10,
                            y: heart.y - 10,
                            opacity: 1,
                            scale: 1,
                        }}
                        animate={{
                            y: heart.y - 50,
                            opacity: 0,
                            scale: 0.5,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="absolute text-2xl"
                        style={{ left: 0, top: 0 }}
                    >
                        ❤️
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
