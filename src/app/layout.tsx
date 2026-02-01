import type { Metadata } from 'next';
import { Poppins, Caveat, Special_Elite } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
});

const caveat = Caveat({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-caveat',
});

const specialElite = Special_Elite({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-special-elite',
});

export const metadata: Metadata = {
    title: 'The One With Our Love | A FRIENDS Valentine Experience',
    description: 'A romantic FRIENDS-themed Valentine\'s Week journey celebrating our love story',
    keywords: ['valentine', 'love', 'friends', 'romance', 'anniversary'],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${caveat.variable} ${specialElite.variable} font-sans`}>
                {children}
            </body>
        </html>
    );
}
