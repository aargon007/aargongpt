import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../ui/Button';

const Header = () => {

    return (
        <header className="border-b border-gray-800 bg-noble-700 backdrop-blur-md sticky top-0 z-50">
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
                        <Link href="/" className="text-white hover:text-cyan-400 font-medium">
                            Home
                        </Link>
                        <Link href="/chat" className="text-gray-300 hover:text-cyan-400">
                            Chat
                        </Link>
                        <Link href="/privacy" className="text-gray-300 hover:text-cyan-400">
                            Privacy
                        </Link>
                        <Link href="/contact" className="text-gray-300 hover:text-cyan-400">
                            Contact
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-2">
                        <Button href="/Login">
                            Login
                        </Button>
                        <Button href="/signup" className='min-w-28'>
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
    );
};

export default Header;