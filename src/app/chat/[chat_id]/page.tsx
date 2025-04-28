import ChatPageContainer from "@/components/chat/message/ChatPageContainer";
import { getChat } from "@/services/chat.service";

const ChatPage = async ({ params, }: { params: Promise<{ chat_id: string }> }) => {
    const { chat_id } = await params;
    const chat = await getChat(chat_id);

    return (
        <>
            <ChatPageContainer
                chat_id={chat_id}
                initialMessages={chat.data}
            />
        </>
    );
};

export default ChatPage;