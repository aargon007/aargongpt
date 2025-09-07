import { renderHook, act } from '@testing-library/react';
import { useChatStore } from '@/hooks/useChatStore';

// Mock uuid
jest.mock('uuid', () => ({
    v4: jest.fn(() => 'mocked-uuid-v4'),
}));

describe('useChatStore', () => {
    beforeEach(() => {
        // Reset the store state before each test
        useChatStore.setState({ tempChatId: 'mocked-uuid-v4' });
    });

    it('should initialize with a tempChatId', () => {
        const { result } = renderHook(() => useChatStore());

        expect(result.current.tempChatId).toBe('mocked-uuid-v4');
        expect(typeof result.current.generateChatId).toBe('function');
    });

    it('should generate a new chat ID when generateChatId is called', () => {
        const { result } = renderHook(() => useChatStore());

        // Mock uuid to return a different value for the second call
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const mockUuid = require('uuid').v4;
        mockUuid.mockReturnValueOnce('new-mocked-uuid-v4');

        act(() => {
            result.current.generateChatId();
        });

        expect(result.current.tempChatId).toBe('new-mocked-uuid-v4');
    });

    it('should maintain state across multiple hook instances', () => {
        const { result: result1 } = renderHook(() => useChatStore());
        const { result: result2 } = renderHook(() => useChatStore());

        expect(result1.current.tempChatId).toBe(result2.current.tempChatId);

        // Mock uuid for the next generation
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const mockUuid = require('uuid').v4;
        mockUuid.mockReturnValueOnce('shared-uuid');

        act(() => {
            result1.current.generateChatId();
        });

        // Both instances should have the same updated value
        expect(result1.current.tempChatId).toBe('shared-uuid');
        expect(result2.current.tempChatId).toBe('shared-uuid');
    });

    it('should generate unique IDs on multiple calls', () => {
        const { result } = renderHook(() => useChatStore());

        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const mockUuid = require('uuid').v4;
        mockUuid
            .mockReturnValueOnce('uuid-1')
            .mockReturnValueOnce('uuid-2')
            .mockReturnValueOnce('uuid-3');

        act(() => {
            result.current.generateChatId();
        });
        expect(result.current.tempChatId).toBe('uuid-1');

        act(() => {
            result.current.generateChatId();
        });
        expect(result.current.tempChatId).toBe('uuid-2');

        act(() => {
            result.current.generateChatId();
        });
        expect(result.current.tempChatId).toBe('uuid-3');
    });
});
