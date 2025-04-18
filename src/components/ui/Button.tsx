import { useRouter } from 'next/navigation';
import React from 'react';

type ButtonProps = {
    height?: string;
    onClick?: () => void;
    children: React.ReactNode;
    href?: string
}

const Button = ({ height = "48px", onClick, children, href }: ButtonProps) => {
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
            className={`w-full px-4 rounded-[8px] flex items-center justify-center gap-4 hover:bg-[url('/gradient.png')] bg-cover bg-no-repeat bg-center text-noble-100 font-semibold text-sm `}
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