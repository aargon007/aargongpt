'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BiEdit, BiPlusCircle } from 'react-icons/bi';
import { RiArrowDownSLine } from 'react-icons/ri';
import { IoChatboxOutline } from "react-icons/io5";
import { LuCreditCard, LuSettings } from 'react-icons/lu';
import { useSidebarStore } from '@/hooks/sidebarStore';
import { useModalStore } from '@/hooks/modalStore';
import Button from '@/components/ui/Button';
import SettingsModal from '../chat/SettingsModal';
import { cn } from '@/utils/cn';
import AddProjectModal from '../projects/AddProjectModal';
import { Project, User } from '@prisma/client';

export default function Sidebar({ user, projects }: { user: User; projects: Project[] }) {
    const { isOpen, close, toggle } = useSidebarStore();
    const { openModal } = useModalStore((state) => state);
    const [isMounted, setIsMounted] = useState(false);

    // Handle escape key to close sidebar on mobile
    useEffect(() => {
        setIsMounted(true);

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [close]);

    // Handle body scroll lock when sidebar is open on mobile
    useEffect(() => {
        if (!isMounted) return;

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen, isMounted]);

    return (
        <>
            {/* Backdrop overlay for mobile */}
            <div
                className={cn(
                    "bg-noble-900/80 fixed inset-0 z-40 backdrop-blur-sm transition-opacity duration-300 md:hidden",
                    isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
                )}
                onClick={close}
                aria-hidden="true"
            />

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed left-0 top-0 z-50 flex h-full w-64 flex-col overflow-hidden bg-noble-800 transition-transform duration-300 ease-in-out md:sticky md:z-0 md:w-80",
                    isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
                    "shadow-xl md:rounded-[20px] md:shadow-none"
                )}
            >
                {/* top section */}
                <div className="flex items-center justify-between border-b border-noble-700 p-5">
                    <div className='flex gap-4'>
                        <h2 className="mb-1 font-semibold text-white">
                            AargonGPT
                        </h2>
                        <button className="text-xl text-noble-400 hover:text-white">
                            <RiArrowDownSLine />
                        </button>
                    </div>

                    <Link href="/chat" className="ml-auto rounded bg-[url('/gradient.png')] bg-cover bg-center bg-no-repeat px-3 py-1 text-xs text-noble-30">
                        <BiEdit
                            size={18}
                            className="text-noble-100"
                        />
                    </Link>
                </div>

                {/* General section */}
                <div className="border-b border-noble-700 px-2 py-5">
                    <h3 className="mb-5 pl-3 text-xs font-semibold text-noble-400">
                        GENERAL
                    </h3>
                    <div className="space-y-2">
                        <Link href="/chat/history" className="flex h-[48px] w-full items-center justify-center gap-4 rounded-[8px] bg-cover bg-center bg-no-repeat px-4 text-sm font-semibold text-noble-100 hover:bg-[url('/gradient.png')]">
                            <IoChatboxOutline size={18} className="text-noble-400" />
                            <span>All Chats</span>
                            <span className="ml-auto rounded bg-[url('/gradient.png')] bg-cover bg-center bg-no-repeat px-2 py-1 text-xs text-noble-300">
                                ⌘ C
                            </span>
                        </Link>

                        <Button>
                            <LuCreditCard
                                size={18}
                                className="text-noble-400"
                            />
                            <span className="mr-auto">Billing</span>
                        </Button>
                    </div>
                </div>

                {/* Projects section */}
                <div className="flex-1 overflow-y-auto px-2 py-5">
                    <h3 className="mb-5 pl-3 text-xs font-semibold text-noble-400">
                        PROJECTS
                    </h3>
                    <nav className="space-y-2">
                        {projects?.map((project) => (
                            <Button key={project?.id}>
                                <div className='h-5 w-5 rounded' style={{ backgroundColor: project?.color }} />
                                <span className="mr-auto">
                                    {project?.name}
                                </span>
                            </Button>
                        ))}

                        <Button onClick={() => openModal('profile')}>
                            <BiPlusCircle
                                size={18}
                                className="text-noble-400"
                            />
                            <span className="mr-auto text-noble-400">
                                Add new project
                            </span>
                        </Button>
                    </nav>
                </div>

                {/* User profile */}
                <div className="m-2 flex h-16 items-center justify-between rounded-[16px] bg-[url('/gradient.png')] bg-cover bg-center bg-no-repeat p-4">
                    <div className="flex items-center space-x-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-blue-500 font-bold text-white">
                            {user?.first_name?.charAt(0)}
                        </div>
                        <div>
                            <h2 className="font-semibold text-white">
                                {user?.first_name} {user?.last_name ?? ''}
                            </h2>
                            <p className="text-xs font-medium text-stem-green-500">
                                Free
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <button
                            className="rounded bg-cover bg-center bg-no-repeat px-2 py-1 text-noble-400 transition-all hover:bg-[url('/gradient.png')] hover:text-noble-300"
                            onClick={() => openModal('settings')}
                        >
                            <LuSettings size={18} />
                        </button>
                    </div>
                </div>
            </aside>

            <SettingsModal user={user} />
            <AddProjectModal />
        </>
    );
}
