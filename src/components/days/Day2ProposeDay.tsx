'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import SoundBox from '@/components/audio/SoundBox';
import PhotoGallery from '@/components/ui/PhotoGallery';
import { getPhotosForDay, getHeroPhoto } from '@/utils/photoManifest';

const QUIZ_QUESTIONS = [
    {
        question: "What's my favorite thing about you?",
        options: ['Your smile', 'Your laugh', 'Your kindness', 'Everything'],
        correct: 3,
    },
    {
        question: "If I could describe our love in one word, it would be:",
        options: ['Adventure', 'Comfort', 'Forever', 'Magic'],
        correct: 2,
    },
    {
        question: "What's our song?",
        options: ['Perfect', 'Thinking Out Loud', 'All of Me', 'You decide! 💕'],
        correct: 3,
    },
];

export default function Day2ProposeDay() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    const images = getPhotosForDay(2, 4);

    const handleAnswer = (answerIndex: number) => {
        setSelectedAnswer(answerIndex);

        if (answerIndex === QUIZ_QUESTIONS[currentQuestion].correct) {
            setScore(score + 1);
        }

        setTimeout(() => {
            if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
            } else {
                setShowResult(true);
            }
        }, 1000);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedAnswer(null);
    };

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <h2 className="text-4xl font-bold text-friends-purple mb-4">
                    💍 Propose Day 💍
                </h2>
                <p className="text-xl font-handwritten text-gray-700 max-w-2xl mx-auto">
                    &quot;Could this BE any more romantic? Chandler-style confessions with a whole lot of heart...&quot;
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
                            src={getHeroPhoto(2)}
                            alt="Propose Day Memory"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                    </div>
                    <div className="p-4 bg-white">
                        <p className="text-lg font-handwritten text-center text-gray-800">
                            Will you be my forever? 💍
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Sound Box */}
            <SoundBox
                audioSrc="/assets/audio/Every-Breath-You-Take.mp3"
                title="Every Breath You Take"
                artist="The Police"
            />

            {/* Romantic Quiz */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-2xl p-8"
            >
                <h3 className="text-2xl font-bold text-center mb-6 text-friends-purple">
                    How Well Do You Know Our Love? 💕
                </h3>

                <AnimatePresence mode="wait">
                    {!showResult ? (
                        <motion.div
                            key={currentQuestion}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="space-y-6"
                        >
                            <div className="text-center mb-8">
                                <p className="text-sm text-gray-500 mb-2">
                                    Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
                                </p>
                                <h4 className="text-2xl font-bold text-gray-800">
                                    {QUIZ_QUESTIONS[currentQuestion].question}
                                </h4>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {QUIZ_QUESTIONS[currentQuestion].options.map((option, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => handleAnswer(index)}
                                        disabled={selectedAnswer !== null}
                                        className={`
                      p-4 rounded-lg font-semibold text-lg transition-all
                      ${selectedAnswer === null
                                                ? 'bg-white hover:bg-friends-pastel-pink cursor-pointer'
                                                : selectedAnswer === index
                                                    ? index === QUIZ_QUESTIONS[currentQuestion].correct
                                                        ? 'bg-green-500 text-white'
                                                        : 'bg-red-500 text-white'
                                                    : index === QUIZ_QUESTIONS[currentQuestion].correct
                                                        ? 'bg-green-500 text-white'
                                                        : 'bg-gray-300 text-gray-500'
                                            }
                    `}
                                        whileHover={selectedAnswer === null ? { scale: 1.05 } : {}}
                                        whileTap={selectedAnswer === null ? { scale: 0.95 } : {}}
                                    >
                                        {option}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center space-y-6"
                        >
                            <h4 className="text-3xl font-bold text-friends-purple">
                                Quiz Complete! 🎉
                            </h4>
                            <p className="text-2xl font-handwritten">
                                You scored {score} out of {QUIZ_QUESTIONS.length}!
                            </p>
                            <p className="text-xl text-gray-700">
                                {score === QUIZ_QUESTIONS.length
                                    ? "Perfect score! You know our love story by heart! 💕"
                                    : "Every answer is perfect because it's from you! ❤️"}
                            </p>
                            <button onClick={resetQuiz} className="btn-friends">
                                Try Again
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Proposal Letter */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="glass rounded-2xl p-8"
            >
                <h3 className="text-3xl font-bold text-center mb-6 text-friends-purple">
                    My Chandler-Style Confession 💌
                </h3>
                <div className="max-w-2xl mx-auto space-y-4 font-handwritten text-lg text-gray-800 leading-relaxed">
                    <p>
                        Okay, so... *nervous Chandler laugh* Could I BE any more in love with you?
                    </p>
                    <p>
                        I mean, seriously, when I think about us, it&apos;s like... you know when you find
                        that perfect coffee shop? The one where they know your order, and the couch is
                        always available, and everything just feels... right?
                    </p>
                    <p>
                        That&apos;s you. You&apos;re my Central Perk. My favorite place. My home.
                    </p>
                    <p>
                        And I know I make jokes when I&apos;m nervous (which is, like, always), but here&apos;s
                        the truth: You&apos;re the best thing that&apos;s ever happened to me. You make every
                        day feel like an adventure, every moment feel special.
                    </p>
                    <p className="text-2xl text-center text-friends-romantic-rose font-bold">
                        So... will you continue being my lobster? Forever? 🦞💍
                    </p>
                </div>
            </motion.div>

            {/* Photo Gallery */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                <h3 className="text-3xl font-bold text-center mb-8 text-friends-purple">
                    Our Proposal Memories 📸
                </h3>
                <PhotoGallery images={images} layout="polaroid" />
            </motion.div>
        </div>
    );
}
