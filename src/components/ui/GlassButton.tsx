"use client"

import { cn } from "@/utils/cn"
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react"

export interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: "default" | "primary" | "secondary" | "outline"
    size?: "sm" | "md" | "lg"
    fullWidth?: boolean
    icon?: ReactNode
    iconPosition?: "left" | "right"
    glassIntensity?: "light" | "medium" | "heavy"
}

const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
    (
        {
            children,
            className,
            variant = "default",
            size = "md",
            fullWidth = false,
            disabled = false,
            icon,
            iconPosition = "left",
            glassIntensity = "medium",
            type = "button",
            ...props
        },
        ref,
    ) => {
        // Base styles
        const baseStyles = "relative inline-flex items-center justify-center rounded-lg transition-all duration-200"

        // Size styles
        const sizeStyles = {
            sm: "text-xs px-3 py-1.5 font-medium",
            md: "text-sm px-4 py-2 font-medium",
            lg: "text-base px-5 py-2.5 font-medium",
        }

        // Glass intensity styles
        const intensityStyles = {
            light: "backdrop-blur-sm bg-gradient-to-br from-[#D7EDED40] to-[#CCEBEB00]",
            medium: "backdrop-blur-md bg-gradient-to-br from-[#D7EDED60] to-[#CCEBEB00]",
            heavy: "backdrop-blur-lg bg-gradient-to-br from-[#D7EDED80] to-[#CCEBEB00]",
        }

        // Variant styles
        const variantStyles = {
            default:
                "text-gray-800 border border-[#FFFFFF14] shadow-sm hover:shadow-md active:shadow-inner active:translate-y-[1px]",
            primary:
                "text-white border border-[#FFFFFF14] shadow-sm hover:shadow-md active:shadow-inner active:translate-y-[1px] bg-gradient-to-br from-cyan-500/80 to-cyan-600/60",
            secondary:
                "text-gray-200 border border-[#FFFFFF14] shadow-sm hover:shadow-md active:shadow-inner active:translate-y-[1px] bg-gradient-to-br from-gray-700/80 to-gray-800/60",
            outline:
                "text-gray-200 border border-[#FFFFFF30] shadow-sm hover:shadow-md active:shadow-inner active:translate-y-[1px] bg-transparent hover:bg-gradient-to-br hover:from-[#D7EDED20] hover:to-[#CCEBEB00]",
        }

        // Disabled styles
        const disabledStyles = "opacity-50 cursor-not-allowed pointer-events-none"

        // Full width style
        const fullWidthStyle = fullWidth ? "w-full" : ""

        return (
            <button
                ref={ref}
                type={type}
                disabled={disabled}
                className={cn(
                    baseStyles,
                    sizeStyles[size],
                    intensityStyles[glassIntensity],
                    variantStyles[variant],
                    fullWidthStyle,
                    disabled && disabledStyles,
                    "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-b before:from-white/10 before:to-transparent before:opacity-30 before:content-['']",
                    "after:absolute after:inset-[1px] after:rounded-[7px] after:bg-gradient-to-b after:from-white/5 after:to-transparent after:content-['']",
                    className,
                )}
                {...props}
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
                    {children}
                    {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
                </span>
            </button>
        )
    },
)

GlassButton.displayName = "GlassButton"

export default GlassButton
