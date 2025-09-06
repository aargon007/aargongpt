"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import ChatInput from '../../layout/ChatInput';
import MessageCard from './MessageCard';
import { Message } from '@prisma/client';

const ChatPageContainer = ({ chat_id, initialMessages }: { chat_id: string; initialMessages: Message[]; }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { messages, sendMessage, regenerate } = useChat({
        messages:
            initialMessages?.map((msg) => ({
                id: msg.id,
                role: msg.role as "user" | "assistant",
                parts: [{ type: 'text', text: msg.content }],
            })) || [],
    });

    console.log(messages);


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