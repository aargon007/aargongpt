"use client";

import React, { useEffect, useRef } from 'react';
import { Message } from 'ai';
import { useChat } from '@ai-sdk/react';
import ChatInput from '../layout/ChatInput';
import MessageCard from './MessageCard';

const ChatPageContainer = ({ chat_id, initialMessages }: { chat_id: string; initialMessages: Message[]; }) => {
    const { messages, append, reload, status } = useChat({
        api: "/api/chat",
        initialMessages: initialMessages,
        id: chat_id
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
            // 🚀 Instead of append() — we use reload()
            void reload();
        }
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

    return (
        <>
            <div
                id="chat-container"
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto space-y-4 pb-32 md:px-20"
            >
                {messages?.map((message, index) => (
                    <MessageCard
                        key={index}
                        message={message}
                        streaming={status === 'streaming'}
                    />
                ))}
            </div>

            <ChatInput
                chat_id={chat_id}
                append={append}
                status={status}
            />
        </>
    );
};

export default ChatPageContainer;