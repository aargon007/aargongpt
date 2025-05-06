'use client';

import { useSidebarStore } from '@/hooks/sidebarStore';
import Link from 'next/link';
import { LuPenLine } from 'react-icons/lu';

export default function ChatHeader() {
    const toggleSidebar = useSidebarStore((state) => state.toggle);

    return (
        <header className="rounded-[20px] bg-noble-800 md:hidden flex items-center justify-between border-b border-noble-700 px-5 py-3 mb-2">
            <div className="flex items-center">
                <button
                    onClick={toggleSidebar}
                    className="mr-4 text-noble-300"
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
            </div>

            <div className="flex flex-col items-center gap-4 md:flex-row">
                <Link href='/chat' className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-noble-600 text-noble-200 hover:bg-noble-500">
                    <LuPenLine size={16} />
                </Link>
            </div>
        </header>
    );
}
