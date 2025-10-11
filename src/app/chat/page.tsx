"use client";

import { useState, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { useRouter } from 'next/navigation';
import ChatInput from '@/components/layout/ChatInput';
import InnovationPack from '@/components/chat/home/InnovationPack';
import MessageCard from '@/components/chat/message/MessageCard';
import { createChat } from '@/services/chat.service';
import { useChatStore } from '@/hooks/useChatStore';
import ChatHeader from '@/components/layout/ChatHeader';

const ChatHome = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [shouldNavigate, setShouldNavigate] = useState(false);
    const { tempChatId } = useChatStore();
    const router = useRouter();

    const { sendMessage, messages } = useChat({
        experimental_throttle: 50,
        id: tempChatId,
        onFinish() {
            console.log('onFinish triggered, messages:', messages);
            console.log('onFinish messages length:', messages.length);
            setIsLoading(false);
            setShouldNavigate(true);
        }
    });

    // Store messages and navigate when we have complete messages and should navigate
    useEffect(() => {
        if (shouldNavigate && messages.length > 0) {
            console.log('Storing messages:', messages);
            console.log('Messages length:', messages.length);
            console.log('First message:', messages[0]);
            console.log('Last message:', messages[messages.length - 1]);
            // Add a small delay to ensure messages are fully processed
            setTimeout(() => {
                // Store messages in session storage before navigation
                if (typeof window !== 'undefined') {
                    sessionStorage.setItem(`chat_${tempChatId}`, JSON.stringify(messages));
                }
                router.push(`/chat/${tempChatId}`);
                setShouldNavigate(false);
            }, 100);
        }
    }, [shouldNavigate, messages, tempChatId, router]);

    const handleAppend = async (message: string) => {
        sendMessage({
            role: 'user',
            parts: [{ type: 'text', text: message }]
        });

        await createChat({
            firstMessage: message,
            chat_id: tempChatId
        });
    };

    return (
        <>
            <ChatHeader />

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
