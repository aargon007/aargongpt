"use client"

import Link from "next/link";
import { useState } from "react"
import { LuCheck, LuLock, LuMail } from "react-icons/lu"

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    return (
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
                        className="inputField"
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
                        className="inputField"
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
                className="primaryButton"
            >
                Log in
            </button>
        </form>
    );
};

export default LoginForm;