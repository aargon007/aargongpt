"use client";

import { useChat } from '@ai-sdk/react';
import InnovationPack from '@/components/chat/home/InnovationPack';
import ChatInput from '@/components/chat/layout/ChatInput';

const ChatHome = () => {
    const { input, setInput, append } = useChat({
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
                input={input}
                setInput={setInput}
                append={append}
            />
        </>
    );
};

export default ChatHome;
