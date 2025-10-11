"use client"

import { cn } from "@/utils/cn"
import React, { useRef, useEffect, memo, useCallback, type TextareaHTMLAttributes } from "react"

interface AutoResizeTextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "value" | "onChange"> {
    value: string
    onChange: (value: string) => void
}

export const AutoResizeTextarea = memo(({ className, value, onChange, ...props }: AutoResizeTextareaProps) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const resizeTextarea = () => {
        const textarea = textareaRef.current
        if (textarea) {
            textarea.style.height = "auto"
            textarea.style.height = `${textarea.scrollHeight}px`
        }
    }

    useEffect(() => {
        resizeTextarea()
    }, [value])

    const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value)
        resizeTextarea()
    }, [onChange]);

    return (
        <textarea
            {...props}
            value={value}
            ref={textareaRef}
            rows={1}
            onChange={handleChange}
            className={cn("resize-none min-h-4 max-h-40", className)}
        />
    )
});

AutoResizeTextarea.displayName = 'AutoResizeTextarea';
