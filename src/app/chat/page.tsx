"use client";

import { useState, useEffect, useRef } from 'react';
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
    const { tempChatId, generateChatId } = useChatStore();
    const hasNavigated = useRef(false);
    const router = useRouter();

    const { sendMessage, messages } = useChat({
        experimental_throttle: 50,
        id: tempChatId,
        onFinish: () => {
            setIsLoading(false);
        }
    });

    useEffect(() => {
        generateChatId();
    }, [generateChatId]);

    // Navigate as soon as we have the user message + AI starts responding
    useEffect(() => {
        if (!hasNavigated.current && messages.length >= 2 && !isLoading) {
            hasNavigated.current = true;

            // Store current messages and navigate
            sessionStorage.setItem(`chat_${tempChatId}`, JSON.stringify(messages));
            router.push(`/chat/${tempChatId}`);
        }
    }, [messages, tempChatId, router, isLoading]);

    const handleAppend = async (message: string) => {
        setIsLoading(true);

        // Create chat in DB first
        await createChat({
            firstMessage: message,
            chat_id: tempChatId
        });

        // Then send to AI
        sendMessage({
            role: 'user',
            parts: [{ type: 'text', text: message }]
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
