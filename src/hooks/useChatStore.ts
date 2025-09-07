import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

interface ChatState {
    tempChatId: string;
    generateChatId: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
    tempChatId: uuidv4(),
    generateChatId: () => set({ tempChatId: uuidv4() }),
}));
