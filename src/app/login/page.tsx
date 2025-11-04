import Image from 'next/image';
import Link from 'next/link';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
    return (
        <div className="flex h-screen w-full">
            {/* Left side - Login form */}
            <div className="flex w-full flex-col justify-between bg-noble-700 px-5 py-8 md:w-1/2 md:px-12 md:py-12">
                {/* Logo */}
                <div className="mb-10">
                    <Link href="/">
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
                                    <stop stopColor="#4FFFB0" />
                                    <stop offset="1" stopColor="#2ECFCA" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </Link>
                </div>

                <div className="px-4 md:px-8">
                    {/* Heading */}
                    <div className="mb-10">
                        <h1 className="mb-4 text-3xl font-normal text-white">
                            Let's get{' '}
                            <span className="bg-linear-to-r from-day-blue-300 via-[#87DDEE] to-stem-green-500 bg-clip-text font-medium text-transparent">
                                creative!
                            </span>
                        </h1>
                        <p className="text-lg font-medium text-noble-300">
                            Log in to aargonGPT to start creating magic.
                        </p>
                    </div>

                    {/* Form */}
                    <LoginForm />

                    <div className="mt-10">
                        <div className="flex w-full items-center justify-between gap-4">
                            <div className="h-px w-full bg-noble-500" />
                            <div className="w-auto min-w-32 text-center text-sm font-medium text-noble-500">
                                or continue with
                            </div>
                            <div className="h-px w-full bg-noble-500" />
                        </div>

                        <div className="mt-6 grid gap-3 md:grid-cols-2">
                            <button
                                type="button"
                                className="inline-flex w-full items-center justify-center rounded-xl bg-noble-600 px-4 py-3 text-sm font-medium text-noble-400 shadow-xs"
                            >
                                <FcGoogle className="h-5 w-5" />
                                <span className="ml-2">Google Account</span>
                            </button>

                            <button
                                type="button"
                                className="inline-flex w-full items-center justify-center rounded-xl bg-noble-600 px-4 py-3 text-sm font-medium text-noble-400 shadow-xs"
                            >
                                <FaApple className="h-5 w-5 text-white" />
                                <span className="ml-2">Apple Account</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-6 pb-6 md:pb-0">
                    <p className="font-semibold text-noble-400">
                        Don't have an account?{' '}
                        <Link href="/signup" className="primaryGradient">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right side - Gradient pattern */}
            <div className="relative hidden h-full overflow-hidden md:block md:w-1/2">
                <Image
                    src="/grid.png"
                    alt="login"
                    width={1200}
                    height={700}
                    decoding='async'
                    loading='lazy'
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
}
