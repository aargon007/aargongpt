'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../ui/Button';
import { cn } from '@/utils/cn';
import { LuMenu } from 'react-icons/lu';

const Header = () => {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/contact', label: 'Contact' },
        { href: '/privacy', label: 'Privacy' },
        { href: '/chat', label: 'Chat' },
    ];

    return (
        <>
            {/* Backdrop */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 bg-black bg-opacity-50 blur-md z-40 md:hidden"
                />
            )}

            {/* Sidebar */}
            <div
                className={cn(
                    'fixed top-0 left-0 h-full w-64 bg-noble-800 z-[51] transform transition-transform duration-300 ease-in-out md:hidden',
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                )}
            >
                <div className="p-6 space-y-6">
                    <h2 className="text-white font-bold text-2xl mb-6">
                        AargonGPT
                    </h2>
                    {navItems.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setSidebarOpen(false)}
                            className={cn(
                                'block py-2 text-lg transition-colors',
                                pathname === href
                                    ? 'text-white font-bold'
                                    : 'text-noble-300 hover:text-stem-green-500'
                            )}
                        >
                            {label}
                        </Link>
                    ))}
                    <div className="mt-8 space-y-4">
                        <Button href='/login' className='w-20' isActive>
                            Log in
                        </Button>
                    </div>
                </div>
            </div>

            <header className="border-b border-noble-600 bg-noble-700/80 backdrop-blur-md sticky top-0 z-50">
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
                                                <stop stopColor="#82dbf7" />
                                                <stop offset="1" stopColor="#b6f09c" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="text-white font-bold text-xl">
                                    AargonGPT
                                </span>
                            </Link>
                        </div>

                        <nav className="hidden md:flex items-center space-x-8">
                            {navItems.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className={cn(
                                        'font-medium transition-colors',
                                        pathname === href
                                            ? 'text-white font-bold'
                                            : 'text-noble-300 hover:text-stem-green-500'
                                    )}
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center space-x-4">
                            <Button href='/login' className='w-20 hidden sm:block'>
                                Log in
                            </Button>
                            <Button href='/signup' className='w-28 hidden sm:block'>
                                Get Started
                            </Button>
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="md:hidden text-noble-300 hover:text-white"
                            >
                                <LuMenu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;