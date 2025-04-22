"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/utils/cn';

type ButtonProps = {
    height?: string;
    onClick?: () => void;
    children: React.ReactNode;
    href?: string;
    className?: string;
    isActive?: boolean
}

const Button = ({ height = "48px", onClick, children, href, className, isActive }: ButtonProps) => {
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
                className,
                isActive && "bg-[url('/gradient.png')] bg-cover bg-no-repeat bg-center"
            )}
            style={{
                height,
                // background: isActive
                //     ? "linear-gradient(315deg, #D7EDED02, #CCEBEB16)"
                //     : "linear-gradient(334deg, #D7EDED03, #CCEBEB16)", //right,left 
            }}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Button;
