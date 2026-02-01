/**
 * Photo manifest - all available photos in the assets folder
 * This file is auto-generated based on the actual files in public/assets/images
 */

export const ALL_PHOTOS = [
    '/assets/images/058A2A92-E4D4-4841-A275-B080BFA69FD5.JPG',
    '/assets/images/06A695CC-3FE9-4346-97D3-9D174467D8A6.JPG',
    '/assets/images/2878C80A-DF9E-4AC9-ACF5-4422F9E09CD3.JPG',
    '/assets/images/2CA59384-00FA-4192-82C4-77B9996FD9A3.JPG',
    '/assets/images/2F3B4243-797E-4B89-B29F-848BB1C9185E.JPG',
    '/assets/images/49A9E51C-C071-47F2-BE3A-3C152E415A3F.JPG',
    '/assets/images/519EC03C-5E57-4C88-8F68-D7FF0EDC18A3.JPG',
    '/assets/images/6E73EC06-D99B-4218-B3C3-101308D2ED10.JPG',
    '/assets/images/789753B7-0173-4BB3-A465-E162FC701EAE.JPG',
    '/assets/images/8E73D921-23E1-4BDD-B3DB-6B7DCD2849CE.JPG',
    '/assets/images/9208A3AF-9718-409D-9947-0C941AFAF2EA.JPG',
    '/assets/images/9F6F8284-80A9-455B-82F1-C3519E41F575.JPG',
    '/assets/images/A729909F-7B5C-4BEF-947F-A170C823A7F7.JPG',
    '/assets/images/AE04990D-F1B8-4E74-B010-80A3DD2DE2E6.JPG',
    '/assets/images/BE76B172-E651-4F36-A230-BF297AF3648A.JPG',
    '/assets/images/C063E370-305F-4D99-B032-55E1BC0549CC.JPG',
    '/assets/images/C4326A4D-5730-4D4A-BD6E-2C22AE74F6D2.JPG',
    '/assets/images/CE6E7EEE-71AD-4CBE-9196-ADEE538AB52C.JPG',
    '/assets/images/D0A23DD9-D3DE-433C-9D25-5480989F44A9.JPG',
    '/assets/images/D1629CD7-6FC0-462D-B011-901FCA809F3E.JPG',
    '/assets/images/D2BFD302-3ABD-4A85-B85D-80215BE002CA.JPG',
    '/assets/images/D32E02B5-A151-45FA-9519-E289FBA77A9D.JPG',
    '/assets/images/D7151245-8243-4CB4-8414-75974DEE5042.JPG',
    '/assets/images/DBB8F896-8CC2-461D-B3C1-9037FC1B2A2A.JPG',
    '/assets/images/F05A1DD0-2D4E-42BB-B8E8-B5410440B3DF.JPG',
    '/assets/images/F3A727F5-67F6-4AB1-B9E2-F213088FF144.JPG',
];

/**
 * Get photos for a specific day (distributed evenly across all days)
 */
export function getPhotosForDay(dayNumber: number, count: number = 4): string[] {
    // Distribute photos evenly across 8 days
    const photosPerDay = Math.ceil(ALL_PHOTOS.length / 8);
    const startIndex = (dayNumber - 1) * photosPerDay;
    const endIndex = startIndex + count;

    return ALL_PHOTOS.slice(startIndex, endIndex);
}

/**
 * Get random photos
 */
export function getRandomPhotos(count: number): string[] {
    const shuffled = [...ALL_PHOTOS].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

/**
 * Get all photos
 */
export function getAllPhotos(): string[] {
    return ALL_PHOTOS;
}

/**
 * Get hero photo for a specific day or home page
 * @param dayNumber - Day number (0 for home page, 1-8 for daily pages)
 */
export function getHeroPhoto(dayNumber: number = 0): string {
    // Use specific photos for each day/page
    const heroPhotos: { [key: number]: string } = {
        0: ALL_PHOTOS[0],  // Home page
        1: ALL_PHOTOS[1],  // Day 1 - Rose Day
        2: ALL_PHOTOS[4],  // Day 2 - Propose Day
        3: ALL_PHOTOS[7],  // Day 3 - Chocolate Day
        4: ALL_PHOTOS[10], // Day 4 - Teddy Day
        5: ALL_PHOTOS[13], // Day 5 - Promise Day
        6: ALL_PHOTOS[16], // Day 6 - Hug Day
        7: ALL_PHOTOS[19], // Day 7 - Kiss Day
        8: ALL_PHOTOS[22], // Day 8 - Valentine's Day
    };

    return heroPhotos[dayNumber] || ALL_PHOTOS[0];
}

/**
 * Get the 6 special memory photos for Day 8 interactive gallery
 */
export function getMemoryPhotos(): Array<{ image: string; title: string; story: string; date?: string }> {
    return [
        {
            image: ALL_PHOTOS[12],
            title: 'The One With ',
            story: 'Your 17th Birthday',
            date: 'Your 17th Birthday'
        },
        {
            image: ALL_PHOTOS[1],
            title: 'The One With A date',
            story: 'fav restraunt',
            date: 'Mia Piaci'
        },
        {
            image: ALL_PHOTOS[16],
            title: 'The One Where Ryan got high',
            story: 'Ryan Got HIGH!!',
            date: 'Our Forever Moment'
        },
        {
            image: ALL_PHOTOS[0],
            title: 'The One With Priorities',
            story: 'Gussa hun but pics lena zaruri hai 🥰',
            date: '📸'
        },
        {
            image: ALL_PHOTOS[10],
            title: 'The One With Chiko',
            story: 'Chikoo my Op',
            date: 'Pure Joy'
        },
        {
            image: ALL_PHOTOS[14],
            title: 'The One With Warmth',
            story: 'Looking at this photo, I see our future. I see all the adventures we\'ll have, all the memories we\'ll make, all the love we\'ll share. You\'re not just my today, you\'re my every day. My yesterday, my today, my tomorrow - my forever.',
            date: 'Always and Forever'
        }
    ];
}
