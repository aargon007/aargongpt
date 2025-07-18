import Link from 'next/link';
import Hero from '@/components/home/Hero';
import { LuCode, LuMessageSquare, LuShield, LuZap } from 'react-icons/lu';

export default async function HomePage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-noble-700 via-noble-800 to-noble-700">
            {/* Hero Section */}
            <Hero />

            {/* Features Section */}
            <section className="relative py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                            Powerful AI Features
                        </h2>
                        <p className="mx-auto max-w-2xl text-xl text-noble-300">
                            Everything you need to use sophisticated AI
                            applications in one place.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Feature 1 */}
                        <div className="bg-noble-600/50 hover:border-stem-green-500/50 rounded-xl border border-noble-500 p-6 backdrop-blur-xs transition-all duration-300">
                            <div className="from-heisenberg-blue-500/20 to-heisenberg-blue-500/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br">
                                <LuMessageSquare
                                    className="text-heisenberg-blue-500"
                                    size={24}
                                />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-white">
                                Conversational AI
                            </h3>
                            <p className="text-noble-300">
                                Build natural, engaging conversations with
                                advanced language models that understand context
                                and user intent.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-noble-600/50 hover:border-stem-green-500/50 rounded-xl border border-noble-500 p-6 backdrop-blur-xs transition-all duration-300">
                            <div className="from-stem-green-500/20 to-stem-green-500/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br">
                                <LuCode
                                    className="text-stem-green-500"
                                    size={24}
                                />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-white">
                                Streamlined Integration
                            </h3>
                            <p className="text-noble-300">
                                Integrate AI capabilities into your applications
                                with minimal code using our intuitive SDK and
                                APIs.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-noble-600/50 hover:border-stem-green-500/50 rounded-xl border border-noble-500 p-6 backdrop-blur-xs transition-all duration-300">
                            <div className="from-purple-blue-500/20 to-purple-blue-500/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br">
                                <LuShield
                                    className="text-purple-blue-400"
                                    size={24}
                                />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-white">
                                Enterprise Security
                            </h3>
                            <p className="text-noble-300">
                                Built with security in mind, ensuring your data
                                and user interactions remain private and
                                protected.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-noble-600/50 hover:border-stem-green-500/50 rounded-xl border border-noble-500 p-6 backdrop-blur-xs transition-all duration-300">
                            <div className="from-sunglow-500/20 to-sunglow-500/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br">
                                <LuZap className="text-sunglow-500" size={24} />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-white">
                                Real-time Processing
                            </h3>
                            <p className="text-noble-300">
                                Process and respond to user inputs in real-time
                                with our optimized edge infrastructure.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-noble-600/50 hover:border-stem-green-500/50 rounded-xl border border-noble-500 p-6 backdrop-blur-xs transition-all duration-300">
                            <div className="from-happy-orange-600/20 to-happy-orange-600/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br">
                                <svg
                                    className="text-happy-orange-600"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M3 12H4M12 3V4M20 12H21M12 20V21M5.63604 5.63604L6.34315 6.34315M18.364 5.63604L17.6569 6.34315M6.34315 17.6569L5.63604 18.364M17.6569 17.6569L18.364 18.364"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-white">
                                Adaptive Learning
                            </h3>
                            <p className="text-noble-300">
                                Models that learn and adapt to your specific use
                                cases, improving over time with user
                                interactions.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="bg-noble-600/50 hover:border-stem-green-500/50 rounded-xl border border-noble-500 p-6 backdrop-blur-xs transition-all duration-300">
                            <div className="from-day-blue-500/20 to-day-blue-500/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br">
                                <svg
                                    className="text-day-blue-500"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 2L2 7L12 12L22 7L12 2Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2 17L12 22L22 17"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2 12L12 17L22 12"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-white">
                                Multi-model Support
                            </h3>
                            <p className="text-noble-300">
                                Access a variety of AI models to suit different
                                tasks, from text generation to image
                                recognition.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20">
                <div className="from-stem-green-900/5 absolute inset-0 bg-linear-to-t to-transparent"></div>
               
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-noble-600/40 mx-auto max-w-4xl rounded-2xl border border-noble-500 p-8 backdrop-blur-md sm:p-12">
                        <div className="text-center">
                            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                                Ready to Get Started?
                            </h2>
                            <p className="mb-8 text-xl text-noble-300">
                                Join thousands of developers building the next
                                generation of AI-powered applications.
                            </p>
                            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                <Link href="/signup" className="primaryButton">
                                    Sign Up Free
                                </Link>
                                <button className="flex w-full justify-center rounded-[12px] border border-noble-500 bg-noble-700 px-4 py-2.5 font-semibold text-white shadow-xs hover:bg-noble-600 focus:outline-hidden">
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
