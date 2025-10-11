"use client";

import { useEffect, useState } from "react";
import ChatPageContainer from "./ChatPageContainer";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { TMessage } from "@/types/chat";

interface ChatPageWrapperProps {
    chat_id: string;
    serverMessages: TMessage[];
}

const ChatPageWrapper = ({ chat_id, serverMessages }: ChatPageWrapperProps) => {
    const [messages, setMessages] = useState<TMessage[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if we have cached messages in session storage first
        const cached = sessionStorage.getItem(`chat_${chat_id}`);
        if (cached) {
            try {
                const cachedMessages = JSON.parse(cached);
                setMessages(cachedMessages);
                setIsLoading(false);
                // Clear the cache after using it to prevent stale data
                sessionStorage.removeItem(`chat_${chat_id}`);
                return;
            } catch (error) {
                console.error('Error parsing cached messages:', error);
            }
        }

        // If no cached data, use server messages
        setMessages(serverMessages);
        setIsLoading(false);
    }, [chat_id, serverMessages]);

    if (isLoading) {
        return (
            <div className="flex-1 flex items-center justify-center">
                <LoadingSpinner size="lg" text="Loading chat..." />
            </div>
        );
    }

    return (
        <ChatPageContainer
            chat_id={chat_id}
            initialMessages={messages}
        />
    );
};

export default ChatPageWrapper;
