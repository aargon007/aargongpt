import type React from "react"
import type { Metadata } from "next"
import Sidebar from "@/components/chat/layout/Sidebar";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatInput from "@/components/chat/ChatInput";
import isAuthenticated from "@/lib/isAuthenticated";
import { getUser } from "@/services/user.service";

export const metadata: Metadata = {
    title: "AargonGPT - Chat",
    description: "AI-powered collaboration platform",
}

const ChatLayout =async ({ children, }: Readonly<{ children: React.ReactNode }>) => {
    const user = await getUser();

    return (
        <div className="flex h-dvh overflow-hidden w-full bg-noble-700 p-3 rounded-[24px]">
            {/* sidebar */}
            <Sidebar user={user} />

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