"use client"

import type React from "react"
import { useState } from "react"

interface Tab {
    id: string
    name: string
    icon: React.ReactNode
}

export default function ChatTabs() {
    const [activeTab, setActiveTab] = useState("aargongpt")

    const tabs: Tab[] = [
        {
            id: "aargongpt",
            name: "AargonGPT",
            icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 0L14.9282 4V12L8 16L1.07179 12V4L8 0Z"
                        fill={activeTab === "aargongpt" ? "#4FFFB0" : "currentColor"}
                    />
                </svg>
            ),
        },
        {
            id: "chat",
            name: "Chat",
            icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 0C3.6 0 0 3.1 0 7C0 10.9 3.6 14 8 14C8.4 14 8.8 14 9.1 13.9L14 16V11.6C15.2 10.4 16 8.8 16 7C16 3.1 12.4 0 8 0Z"
                        fill="currentColor"
                    />
                </svg>
            ),
        },
        {
            id: "library",
            name: "Library",
            icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 4C0 2.9 0.9 2 2 2H14C15.1 2 16 2.9 16 4V14C16 15.1 15.1 16 14 16H2C0.9 16 0 15.1 0 14V4ZM2 4V14H14V4H2Z"
                        fill="currentColor"
                    />
                    <path d="M2 0H14V2H2V0Z" fill="currentColor" />
                    <path d="M4 8H12V10H4V8Z" fill="currentColor" />
                </svg>
            ),
        },
    ]

    return (
        <div className="border-b border-gray-800">
            <div className="flex">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium ${activeTab === tab.id ? "text-green-400 border-b-2 border-green-400" : "text-gray-400 hover:text-white"
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <span className="text-lg">{tab.icon}</span>
                        <span>{tab.name}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}
