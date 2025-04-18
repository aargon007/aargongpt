"use client"

import { type InputHTMLAttributes, forwardRef } from "react"

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    error?: string
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({ label, error, className, ...props }, ref) => {
    return (
        <div className="space-y-3">
            <label className="block text-sm font-medium text-noble-300">{label}</label>
            <input
                ref={ref}
                className="inputField pl-4"
                {...props}
                autoComplete="off"
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    )
})

InputField.displayName = "InputField"

export default InputField
