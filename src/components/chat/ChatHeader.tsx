"use client"

import { useSidebarStore } from "@/hooks/sidebarStore";
import { LuPenLine, LuShare } from "react-icons/lu"
import ChatTabs from "./ChatTabs";

interface ChatHeaderProps {
    title: string
    description: string
}

export default function ChatHeader({ title, description }: ChatHeaderProps) {
    const toggleSidebar = useSidebarStore((state) => state.toggle);

    return (
        <div className="bg-noble-800 rounded-[20px]">
            <header className="border-b border-noble-700 p-5 flex items-center justify-between">
                <div className="flex items-center">
                    {/* menu toggle */}
                    <button onClick={toggleSidebar} className="mr-4 text-gray-400 md:hidden">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                    {/* project */}
                    <div>
                        <h1 className="text-xl font-bold text-white">{title}</h1>
                        <p className="text-sm font-medium text-noble-300">{description}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div
                                key={i}
                                className="w-8 h-8 rounded-full border-2 border-gray-900 bg-gradient-to-r from-purple-500 to-blue-500"
                            ></div>
                        ))}
                    </div>
                    {/* share button */}
                    <button className="h-10 w-24 flex items-center justify-center font-semibold text-sm space-x-2 text-noble-400 hover:text-noble-300">
                        <LuShare size={16} />
                        <span className="hidden sm:inline">Share</span>
                    </button>
                    {/* edit projetct */}
                    <button className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-noble-600 hover:bg-noble-500 text-noble-200">
                        <LuPenLine size={16} />
                    </button>
                </div>
            </header>

            <ChatTabs />
        </div>
    )
}
