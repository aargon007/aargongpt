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
            name: "Chats",
            icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 0C3.6 0 0 3.1 0 7C0 10.9 3.6 14 8 14C8.4 14 8.8 14 9.1 13.9L14 16V11.6C15.2 10.4 16 8.8 16 7C16 3.1 12.4 0 8 0Z"
                        fill="currentColor"
                    />
                </svg>
            ),
        },
    ]

    return (
        <div className="flex items-center justify-start px-6 gap-4">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={`flex items-center space-x-2 px-2 py-4 text-sm font-medium transition-all border-b-2 ${activeTab === tab.id ? "text-stem-green-500  border-stem-green-500" : "text-noble-300 hover:text-stem-green-500 border-transparent"
                        }`}
                    onClick={() => setActiveTab(tab.id)}
                >
                    <span className="text-lg">{tab.icon}</span>
                    <span>{tab.name}</span>
                </button>
            ))}
        </div>
    )
}
