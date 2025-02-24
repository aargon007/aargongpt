import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import type React from 'react';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-plus-jakarta-sans',
    weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'aargonGPT',
    description: 'a simple GPT-3 powered text generator',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${plusJakartaSans.variable} font-sans antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
