"use client";

import Link from "next/link";
import { Chat } from "@prisma/client";
import { LuTrash2 } from "react-icons/lu";
import { deleteChat } from "@/services/chat.service";

const ChatCard = ({ chat }: { chat: Chat }) => {
    const handleDelete = async (e: React.MouseEvent) => {
        e.preventDefault();

        await deleteChat(chat.id);
    };

    return (
        <Link
            href={`/chat/${chat?.id}`}
            className="block relative p-3 rounded-[12px] border border-noble-600 "
        >
            <div className="mb-2 text-lg font-semibold text-white">
                {chat?.title}
            </div>
            <p className="mb-2 text-sm text-noble-300">
                {chat?.description}
            </p>
            <p className="text-sm text-noble-300 pt-2 border-t border-noble-600">
                Updated At {chat?.updated_at?.toLocaleString()}
            </p>

            <button onClick={handleDelete} className="z-20 p-2 hover:bg-noble-600 transition-all rounded-full absolute top-2 right-2 text-red-power-600">
                <LuTrash2 size={16} />
            </button>
        </Link>
    );
};

export default ChatCard;