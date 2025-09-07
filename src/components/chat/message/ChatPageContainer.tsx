"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import ChatInput from '../../layout/ChatInput';
import MessageCard from './MessageCard';
import { TMessage } from '@/types/chat';

const ChatPageContainer = ({ chat_id, initialMessages }: { chat_id: string; initialMessages: TMessage[]; }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { messages, sendMessage, regenerate } = useChat({
        id: chat_id,
        experimental_throttle: 50,
        messages: initialMessages,
        onFinish() {
            setIsLoading(false);
        }
    });

    // 👈 Prevent double-sending!
    const hasContinuedRef = useRef(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messages.length === 0 || hasContinuedRef.current) return;

        const lastMessage = messages[messages.length - 1];

        if (lastMessage.role === 'user') {
            // Prevent multiple triggers
            hasContinuedRef.current = true;
            setIsLoading(true);
            regenerate();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Scroll to bottom whenever messages change
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, []);

    const handleAppend = (message: string) => {
        sendMessage({
            role: 'user',
            parts: [{ type: 'text', text: message }]
        });
    };

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
};

export default ChatPageContainer;