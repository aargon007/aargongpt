import Link from 'next/link';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import { LuArrowRight, LuCheck, LuCode, LuDatabase, LuGlobe, LuMessageSquare, LuShield, LuStar, LuZap } from 'react-icons/lu';

export default async function HomePage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-noble-700 via-noble-800 to-noble-700">
            {/* Hero Section */}
            <Hero />

            {/* Tech Stack Section */}
            <section className="relative border-y border-noble-700 bg-noble-800/50 py-16 backdrop-blur-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="mb-3 text-2xl font-bold text-white">Built with Modern Technologies</h2>
                        <p className="text-noble-300">Production-ready stack for scalable AI applications</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div className="text-center">
                            <div className="mb-3 text-4xl font-bold text-white">Next.js 16</div>
                            <div className="text-noble-300">React Framework</div>
                        </div>
                        <div className="text-center">
                            <div className="mb-3 text-4xl font-bold text-white">AI SDK 5.0</div>
                            <div className="text-noble-300">Vercel AI SDK</div>
                        </div>
                        <div className="text-center">
                            <div className="mb-3 text-4xl font-bold text-white">Prisma</div>
                            <div className="text-noble-300">Type-Safe ORM</div>
                        </div>
                        <div className="text-center">
                            <div className="mb-3 text-4xl font-bold text-white">TypeScript</div>
                            <div className="text-noble-300">Type Safety</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - Enhanced */}
            <Features />

            {/* Integration Section */}
            <section className="relative py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div>
                            <span className="mb-4 inline-block rounded-full bg-day-blue-500/10 px-4 py-1.5 text-sm font-semibold text-day-blue-400">
                                Quick Start
                            </span>
                            <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
                                Get Started in Minutes
                            </h2>
                            <p className="mb-8 text-xl text-noble-300">
                                Clone, configure, and deploy. Our Next.js template comes with everything pre-configured for rapid development.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-stem-green-500/10 text-lg font-bold text-stem-green-500">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-semibold text-white">Clone Repository</h4>
                                        <p className="text-noble-300">Get the complete source code with all dependencies configured</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-heisenberg-blue-500/10 text-lg font-bold text-heisenberg-blue-500">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-semibold text-white">Add API Keys</h4>
                                        <p className="text-noble-300">Configure your OpenAI/Gemini keys and database connection</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-blue-500/10 text-lg font-bold text-purple-blue-500">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-semibold text-white">Deploy</h4>
                                        <p className="text-noble-300">One-click deployment to Vercel with automatic CI/CD</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex gap-4">
                                <Link
                                    href="/docs"
                                    className="flex items-center gap-2 rounded-xl bg-stem-green-500 px-6 py-3 font-semibold text-noble-900 transition-all hover:bg-stem-green-400"
                                >
                                    View Documentation
                                    <LuArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 rounded-2xl bg-linear-to-br from-stem-green-500/20 to-heisenberg-blue-500/20 blur-2xl"></div>
                            <div className="relative overflow-hidden rounded-2xl border border-noble-600 bg-noble-900/95 p-6 backdrop-blur-sm">
                                <div className="mb-4 flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full bg-red-power-600"></div>
                                    <div className="h-3 w-3 rounded-full bg-sunglow-500"></div>
                                    <div className="h-3 w-3 rounded-full bg-stem-green-500"></div>
                                    <span className="ml-2 text-xs text-noble-400">terminal</span>
                                </div>
                                <pre className="overflow-x-auto text-sm leading-relaxed">
                                    <code className="text-noble-200">
                                        {`# Install dependencies
npm install

# Setup database
npx prisma generate
npx prisma db push

# Start development server
npm run dev

# Your app is ready at localhost:3000! 🚀`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="relative bg-noble-800/30 py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20 text-center">
                        <span className="mb-4 inline-block rounded-full bg-purple-blue-500/10 px-4 py-1.5 text-sm font-semibold text-purple-blue-400">
                            Use Cases
                        </span>
                        <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
                            Built for Every Application
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl text-noble-300">
                            From customer support to creative tools - deploy AI conversations anywhere
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Use Case 1 */}
                        <div className="group relative overflow-hidden rounded-2xl border border-noble-600 bg-noble-800/50 p-8 transition-all hover:border-stem-green-500/50">
                            <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-stem-green-500/5 blur-3xl transition-all group-hover:bg-stem-green-500/10"></div>
                            <div className="relative">
                                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-stem-green-500/10 px-4 py-2 text-sm font-semibold text-stem-green-400">
                                    Customer Support
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-white">AI Support Assistant</h3>
                                <p className="mb-4 text-noble-300">
                                    Deploy intelligent support chatbots that understand context, access your knowledge base, and provide instant 24/7 assistance.
                                </p>
                                <ul className="space-y-2 text-noble-300">
                                    <li className="flex items-start gap-2">
                                        <LuCheck className="mt-1 shrink-0 text-stem-green-500" size={16} />
                                        <span>Contextual conversation memory</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <LuCheck className="mt-1 shrink-0 text-stem-green-500" size={16} />
                                        <span>Custom knowledge integration</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <LuCheck className="mt-1 shrink-0 text-stem-green-500" size={16} />
                                        <span>Seamless human handoff</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Use Case 2 */}
                        <div className="group relative overflow-hidden rounded-2xl border border-noble-600 bg-noble-800/50 p-8 transition-all hover:border-heisenberg-blue-500/50">
                            <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-heisenberg-blue-500/5 blur-3xl transition-all group-hover:bg-heisenberg-blue-500/10"></div>
                            <div className="relative">
                                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-heisenberg-blue-500/10 px-4 py-2 text-sm font-semibold text-heisenberg-blue-400">
                                    Development Tools
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-white">Code Assistant</h3>
                                <p className="mb-4 text-noble-300">
                                    Build AI-powered coding companions that help developers write, debug, and optimize code with intelligent suggestions.
                                </p>
                                <ul className="space-y-2 text-noble-300">
                                    <li className="flex items-start gap-2">
                                        <LuCheck className="mt-1 shrink-0 text-heisenberg-blue-500" size={16} />
                                        <span>Syntax highlighting built-in</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <LuCheck className="mt-1 shrink-0 text-heisenberg-blue-500" size={16} />
                                        <span>Multi-language support</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <LuCheck className="mt-1 shrink-0 text-heisenberg-blue-500" size={16} />
                                        <span>Real-time code execution</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Use Case 3 */}
                        <div className="group relative overflow-hidden rounded-2xl border border-noble-600 bg-noble-800/50 p-8 transition-all hover:border-purple-blue-500/50">
                            <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-purple-blue-500/5 blur-3xl transition-all group-hover:bg-purple-blue-500/10"></div>
                            <div className="relative">
                                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-purple-blue-500/10 px-4 py-2 text-sm font-semibold text-purple-blue-400">
                                    Content Creation
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-white">Writing Companion</h3>
                                <p className="mb-4 text-noble-300">
                                    Create AI writing assistants for content generation, editing, brainstorming, and creative collaboration.
                                </p>
                                <ul className="space-y-2 text-noble-300">
                                    <li className="flex items-start gap-2">
                                        <LuCheck className="mt-1 shrink-0 text-purple-blue-500" size={16} />
                                        <span>Rich text formatting</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <LuCheck className="mt-1 shrink-0 text-purple-blue-500" size={16} />
                                        <span>Style customization</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <LuCheck className="mt-1 shrink-0 text-purple-blue-500" size={16} />
                                        <span>Export to multiple formats</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Use Case 4 */}
                        <div className="group relative overflow-hidden rounded-2xl border border-noble-600 bg-noble-800/50 p-8 transition-all hover:border-sunglow-500/50">
                            <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-sunglow-500/5 blur-3xl transition-all group-hover:bg-sunglow-500/10"></div>
                            <div className="relative">
                                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-sunglow-500/10 px-4 py-2 text-sm font-semibold text-sunglow-400">
                                    Education
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-white">Learning Platform</h3>
                                <p className="mb-4 text-noble-300">
                                    Build interactive tutoring systems that adapt to student needs and provide personalized learning experiences.
                                </p>
                                <ul className="space-y-2 text-noble-300">
                                    <li className="flex items-start gap-2">
                                        <LuCheck className="mt-1 shrink-0 text-sunglow-500" size={16} />
                                        <span>Adaptive learning paths</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <LuCheck className="mt-1 shrink-0 text-sunglow-500" size={16} />
                                        <span>Progress tracking</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <LuCheck className="mt-1 shrink-0 text-sunglow-500" size={16} />
                                        <span>Quiz generation</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Developer Experience Section */}
            <section className="relative py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20 text-center">
                        <span className="mb-4 inline-block rounded-full bg-happy-orange-600/10 px-4 py-1.5 text-sm font-semibold text-happy-orange-600">
                            Developer Experience
                        </span>
                        <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
                            Built for Developers
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl text-noble-300">
                            Modern tooling and best practices for productive development
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-2xl border border-noble-600 bg-noble-800/50 p-6">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-stem-green-500/10">
                                <LuCheck className="text-stem-green-500" size={24} />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-white">Type Safety</h3>
                            <p className="text-noble-300">
                                Full TypeScript coverage with Zod validation and Prisma types
                            </p>
                        </div>

                        <div className="rounded-2xl border border-noble-600 bg-noble-800/50 p-6">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-heisenberg-blue-500/10">
                                <LuCheck className="text-heisenberg-blue-500" size={24} />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-white">Testing Suite</h3>
                            <p className="text-noble-300">
                                Jest for unit tests, Playwright for E2E with 100% coverage goal
                            </p>
                        </div>

                        <div className="rounded-2xl border border-noble-600 bg-noble-800/50 p-6">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-blue-500/10">
                                <LuCheck className="text-purple-blue-500" size={24} />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-white">Code Quality</h3>
                            <p className="text-noble-300">
                                ESLint, Prettier, and Tailwind config for consistent code style
                            </p>
                        </div>

                        <div className="rounded-2xl border border-noble-600 bg-noble-800/50 p-6">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sunglow-500/10">
                                <LuCheck className="text-sunglow-500" size={24} />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-white">React Compiler</h3>
                            <p className="text-noble-300">
                                Automatic optimization with babel-plugin-react-compiler
                            </p>
                        </div>

                        <div className="rounded-2xl border border-noble-600 bg-noble-800/50 p-6">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-day-blue-500/10">
                                <LuCheck className="text-day-blue-500" size={24} />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-white">Hot Reload</h3>
                            <p className="text-noble-300">
                                Instant feedback with Next.js 16 Fast Refresh and Turbopack
                            </p>
                        </div>

                        <div className="rounded-2xl border border-noble-600 bg-noble-800/50 p-6">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-happy-orange-600/10">
                                <LuCheck className="text-happy-orange-600" size={24} />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-white">Performance</h3>
                            <p className="text-noble-300">
                                Prisma Accelerate for global edge caching and faster queries
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative border-y border-noble-700 bg-noble-800/50 py-16 backdrop-blur-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div className="text-center">
                            <div className="mb-2 text-4xl font-bold text-white">10+</div>
                            <div className="text-noble-300">AI Models</div>
                        </div>
                        <div className="text-center">
                            <div className="mb-2 text-4xl font-bold text-white">100%</div>
                            <div className="text-noble-300">TypeScript</div>
                        </div>
                        <div className="text-center">
                            <div className="mb-2 text-4xl font-bold text-white">Edge</div>
                            <div className="text-noble-300">Runtime Ready</div>
                        </div>
                        <div className="text-center">
                            <div className="mb-2 text-4xl font-bold text-white">MIT</div>
                            <div className="text-noble-300">Open Source</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="relative py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20 text-center">
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

            {/* FAQ Section */}
            <section className="relative bg-noble-800/30 py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20 text-center">
                        <span className="mb-4 inline-block rounded-full bg-heisenberg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-heisenberg-blue-400">
                            FAQ
                        </span>
                        <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
                            Common Questions
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl text-noble-300">
                            Everything you need to know about getting started
                        </p>
                    </div>

                    <div className="mx-auto max-w-3xl space-y-6">
                        <details className="group rounded-2xl border border-noble-600 bg-noble-800/50 p-6 transition-all hover:border-noble-500">
                            <summary className="flex cursor-pointer items-center justify-between font-semibold text-white">
                                <span className="text-lg">What AI models are supported?</span>
                                <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="mt-4 text-noble-300">
                                AargonGPT supports OpenAI (GPT-4, GPT-3.5), Google Gemini, and any model compatible with Vercel AI SDK. You can easily add custom model providers through the unified interface.
                            </p>
                        </details>

                        <details className="group rounded-2xl border border-noble-600 bg-noble-800/50 p-6 transition-all hover:border-noble-500">
                            <summary className="flex cursor-pointer items-center justify-between font-semibold text-white">
                                <span className="text-lg">Do I need a database?</span>
                                <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="mt-4 text-noble-300">
                                Yes, Prisma ORM is configured for PostgreSQL by default, but you can use any database Prisma supports (MySQL, MongoDB, SQLite, etc.). The schema handles users, conversations, and messages.
                            </p>
                        </details>

                        <details className="group rounded-2xl border border-noble-600 bg-noble-800/50 p-6 transition-all hover:border-noble-500">
                            <summary className="flex cursor-pointer items-center justify-between font-semibold text-white">
                                <span className="text-lg">Can I customize the UI?</span>
                                <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="mt-4 text-noble-300">
                                Absolutely! Built with Tailwind CSS 4 and custom design tokens. Modify colors, spacing, and components easily. Dark mode and custom themes are fully supported.
                            </p>
                        </details>

                        <details className="group rounded-2xl border border-noble-600 bg-noble-800/50 p-6 transition-all hover:border-noble-500">
                            <summary className="flex cursor-pointer items-center justify-between font-semibold text-white">
                                <span className="text-lg">Is it production-ready?</span>
                                <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="mt-4 text-noble-300">
                                Yes! Includes authentication, rate limiting, error handling, and testing suite. Deploy to Vercel with one click. Prisma Accelerate for edge caching is optional but recommended for production.
                            </p>
                        </details>

                        <details className="group rounded-2xl border border-noble-600 bg-noble-800/50 p-6 transition-all hover:border-noble-500">
                            <summary className="flex cursor-pointer items-center justify-between font-semibold text-white">
                                <span className="text-lg">What's the license?</span>
                                <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="mt-4 text-noble-300">
                                MIT License - use it for personal or commercial projects, modify as needed. No attribution required, but always appreciated!
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            {/* CTA Section - Enhanced */}
            <section className="relative py-24">
                <div className="absolute inset-0 bg-linear-to-t from-stem-green-900/5 to-transparent"></div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-noble-600 bg-linear-to-br from-noble-800/80 to-noble-900/80 p-12 backdrop-blur-lg sm:p-16">
                        {/* Decorative elements */}
                        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-stem-green-500/10 blur-3xl"></div>
                        <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-heisenberg-blue-500/10 blur-3xl"></div>

                        <div className="relative text-center">
                            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
                                Start Building Today
                            </h2>
                            <p className="mb-10 text-xl text-noble-300">
                                Join developers building next-generation AI applications with modern tech stack.
                            </p>
                            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                <Link
                                    href="/signup"
                                    className="group flex items-center justify-center gap-2 rounded-xl bg-stem-green-500 px-8 py-4 text-lg font-semibold text-noble-900 shadow-lg transition-all hover:bg-stem-green-400 hover:shadow-stem-green-500/50"
                                >
                                    Get Started Free
                                    <LuArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                                </Link>
                                <Link
                                    href="https://github.com/yourusername/aargongpt"
                                    className="flex items-center justify-center gap-2 rounded-xl border border-noble-500 bg-noble-700/50 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-noble-600/50"
                                >
                                    View on GitHub
                                </Link>
                            </div>

                            {/* Trust badges */}
                            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-noble-400">
                                <div className="flex items-center gap-2">
                                    <LuShield size={16} />
                                    <span>Type-safe with TypeScript</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <LuCheck size={16} />
                                    <span>MIT Licensed</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <LuZap size={16} />
                                    <span>Production ready</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
