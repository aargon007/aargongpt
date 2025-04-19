"use client"

import type React from "react"
import { FormEvent, useState } from "react"
import Link from "next/link"
import InputField from "@/components/ui/input-field"
import { createUser } from "@/services/user.service"
import { LuCheck } from "react-icons/lu"
import { toast } from "sonner"

interface FormData {
    firstName: string
    lastName: string
    email: string
    password: string
    agreeTerms: boolean
}

const SignUpForm = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        agreeTerms: false,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        // Create a FormData object from the form element
        const form = e.target as HTMLFormElement
        const formDataObj = new FormData(form)

        try {
            const user = await createUser(formDataObj)
            console.log("User created:", user)
            // Handle successful signup (redirect, show message, etc.)
        } catch (error) {
            console.error("Error creating user:", error)
            toast.error("Error creating user");
        }
    };

    return (
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
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <InputField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
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
                        className="sr-only peer"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
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
    );
};

export default SignUpForm;