'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AudioPlayer } from '@/utils/audioUtils';

interface SoundBoxProps {
    audioSrc: string;
    title: string;
    artist?: string;
}

export default function SoundBox({ audioSrc, title, artist = 'Our Love Story' }: SoundBoxProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [audioError, setAudioError] = useState(false);
    const playerRef = useRef<AudioPlayer | null>(null);

    useEffect(() => {
        const player = new AudioPlayer(audioSrc);
        player.init().then(() => {
            player.setVolume(volume);
            player.onTimeUpdate(() => {
                setCurrentTime(player.currentTime);
                setDuration(player.duration);
            });
            player.onEnded(() => {
                setIsPlaying(false);
            });
        }).catch(() => {
            setAudioError(true);
        });
        playerRef.current = player;

        return () => {
            if (playerRef.current) {
                playerRef.current.destroy();
            }
        };
    }, [audioSrc, volume]);

    const togglePlay = () => {
        if (!playerRef.current) return;

        if (isPlaying) {
            playerRef.current.pause();
        } else {
            playerRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (playerRef.current) {
            playerRef.current.setVolume(newVolume);
        }
    };

    const formatTime = (time: number): string => {
        if (isNaN(time)) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-xl p-6 shadow-xl max-w-md mx-auto"
        >
            {/* Cassette Tape Design */}
            <div className="bg-gradient-to-br from-friends-perk-brown to-amber-900 rounded-lg p-4 mb-4 relative overflow-hidden">
                {/* Cassette Details */}
                <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-800 rounded-full">
                            <motion.div
                                animate={{ rotate: isPlaying ? 360 : 0 }}
                                transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: 'linear' }}
                                className="w-full h-full rounded-full border-4 border-white/30"
                            />
                        </div>
                    </div>

                    <div className="flex-1 mx-4 text-white">
                        <h3 className="font-bold text-lg truncate">{title}</h3>
                        <p className="text-sm opacity-80">{artist}</p>
                    </div>

                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-800 rounded-full">
                            <motion.div
                                animate={{ rotate: isPlaying ? 360 : 0 }}
                                transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: 'linear' }}
                                className="w-full h-full rounded-full border-4 border-white/30"
                            />
                        </div>
                    </div>
                </div>

                {/* Tape Window */}
                <div className="bg-white/10 rounded p-2 backdrop-blur-sm">
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-friends-romantic-rose"
                            style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="space-y-4">
                {audioError ? (
                    <div className="text-center py-4">
                        <p className="text-sm text-gray-500 italic">
                            🎵 Add {audioSrc.split('/').pop()} to hear the music! 🎵
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Play/Pause Button */}
                        <div className="flex items-center justify-center gap-4">
                            <button
                                onClick={togglePlay}
                                className="w-16 h-16 bg-friends-purple hover:bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl transition-all transform hover:scale-110 active:scale-95 shadow-lg"
                            >
                                {isPlaying ? '⏸' : '▶️'}
                            </button>
                        </div>

                        {/* Time Display */}
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration)}</span>
                        </div>

                        {/* Volume Control */}
                        <div className="flex items-center gap-3">
                            <span className="text-xl">🔊</span>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-friends-purple"
                            />
                            <span className="text-sm text-gray-600 w-12 text-right">
                                {Math.round(volume * 100)}%
                            </span>
                        </div>
                    </>
                )}
            </div>
        </motion.div>
    );
}
