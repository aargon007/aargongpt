import { LuCode, LuDatabase, LuGlobe, LuMessageSquare, LuShield, LuZap } from 'react-icons/lu';

const Features = () => {
    return (
        <section className="relative py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center">
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
                                <LuDatabase className="text-stem-green-400" size={28} />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-white">
                                Prisma Database
                            </h3>
                            <p className="text-noble-300">
                                Type-safe database access with Prisma ORM. Store conversations, user data, and analytics efficiently.
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
                                JWT Authentication
                            </h3>
                            <p className="text-noble-300">
                                Secure user authentication with JWT tokens and bcrypt password hashing. Enterprise-grade security built-in.
                            </p>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="group relative overflow-hidden rounded-2xl border border-noble-600 bg-noble-800/50 p-8 backdrop-blur-sm transition-all hover:border-sunglow-500/50 hover:shadow-xl hover:shadow-sunglow-500/10">
                        <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-sunglow-500/5 blur-2xl transition-all group-hover:bg-sunglow-500/10"></div>
                        <div className="relative">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-sunglow-500/20 to-sunglow-500/5">
                                <LuZap className="text-sunglow-400" size={28} />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-white">
                                Streaming Responses
                            </h3>
                            <p className="text-noble-300">
                                Real-time streaming AI responses with React Server Components and AI SDK for smooth user experience.
                            </p>
                        </div>
                    </div>

                    {/* Feature 5 */}
                    <div className="group relative overflow-hidden rounded-2xl border border-noble-600 bg-noble-800/50 p-8 backdrop-blur-sm transition-all hover:border-happy-orange-600/50 hover:shadow-xl hover:shadow-happy-orange-600/10">
                        <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-happy-orange-600/5 blur-2xl transition-all group-hover:bg-happy-orange-600/10"></div>
                        <div className="relative">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-happy-orange-600/20 to-happy-orange-600/5">
                                <LuCode className="text-happy-orange-600" size={28} />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-white">
                                Markdown Support
                            </h3>
                            <p className="text-noble-300">
                                Beautiful message rendering with react-markdown, syntax highlighting, and GitHub Flavored Markdown.
                            </p>
                        </div>
                    </div>

                    {/* Feature 6 */}
                    <div className="group relative overflow-hidden rounded-2xl border border-noble-600 bg-noble-800/50 p-8 backdrop-blur-sm transition-all hover:border-day-blue-500/50 hover:shadow-xl hover:shadow-day-blue-500/10">
                        <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-day-blue-500/5 blur-2xl transition-all group-hover:bg-day-blue-500/10"></div>
                        <div className="relative">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-day-blue-500/20 to-day-blue-500/5">
                                <LuGlobe className="text-day-blue-400" size={28} />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-white">
                                State Management
                            </h3>
                            <p className="text-noble-300">
                                Efficient client-side state with Zustand and server actions for optimal performance and DX.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;