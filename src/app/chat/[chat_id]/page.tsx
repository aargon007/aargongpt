import { Suspense } from "react";
import ChatPageContainer from "@/components/chat/message/ChatPageContainer";
import ChatHeader from "@/components/layout/ChatHeader";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { getChat } from "@/services/chat.service";

async function ChatContent({ chat_id }: { chat_id: string }) {
    const chat = await getChat(chat_id);

    if (!chat.success) {
        return (
            <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-white mb-2">
                        Chat not found
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
            initialMessages={chat.data}
        />
    );
}

const ChatPage = async ({ params, }: { params: Promise<{ chat_id: string }> }) => {
    const { chat_id } = await params;

    return (
        <>
            <ChatHeader />
            <Suspense
                fallback={
                    <div className="flex-1 flex items-center justify-center">
                        <LoadingSpinner size="lg" text="Loading chat..." />
                    </div>
                }
            >
                <ChatContent chat_id={chat_id} />
            </Suspense>
        </>
    );
};

export default ChatPage;