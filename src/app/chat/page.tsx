"use client";

import { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import InnovationPack from '@/components/chat/home/InnovationPack';
import ChatInput from '@/components/layout/ChatInput';

const ChatHome = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { sendMessage } = useChat();

    const handleAppend = (message: string) => {
        sendMessage({
            role: 'user',
            parts: [{ type: 'text', text: message }]
        });
    };

    return (
        <>
            <div className="flex-1 overflow-y-auto">
                <InnovationPack />
            </div>
            <ChatInput
                chat_id=''
                append={handleAppend}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
        </>
    );
};

export default ChatHome;
