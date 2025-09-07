"use client";

import { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { useRouter } from 'next/navigation';
import ChatInput from '@/components/layout/ChatInput';
import { createChat } from '@/services/chat.service';
import InnovationPack from '@/components/chat/home/InnovationPack';
import MessageCard from '@/components/chat/message/MessageCard';
import { useChatStore } from '@/hooks/useChatStore';

const ChatHome = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { tempChatId, generateChatId } = useChatStore();
    const router = useRouter();

    const { sendMessage, messages } = useChat({
        experimental_throttle: 50,
        id: tempChatId,
        onFinish() {
            setIsLoading(false);
            router.push(`/chat/${tempChatId}`);
            // generate a new chat id for the next message
            // generateChatId();
        }
    });

    const handleAppend = async (message: string) => {
        sendMessage({
            role: 'user',
            parts: [{ type: 'text', text: message }]
        });
        await createChat({ firstMessage: message, chat_id: tempChatId });
    };

    return (
        <>
            {messages.length > 0 ? (
                <div className="flex-1 overflow-y-auto space-y-4 pb-32 md:px-20">
                    {messages?.map((message) => (
                        <MessageCard key={message?.id} message={message} />
                    ))}
                </div>
            ) : (
                <div className="flex-1 overflow-y-auto text-white">
                    <InnovationPack />
                </div>
            )}

            <ChatInput
                chat_id={tempChatId}
                append={handleAppend}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
        </>
    );
};

export default ChatHome;
