'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { LuArrowRight, LuGithub, LuMenu } from 'react-icons/lu';
import Button from '../ui/Button';
import { cn } from '@/utils/cn';

const Header = () => {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <>
            {/* Backdrop */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                    aria-hidden="true"
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

            <header className="bg-noble-700/70 sticky top-0 z-50 border-b border-noble-600 backdrop-blur-md">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo */}
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

                        {/* Desktop Navigation */}
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

                        {/* Desktop CTAs */}
                        <div className="hidden items-center gap-3 md:flex">
                            <a
                                href="https://github.com/aargon007"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg text-noble-300 transition-all hover:bg-noble-700/50 hover:text-white"
                                aria-label="GitHub"
                            >
                                <LuGithub size={20} />
                            </a>
                            <Link
                                href="/login"
                                className="rounded-lg px-4 py-2 font-medium text-noble-300 transition-all hover:text-white"
                            >
                                Log In
                            </Link>
                            <Link
                                href="/signup"
                                className="group flex items-center gap-2 rounded-xl bg-stem-green-500 px-5 py-2 font-semibold text-noble-900 shadow-lg transition-all hover:bg-stem-green-400 hover:shadow-stem-green-500/50"
                            >
                                Get Started
                                <LuArrowRight
                                    className="transition-transform group-hover:translate-x-0.5"
                                    size={16}
                                />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="rounded-lg p-2 text-noble-300 transition-colors hover:bg-noble-700/50 hover:text-white md:hidden"
                            aria-label="Open menu"
                        >
                            <LuMenu size={24} />
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
