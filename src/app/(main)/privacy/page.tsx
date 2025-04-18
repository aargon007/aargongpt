import Button from "@/components/ui/Button"
import Link from "next/link"

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Navigation */}
            <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-md sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-2">
                                <div className="w-8 h-8">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 0L29.8564 8V24L16 32L2.14359 24V8L16 0Z" fill="url(#paint0_linear_1_2)" />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_1_2"
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
                            </Link>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="text-gray-300 hover:text-cyan-400">
                                Home
                            </Link>
                            <Link href="/features" className="text-gray-300 hover:text-cyan-400">
                                Features
                            </Link>
                            <Link href="/docs" className="text-gray-300 hover:text-cyan-400">
                                Documentation
                            </Link>
                            <Link href="/contact" className="text-gray-300 hover:text-cyan-400">
                                Contact
                            </Link>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <Link href="/login" className="hidden sm:block text-gray-300 hover:text-white">
                                Log in
                            </Link>
                            <Button>
                                Get Started
                            </Button>
                            <button className="md:hidden text-gray-300 hover:text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Privacy Policy Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                        <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 mb-6">Last updated: April 18, 2023</p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Introduction</h2>
                            <p className="text-gray-300 mb-4">
                                Welcome to Artificium ("we," "our," or "us"). We are committed to protecting your privacy and ensuring
                                you have a positive experience on our website and while using our services. This Privacy Policy explains
                                how we collect, use, disclose, and safeguard your information when you visit our website or use our AI
                                SDK services.
                            </p>
                            <p className="text-gray-300 mb-4">
                                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                                please do not access the site or use our services.
                            </p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Information We Collect</h2>
                            <p className="text-gray-300 mb-4">
                                We collect information that you provide directly to us, information we obtain automatically when you use
                                our services, and information from third-party sources.
                            </p>

                            <h3 className="text-lg font-medium text-white mt-6 mb-3">2.1 Information You Provide to Us</h3>
                            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
                                <li>
                                    Account Information: When you create an account, we collect your name, email address, password, and
                                    other information you provide during registration.
                                </li>
                                <li>
                                    Profile Information: Information you add to your profile, such as your photo, job title, company, and
                                    preferences.
                                </li>
                                <li>
                                    Payment Information: If you make a purchase, we collect payment information, billing address, and
                                    other details necessary to process the transaction.
                                </li>
                                <li>
                                    Communications: Information you provide when you contact us for support, respond to surveys, or
                                    communicate with us in any way.
                                </li>
                                <li>
                                    User Content: Information you submit through our services, including prompts to AI models, generated
                                    content, and feedback.
                                </li>
                            </ul>

                            <h3 className="text-lg font-medium text-white mt-6 mb-3">2.2 Information We Collect Automatically</h3>
                            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
                                <li>
                                    Usage Information: We collect information about how you use our services, including the features you
                                    access, the actions you take, and the time, frequency, and duration of your activities.
                                </li>
                                <li>
                                    Device Information: We collect information about the device you use to access our services, including
                                    hardware model, operating system, unique device identifiers, and mobile network information.
                                </li>
                                <li>
                                    Log Information: We collect log information when you use our services, including your IP address,
                                    browser type, access times, pages viewed, and the page you visited before navigating to our website.
                                </li>
                                <li>
                                    Cookies and Similar Technologies: We use cookies and similar technologies to collect information about
                                    your browsing behavior and preferences.
                                </li>
                            </ul>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. How We Use Your Information</h2>
                            <p className="text-gray-300 mb-4">We use the information we collect for various purposes, including:</p>
                            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
                                <li>Providing, maintaining, and improving our services</li>
                                <li>Processing transactions and sending related information</li>
                                <li>Sending technical notices, updates, security alerts, and support messages</li>
                                <li>Responding to your comments, questions, and requests</li>
                                <li>Developing new products and services</li>
                                <li>Monitoring and analyzing trends, usage, and activities in connection with our services</li>
                                <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
                                <li>
                                    Personalizing your experience and providing content and features that match your profile and interests
                                </li>
                                <li>Facilitating contests, sweepstakes, and promotions</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Sharing of Information</h2>
                            <p className="text-gray-300 mb-4">We may share your information in the following circumstances:</p>
                            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
                                <li>
                                    With vendors, consultants, and other service providers who need access to such information to carry
                                    out work on our behalf
                                </li>
                                <li>
                                    In response to a request for information if we believe disclosure is in accordance with any applicable
                                    law, regulation, or legal process
                                </li>
                                <li>
                                    If we believe your actions are inconsistent with our user agreements or policies, or to protect the
                                    rights, property, and safety of us or others
                                </li>
                                <li>
                                    In connection with, or during negotiations of, any merger, sale of company assets, financing, or
                                    acquisition of all or a portion of our business by another company
                                </li>
                                <li>With your consent or at your direction</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Data Security</h2>
                            <p className="text-gray-300 mb-4">
                                We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized
                                access, disclosure, alteration, and destruction. However, no internet or electronic communications
                                service is ever completely secure or error-free.
                            </p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-4">6. Your Choices</h2>
                            <p className="text-gray-300 mb-4">
                                You have several choices regarding the information we collect and how it is used:
                            </p>
                            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
                                <li>
                                    Account Information: You may update, correct, or delete your account information at any time by
                                    logging into your account or contacting us.
                                </li>
                                <li>
                                    Cookies: Most web browsers are set to accept cookies by default. If you prefer, you can usually choose
                                    to set your browser to remove or reject browser cookies. Please note that if you choose to remove or
                                    reject cookies, this could affect the availability and functionality of our services.
                                </li>
                                <li>
                                    Promotional Communications: You may opt out of receiving promotional emails from us by following the
                                    instructions in those emails. If you opt out, we may still send you non-promotional emails, such as
                                    those about your account or our ongoing business relations.
                                </li>
                            </ul>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-4">7. Children's Privacy</h2>
                            <p className="text-gray-300 mb-4">
                                Our services are not directed to children under 16, and we do not knowingly collect personal information
                                from children under 16. If we learn we have collected personal information from a child under 16, we
                                will delete that information.
                            </p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-4">8. International Data Transfers</h2>
                            <p className="text-gray-300 mb-4">
                                We may transfer your information to countries other than the one in which you live. We deploy
                                appropriate safeguards to protect your information when transferred internationally.
                            </p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-4">9. Changes to this Privacy Policy</h2>
                            <p className="text-gray-300 mb-4">
                                We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising
                                the date at the top of the policy and, in some cases, we may provide you with additional notice (such as
                                adding a statement to our website or sending you a notification).
                            </p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-4">10. Contact Us</h2>
                            <p className="text-gray-300 mb-4">
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <p className="text-gray-300 mb-4">
                                Artificium, Inc.
                                <br />
                                123 AI Innovation Street
                                <br />
                                San Francisco, CA 94105
                                <br />
                                Email: privacy@artificium.ai
                                <br />
                                Phone: +1 (234) 567-890
                            </p>
                        </div>
                    </div>
                </div>
            </div>

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
