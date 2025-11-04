import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Stats from '@/components/home/Stats';
import GetStarted from '@/components/home/GetStarted';
import UseCases from '@/components/home/UseCases';
import WhyChoose from '@/components/home/WhyChoose';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';

export const metadata: Metadata = {
    title: 'AargonGPT - Your AI Assistant That Actually Understands',
    description: 'Experience intelligent conversations with AargonGPT. Get instant answers, write better content, learn faster, and boost productivity. Free AI assistant powered by advanced technology.',
    keywords: [
        'AI assistant',
        'chatbot',
        'artificial intelligence',
        'AI chat',
        'ChatGPT alternative',
        'AI writing assistant',
        'intelligent assistant',
        'conversational AI',
        'AI helper',
        'smart assistant',
        'productivity AI',
        'AI for writing',
        'AI for learning',
        'AI for coding',
        'free AI chat'
    ],
    authors: [{ name: 'AargonGPT Team' }],
    creator: 'AargonGPT',
    publisher: 'AargonGPT',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://aargongpt.vercel.app'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'AargonGPT - Your AI Assistant That Actually Understands',
        description: 'Experience intelligent conversations with AargonGPT. Get instant answers, write better content, learn faster, and boost productivity with our free AI assistant.',
        url: 'https://aargongpt.vercel.app',
        siteName: 'AargonGPT',
        images: [
            {
                url: '/icon.png', // Add your OG image
                width: 1200,
                height: 630,
                alt: 'AargonGPT - AI Assistant',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AargonGPT - Your AI Assistant That Actually Understands',
        description: 'Experience intelligent conversations with AargonGPT. Get instant answers, write better content, and boost productivity.',
        images: ['/icon.png'],
        creator: '@aargon007',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default async function HomePage() {

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebApplication',
                        name: 'AargonGPT',
                        description: 'AI assistant that helps you work smarter, create faster, and learn better through natural conversations.',
                        url: 'https://aargongpt.vercel.app',
                        applicationCategory: 'ProductivityApplication',
                        operatingSystem: 'Any',
                        offers: {
                            '@type': 'Offer',
                            price: '0',
                            priceCurrency: 'USD',
                        },
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: '4.8',
                            ratingCount: '1250',
                        },
                        featureList: [
                            'Real-time AI conversations',
                            'Context-aware responses',
                            'Multilingual support',
                            'Writing assistance',
                            'Code generation',
                            'Research help',
                            'Privacy protected',
                        ],
                    }),
                }}
            />

            {/* Organization Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'AargonGPT',
                        url: 'https://aargongpt.vercel.app',
                        logo: 'https://aargongpt.vercel.app/logo.png',
                        sameAs: [
                            'https://twitter.com/aargon007',
                            'https://github.com/aargon007',
                            'https://linkedin.com/in/aargon',
                        ],
                        contactPoint: {
                            '@type': 'ContactPoint',
                            contactType: 'Customer Support',
                            email: 'support@aargongpt.com',
                        },
                    }),
                }}
            />

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: [
                            {
                                '@type': 'Question',
                                name: 'Is AargonGPT free to use?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: 'Yes! AargonGPT offers a generous free tier with unlimited conversations. Premium plans are available for users who need advanced features, higher usage limits, and priority support.',
                                },
                            },
                            {
                                '@type': 'Question',
                                name: 'How is my data protected?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: 'Your conversations are encrypted and stored securely. We never use your data to train AI models or share it with third parties. You can delete your conversation history at any time.',
                                },
                            },
                            {
                                '@type': 'Question',
                                name: 'What can AargonGPT help me with?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: 'AargonGPT can assist with writing, research, coding, learning, brainstorming, planning, and much more. From drafting emails to explaining complex topics to debugging code—it adapts to your needs.',
                                },
                            },
                        ],
                    }),
                }}
            />

            <div className="min-h-screen bg-linear-to-br from-noble-700 via-noble-800 to-noble-700">
                {/* Hero Section */}
                <Hero />

                {/* Stats Section */}
                <Stats />

                {/* Features Section */}
                <Features />

                {/* Get started Section */}
                <GetStarted />

                {/* Use Cases Section */}
                <UseCases />

                {/* Why choose Section */}
                <WhyChoose />

                {/* Testimonials Section */}
                <Testimonials />

                {/* FAQ Section */}
                <FAQ />
            </div>
        </>
    );
}
