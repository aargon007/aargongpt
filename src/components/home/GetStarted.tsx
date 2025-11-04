import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';

const GetStarted = () => {

    return (
        <section className="relative py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div>
                        <span className="mb-4 inline-block rounded-full bg-day-blue-500/10 px-4 py-1.5 text-sm font-semibold text-day-blue-400">
                            How It Works
                        </span>
                        <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
                            Start Chatting in Seconds
                        </h2>
                        <p className="mb-8 text-xl text-noble-300">
                            No setup required. Just sign up and start having intelligent conversations immediately. It's that simple.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stem-green-500/10 text-lg font-bold text-stem-green-500">
                                    1
                                </div>
                                <div>
                                    <h4 className="mb-1 font-semibold text-white">Sign Up Free</h4>
                                    <p className="text-noble-300">Create your account in seconds. No credit card required.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-heisenberg-blue-500/10 text-lg font-bold text-heisenberg-blue-500">
                                    2
                                </div>
                                <div>
                                    <h4 className="mb-1 font-semibold text-white">Ask Anything</h4>
                                    <p className="text-noble-300">Type your question, request, or idea—just like texting a friend.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-blue-500/10 text-lg font-bold text-purple-blue-500">
                                    3
                                </div>
                                <div>
                                    <h4 className="mb-1 font-semibold text-white">Get Instant Results</h4>
                                    <p className="text-noble-300">Watch intelligent answers appear in real-time as you think.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <Link
                                href="/signup"
                                className="flex items-center gap-2 rounded-xl bg-stem-green-500 px-6 py-3 font-semibold text-noble-900 transition-all hover:bg-stem-green-400"
                            >
                                Try It Now
                                <LuArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-2xl bg-linear-to-br from-stem-green-500/20 to-heisenberg-blue-500/20 blur-2xl"></div>
                        <div className="relative overflow-hidden rounded-2xl border border-noble-600 bg-noble-900/95 backdrop-blur-sm">
                            {/* Chat Interface Preview */}
                            <div className="p-6">
                                <div className="mb-4 flex items-center gap-3 border-b border-noble-700 pb-4">
                                    <div className="h-10 w-10 rounded-full bg-stem-green-500/20 flex items-center justify-center">
                                        <span className="text-stem-green-400 font-bold">A</span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-white">AargonGPT</div>
                                        <div className="text-xs text-noble-400">AI Assistant</div>
                                    </div>
                                    <div className="ml-auto flex gap-1">
                                        <div className="h-2 w-2 rounded-full bg-stem-green-500 animate-pulse"></div>
                                        <span className="text-xs text-stem-green-400">Online</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {/* User Message */}
                                    <div className="flex justify-end">
                                        <div className="max-w-[80%] rounded-2xl bg-heisenberg-blue-500/20 px-4 py-3">
                                            <p className="text-sm text-noble-200">Help me write a professional email</p>
                                        </div>
                                    </div>

                                    {/* AI Response */}
                                    <div className="flex justify-start">
                                        <div className="max-w-[80%] rounded-2xl bg-noble-800 px-4 py-3">
                                            <p className="text-sm text-noble-200">I'd be happy to help! What's the purpose of your email?</p>
                                        </div>
                                    </div>

                                    {/* User Message */}
                                    <div className="flex justify-end">
                                        <div className="max-w-[80%] rounded-2xl bg-heisenberg-blue-500/20 px-4 py-3">
                                            <p className="text-sm text-noble-200">Requesting a meeting with my manager</p>
                                        </div>
                                    </div>

                                    {/* AI Typing */}
                                    <div className="flex justify-start">
                                        <div className="max-w-[80%] rounded-2xl bg-noble-800 px-4 py-3">
                                            <div className="flex gap-1">
                                                <div className="h-2 w-2 rounded-full bg-noble-400 animate-bounce"></div>
                                                <div className="h-2 w-2 rounded-full bg-noble-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                <div className="h-2 w-2 rounded-full bg-noble-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;