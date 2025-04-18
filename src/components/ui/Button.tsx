import React from 'react';

type ButtonProps = {
    height?: string;
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
}

const Button = ({ height = "48px", onClick, children }: ButtonProps) => {
    return (
        <button
            className={`bg-gradient-to-r from-[#D7EDED] to-[#CCEBEB00] w-full px-4 rounded-[8px] flex items-center justify-center`}
            style={{ height }}
        >
            {children}
        </button>
    );
};

export default Button;