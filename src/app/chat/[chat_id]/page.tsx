import ChatPageClient from "@/components/chat/message/ChatPageClient";
import ChatHeader from "@/components/layout/ChatHeader";

const ChatPage = () => {
    return (
        <>
            <ChatHeader />
            <ChatPageClient />
        </>
    );
};

export default ChatPage;