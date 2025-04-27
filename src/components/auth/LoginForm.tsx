'use client';

import { loginUser } from '@/services/user.service';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { LuCheck, LuLock, LuMail } from 'react-icons/lu';
import { toast } from 'sonner';
import InputField from '../ui/input-field';
import Spinner from '../ui/Spinner';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const form = e.target as HTMLFormElement;
        const formDataObj = new FormData(form);

        try {
            const response = await loginUser(formDataObj);
            if (response.success) {
                router.push('/chat');
            }
            toast.success(response.message);
        } catch (error) {
            toast.error('Error logging in');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <InputField
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={<LuMail className="text-noble-300" />}
                placeholder="example@mail.com"
                autoComplete="off"
                required
            />

            <InputField
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={<LuLock className="text-noble-300" />}
                placeholder="password"
                autoComplete="off"
                required
            />

            <div className="flex items-center justify-between">
                <label
                    htmlFor="remember-me"
                    className="flex cursor-pointer select-none items-center"
                >
                    {/* Hidden Native Checkbox */}
                    <input
                        id="remember-me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="peer sr-only"
                    />
                    <div className="checkbox">
                        {rememberMe && (
                            <LuCheck className="h-4 w-4 text-white" />
                        )}
                    </div>
                    <span className="ml-2 text-noble-200">Remember me</span>
                </label>

                <div className="">
                    <Link href="#" className="primaryGradient font-medium">
                        Forgot Password?
                    </Link>
                </div>
            </div>

            <button
                type="submit"
                className={cn(
                    'primaryButton',
                    isLoading && 'pointer-events-none opacity-50',
                    (!rememberMe || !email || !password) &&
                        'pointer-events-none opacity-50',
                )}
            >
                {isLoading ? <Spinner /> : 'Log in'}
            </button>
        </form>
    );
};

export default LoginForm;
