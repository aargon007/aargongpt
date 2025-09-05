import type { Metadata } from 'next';
import type React from 'react';
import { Suspense } from 'react';

import Sidebar from '@/components/layout/Sidebar';
import SidebarSkeleton from '@/components/layout/SidebarSkeleton';
import isAuthenticated from '@/lib/isAuthenticated';
import { getUser } from '@/services/user.service';
import { getProjects } from '@/services/project.service';

export const metadata: Metadata = {
    title: 'AargonGPT - Chat',
    description: 'AI-powered collaboration platform',
};

async function SidebarWrapper() {
    const [user, projects] = await Promise.all([
        getUser(),
        getProjects(),
    ]);

    return (
        <Sidebar
            user={user!}
            projects={projects?.data || []}
        />
    );
}

const ChatLayout = ({ children, }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="flex h-dvh w-full overflow-hidden rounded-[24px] bg-noble-700 p-3">
            {/* sidebar */}
            <Suspense fallback={<SidebarSkeleton />}>
                <SidebarWrapper />
            </Suspense>

            {/* Main content */}
            <div className="flex h-full flex-1 flex-col overflow-hidden md:ml-3">
                {children}
            </div>
        </div>
    );
};

export default isAuthenticated(ChatLayout);
