import React from 'react';

const FAQ = () => {
    return (
        <section className="relative bg-noble-800/30 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <span className="mb-4 inline-block rounded-full bg-heisenberg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-heisenberg-blue-400">
                        FAQ
                    </span>
                    <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl text-noble-300">
                        Everything you need to know about using AargonGPT
                    </p>
                </div>

                <div className="mx-auto max-w-3xl space-y-6">
                    <details className="group rounded-2xl border border-noble-600 bg-noble-800/50 p-6 transition-all hover:border-noble-500">
                        <summary className="flex cursor-pointer items-center justify-between font-semibold text-white">
                            <span className="text-lg">Is AargonGPT free to use?</span>
                            <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <p className="mt-4 text-noble-300">
                            Yes! AargonGPT offers a generous free tier with unlimited conversations. Premium plans are available for users who need advanced features, higher usage limits, and priority support.
                        </p>
                    </details>

                    <details className="group rounded-2xl border border-noble-600 bg-noble-800/50 p-6 transition-all hover:border-noble-500">
                        <summary className="flex cursor-pointer items-center justify-between font-semibold text-white">
                            <span className="text-lg">How is my data protected?</span>
                            <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <p className="mt-4 text-noble-300">
                            Your conversations are encrypted and stored securely. We never use your data to train AI models or share it with third parties. You can delete your conversation history at any time.
                        </p>
                    </details>

                    <details className="group rounded-2xl border border-noble-600 bg-noble-800/50 p-6 transition-all hover:border-noble-500">
                        <summary className="flex cursor-pointer items-center justify-between font-semibold text-white">
                            <span className="text-lg">What can AargonGPT help me with?</span>
                            <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <p className="mt-4 text-noble-300">
                            AargonGPT can assist with writing, research, coding, learning, brainstorming, planning, and much more. From drafting emails to explaining complex topics to debugging code—it adapts to your needs.
                        </p>
                    </details>

                    <details className="group rounded-2xl border border-noble-600 bg-noble-800/50 p-6 transition-all hover:border-noble-500">
                        <summary className="flex cursor-pointer items-center justify-between font-semibold text-white">
                            <span className="text-lg">Do I need technical knowledge to use it?</span>
                            <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <p className="mt-4 text-noble-300">
                            Not at all! AargonGPT is designed to be easy to use—just type your question or request naturally, like you're talking to a friend. No setup, no configuration, no technical skills required.
                        </p>
                    </details>

                    <details className="group rounded-2xl border border-noble-600 bg-noble-800/50 p-6 transition-all hover:border-noble-500">
                        <summary className="flex cursor-pointer items-center justify-between font-semibold text-white">
                            <span className="text-lg">Can I use AargonGPT on mobile?</span>
                            <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <p className="mt-4 text-noble-300">
                            Yes! AargonGPT works seamlessly on any device—desktop, tablet, or smartphone. Your conversations sync across all devices so you can start on your phone and continue on your computer.
                        </p>
                    </details>

                    <details className="group rounded-2xl border border-noble-600 bg-noble-800/50 p-6 transition-all hover:border-noble-500">
                        <summary className="flex cursor-pointer items-center justify-between font-semibold text-white">
                            <span className="text-lg">How accurate is AargonGPT?</span>
                            <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <p className="mt-4 text-noble-300">
                            AargonGPT uses advanced AI models to provide accurate, helpful responses. While it's highly reliable, we recommend verifying critical information. The AI is continuously improving based on the latest technology.
                        </p>
                    </details>

                    <details className="group rounded-2xl border border-noble-600 bg-noble-800/50 p-6 transition-all hover:border-noble-500">
                        <summary className="flex cursor-pointer items-center justify-between font-semibold text-white">
                            <span className="text-lg">Can I use it in different languages?</span>
                            <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <p className="mt-4 text-noble-300">
                            Absolutely! AargonGPT understands and responds in dozens of languages. Simply type your question in your preferred language, and it will respond accordingly.
                        </p>
                    </details>

                    <details className="group rounded-2xl border border-noble-600 bg-noble-800/50 p-6 transition-all hover:border-noble-500">
                        <summary className="flex cursor-pointer items-center justify-between font-semibold text-white">
                            <span className="text-lg">What if I need help or have issues?</span>
                            <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <p className="mt-4 text-noble-300">
                            We offer comprehensive support through our help center, email support, and community forums. Premium users get priority support with faster response times.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;