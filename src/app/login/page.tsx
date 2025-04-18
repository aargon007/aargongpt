"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { LuCheck, LuLock, LuMail } from "react-icons/lu"
import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div className="flex h-screen w-full">
            {/* Left side - Login form */}
            <div className="w-full md:w-1/2 bg-noble-700 px-5 py-8 md:px-12 md:py-12 flex flex-col justify-between">
                {/* Logo */}
                <div className="">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 0L29.8564 8V24L16 32L2.14359 24V8L16 0Z" fill="url(#paint0_linear_1_2)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_2" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#4FFFB0" />
                                <stop offset="1" stopColor="#2ECFCA" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="px-4 md:px-8">
                    {/* Heading */}
                    <div className="mb-16">
                        <h1 className="text-3xl font-normal text-white mb-4">
                            Let's get <span className="bg-gradient-to-r font-medium text-transparent from-day-blue-300 via-[#87DDEE] to-stem-green-500 bg-clip-text">creative!</span>
                        </h1>
                        <p className="text-noble-300 text-lg font-medium">
                            Log in to aargonGPT to start creating magic.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5">
                        <div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <LuMail className="text-noble-300" />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="example@mail.com"
                                    className="w-full bg-noble-600 border border-noble-500 rounded-[8px] py-3 pl-10 pr-3 text-white placeholder-noble-300 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <LuLock className="text-noble-300" />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="password"
                                    className="w-full bg-noble-600 border border-noble-500 rounded-[8px] py-3 pl-10 pr-3 text-white placeholder-noble-300 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label htmlFor="remember-me" className="flex items-center cursor-pointer select-none">
                                {/* Hidden Native Checkbox */}
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="sr-only peer"
                                />
                                <div className="w-5 h-5 rounded border border-noble-500 bg-noble-600 peer-checked:bg-blue-600 flex items-center justify-center transition-colors">
                                    {rememberMe && <LuCheck className="text-white w-4 h-4" />}
                                </div>
                                <span className="ml-2 text-noble-200">Remember me</span>
                            </label>

                            <div className="">
                                <Link href="#" className="bg-gradient-to-r font-medium text-transparent from-stem-green-500 to-heisenberg-blue-500 bg-clip-text">
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-2.5 px-4 bg-stem-green-600 rounded-[12px] shadow-sm font-semibold text-day-blue-900 focus:outline-none"
                        >
                            Log in
                        </button>
                    </form>

                    <div className="mt-12">
                        <div className="flex justify-between items-center w-full gap-4">
                            <div className="h-px bg-noble-500 w-full" />
                            <div className="text-noble-500 text-sm font-medium min-w-32 w-auto text-center">or continue with</div>
                            <div className="h-px bg-noble-500 w-full" />
                        </div>

                        <div className="mt-6 grid md:grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="w-full inline-flex justify-center items-center py-3 px-4 rounded-[12px] shadow-sm bg-noble-600 text-sm font-medium text-noble-400"
                            >
                                <FcGoogle className="h-5 w-5" />
                                <span className="ml-2">Google Account</span>
                            </button>

                            <button
                                type="button"
                                className="w-full inline-flex justify-center items-center py-3 px-4 rounded-[12px] shadow-sm bg-noble-600 text-sm font-medium text-noble-400"                            >
                                <FaApple className="h-5 w-5 text-white" />
                                <span className="ml-2">
                                    Apple Account
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <p className="font-semibold text-noble-400">
                        Don't have an account?{" "}
                        <Link href="/signup" className="bg-gradient-to-r text-transparent from-stem-green-500 to-heisenberg-blue-500 bg-clip-text">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right side - Gradient pattern */}
            <div className="hidden md:block md:w-1/2 relative overflow-hidden h-full">
                <Image src="/grid.png"
                    alt="login"
                    width={1200}
                    height={700}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}
