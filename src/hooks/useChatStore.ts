import { create } from 'zustand';

type Message = {
    id?: string;
    content: string;
    role: 'user' | 'assistant';
    created_at?: string;
};

interface ChatState {
    chatId: string | null;
    messages: Message[];
    setChatId: (id: string) => void;
    addMessage: (message: Message) => void;
    setMessages: (messages: Message[]) => void;
    clearChat: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
    chatId: null,
    messages: [],
    setChatId: (id) => set({ chatId: id }),
    addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
    setMessages: (messages) => set({ messages }),
    clearChat: () => set({ chatId: null, messages: [] }),
}));
