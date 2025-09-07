'use client';

import type React from 'react';
import { useCallback, useState, useEffect } from 'react';
import { LuMic, LuSend } from 'react-icons/lu';
import { AutoResizeTextarea } from '@/components/ui/AutoResizeTextarea';
import { saveMessage } from '@/services/chat.service';
import Spinner from '@/components/ui/Spinner';

type TProps = {
    chat_id: string;
    append: (message: string) => void;
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
}

const ChatInput = ({ chat_id, append, isLoading, setIsLoading }: TProps) => {
    const [input, setInput] = useState<string>("");

    // Listen for prompt selection events from the homepage
    useEffect(() => {
        const handlePromptSelected = (event: CustomEvent) => {
            const { prompt } = event.detail;
            setInput(prompt);
        };

        window.addEventListener('promptSelected', handlePromptSelected as EventListener);
        return () => {
            window.removeEventListener('promptSelected', handlePromptSelected as EventListener);
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!input.trim()) return;

        setIsLoading(true);

        if (!chat_id) {
            // First time -> create new chat
            append(input);
        } else {
            // Existing chat -> save message
            await saveMessage({ chat_id, content: input, role: 'user' });

            append(input);
        }

        setInput("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
        }
    };

    const handleChange = useCallback((v: string) => {
        setInput(v);
    }, [setInput]);

    return (
        <div className="rounded-[20px] bg-noble-800 p-6">
            <form
                onSubmit={handleSubmit}
                className="flex items-center gap-4"
            >
                <button
                    type="button"
                    className="flex h-12 w-12 items-center justify-center text-noble-400 hover:text-white"
                >
                    <LuMic size={20} />
                </button>
                <AutoResizeTextarea
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                    value={input}
                    placeholder="Enter a message"
                    className="flex-1 rounded-lg bg-noble-800 text-white placeholder-noble-500 focus:outline-hidden"
                />
                <button
                    type="submit"
                    className={`flex h-12 w-12 items-center justify-center rounded-[12px] ${input.trim()
                        ? 'bg-noble-700 text-white hover:bg-noble-700'
                        : 'bg-noble-600 text-noble-200'
                        }`}
                    disabled={!input.trim() || isLoading}
                >
                    {!isLoading && <LuSend size={20} />}
                    {isLoading && <Spinner />}
                </button>
            </form>
        </div>
    );
}

export default ChatInput
