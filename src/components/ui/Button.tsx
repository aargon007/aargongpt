"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/utils/cn';

type ButtonProps = {
    height?: string;
    onClick?: () => void;
    children: React.ReactNode;
    href?: string;
    className?: string
}

const Button = ({ height = "48px", onClick, children, href, className }: ButtonProps) => {
    const navigate = useRouter();

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
        if (href) {
            navigate.push(href)
        }
    };

    return (
        <button
            className={cn(
                "w-full px-4 rounded-[8px] flex items-center justify-center gap-4 hover:bg-[url('/gradient.png')] bg-cover bg-no-repeat bg-center text-noble-100 font-semibold text-sm",
                className
            )}
            style={{
                height,
            }}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Button;

//w-[320px] rounded-2xl p-4  border border-white/10 flex items-center justify-between