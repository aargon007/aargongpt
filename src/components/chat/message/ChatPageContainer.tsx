"use client";

import React, { useEffect, useRef } from 'react';
import { Message } from 'ai';
import { useChat } from '@ai-sdk/react';
import ChatInput from '../layout/ChatInput';

const ChatPageContainer = ({ chat_id, initialMessages }: { chat_id: string; initialMessages: Message[]; }) => {
    const { messages, input, setInput, append, reload } = useChat({
        api: "/api/chat",
        initialMessages: initialMessages,
        id: chat_id,
    });

    // 👈 Prevent double-sending!
    const hasContinuedRef = useRef(false); 

    useEffect(() => {
        if (messages.length === 0 || hasContinuedRef.current) return;

        const lastMessage = messages[messages.length - 1];

        if (lastMessage.role === 'user') {
            // Prevent multiple triggers
            hasContinuedRef.current = true; 
            // 🚀 Instead of append() — we use reload()
            void reload();
        }
    }, [messages, reload]);

    return (
        <>

            <div id="chat-container" className="flex-1 overflow-y-auto">
                {messages.map((message, index) => (
                    <div key={index} className={`chat ${message.role === 'user' ? 'chat-start' : 'chat-end'}`}>
                        <div className="chat-header">{message.role === 'user' ? 'You' : 'AI'}</div>
                        <div className="chat-bubble">{message.content}</div>
                    </div>
                ))}
            </div>

            <ChatInput
                chat_id={chat_id}
                input={input}
                setInput={setInput}
                append={append}
            />
        </>
    );
};

export default ChatPageContainer;