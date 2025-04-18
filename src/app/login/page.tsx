import Link from "next/link"
import Image from "next/image"
import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"
import LoginForm from "@/components/auth/LoginForm"

export default function LoginPage() {

    return (
        <div className="flex h-screen w-full">
            {/* Left side - Login form */}
            <div className="w-full md:w-1/2 bg-noble-700 px-5 py-8 md:px-12 md:py-12 flex flex-col justify-between">
                {/* Logo */}
                <div className="mb-10">
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
                    <div className="mb-10">
                        <h1 className="text-3xl font-normal text-white mb-4">
                            Let's get <span className="bg-gradient-to-r font-medium text-transparent from-day-blue-300 via-[#87DDEE] to-stem-green-500 bg-clip-text">creative!</span>
                        </h1>
                        <p className="text-noble-300 text-lg font-medium">
                            Log in to aargonGPT to start creating magic.
                        </p>
                    </div>

                    {/* Form */}
                    <LoginForm />

                    <div className="mt-10">
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

                <div className="mt-6 pb-6 md:pb-0">
                    <p className="font-semibold text-noble-400">
                        Don't have an account?{" "}
                        <Link href="/signup" className="primaryGradient">
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
