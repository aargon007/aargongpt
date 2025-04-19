"use client"

import { FormEvent, useState } from "react"
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { LuCheck, LuLock, LuMail } from "react-icons/lu"
import { loginUser } from "@/services/user.service";
import Spinner from "../ui/Spinner";
import { cn } from "@/utils/cn";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
                router.push("/chat");
            }
            toast.success(response.message);
        } catch (error) {
            toast.error("Error logging in");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
                <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <LuMail className="text-noble-300" />
                    </div>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@mail.com"
                        className="inputField"
                        autoComplete="off"
                        required
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
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                        className="inputField"
                        required
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
                    <div className="checkbox">
                        {rememberMe && <LuCheck className="text-white w-4 h-4" />}
                    </div>
                    <span className="ml-2 text-noble-200">Remember me</span>
                </label>

                <div className="">
                    <Link href="#" className="font-medium primaryGradient">
                        Forgot Password?
                    </Link>
                </div>
            </div>

            <button
                type="submit"
                className={cn(
                    "primaryButton",
                    isLoading && "pointer-events-none opacity-50",
                    (!rememberMe || !email || !password) && "pointer-events-none opacity-50"
                )}
            >
                {isLoading ? <Spinner /> : "Log in"}
            </button>
        </form>
    );
};

export default LoginForm;