"use client";

import React from 'react';
import { useSidebarStore } from '@/hooks/sidebarStore';
import { PiSidebarSimpleBold } from 'react-icons/pi';

const SideBarButton = () => {
    const { toggle } = useSidebarStore();

    return (
        <button onClick={toggle} className="aspect-square p-2 flex items-center justify-center">
            <PiSidebarSimpleBold size={24} />
        </button>
    );
};

export default SideBarButton;