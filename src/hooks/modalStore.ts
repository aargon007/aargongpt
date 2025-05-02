// store/modalStore.ts
import { create } from 'zustand';

type ModalType = 'settings' | 'project' | 'profile' | 'login' | string; // Add more modal types as needed

interface ModalStore {
    modals: Record<ModalType, boolean>;
    toggleModal: (modal: ModalType) => void;
    openModal: (modal: ModalType) => void;
    closeModal: (modal: ModalType) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    modals: {},

    toggleModal: (modal) =>
        set((state) => ({
            modals: {
                ...state.modals,
                [modal]: !state.modals[modal],
            },
        })),

    openModal: (modal) =>
        set((state) => ({
            modals: {
                ...state.modals,
                [modal]: true,
            },
        })),

    closeModal: (modal) =>
        set((state) => ({
            modals: {
                ...state.modals,
                [modal]: false,
            },
        })),
}));
