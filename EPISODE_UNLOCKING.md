# Episode Unlocking System

## 🔒 How It Works

Your FRIENDS-themed Valentine's app now has **automatic date-based episode unlocking**. Episodes will unlock on their respective Valentine's Week dates.

---

## 📅 Unlock Schedule (Valentine's Week 2026)

| Day | Date | Episode | Theme |
|-----|------|---------|-------|
| **Day 1** | Feb 7, 2026 | Rose Day | Monica's Apartment Balcony |
| **Day 2** | Feb 8, 2026 | Propose Day | Chandler's Confession |
| **Day 3** | Feb 9, 2026 | Chocolate Day | Central Perk Café |
| **Day 4** | Feb 10, 2026 | Teddy Day | Cozy Comfort |
| **Day 5** | Feb 11, 2026 | Promise Day | Handwritten Vows |
| **Day 6** | Feb 12, 2026 | Hug Day | Emotional Warmth |
| **Day 7** | Feb 13, 2026 | Kiss Day | Polaroid Flashbacks |
| **Day 8** | Feb 14, 2026 | Valentine's Day | Soulmate Ending |

---

## 🎯 How Episodes Unlock

### Before Valentine's Week (Before Feb 7, 2026)
- **All episodes are locked** 🔒
- Users see VHS-style locked cards with blur effect
- Countdown shows "X days until unlock"

### During Valentine's Week (Feb 7-14, 2026)
- **Episodes unlock at midnight (12:00 AM)** on their respective dates
- Once unlocked, episodes remain accessible
- Example: On Feb 10, Days 1-4 are unlocked, Days 5-8 are locked

### After Valentine's Week (After Feb 14, 2026)
- **All episodes remain unlocked** ✅
- Users can access any episode at any time
- Perfect for reliving the memories!

---

## 🔧 Technical Details

### Date Checking Logic
The app uses `isDayUnlockedByDate()` function in `src/utils/dateUtils.ts`:

```typescript
export function isDayUnlockedByDate(dayNumber: number): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset to midnight
    
    const unlockDate = VALENTINE_WEEK_2026[dayNumber];
    if (!unlockDate) return false;
    
    return today >= unlockDate; // Unlocks at midnight
}
```

### Unlock Dates Configuration
Dates are defined in `VALENTINE_WEEK_2026` object:

```typescript
export const VALENTINE_WEEK_2026 = {
    1: new Date('2026-02-07'), // Rose Day
    2: new Date('2026-02-08'), // Propose Day
    3: new Date('2026-02-09'), // Chocolate Day
    4: new Date('2026-02-10'), // Teddy Day
    5: new Date('2026-02-11'), // Promise Day
    6: new Date('2026-02-12'), // Hug Day
    7: new Date('2026-02-13'), // Kiss Day
    8: new Date('2026-02-14'), // Valentine's Day
};
```

---

## 🎨 Visual Indicators

### Locked Episodes
- **VHS blur effect** - Blurred and grayed out
- **Lock icon** 🔒
- **"Unlocks in X days"** countdown
- **Not clickable**

### Unlocked Episodes
- **Clear, vibrant colors**
- **Unlock icon** ✓
- **"Available Now"** badge
- **Clickable** - Opens the episode

---

## 🧪 Testing the Unlock System

### Option 1: Wait for Actual Dates
- Deploy and wait for Valentine's Week 2026
- Episodes will unlock automatically

### Option 2: Test Locally (Change Dates)
If you want to test before 2026:

1. Open `src/utils/dateUtils.ts`
2. Change the year to 2025 (or current year):
   ```typescript
   export const VALENTINE_WEEK_2026 = {
       1: new Date('2025-02-07'), // Change 2026 to 2025
       2: new Date('2025-02-08'),
       // ... etc
   };
   ```
3. Save and test locally
4. **IMPORTANT:** Change back to 2026 before deploying!

### Option 3: Manual Override (Development Only)
To unlock all episodes for testing, you can temporarily add this to `isDayUnlockedByDate()`:

```typescript
// TEMPORARY - Remove before production!
return true; // Unlocks all episodes
```

**⚠️ Remember to remove this before deploying!**

---

## 📱 User Experience

### First Visit (Before Feb 7, 2026)
1. User logs in with password: `16082025`
2. Sees home page with 8 locked episode cards
3. Each card shows countdown: "Unlocks in X days"
4. Cannot click on locked episodes

### During Valentine's Week
1. User logs in each day
2. New episode unlocks at midnight
3. Previously unlocked episodes remain accessible
4. Creates anticipation and daily engagement!

### After Valentine's Week
1. All episodes unlocked
2. Can revisit any episode anytime
3. Perfect for reliving memories together

---

## 🔄 Changing Unlock Dates

To change the unlock schedule for a different year:

1. Open `src/utils/dateUtils.ts`
2. Update the `VALENTINE_WEEK_2026` object:
   ```typescript
   export const VALENTINE_WEEK_2027 = { // Rename if needed
       1: new Date('2027-02-07'),
       2: new Date('2027-02-08'),
       // ... update all dates
   };
   ```
3. Update the reference in `isDayUnlockedByDate()` function
4. Redeploy to Vercel

---

## ✅ Current Status

**Episode Unlocking:** ✅ ENABLED
**Mode:** Production (Date-based)
**Unlock Schedule:** Valentine's Week 2026 (Feb 7-14)
**Timezone:** Server timezone (UTC by default on Vercel)

---

## 💡 Pro Tips

1. **Deploy Early:** Deploy before Feb 7, 2026 so everything is ready
2. **Test Password:** Make sure Shubhra knows the password: `16082025`
3. **Share Link:** Send her the Vercel URL before Feb 7
4. **Daily Surprise:** Each day brings a new episode - magical! ✨
5. **After Feb 14:** All episodes stay unlocked forever

---

## 🎉 Ready to Deploy!

Your app is now configured for automatic episode unlocking. When you deploy to Vercel:

1. Episodes will be locked until their unlock dates
2. Users will see countdown timers
3. Episodes unlock automatically at midnight on their dates
4. No manual intervention needed!

**Perfect for creating anticipation and daily surprises for Shubhra!** 💕

---

*"He's her lobster!"* 🦞💕
