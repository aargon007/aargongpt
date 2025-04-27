import RegisterForm from '@/components/auth/RegisterForm';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'aargonGPT | Register',
    description: 'AI-powered collaboration platform',
};

export default function SignupPage() {
    return (
        <div className="flex min-h-screen bg-noble-700">
            {/* Left side - Signup form */}
            <div className="flex w-full flex-col px-5 py-8 md:w-[60%] md:px-12 md:py-12">
                <div className="mb-10 flex items-center justify-between md:mb-16">
                    {/* Logo */}
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

                    {/* Login link */}
                    <Link
                        href="/login"
                        className="primaryGradient font-semibold"
                    >
                        Log In
                    </Link>
                </div>

                <div className="w-full px-4 md:px-8">
                    {/* Heading */}
                    <h1 className="mb-10 text-2xl font-normal text-noble-100 md:mb-16 md:text-4xl">
                        Connect with your team and bring your creative ideas to
                        life.
                    </h1>

                    {/* Form */}
                    <RegisterForm />
                </div>

                <div className="mt-auto flex items-center justify-between pt-8 text-xs text-noble-300">
                    <div>AargonGPT© 2025</div>
                    <Link href="/privacy" className="hover:text-noble-100">
                        Privacy Policy
                    </Link>
                </div>
            </div>

            {/* Right side - Decorative background */}
            {/* <div className="hidden md:block md:w-[40%] bg-gray-950 relative overflow-hidden">
                <div className="absolute inset-0">
                   
                    <div className="absolute w-40 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-sm top-1/4 right-10 transform rotate-45 opacity-70"></div>
                    <div className="absolute w-60 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-sm bottom-1/4 right-20 transform -rotate-15 opacity-70"></div>
                    <div className="absolute w-40 h-20 rounded-full bg-gradient-to-r from-purple-400 to-blue-600 blur-sm top-2/3 right-40 transform rotate-30 opacity-70"></div>

                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: `repeating-linear-gradient(45deg, rgba(30,30,50,0.8) 0px, rgba(30,30,50,0.8) 2px, transparent 2px, transparent 15px)`,
                            backgroundSize: "30px 30px",
                        }}
                    ></div>
                </div>
            </div> */}
            <div className="relative hidden overflow-hidden md:block md:w-[40%]">
                <Image
                    src="/green-grid.png"
                    alt="login"
                    width={1200}
                    height={700}
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
}
