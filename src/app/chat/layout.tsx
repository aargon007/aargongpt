import type { Metadata } from 'next';
import type React from 'react';

import Sidebar from '@/components/layout/Sidebar';
import isAuthenticated from '@/lib/isAuthenticated';
import { getUser } from '@/services/user.service';
import { getProjects } from '@/services/project.service';

export const metadata: Metadata = {
    title: 'AargonGPT - Chat',
    description: 'AI-powered collaboration platform',
};

const ChatLayout = async ({ children, }: Readonly<{ children: React.ReactNode }>) => {
    const user = await getUser();
    const projects = await getProjects();

    return (
        <div className="flex h-dvh w-full overflow-hidden rounded-[24px] bg-noble-700 p-3">
            {/* sidebar */}
            <Sidebar
                user={user!}
                projects={projects?.data}
            />

            {/* Main content */}
            <div className="flex h-full flex-1 flex-col overflow-hidden md:ml-3">
                {/* <ChatHeader
                    title="Orbital Oddysey"
                    description="Marketing Campaign for a new TV series Launch"
                /> */}
                {children}
            </div>
        </div>
    );
};

export default isAuthenticated(ChatLayout);
