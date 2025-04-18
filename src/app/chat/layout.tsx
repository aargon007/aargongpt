import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "AargonGPT - Chat",
    description: "AI-powered collaboration platform",
}

export default function ChatLayout({children,}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="h-screen overflow-hidden w-full bg-noble-700 p-3 rounded-[24px]">
            {children}
        </div>
    )
}
