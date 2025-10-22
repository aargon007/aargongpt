"use client";

import React, { useEffect, useRef, useState, memo, useCallback } from 'react';
import { useChat } from '@ai-sdk/react';
import ChatInput from '../../layout/ChatInput';
import MessageCard from './MessageCard';
import { TMessage } from '@/types/chat';

// ChatPageContainer.tsx
const ChatPageContainer = memo(({ chat_id, initialMessages }: {
    chat_id: string;
    initialMessages: TMessage[];
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const hasInitialized = useRef(false);

    const { messages,sendMessage , setMessages } = useChat({
        id: chat_id,
        experimental_throttle: 50,
        messages: initialMessages,
        onFinish() {
            setIsLoading(false);
        }
    });

    // Set initial messages once
    useEffect(() => {
        if (!hasInitialized.current && initialMessages.length > 0) {
            setMessages(initialMessages);
            hasInitialized.current = true;
        }
    }, [initialMessages, setMessages]);

    // Scroll to bottom whenever messages change
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [messages.length]);

    const handleAppend = useCallback((message: string) => {
        sendMessage({
            role: 'user',
            parts: [{ type: 'text', text: message }]
        });
    }, [sendMessage]);

    return (
        <>
            <div
                id="chat-container"
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto space-y-4 pb-32 md:px-20"
            >
                {messages?.map((message) => (
                    <MessageCard
                        key={message?.id}
                        message={message}
                    />
                ))}
            </div>

            <ChatInput
                chat_id={chat_id}
                append={handleAppend}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
            />
        </>
    );
});

ChatPageContainer.displayName = 'ChatPageContainer';

export default ChatPageContainer;