"use client";

import { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import InnovationPack from '@/components/chat/home/InnovationPack';
import ChatInput from '@/components/chat/layout/ChatInput';

const ChatHome = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { append } = useChat({
        api: "/api/chat",
        initialMessages: [],
    });

    return (
        <>
            <div className="flex-1 overflow-y-auto">
                <InnovationPack />
            </div>
            <ChatInput
                chat_id=''
                append={append}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
        </>
    );
};

export default ChatHome;
