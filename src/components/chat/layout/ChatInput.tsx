'use client';

import type React from 'react';
import { useRouter } from 'next/navigation';
import { LuMic, LuSend } from 'react-icons/lu';
import { AutoResizeTextarea } from '@/components/ui/AutoResizeTextarea';
import { createChat, saveMessage } from '@/services/chat.service';

const ChatInput = ({ chat_id, input, setInput, append }:{chat_id: string; input: string; setInput: (input: string) => void; append: (message: { content: string; role: 'user' | 'assistant' }) => void}) => {
    const router = useRouter();

    const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!input.trim()) return;

        if (!chat_id) {
            // First time -> create new chat
            const res = await createChat({ firstMessage: input });
            router.push(`/chat/${res.data.id}`); // Redirect user
        } else {
            // Existing chat -> save message
            await saveMessage({ chat_id, content: input, role: 'user' });

            void append({ content: input, role: 'user' }); // Update local chat state
        }

        setInput("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
        }
    };

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
                    onChange={(v) => setInput(v)}
                    value={input}
                    placeholder="Enter a message"
                    className="flex-1 rounded-lg bg-noble-800 text-white placeholder-noble-500 focus:outline-none"
                />
                <button
                    type="submit"
                    className={`flex h-12 w-12 items-center justify-center rounded-[12px] ${input.trim()
                        ? 'bg-noble-700 text-white hover:bg-noble-700'
                        : 'bg-noble-600 text-noble-200'
                        }`}
                    disabled={!input.trim()}
                >
                    <LuSend size={20} />
                </button>
            </form>
        </div>
    );
}

export default ChatInput
