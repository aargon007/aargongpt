import { LuCheck, LuClock, LuShield, LuSmartphone, LuZap, LuRefreshCw, LuMessageSquare } from 'react-icons/lu';


const WhyChoose = () => {
    return (
        <section className="relative py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <span className="mb-4 inline-block rounded-full bg-happy-orange-600/10 px-4 py-1.5 text-sm font-semibold text-happy-orange-600">
                        Why AargonGPT
                    </span>
                    <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
                        Experience The Difference
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl text-noble-300">
                        Built with you in mind—fast, secure, and incredibly easy to use
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-2xl border border-noble-600 bg-noble-800/50 p-6 transition-all hover:border-stem-green-500/50">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-stem-green-500/10">
                            <LuZap className="text-stem-green-500" size={24} />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-white">Lightning Fast</h3>
                        <p className="text-noble-300">
                            Real-time streaming responses that appear instantly. No lag, no waiting—just smooth conversation.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-noble-600 bg-noble-800/50 p-6 transition-all hover:border-heisenberg-blue-500/50">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-heisenberg-blue-500/10">
                            <LuShield className="text-heisenberg-blue-500" size={24} />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-white">Privacy Protected</h3>
                        <p className="text-noble-300">
                            Your conversations are encrypted and never used for training. What you share stays private.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-noble-600 bg-noble-800/50 p-6 transition-all hover:border-purple-blue-500/50">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-blue-500/10">
                            <LuSmartphone className="text-purple-blue-500" size={24} />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-white">Works Everywhere</h3>
                        <p className="text-noble-300">
                            Access from any device—desktop, tablet, or phone. Your conversations sync seamlessly.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-noble-600 bg-noble-800/50 p-6 transition-all hover:border-sunglow-500/50">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sunglow-500/10">
                            <LuMessageSquare className="text-sunglow-500" size={24} />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-white">Remembers Context</h3>
                        <p className="text-noble-300">
                            No need to repeat yourself. AargonGPT remembers your entire conversation history.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-noble-600 bg-noble-800/50 p-6 transition-all hover:border-day-blue-500/50">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-day-blue-500/10">
                            <LuClock className="text-day-blue-500" size={24} />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-white">Always Available</h3>
                        <p className="text-noble-300">
                            24/7 access whenever inspiration strikes or questions arise. No downtime, ever.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-noble-600 bg-noble-800/50 p-6 transition-all hover:border-happy-orange-600/50">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-happy-orange-600/10">
                            <LuRefreshCw className="text-happy-orange-600" size={24} />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-white">Always Improving</h3>
                        <p className="text-noble-300">
                            Regular updates with new features and improvements based on user feedback.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;