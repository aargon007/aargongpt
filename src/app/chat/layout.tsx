import ChatHeader from '@/components/chat/layout/ChatHeader';
import ChatInput from '@/components/chat/layout/ChatInput';
import Sidebar from '@/components/chat/layout/Sidebar';
import isAuthenticated from '@/lib/isAuthenticated';
import { getUser } from '@/services/user.service';
import type { Metadata } from 'next';
import type React from 'react';

export const metadata: Metadata = {
    title: 'AargonGPT - Chat',
    description: 'AI-powered collaboration platform',
};

const ChatLayout = async ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    const user = await getUser();

    return (
        <div className="flex h-dvh w-full overflow-hidden rounded-[24px] bg-noble-700 p-3">
            {/* sidebar */}
            <Sidebar user={user} />

            {/* Main content */}
            <div className="flex h-full flex-1 flex-col overflow-hidden md:ml-3">
                <ChatHeader
                    title="Orbital Oddysey"
                    description="Marketing Campaign for a new TV series Launch"
                />
                <div className="flex-1 overflow-y-auto">{children}</div>
                <ChatInput />
            </div>
        </div>
    );
};

export default isAuthenticated(ChatLayout);
