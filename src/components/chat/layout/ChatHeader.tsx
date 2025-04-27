'use client';

import { useSidebarStore } from '@/hooks/sidebarStore';
import { LuPenLine, LuShare } from 'react-icons/lu';
import ChatTabs from './ChatTabs';

interface ChatHeaderProps {
    title: string;
    description: string;
}

export default function ChatHeader({ title, description }: ChatHeaderProps) {
    const toggleSidebar = useSidebarStore((state) => state.toggle);

    return (
        <div className="rounded-[20px] bg-noble-800">
            <header className="flex items-center justify-between border-b border-noble-700 p-5">
                <div className="flex items-center">
                    {/* menu toggle */}
                    <button
                        onClick={toggleSidebar}
                        className="mr-4 text-gray-400 md:hidden"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3 12H21M3 6H21M3 18H21"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                    {/* project */}
                    <div>
                        <h1 className="text-xl font-bold text-white">
                            {title}
                        </h1>
                        <p className="hidden text-sm font-medium text-noble-300 md:block">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 md:flex-row">
                    {/* share button */}
                    <button className="hidden h-10 w-24 items-center justify-center space-x-2 text-sm font-semibold text-noble-400 hover:text-noble-300 md:flex">
                        <LuShare size={16} />
                        <span className="hidden sm:inline">Share</span>
                    </button>
                    {/* edit projetct */}
                    <button className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-noble-600 text-noble-200 hover:bg-noble-500">
                        <LuPenLine size={16} />
                    </button>
                </div>
            </header>

            <ChatTabs />
        </div>
    );
}
