"use client"

import { LuPenLine, LuShare } from "react-icons/lu"

interface ChatHeaderProps {
    title: string
    description: string
    onMenuClick: () => void
}

export default function ChatHeader({ title, description, onMenuClick }: ChatHeaderProps) {
    return (
        <header className="border-b border-gray-800 p-4 flex items-center justify-between">
            <div className="flex items-center">
                <button onClick={onMenuClick} className="mr-4 text-gray-400 md:hidden">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
                <div>
                    <h1 className="text-xl font-semibold text-white">{title}</h1>
                    <p className="text-sm text-gray-400">{description}</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div
                            key={i}
                            className="w-8 h-8 rounded-full border-2 border-gray-900 bg-gradient-to-r from-purple-500 to-blue-500"
                        ></div>
                    ))}
                </div>
                <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
                    <LuShare size={16} />
                    <span className="hidden sm:inline">Share</span>
                </button>
                <button className="text-gray-400 hover:text-white">
                    <LuPenLine size={16} />
                </button>
            </div>
        </header>
    )
}
