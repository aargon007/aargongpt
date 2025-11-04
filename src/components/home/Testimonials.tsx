import React from 'react';
import { LuStar } from 'react-icons/lu';

const Testimonials = () => {
    return (
        <section className="relative py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <span className="mb-4 inline-block rounded-full bg-sunglow-500/10 px-4 py-1.5 text-sm font-semibold text-sunglow-400">
                        Community
                    </span>
                    <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
                        Trusted by Developers
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl text-noble-300">
                        See what builders are saying about AargonGPT
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Testimonial 1 */}
                    <div className="rounded-2xl border border-noble-600 bg-noble-800/50 p-8">
                        <div className="mb-4 flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <LuStar key={i} className="fill-sunglow-500 text-sunglow-500" size={20} />
                            ))}
                        </div>
                        <p className="mb-6 text-noble-200">
                            "The cleanest Next.js AI starter I've found. TypeScript setup is perfect, and the AI SDK integration is seamless."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stem-green-500/20 text-lg font-semibold text-stem-green-400">
                                AK
                            </div>
                            <div>
                                <div className="font-semibold text-white">Alex Kumar</div>
                                <div className="text-sm text-noble-400">Full-Stack Developer</div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="rounded-2xl border border-noble-600 bg-noble-800/50 p-8">
                        <div className="mb-4 flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <LuStar key={i} className="fill-sunglow-500 text-sunglow-500" size={20} />
                            ))}
                        </div>
                        <p className="mb-6 text-noble-200">
                            "Saved me weeks of setup time. The Prisma integration and auth system work flawlessly out of the box."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-heisenberg-blue-500/20 text-lg font-semibold text-heisenberg-blue-400">
                                JC
                            </div>
                            <div>
                                <div className="font-semibold text-white">Jessica Chen</div>
                                <div className="text-sm text-noble-400">Startup Founder</div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="rounded-2xl border border-noble-600 bg-noble-800/50 p-8">
                        <div className="mb-4 flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <LuStar key={i} className="fill-sunglow-500 text-sunglow-500" size={20} />
                            ))}
                        </div>
                        <p className="mb-6 text-noble-200">
                            "Built and deployed our AI chatbot in under 2 hours. The streaming responses are buttery smooth!"
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-blue-500/20 text-lg font-semibold text-purple-blue-400">
                                MR
                            </div>
                            <div>
                                <div className="font-semibold text-white">Marcus Rodriguez</div>
                                <div className="text-sm text-noble-400">Product Engineer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;