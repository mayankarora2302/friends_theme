# The One With Our Love 🦞💕

A FRIENDS sitcom-inspired Valentine's web app featuring a 7-Day Valentine Week experience with romantic, playful, and emotional content that unlocks daily.

## 🎬 Features

- **FRIENDS-Themed UI**: Cozy apartment vibes, Central Perk café aesthetics, and sitcom humor
- **8 Daily Episodes**: Each Valentine's Day (Feb 7-14) unlocks a new romantic experience
- **Interactive Games**: Rose catching, romantic quizzes, memory matching, and more
- **Sound Box Player**: Unique romantic soundtrack for each day
- **Photo Personalization**: Your photos displayed throughout as Polaroids and galleries
- **Reaction System**: Leave sticky notes and messages while exploring
- **3D Effects**: Floating hearts, cursor trails, and confetti celebrations
- **Together Since Timer**: Real-time counter celebrating your relationship

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Login

Password: `23022007` (The day our story began! 💕)

## 📁 Adding Your Content

### Photos

1. Place your photos in `public/assets/images/`
2. Name them for specific days (optional): `day1_1.jpg`, `day2_1.jpg`, etc.
3. Or use generic names — they'll be displayed across all pages

### Audio

1. Place your audio files in `public/assets/audio/`
2. Name them: `day1.mp3`, `day2.mp3`, ..., `day8.mp3`
3. Supported formats: MP3, WAV, OGG, M4A

### Customization

Edit the following files to personalize content:

- **Love Letters**: Edit text in each day component (`src/components/days/Day*.tsx`)
- **Promises**: Modify the promises array in `Day5PromiseDay.tsx`
- **Quiz Questions**: Update questions in `Day2ProposeDay.tsx`
- **Together Since Date**: Change in `src/utils/dateUtils.ts` (default: Feb 23, 2007)

## 🎮 Episode Guide

### Episode 1 - Rose Day 🌹
- Monica's apartment balcony theme
- Rose catching game
- "You're My Lobster" message board
- Romantic Polaroid gallery

### Episode 2 - Propose Day 💍
- Chandler-style humor and confession
- Romantic quiz game
- Heartfelt proposal letter

### Episode 3 - Chocolate Day 🍫
- Central Perk café vibes
- Sweet memory gallery
- Cozy café soundtrack

### Episode 4 - Teddy Day 🧸
- Cozy comfort theme
- Virtual teddy gift
- Warm moments gallery

### Episode 5 - Promise Day 🤝
- Handwritten vow style
- Promise sticky notes
- Cassette tape aesthetic

### Episode 6 - Hug Day 🤗
- Emotional warmth theme
- Virtual hug with haptic feedback
- Heartbeat animation

### Episode 7 - Kiss Day 💋
- Polaroid flashbacks
- Memory card matching game
- SMS-style love timeline

### Episode 8 - Valentine's Day Finale ❤️
- Together Since Timer
- Expanding memory gallery
- Final handwritten love letter
- Confetti celebration
- "The One Where We Go See Each Other" CTA

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom FRIENDS theme
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Audio**: Web Audio API
- **State Management**: Zustand with persistence
- **TypeScript**: Full type safety

## 📱 Responsive Design

Fully optimized for:
- 📱 Mobile (320px - 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Desktop (1024px+)

## 🎨 Color Palette

- **FRIENDS Purple**: `#8B5FBF`
- **Apartment Wall**: `#E8DCC4`
- **Central Perk Orange**: `#FF6B35`
- **Romantic Rose**: `#FF69B4`
- **Pastel Pink**: `#FFB6C1`
- **Pastel Lavender**: `#E6E6FA`

## 🔧 Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📝 Episode Unlocking

- **Development Mode**: All episodes unlocked for testing
- **Production Mode**: Episodes unlock on their respective dates (Feb 7-14)

To change mode, edit `NODE_ENV` in `src/utils/dateUtils.ts`

## 🎭 FRIENDS Easter Eggs

- Lobster references throughout 🦞
- Sitcom-style error messages
- Central Perk café theme
- Monica's apartment aesthetics
- Chandler's sarcastic humor
- VHS tape locked episodes
- Peephole door animation

## 💝 Reactions Feature

Partners can leave reaction messages on each day:
- Click the sticky note button (bottom right)
- Write your thoughts
- Messages are saved and viewable later
- FRIENDS-style sticky note UI

## 🎵 Audio System

- Autoplay-safe (requires user interaction)
- Cassette tape-style player UI
- Volume controls
- Progress tracking
- Unique soundtrack per day

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the production bundle:

```bash
npm run build
```

Deploy the `.next` folder and `public` directory.

## 📄 License

This is a personal Valentine's gift project. Feel free to use it as inspiration for your own romantic web apps! 💕

## 🦞 "He's Her Lobster!"

Made with ❤️ and lots of FRIENDS references.

---

*"This is the story of how we became each other's lobster"* 🦞💕
