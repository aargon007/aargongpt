import { Chat } from "@prisma/client";
import { getChats } from "@/services/chat.service";
import { LuSearch } from "react-icons/lu";
import { PiSidebarSimpleBold } from "react-icons/pi";
import ChatCard from "@/components/history/ChatCard";

const ChatHistory = async () => {
    const chats = await getChats();

    return (
        <div className="relative min-w-0 flex-1">
            <main className='bg-noble-800 size-full rounded-[20px] shadow-lg border border-noble-600'>
                <div className="h-12 text-noble-300 flex items-center justify-start px-5 border-b border-noble-700 gap-3">
                    <button className="aspect-square p-2 flex items-center justify-center">
                        <PiSidebarSimpleBold size={24} />
                    </button>
                    <h1 className="text-base text-white font-semibold sm:tracking-tight">
                        Chats
                    </h1>
                </div>

                <div className="border-b-noble-700 flex w-full shrink-0 items-center gap-2 border-b empty:hidden h-[50px] px-4">
                    <div className="flex flex-1 flex-row items-center justify-start gap-2">
                        <form action="flex h-[22px] items-center justify-start gap-2 flex-1">
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                                    <LuSearch className="text-noble-400" size={18} />
                                </div>
                                <input
                                    className='pl-10 text-sm bg-inherit outline-none text-noble-300 placeholder:text-noble-400'
                                    placeholder="Search for a chat..."
                                    autoComplete="off"
                                />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="p-6 space-y-2 overflow-y-auto h-[calc(90vh-50px)]">
                    {chats?.data?.map((chat: Chat) => (
                        <ChatCard key={chat.id} chat={chat} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ChatHistory;