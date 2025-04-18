"use client"

import type React from "react"
import { useState } from "react"
import { LuMic, LuSend } from "react-icons/lu"

export default function ChatInput() {
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (message.trim()) {
            console.log("Sending message:", message)
            setMessage("")
        }
    }

    return (
        <div className="bg-noble-800 p-6 rounded-[20px]">
            <form onSubmit={handleSubmit} className="flex items-center gap-4">
                <button type="button" className="h-12 w-12 flex items-center justify-center text-noble-400 hover:text-white">
                    <LuMic size={20} />
                </button>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="You can ask me anything! I am here to help."
                    className="flex-1 bg-noble-800 rounded-lg pr-4 py-2 text-white placeholder-noble-500 focus:outline-none"
                />
                <button
                    type="submit"
                    className={`h-12 w-12 flex items-center justify-center rounded-[12px] ${message.trim() ? "text-white bg-noble-700 hover:bg-noble-700" : "text-noble-200 bg-noble-600"
                        }`}
                    disabled={!message.trim()}
                >
                    <LuSend size={20} />
                </button>
            </form>
        </div>
    )
}
