import { LuClock, LuFileText, LuLanguages, LuLightbulb, LuMessageSquare, LuShield } from 'react-icons/lu';

const Features = () => {

    return (
        <section className="relative py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <span className="mb-4 inline-block rounded-full bg-stem-green-500/10 px-4 py-1.5 text-sm font-semibold text-stem-green-400">
                        Features
                    </span>
                    <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
                        Powerful AI at Your Fingertips
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl text-noble-300">
                        Everything you need to build sophisticated AI applications with cutting-edge technology and seamless integration.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Feature 1 */}
                    <div className="group relative overflow-hidden rounded-2xl border border-noble-600 bg-noble-800/50 p-8 backdrop-blur-sm transition-all hover:border-heisenberg-blue-500/50 hover:shadow-xl hover:shadow-heisenberg-blue-500/10">
                        <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-heisenberg-blue-500/5 blur-2xl transition-all group-hover:bg-heisenberg-blue-500/10"></div>
                        <div className="relative">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-heisenberg-blue-500/20 to-heisenberg-blue-500/5">
                                <LuMessageSquare className="text-heisenberg-blue-400" size={28} />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-white">
                                Multi-Model Support
                            </h3>
                            <p className="text-noble-300">
                                Seamlessly switch between OpenAI GPT-4, Google Gemini, and other leading AI models with unified API.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="group relative overflow-hidden rounded-2xl border border-noble-600 bg-noble-800/50 p-8 backdrop-blur-sm transition-all hover:border-stem-green-500/50 hover:shadow-xl hover:shadow-stem-green-500/10">
                        <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-stem-green-500/5 blur-2xl transition-all group-hover:bg-stem-green-500/10"></div>
                        <div className="relative">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-stem-green-500/20 to-stem-green-500/5">
                                <LuClock className="text-stem-green-400" size={28} />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-white">
                                Instant Real-Time Responses
                            </h3>
                            <p className="text-noble-300">
                                Watch answers form in real-time as you think. No waiting, no loading screens—just smooth, natural conversation that keeps pace with you.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="group relative overflow-hidden rounded-2xl border border-noble-600 bg-noble-800/50 p-8 backdrop-blur-sm transition-all hover:border-purple-blue-500/50 hover:shadow-xl hover:shadow-purple-blue-500/10">
                        <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-purple-blue-500/5 blur-2xl transition-all group-hover:bg-purple-blue-500/10"></div>
                        <div className="relative">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-purple-blue-500/20 to-purple-blue-500/5">
                                <LuShield className="text-purple-blue-400" size={28} />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-white">
                                Privacy & Security First
                            </h3>
                            <p className="text-noble-300">
                                Your conversations are encrypted and private. We never train on your data or share it with third parties. What you say stays between you and AargonGPT.
                            </p>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="group relative overflow-hidden rounded-2xl border border-noble-600 bg-noble-800/50 p-8 backdrop-blur-sm transition-all hover:border-sunglow-500/50 hover:shadow-xl hover:shadow-sunglow-500/10">
                        <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-sunglow-500/5 blur-2xl transition-all group-hover:bg-sunglow-500/10"></div>
                        <div className="relative">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-sunglow-500/20 to-sunglow-500/5">
                                <LuLightbulb className="text-sunglow-400" size={28} />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-white">
                                Creative & Analytical
                            </h3>
                            <p className="text-noble-300">
                                From writing poetry to analyzing data, AargonGPT adapts to any task. Get creative brainstorming or rigorous analysis—whatever you need.
                            </p>
                        </div>
                    </div>

                    {/* Feature 5 */}
                    <div className="group relative overflow-hidden rounded-2xl border border-noble-600 bg-noble-800/50 p-8 backdrop-blur-sm transition-all hover:border-happy-orange-600/50 hover:shadow-xl hover:shadow-happy-orange-600/10">
                        <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-happy-orange-600/5 blur-2xl transition-all group-hover:bg-happy-orange-600/10"></div>
                        <div className="relative">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-happy-orange-600/20 to-happy-orange-600/5">
                                <LuFileText className="text-happy-orange-600" size={28} />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-white">
                                Beautiful Formatting
                            </h3>
                            <p className="text-noble-300">
                                Code snippets, tables, lists, and rich text—all beautifully formatted and easy to read. Copy what you need with one click.
                            </p>
                        </div>
                    </div>

                    {/* Feature 6 */}
                    <div className="group relative overflow-hidden rounded-2xl border border-noble-600 bg-noble-800/50 p-8 backdrop-blur-sm transition-all hover:border-day-blue-500/50 hover:shadow-xl hover:shadow-day-blue-500/10">
                        <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-day-blue-500/5 blur-2xl transition-all group-hover:bg-day-blue-500/10"></div>
                        <div className="relative">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-day-blue-500/20 to-day-blue-500/5">
                                <LuLanguages className="text-day-blue-400" size={28} />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-white">
                                Multilingual Support
                            </h3>
                            <p className="text-noble-300">
                                Communicate in your preferred language. AargonGPT understands and responds fluently in dozens of languages worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;