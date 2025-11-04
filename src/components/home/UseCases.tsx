import { LuCheck } from 'react-icons/lu';

const UseCases = () => {
    return (
        <section className="relative bg-noble-800/30 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <span className="mb-4 inline-block rounded-full bg-purple-blue-500/10 px-4 py-1.5 text-sm font-semibold text-purple-blue-400">
                        Use Cases
                    </span>
                    <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
                        One Assistant, Endless Possibilities
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl text-noble-300">
                        From writing and research to coding and creativity—AargonGPT adapts to whatever you need
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Use Case 1 */}
                    <div className="group relative overflow-hidden rounded-2xl border border-noble-600 bg-noble-800/50 p-8 transition-all hover:border-stem-green-500/50">
                        <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-stem-green-500/5 blur-3xl transition-all group-hover:bg-stem-green-500/10"></div>
                        <div className="relative">
                            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-stem-green-500/10 px-4 py-2 text-sm font-semibold text-stem-green-400">
                                Writing & Content
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-white">Create Better Content Faster</h3>
                            <p className="mb-4 text-noble-300">
                                Write emails, articles, social media posts, and marketing copy. Get suggestions, improve your writing, and overcome creative blocks instantly.
                            </p>
                            <ul className="space-y-2 text-noble-300">
                                <li className="flex items-start gap-2">
                                    <LuCheck className="mt-1 shrink-0 text-stem-green-500" size={16} />
                                    <span>Draft professional emails in seconds</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <LuCheck className="mt-1 shrink-0 text-stem-green-500" size={16} />
                                    <span>Generate blog posts and articles</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <LuCheck className="mt-1 shrink-0 text-stem-green-500" size={16} />
                                    <span>Brainstorm creative ideas</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Use Case 2 */}
                    <div className="group relative overflow-hidden rounded-2xl border border-noble-600 bg-noble-800/50 p-8 transition-all hover:border-heisenberg-blue-500/50">
                        <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-heisenberg-blue-500/5 blur-3xl transition-all group-hover:bg-heisenberg-blue-500/10"></div>
                        <div className="relative">
                            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-heisenberg-blue-500/10 px-4 py-2 text-sm font-semibold text-heisenberg-blue-400">
                                Learning & Research
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-white">Learn Anything, Anytime</h3>
                            <p className="mb-4 text-noble-300">
                                Explore complex topics, get explanations in simple terms, and dive deep into subjects that interest you. Your personal tutor is always available.
                            </p>
                            <ul className="space-y-2 text-noble-300">
                                <li className="flex items-start gap-2">
                                    <LuCheck className="mt-1 shrink-0 text-heisenberg-blue-500" size={16} />
                                    <span>Explain difficult concepts simply</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <LuCheck className="mt-1 shrink-0 text-heisenberg-blue-500" size={16} />
                                    <span>Research topics in-depth</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <LuCheck className="mt-1 shrink-0 text-heisenberg-blue-500" size={16} />
                                    <span>Practice and test your knowledge</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Use Case 3 */}
                    <div className="group relative overflow-hidden rounded-2xl border border-noble-600 bg-noble-800/50 p-8 transition-all hover:border-purple-blue-500/50">
                        <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-purple-blue-500/5 blur-3xl transition-all group-hover:bg-purple-blue-500/10"></div>
                        <div className="relative">
                            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-purple-blue-500/10 px-4 py-2 text-sm font-semibold text-purple-blue-400">
                                Coding & Development
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-white">Code Smarter, Debug Faster</h3>
                            <p className="mb-4 text-noble-300">
                                Write code, fix bugs, learn programming concepts, and get technical help. From beginner to expert, AargonGPT understands your level.
                            </p>
                            <ul className="space-y-2 text-noble-300">
                                <li className="flex items-start gap-2">
                                    <LuCheck className="mt-1 shrink-0 text-purple-blue-500" size={16} />
                                    <span>Write and debug code in any language</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <LuCheck className="mt-1 shrink-0 text-purple-blue-500" size={16} />
                                    <span>Learn programming step-by-step</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <LuCheck className="mt-1 shrink-0 text-purple-blue-500" size={16} />
                                    <span>Get code review and improvements</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Use Case 4 */}
                    <div className="group relative overflow-hidden rounded-2xl border border-noble-600 bg-noble-800/50 p-8 transition-all hover:border-sunglow-500/50">
                        <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-sunglow-500/5 blur-3xl transition-all group-hover:bg-sunglow-500/10"></div>
                        <div className="relative">
                            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-sunglow-500/10 px-4 py-2 text-sm font-semibold text-sunglow-400">
                                Productivity & Planning
                            </div>
                            <h3 className="mb-3 text-2xl font-bold text-white">Organize Your Life & Work</h3>
                            <p className="mb-4 text-noble-300">
                                Create schedules, plan projects, organize thoughts, and make better decisions. Turn overwhelming tasks into clear, actionable steps.
                            </p>
                            <ul className="space-y-2 text-noble-300">
                                <li className="flex items-start gap-2">
                                    <LuCheck className="mt-1 shrink-0 text-sunglow-500" size={16} />
                                    <span>Create detailed to-do lists and plans</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <LuCheck className="mt-1 shrink-0 text-sunglow-500" size={16} />
                                    <span>Analyze options and make decisions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <LuCheck className="mt-1 shrink-0 text-sunglow-500" size={16} />
                                    <span>Summarize documents and meetings</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UseCases;