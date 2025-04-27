'use client';

import InputField from '@/components/ui/input-field';
import { createUser } from '@/services/user.service';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type React from 'react';
import { FormEvent, useState } from 'react';
import { LuCheck } from 'react-icons/lu';
import { toast } from 'sonner';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    agreeTerms: boolean;
}

const RegisterForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        agreeTerms: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Create a FormData object from the form element
        const form = e.target as HTMLFormElement;
        const formDataObj = new FormData(form);

        try {
            const response = await createUser(formDataObj);
            if (response.success) {
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    agreeTerms: false,
                });
                router.push('/chat');
            }
            toast.success(response.message);
        } catch (error) {
            console.error('Error creating user:', error);
            toast.error('Error creating user');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                <label
                    htmlFor="agree-terms"
                    className="flex cursor-pointer select-none items-center"
                >
                    {/* Hidden Native Checkbox */}
                    <input
                        id="agree-terms"
                        name="agreeTerms"
                        type="checkbox"
                        className="peer sr-only"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        required
                    />
                    <div className="checkbox">
                        {formData.agreeTerms && (
                            <LuCheck className="h-4 w-4 text-white" />
                        )}
                    </div>
                    <span className="ml-2 text-noble-200">
                        I agree with{' '}
                        <Link href="/terms" className="primaryGradient">
                            Terms and conditions
                        </Link>
                    </span>
                </label>
            </div>

            <button type="submit" className="primaryButton">
                Create free account
            </button>
        </form>
    );
};

export default RegisterForm;
