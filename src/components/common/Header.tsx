'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { LuMenu } from 'react-icons/lu';
import Button from '../ui/Button';

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
                    className="fixed inset-0 z-40 bg-black bg-opacity-50 blur-md md:hidden"
                />
            )}

            {/* Sidebar */}
            <div
                className={cn(
                    'fixed left-0 top-0 z-51 h-full w-64 transform bg-noble-800 transition-transform duration-300 ease-in-out md:hidden',
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full',
                )}
            >
                <div className="space-y-6 p-6">
                    <h2 className="mb-6 text-2xl font-bold text-white">
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
                                    ? 'font-bold text-white'
                                    : 'text-noble-300 hover:text-stem-green-500',
                            )}
                        >
                            {label}
                        </Link>
                    ))}
                    <div className="mt-8 space-y-4">
                        <Button href="/login" className="w-20" isActive>
                            Log in
                        </Button>
                    </div>
                </div>
            </div>

            <header className="bg-noble-700/80 sticky top-0 z-50 border-b border-noble-600 backdrop-blur-md">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-4">
                        <div className="flex items-center">
                            <Link
                                href="/"
                                className="flex items-center space-x-2"
                            >
                                <div className="h-8 w-8">
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16 0L29.8564 8V24L16 32L2.14359 24V8L16 0Z"
                                            fill="url(#paint0_linear_1_2)"
                                        />
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
                                                <stop
                                                    offset="1"
                                                    stopColor="#b6f09c"
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <span className="text-xl font-bold text-white">
                                    AargonGPT
                                </span>
                            </Link>
                        </div>

                        <nav className="hidden items-center space-x-8 md:flex">
                            {navItems.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className={cn(
                                        'font-medium transition-colors',
                                        pathname === href
                                            ? 'font-bold text-white'
                                            : 'text-noble-300 hover:text-stem-green-500',
                                    )}
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center space-x-4">
                            <Button
                                href="/login"
                                className="hidden w-20 sm:block"
                            >
                                Log in
                            </Button>
                            <Button
                                href="/signup"
                                className="hidden w-28 sm:block"
                            >
                                Get Started
                            </Button>
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="text-noble-300 hover:text-white md:hidden"
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
