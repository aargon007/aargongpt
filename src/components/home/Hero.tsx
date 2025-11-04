import { LuArrowRight, LuShield, LuSparkles, LuZap } from 'react-icons/lu';
import Link from 'next/link';

const Hero = () => {

    return (
        <section className="relative overflow-hidden py-24">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-day-blue-900/20 via-noble-800 to-stem-green-900/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--heisenberg-blue-900),transparent_50%)]"></div>

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}
            />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl text-center">
                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stem-green-500/30 bg-stem-green-500/10 px-4 py-2 text-sm font-medium text-stem-green-400">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-stem-green-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-stem-green-500"></span>
                        </span>
                        Powered by GPT Models
                    </div>

                    <h1 className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
                        Your AI Assistant
                        <br />
                        <span className="bg-linear-to-r from-heisenberg-blue-400 via-stem-green-400 to-stem-green-500 bg-clip-text text-transparent">
                            That Actually Understands
                        </span>
                    </h1>

                    <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-noble-200 sm:text-2xl">
                        AargonGPT is a powerful AI assistant designed to help you work smarter, create faster, and learn better. Have natural conversations, get instant answers, and unlock your productivity.
                    </p>

                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            href="/signup"
                            className="group flex items-center justify-center gap-2 rounded-xl bg-stem-green-500 px-8 py-4 text-lg font-semibold text-noble-900 shadow-lg transition-all hover:bg-stem-green-400 hover:shadow-stem-green-500/50"
                        >
                            Start Building Free
                            <LuArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                        </Link>
                        <Link
                            href="/pricing"
                            className="flex items-center justify-center gap-2 rounded-xl border border-noble-500 bg-noble-700/50 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-noble-600/50"
                        >
                            See  Pricing
                        </Link>
                    </div>

                    {/* Tech stack badges */}
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-noble-300">
                        <div className="flex items-center gap-2">
                            <LuZap className="h-5 w-5" />
                            <span>Instant Responses</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <LuShield className="h-5 w-5" />
                            <span>Privacy Protected</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <LuSparkles className="h-5 w-5" />
                            <span>Always Learning</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative blurs */}
            <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-heisenberg-blue-500/10 blur-3xl"></div>
            <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-stem-green-500/10 blur-3xl"></div>
        </section>
    );
};

export default Hero;
