'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import useProgressStore from '@/store/progressStore';
import { initAudioContext, playSound } from '@/utils/audioUtils';

const CORRECT_PASSWORD = '16082025';

export default function LoginPage() {
    const router = useRouter();
    const setAuthenticated = useProgressStore(state => state.setAuthenticated);

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isOpening, setIsOpening] = useState(false);
    const [peepholeActive, setPeepholeActive] = useState(false);

    useEffect(() => {
        // Initialize audio context on mount (requires user interaction)
        const handleFirstClick = () => {
            initAudioContext();
            document.removeEventListener('click', handleFirstClick);
        };
        document.addEventListener('click', handleFirstClick);
        return () => document.removeEventListener('click', handleFirstClick);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (password === CORRECT_PASSWORD) {
            setError('');
            setIsOpening(true);

            // Play door opening sound
            playSound('/assets/audio/door-open.mp3', 0.5);

            // Wait for door animation, then navigate
            setTimeout(() => {
                setAuthenticated(true);
                router.push('/home');
            }, 1500);
        } else {
            setError(getSitcomError());
            setPassword('');

            // Play error sound
            playSound('/assets/audio/error.mp3', 0.3);
        }
    };

    const getSitcomError = (): string => {
        const errors = [
            "Could this BE any more wrong?",
            "Oh. My. God. That's not it!",
            "We were on a break... from the right password!",
            "How you doin'? Not great with passwords, apparently.",
            "Pivot! PIVOT! ...to the correct password.",
            "It's like all my life everyone's told me, 'You're a wrong password!'",
            "Welcome to the real world! It sucks. Wrong password!",
        ];
        return errors[Math.floor(Math.random() * errors.length)];
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-friends-apartment-wall via-friends-perk-cream to-friends-pastel-lavender p-4 relative overflow-hidden">
            {/* Floating Hearts Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {typeof window !== 'undefined' && [...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-4xl"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: window.innerHeight + 50,
                            opacity: 0.6,
                        }}
                        animate={{
                            y: -100,
                            x: Math.random() * window.innerWidth,
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    >
                        ❤️
                    </motion.div>
                ))}
            </div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
            >
                {/* Title */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-friends-purple mb-2 drop-shadow-lg">
                        The One With Our Love
                    </h1>
                    <p className="text-xl text-friends-perk-brown font-handwritten">
                        A Valentine&apos;s Week Love Story
                    </p>
                </motion.div>

                {/* Door Container */}
                <div className="relative w-[400px] h-[600px] max-w-full">
                    {/* Door Frame */}
                    <div className="absolute inset-0 bg-friends-apartment-frame rounded-lg p-6 shadow-2xl">
                        {/* Door */}
                        <motion.div
                            className="relative w-full h-full bg-friends-apartment-door rounded-md overflow-hidden"
                            style={{
                                transformStyle: 'preserve-3d',
                                transformOrigin: 'left center',
                            }}
                            animate={isOpening ? {
                                rotateY: -120,
                            } : {}}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                        >
                            {/* Door Details */}
                            <div className="absolute inset-4 border-4 border-amber-900/30 rounded-sm">
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-2/3 border-4 border-amber-900/20 rounded-sm"></div>
                            </div>

                            {/* Peephole */}
                            <motion.div
                                className="absolute top-32 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-yellow-600 to-amber-800 rounded-full cursor-pointer shadow-inner"
                                whileHover={{ scale: 1.1 }}
                                onHoverStart={() => setPeepholeActive(true)}
                                onHoverEnd={() => setPeepholeActive(false)}
                            >
                                <div className="absolute inset-2 bg-black/80 rounded-full flex items-center justify-center">
                                    <AnimatePresence>
                                        {peepholeActive && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                                className="text-2xl"
                                            >
                                                👁️
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>

                            {/* Door Knob */}
                            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg">
                                <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
                            </div>

                            {/* Login Form on Door */}
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <form onSubmit={handleSubmit} className="w-full max-w-sm">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-xl"
                                    >
                                        <h2 className="text-2xl font-bold text-center mb-4 text-friends-purple font-handwritten">
                                            Enter the Magic Number
                                        </h2>

                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="DD MM YYYY"
                                            className="w-full px-4 py-3 border-2 border-friends-purple/30 rounded-lg focus:outline-none focus:border-friends-purple transition-colors text-center text-xl tracking-wider font-typewriter"
                                            maxLength={8}
                                            autoFocus
                                        />

                                        <motion.button
                                            type="submit"
                                            className="w-full mt-4 btn-friends"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Open the Door
                                        </motion.button>

                                        <AnimatePresence>
                                            {error && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="mt-4 p-3 bg-red-100 border-2 border-red-400 rounded-lg text-red-700 text-center font-handwritten text-lg"
                                                >
                                                    {error}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <p className="mt-4 text-center text-sm text-gray-600 font-handwritten">
                                            Hint: The day our story began... 💕
                                        </p>
                                    </motion.div>
                                </form>
                            </div>
                        </motion.div>
                    </div>

                    {/* Welcome Message (shown when door opens) */}
                    <AnimatePresence>
                        {isOpening && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                            >
                                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl text-center">
                                    <h2 className="text-4xl font-bold text-friends-purple mb-2 font-handwritten">
                                        Welcome Home! 🏠
                                    </h2>
                                    <p className="text-xl text-friends-perk-brown">
                                        Your love story awaits...
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Footer Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 text-center"
                >
                    <p className="text-lg text-friends-purple font-handwritten italic">
                        &quot;He&apos;s her lobster!&quot; 🦞
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
