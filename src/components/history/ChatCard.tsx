"use client";

import { useEffect, useRef, useState, memo } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { Chat } from "@prisma/client";
import { LuPen, LuShare2, LuTrash2 } from "react-icons/lu";
import { deleteChat } from "@/services/chat.service";
import { BsThreeDots } from "react-icons/bs";

const ChatCard = memo(({ chat }: { chat: Chat }) => {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleDelete = async (e: React.MouseEvent) => {
        e.preventDefault();

        const result = await deleteChat(chat.id);
        if (result?.success) toast.success(result.message);
    };

    useEffect(() => {
        const handleClickOutside = (event: PointerEvent) => {
            const target = event.target as Node;
            if (
                popoverRef.current?.contains(target) ||
                buttonRef.current?.contains(target)
            ) {
                return;
            }
            setIsOpen(false);
        };

        document.addEventListener("pointerdown", handleClickOutside);
        return () => {
            document.removeEventListener("pointerdown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative">
            {/* Three-dot button */}
            <button
                ref={buttonRef}
                onClick={(e) => {
                    e.preventDefault();
                    setIsOpen((prev) => !prev);
                }}
                className="hover:bg-noble-800 absolute bottom-0 right-0 z-20 h-[30px] px-2 mr-3 mb-1.5 rounded-[8px] bg-transparent transition-all"
            >
                <BsThreeDots className="text-noble-300" />
                <span className="sr-only">Open chat actions</span>
            </button>

            <Link
                href={`/chat/${chat?.id}`}
                className="block p-3 rounded-[12px] border border-noble-600 bg-noble-700 backdrop-blur-md"
            >
                <div className="mb-2 text-lg font-semibold text-white">
                    {chat?.title}
                </div>
                <p className="mb-2 text-sm text-noble-300">
                    {chat?.description}
                </p>
                <p className="text-sm text-noble-300 pt-2 border-t border-noble-600">
                    Updated {chat?.updated_at?.toLocaleString()}
                </p>
            </Link>

            {/* Popover */}
            {isOpen && (
                <div
                    ref={popoverRef}
                    className="text-noble-100 space-y-1.5 p-1.5 absolute -bottom-28 right-3 z-30 bg-noble-800 border border-noble-600 rounded-[8px] shadow-xl"
                    onClick={(e) => e.stopPropagation()} // prevent click from closing
                >
                    <button className="hover:bg-noble-600 flex h-8 w-full items-center gap-3 rounded-md pl-1.5 pr-6 text-sm transition-all">
                        <LuPen size={16} /> Rename
                    </button>
                    <button className="hover:bg-noble-600 flex h-8 w-full items-center gap-3 rounded-md px-1.5 text-sm transition-all">
                        <LuShare2 size={16} /> Assign Project
                    </button>
                    <button
                        onClick={handleDelete}
                        className="hover:bg-noble-600 flex h-8 w-full items-center gap-3 rounded-md px-1.5 text-sm text-red-power-600 transition-all"
                    >
                        <LuTrash2 size={16} /> Delete
                    </button>
                </div>
            )}
        </div>
    );
});

ChatCard.displayName = 'ChatCard';

export default ChatCard;