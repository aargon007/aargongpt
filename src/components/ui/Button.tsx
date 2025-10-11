'use client';

import { cn } from '@/utils/cn';
import { useRouter } from 'next/navigation';
import React, { memo, useCallback } from 'react';

type ButtonProps = {
    height?: string;
    onClick?: () => void;
    children: React.ReactNode;
    href?: string;
    className?: string;
    isActive?: boolean;
};

const Button = memo(({
    height = '48px',
    onClick,
    children,
    href,
    className,
    isActive,
}: ButtonProps) => {
    const navigate = useRouter();

    const handleClick = useCallback(() => {
        if (onClick) {
            onClick();
        }
        if (href) {
            navigate.push(href);
        }
    }, [onClick, href, navigate]);

    return (
        <button
            className={cn(
                "flex w-full items-center justify-center gap-4 rounded-[8px] bg-cover bg-center bg-no-repeat px-4 text-sm font-semibold text-noble-100 hover:bg-[url('/gradient.png')]",
                className,
                isActive &&
                "bg-[url('/gradient.png')] bg-cover bg-center bg-no-repeat",
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
});

Button.displayName = 'Button';

export default Button;
