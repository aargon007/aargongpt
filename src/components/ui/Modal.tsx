"use client"

import type React from "react"

import { useEffect, useRef, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LuX } from "react-icons/lu"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    children: ReactNode
    description?: string
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full"
}

export default function Modal({ isOpen, onClose, title, children, description, maxWidth = "md" }: ModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null)
    const modalRef = useRef<HTMLDivElement>(null)

    // Close on escape key press
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [isOpen, onClose])

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    // Handle click outside to close
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (overlayRef.current === e.target) {
            onClose()
        }
    }

    const maxWidthClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        full: "max-w-full",
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        ref={overlayRef}
                        className="fixed inset-0 bg-noble-700/80 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={handleOverlayClick}
                    />

                    {/* Modal */}
                    <motion.div
                        ref={modalRef}
                        className={`relative z-10 w-full ${maxWidthClasses[maxWidth]} rounded-2xl bg-[#1A1D21F5] border border-[#FFFFFF14] shadow-xl overflow-hidden`}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-10">
                            <div>
                                <h2 className="text-xl font-semibold text-white">
                                    {title}
                                </h2>
                                {description && <p className="mt-1 text-sm text-noble-300">{description}</p>}
                            </div>
                            <button
                                onClick={onClose}
                                className="rounded-full p-1.5 text-noble-400 hover:text-white hover:bg-noble-700 transition-colors"
                                aria-label="Close"
                            >
                                <LuX size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="px-10 pb-10">
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
