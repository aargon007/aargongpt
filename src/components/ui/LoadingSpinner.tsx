'use client';

import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    text?: string;
    className?: string;
}

export default function LoadingSpinner({ 
    size = 'md', 
    text = 'Loading...', 
    className = '' 
}: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    };

    const textSizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg'
    };

    return (
        <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
            <motion.div
                className={`${sizeClasses[size]} border-2 border-noble-600 border-t-green-400 rounded-full`}
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            {text && (
                <motion.p 
                    className={`${textSizeClasses[size]} text-noble-300 font-medium`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {text}
                </motion.p>
            )}
        </div>
    );
}
