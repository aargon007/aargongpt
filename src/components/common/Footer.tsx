import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { RiFacebookCircleFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer className="bg-noble-700 border-t border-noble-600">
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
                                            <stop stopColor="#82dbf7" />
                                            <stop offset="1" stopColor="#b6f09c" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <span className="text-white font-bold text-xl">AargonGPT</span>
                        </div>
                        <p className="text-noble-300 mb-4">
                            Building the future of AI-powered applications with the Vercel AI SDK.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-noble-300 hover:text-stem-green-500">
                                <RiFacebookCircleFill className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-noble-300 hover:text-stem-green-500">
                                <BiLogoLinkedinSquare className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-noble-300 hover:text-stem-green-500">
                                <FaGithub className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-noble-300 hover:text-stem-green-500">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-noble-300 hover:text-stem-green-500">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-noble-300 hover:text-stem-green-500">
                                    API
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-noble-300 hover:text-stem-green-500">
                                    Integrations
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-noble-300 hover:text-stem-green-500">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-noble-300 hover:text-stem-green-500">
                                    Guides
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-noble-300 hover:text-stem-green-500">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-noble-300 hover:text-stem-green-500">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-noble-300 hover:text-stem-green-500">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-noble-300 hover:text-stem-green-500">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/privacy" className="text-noble-300 hover:text-stem-green-500">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-noble-300 hover:text-stem-green-500">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-noble-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-noble-300 text-sm">
                        © 2025 AargonGPT. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0">
                        <Link href="/privacy" className="text-noble-300 hover:text-stem-green-500 text-sm">
                            Privacy Policy
                        </Link>
                        <span className="text-noble-500 mx-2">|</span>
                        <Link href="#" className="text-noble-300 hover:text-stem-green-500 text-sm">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;