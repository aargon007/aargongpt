import type React from "react"
import type { Metadata } from "next"
import Sidebar from "@/components/chat/Sidebar";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatInput from "@/components/chat/ChatInput";
import isAuthenticated from "@/lib/isAuthenticated";

export const metadata: Metadata = {
    title: "AargonGPT - Chat",
    description: "AI-powered collaboration platform",
}

const ChatLayout = ({ children, }: Readonly<{ children: React.ReactNode }>) => {

    return (
        <div className="flex h-screen overflow-hidden w-full bg-noble-700 p-3 rounded-[24px]">
            {/* Mobile sidebar */}
            {/* <div
                className={`fixed inset-0 z-40 md:hidden ${sidebarOpen ? "block" : "hidden"} bg-gray-950/80 backdrop-blur-sm`}
                onClick={() => setSidebarOpen(false)}
            ></div>

            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-950 border-r border-gray-800 md:hidden transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
            >
                <Sidebar />
            </div> */}

            {/* Desktop sidebar */}
            <Sidebar />

            {/* Main content */}
            <div className="flex-1 flex flex-col h-full overflow-hidden md:ml-3">
                <ChatHeader
                    title="Orbital Oddysey"
                    description="Marketing Campaign for a new TV series Launch"
                />
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
                <ChatInput />
            </div>
        </div>
    )
}

export default isAuthenticated(ChatLayout)