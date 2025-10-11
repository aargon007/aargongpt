"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ChatPageContainer from "@/components/chat/message/ChatPageContainer";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { TMessage } from "@/types/chat";
// Remove server-side import

const ChatPageClient = () => {
    const params = useParams();
    const chat_id = params.chat_id as string;

    const [messages, setMessages] = useState<TMessage[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadChat = async () => {
            try {
                // Check if we have cached messages in session storage first
                const cached = sessionStorage.getItem(`chat_${chat_id}`);
                console.log('Retrieved cached data:', cached);
                if (cached) {
                    try {
                        const cachedMessages = JSON.parse(cached);
                        console.log('Parsed cached messages:', cachedMessages);
                        setMessages(cachedMessages);
                        setIsLoading(false);
                        // Clear the cache after using it to prevent stale data
                        sessionStorage.removeItem(`chat_${chat_id}`);
                        return;
                    } catch (error) {
                        console.error('Error parsing cached messages:', error);
                    }
                }

                // If no cached data, fetch from server
                const response = await fetch(`/api/chat/${chat_id}`);
                const chat = await response.json();

                if (!chat.success) {
                    setError('Chat not found');
                    setIsLoading(false);
                    return;
                }

                setMessages(chat.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error loading chat:', error);
                setError('Failed to load chat');
                setIsLoading(false);
            }
        };

        loadChat();
    }, [chat_id]);

    if (isLoading) {
        return (
            <div className="flex-1 flex items-center justify-center">
                <LoadingSpinner size="lg" text="Loading chat..." />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-white mb-2">
                        {error}
                    </h2>
                    <p className="text-noble-300">
                        The chat you're looking for doesn't exist or has been deleted.
                    </p>
                </div>
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

export default ChatPageClient;
