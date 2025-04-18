"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import InputField from "@/components/ui/input-field"
import { LuCheck } from "react-icons/lu"
import Image from "next/image"

export default function SignupPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        password: "",
        repeatPassword: "",
        agreeTerms: false,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log("Form submitted:", formData)
    }

    return (
        <div className="flex min-h-screen bg-noble-700">
            {/* Left side - Signup form */}
            <div className="w-full md:w-[60%] px-5 py-8 md:px-12 md:py-12 flex flex-col">
                <div className="flex justify-between items-center mb-16">
                    {/* Logo */}
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 0L29.8564 8V24L16 32L2.14359 24V8L16 0Z" fill="url(#paint0_linear_1_2)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_2" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#4FFFB0" />
                                <stop offset="1" stopColor="#2ECFCA" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Login link */}
                    <Link href="/login" className="primaryGradient font-semibold">
                        Log In
                    </Link>
                </div>

                <div className="w-full px-4 md:px-8">
                    {/* Heading */}
                    <h1 className="text-2xl md:text-4xl font-normal text-noble-100 mb-16">
                        Connect with your team and bring your creative ideas to life.
                    </h1>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField
                                label="First name"
                                name="firstName"
                                placeholder="First name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <InputField
                                label="Last name"
                                name="lastName"
                                placeholder="Last name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputField
                                label="Password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />

                            <InputField
                                label="Repeat password"
                                name="repeatPassword"
                                type="password"
                                placeholder="Repeat password"
                                value={formData.repeatPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="flex items-center">
                            <label htmlFor="agree-terms" className="flex items-center cursor-pointer select-none">
                                {/* Hidden Native Checkbox */}
                                <input
                                    id="agree-terms"
                                    name="agreeTerms"
                                    type="checkbox"
                                    checked={formData.agreeTerms}
                                    onChange={handleChange}
                                    className="sr-only peer"
                                    required
                                />
                                <div className="checkbox">
                                    {formData.agreeTerms && <LuCheck className="text-white w-4 h-4" />}
                                </div>
                                <span className="ml-2 text-noble-200">I agree with{" "}
                                    <Link href="/terms" className="primaryGradient">
                                        Terms and conditions
                                    </Link></span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="primaryButton"
                        >
                            Create free account
                        </button>
                    </form>
                </div>

                <div className="mt-auto pt-8 flex justify-between items-center text-xs text-noble-300">
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
            <div className="hidden md:block md:w-[40%] relative overflow-hidden">
                <Image src="/green-grid.png"
                    alt="login"
                    width={1200}
                    height={700}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}