# How to Customize the Interactive Memory Gallery

## 📍 File Location

**File to Edit:** [`/Users/mayankarora/Desktop/Order2/src/utils/photoManifest.ts`](file:///Users/mayankarora/Desktop/Order2/src/utils/photoManifest.ts)

**Function:** `getMemoryPhotos()`

---

## 🎯 What You Can Customize

Each memory card has **4 customizable fields**:

1. **`image`** - The photo to display
2. **`title`** - The FRIENDS-style title (e.g., "The One Where...")
3. **`story`** - The heartfelt story revealed when clicked
4. **`date`** - Optional romantic caption/date

---

## 📝 How to Edit

### Step 1: Open the File

Open this file in your code editor:
```
/Users/mayankarora/Desktop/Order2/src/utils/photoManifest.ts
```

### Step 2: Find the Function

Scroll to the `getMemoryPhotos()` function (around line 86). You'll see 6 memory objects like this:

```typescript
export function getMemoryPhotos() {
    return [
        {
            image: ALL_PHOTOS[23],
            title: 'The One Where We First Met',
            story: 'Your story here...',
            date: 'The Beginning of Forever'
        },
        // ... 5 more memories
    ];
}
```

### Step 3: Customize Each Memory

#### Changing the Photo

The `image` field uses photos from your `public/assets/images/` folder.

**Option 1: Use a specific photo by index**
```typescript
image: ALL_PHOTOS[23],  // Uses the 24th photo (0-indexed)
```

**Option 2: Use a direct path**
```typescript
image: '/assets/images/your-photo-name.jpg',
```

**Your available photos:**
- `ALL_PHOTOS[0]` through `ALL_PHOTOS[25]` (26 photos total)
- Or use the exact filename from your images folder

#### Changing the Title

Keep the FRIENDS theme with "The One Where..." or "The One With..." format:

```typescript
title: 'The One Where We First Met',
title: 'The One With Our Adventure',
title: 'The One Where You Said Yes',
// etc.
```

#### Changing the Story

Write your personal story (2-4 sentences recommended):

```typescript
story: 'This is where you write your heartfelt story about this memory. Make it personal, make it meaningful. This text will appear on the back of the card when clicked.',
```

**Tips:**
- Keep it 2-4 sentences for readability
- Use `\'` for apostrophes (e.g., `don\'t`, `you\'re`)
- Use `\"` for quotes inside the story

#### Changing the Date/Caption

Add a romantic caption or actual date:

```typescript
date: 'The Beginning of Forever'
date: 'Summer 2023'
date: 'Our Forever Moment'
date: 'February 14, 2024'
```

---

## 🎨 Complete Example

Here's how to customize Memory Card #1:

**Before:**
```typescript
{
    image: ALL_PHOTOS[23],
    title: 'The One Where We First Met',
    story: 'I still remember the first time I saw you...',
    date: 'The Beginning of Forever'
}
```

**After (Your Custom Version):**
```typescript
{
    image: '/assets/images/our-first-meeting.jpg',  // Your specific photo
    title: 'The One Where Our Eyes Met',            // Your custom title
    story: 'It was a rainy Tuesday at the coffee shop. You ordered a latte, I spilled mine. We laughed, and I knew right then - you were the one.',  // Your story
    date: 'October 15, 2019'                        // Your date
}
```

---

## 📋 All 6 Memory Cards Template

Copy this template and fill in your own details:

```typescript
export function getMemoryPhotos() {
    return [
        // MEMORY 1
        {
            image: ALL_PHOTOS[23],  // Change photo index or use direct path
            title: 'Your Title Here',
            story: 'Your story here...',
            date: 'Your caption here'
        },
        
        // MEMORY 2
        {
            image: ALL_PHOTOS[24],
            title: 'Your Title Here',
            story: 'Your story here...',
            date: 'Your caption here'
        },
        
        // MEMORY 3
        {
            image: ALL_PHOTOS[25],
            title: 'Your Title Here',
            story: 'Your story here...',
            date: 'Your caption here'
        },
        
        // MEMORY 4
        {
            image: ALL_PHOTOS[26] || ALL_PHOTOS[3],
            title: 'Your Title Here',
            story: 'Your story here...',
            date: 'Your caption here'
        },
        
        // MEMORY 5
        {
            image: ALL_PHOTOS[27] || ALL_PHOTOS[5],
            title: 'Your Title Here',
            story: 'Your story here...',
            date: 'Your caption here'
        },
        
        // MEMORY 6
        {
            image: ALL_PHOTOS[2],
            title: 'Your Title Here',
            story: 'Your story here...',
            date: 'Your caption here'
        }
    ];
}
```

---

## 💡 Pro Tips

1. **Photo Selection**: Choose photos that represent different milestones in your relationship
2. **Title Variety**: Mix up the titles - use "Where" and "With" for variety
3. **Story Length**: Aim for 150-250 characters per story for best readability
4. **Emotional Arc**: Order the memories chronologically or by emotional impact
5. **Save & Test**: After editing, save the file and refresh your browser to see changes

---

## 🔄 Adding/Removing Cards

**To add more cards:**
Add another object to the array:
```typescript
{
    image: ALL_PHOTOS[10],
    title: 'The One With...',
    story: 'Your story...',
    date: 'Your date'
},
```

**To remove cards:**
Simply delete one of the memory objects from the array.

**Current Layout:**
- Mobile: 1 column (stacked)
- Tablet: 2 columns
- Desktop: 3 columns

---

## ✅ Quick Checklist

- [ ] Open `/Users/mayankarora/Desktop/Order2/src/utils/photoManifest.ts`
- [ ] Find `getMemoryPhotos()` function
- [ ] Update all 6 `image` fields with your photos
- [ ] Customize all 6 `title` fields
- [ ] Write personal `story` for each card
- [ ] Add meaningful `date` captions
- [ ] Save the file
- [ ] Refresh browser to see changes
- [ ] Click each card to test the flip animation

---

**That's it!** Your personalized memory gallery is ready to wow your loved one! 💕
