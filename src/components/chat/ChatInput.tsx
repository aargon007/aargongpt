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
        <div className="border-t border-gray-800 p-4">
            <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                <button type="button" className="p-2 text-gray-400 hover:text-white">
                    <LuMic size={20} />
                </button>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="You can ask me anything! I am here to help."
                    className="flex-1 bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <button
                    type="submit"
                    className={`p-2 rounded-lg ${message.trim() ? "text-white bg-green-600 hover:bg-green-700" : "text-gray-500 bg-gray-800"
                        }`}
                    disabled={!message.trim()}
                >
                    <LuSend size={20} />
                </button>
            </form>
        </div>
    )
}
