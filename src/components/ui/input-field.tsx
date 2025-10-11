'use client';

import { type InputHTMLAttributes, forwardRef, memo } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}

const InputField = memo(forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, error, icon, className, ...props }, ref) => {
        return (
            <div className="space-y-3">
                {label && (
                    <label className="mb-3 block text-sm font-medium text-noble-300">
                        {label}
                    </label>
                )}
                <div className="relative">
                    {icon && (
                        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                            {icon}
                        </div>
                    )}
                    <input
                        ref={ref}
                        className={`inputField ${icon ? '' : 'pl-4'}`}
                        {...props}
                        autoComplete="off"
                    />
                </div>
                {error && <p className="text-xs text-red-500">{error}</p>}
            </div>
        );
    },
));

InputField.displayName = 'InputField';

export default InputField;
