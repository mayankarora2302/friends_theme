/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // FRIENDS-themed color palette
                friends: {
                    purple: '#8B5FBF',
                    apartment: {
                        wall: '#E8DCC4',
                        door: '#8B4513',
                        frame: '#D4A574',
                    },
                    perk: {
                        orange: '#FF6B35',
                        brown: '#6B4423',
                        cream: '#F4E8D8',
                    },
                    pastel: {
                        pink: '#FFB6C1',
                        blue: '#B0C4DE',
                        yellow: '#FFFACD',
                        lavender: '#E6E6FA',
                        peach: '#FFDAB9',
                    },
                    romantic: {
                        rose: '#FF69B4',
                        heart: '#DC143C',
                        blush: '#FFC0CB',
                    },
                },
            },
            fontFamily: {
                handwritten: ['Caveat', 'cursive'],
                typewriter: ['Special Elite', 'monospace'],
                sitcom: ['Poppins', 'sans-serif'],
                friends: ['Gabriel Weiss\' Friends Font', 'sans-serif'],
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'heart-beat': 'heartbeat 1.5s ease-in-out infinite',
                'door-open': 'doorOpen 1.5s ease-out forwards',
                'vhs-glitch': 'vhsGlitch 0.3s infinite',
                'sparkle': 'sparkle 1.5s ease-in-out infinite',
                'typewriter': 'typewriter 3s steps(40) forwards',
                'fade-in': 'fadeIn 0.5s ease-in forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                heartbeat: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.1)' },
                },
                doorOpen: {
                    '0%': { transform: 'perspective(1200px) rotateY(0deg)', transformOrigin: 'left' },
                    '100%': { transform: 'perspective(1200px) rotateY(-120deg)', transformOrigin: 'left' },
                },
                vhsGlitch: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '33%': { transform: 'translateX(-2px)' },
                    '66%': { transform: 'translateX(2px)' },
                },
                sparkle: {
                    '0%, 100%': { opacity: '0', transform: 'scale(0)' },
                    '50%': { opacity: '1', transform: 'scale(1)' },
                },
                typewriter: {
                    '0%': { width: '0' },
                    '100%': { width: '100%' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};
