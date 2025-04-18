import Button from "@/components/ui/Button"
import Link from "next/link"
import { LuCode, LuMessageSquare, LuShield, LuZap } from "react-icons/lu"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Navigation */}
            

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                            Build AI-Powered Applications with <span className="text-cyan-400">Artificium</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Leverage the power of Vercel AI SDK to create intelligent, responsive, and engaging AI experiences for
                            your users.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            {/* <GlassButton variant="primary" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                                Get Started
                            </GlassButton>
                            <GlassButton variant="outline" size="lg">
                                View Documentation
                            </GlassButton> */}
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-64 bg-gradient-to-b from-cyan-500/20 to-transparent blur-3xl rounded-full"></div>
            </section>

            {/* Features Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Everything you need to build sophisticated AI applications in one place.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                                <LuMessageSquare className="text-cyan-400" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Conversational AI</h3>
                            <p className="text-gray-300">
                                Build natural, engaging conversations with advanced language models that understand context and user
                                intent.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                                <LuCode className="text-cyan-400" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Streamlined Integration</h3>
                            <p className="text-gray-300">
                                Integrate AI capabilities into your applications with minimal code using our intuitive SDK and APIs.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                                <LuShield className="text-cyan-400" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                            <p className="text-gray-300">
                                Built with security in mind, ensuring your data and user interactions remain private and protected.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                                <LuZap className="text-cyan-400" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Real-time Processing</h3>
                            <p className="text-gray-300">
                                Process and respond to user inputs in real-time with our optimized edge infrastructure.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="text-cyan-400"
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
                            <h3 className="text-xl font-semibold text-white mb-2">Adaptive Learning</h3>
                            <p className="text-gray-300">
                                Models that learn and adapt to your specific use cases, improving over time with user interactions.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="text-cyan-400"
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
                            <h3 className="text-xl font-semibold text-white mb-2">Multi-model Support</h3>
                            <p className="text-gray-300">
                                Access a variety of AI models to suit different tasks, from text generation to image recognition.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-2xl p-8 sm:p-12">
                        <div className="text-center">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Join thousands of developers building the next generation of AI-powered applications.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                {/* <GlassButton variant="primary" size="lg">
                                    Sign Up Free
                                </GlassButton>
                                <GlassButton variant="outline" size="lg">
                                    Contact Sales
                                </GlassButton> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 border-t border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 0L29.8564 8V24L16 32L2.14359 24V8L16 0Z" fill="url(#paint1_linear_1_2)" />
                                        <defs>
                                            <linearGradient
                                                id="paint1_linear_1_2"
                                                x1="16"
                                                y1="0"
                                                x2="16"
                                                y2="32"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#4FFFB0" />
                                                <stop offset="1" stopColor="#2ECFCA" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="text-white font-bold text-xl">Artificium</span>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Building the future of AI-powered applications with the Vercel AI SDK.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-cyan-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-cyan-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-cyan-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4">Product</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-cyan-400">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-cyan-400">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-cyan-400">
                                        API
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-cyan-400">
                                        Integrations
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-cyan-400">
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-cyan-400">
                                        Guides
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-cyan-400">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-cyan-400">
                                        Support
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-cyan-400">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className="text-gray-400 hover:text-cyan-400">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="/privacy" className="text-gray-400 hover:text-cyan-400">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-cyan-400">
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">© 2023 Artificium. All rights reserved.</p>
                        <div className="mt-4 md:mt-0">
                            <a href="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm">
                                Privacy Policy
                            </a>
                            <span className="text-gray-600 mx-2">|</span>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
