"use client";

import { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import InnovationPack from '@/components/chat/home/InnovationPack';
import ChatInput from '@/components/layout/ChatInput';
import { createChat } from '@/services/chat.service';
import { useRouter } from 'next/navigation';
import MessageCard from '@/components/chat/message/MessageCard';

const ChatHome = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [chatId, setChatId] = useState<string>('');
    const router = useRouter();
    const { sendMessage, messages } = useChat({
        experimental_throttle: 50,
        onFinish() {
            setIsLoading(false);
            router.push(`/chat/${chatId}`);
            setChatId('');
        }
    });

    const handleAppend = async (message: string) => {
        const res = await createChat({ firstMessage: message });
        if (res.success) {
            setChatId(res.data.id);
        }
        sendMessage({
            role: 'user',
            parts: [{ type: 'text', text: message }]
        });
    };

    return (
        <>
            {messages.length > 0 ? (
                <div className="flex-1 overflow-y-auto space-y-4 pb-32 md:px-20">
                    {messages?.map((message) => (
                        <MessageCard
                            key={message?.id}
                            message={message}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex-1 overflow-y-auto">
                    <InnovationPack />
                </div>
            )}

            <ChatInput
                chat_id={chatId}
                append={handleAppend}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
        </>
    );
};

export default ChatHome;
