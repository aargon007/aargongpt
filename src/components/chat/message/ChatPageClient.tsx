"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, memo } from "react";
import ChatPageContainer from "@/components/chat/message/ChatPageContainer";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { TMessage } from "@/types/chat";

const ChatPageClient = memo(() => {
    const params = useParams();
    const chat_id = params.chat_id as string;

    // Check cache synchronously during initial render
    const getCachedMessages = () => {
        if (typeof window === 'undefined') return null;
        const cached = sessionStorage.getItem(`chat_${chat_id}`);
        if (cached) {
            try {
                return JSON.parse(cached);
            } catch {
                return null;
            }
        }
        return null;
    };

    const cachedMessages = getCachedMessages();
    const [isLoading, setIsLoading] = useState(!cachedMessages); // No loading if cached
    const [messages, setMessages] = useState<TMessage[]>(cachedMessages || []);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadChat = async () => {
            // If we have cached messages, clear cache and skip API call
            if (cachedMessages) {
                sessionStorage.removeItem(`chat_${chat_id}`);
                return;
            }

            // Otherwise fetch from server
            try {
                const response = await fetch(`/api/chat/${chat_id}`);
                const chat = await response.json();

                if (!chat.success) {
                    setError('Chat not found');
                    return;
                }

                setMessages(chat.data);
            } catch (error) {
                console.error('Error loading chat:', error);
                setError('Failed to load chat');
            } finally {
                setIsLoading(false);
            }
        };

        loadChat();
    }, [chat_id, cachedMessages]);

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
});

ChatPageClient.displayName = 'ChatPageClient';

export default ChatPageClient;
