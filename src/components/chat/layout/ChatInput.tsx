'use client';

import { useChat } from '@ai-sdk/react';
import type React from 'react';
import { useState } from 'react';
import { LuMic, LuSend } from 'react-icons/lu';

export default function ChatInput() {
    const {
        error,
        input,
        status,
        handleInputChange,
        handleSubmit,
        messages,
        reload,
        stop,
    } = useChat({
        onFinish(message, { usage, finishReason }) {
            console.log('Usage', usage);
            console.log('FinishReason', finishReason);
        },
    });
    const [message, setMessage] = useState('');

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            handleSubmit(e);
            console.log('Sending message:', message);
            setMessage('');
        }
    };

    console.log('Messages', messages);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        // On "Enter" key press without shift, prevent default (form submission) and submit the form
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            // Submit the form (replace with your submit logic)
            const form = e.currentTarget.form;
            if (form) {
                const formEvent = new Event('submit', {
                    bubbles: true,
                    cancelable: true,
                });
                form.dispatchEvent(formEvent);
            }
        }
    };

    return (
        <div className="rounded-[20px] bg-noble-800 p-6">
            <form
                onSubmit={handleFormSubmit}
                className="flex items-center gap-4"
            >
                <button
                    type="button"
                    className="flex h-12 w-12 items-center justify-center text-noble-400 hover:text-white"
                >
                    <LuMic size={20} />
                </button>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={2}
                    draggable={false}
                    placeholder="You can ask me anything! I am here to help."
                    className="flex-1 rounded-lg bg-noble-800 py-2 pr-4 text-white placeholder-noble-500 focus:outline-none"
                />
                <button
                    type="submit"
                    className={`flex h-12 w-12 items-center justify-center rounded-[12px] ${
                        message.trim()
                            ? 'bg-noble-700 text-white hover:bg-noble-700'
                            : 'bg-noble-600 text-noble-200'
                    }`}
                    disabled={!message.trim()}
                >
                    <LuSend size={20} />
                </button>
            </form>
        </div>
    );
}
