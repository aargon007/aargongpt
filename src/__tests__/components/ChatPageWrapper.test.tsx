/**
 * Tests for ChatPageClient component
 * Verifies session storage functionality for chat navigation
 */

import { render, screen } from '@testing-library/react'
import ChatPageClient from '@/components/chat/message/ChatPageClient'
import { TMessage } from '@/types/chat'

// Mock the ChatPageContainer
jest.mock('@/components/chat/message/ChatPageContainer', () => {
    return function MockChatPageContainer({ chat_id, initialMessages }: { chat_id: string; initialMessages: TMessage[] }) {
        return (
            <div data-testid="chat-page-container">
                <div data-testid="chat-id">{chat_id}</div>
                <div data-testid="messages-count">{initialMessages.length}</div>
                {initialMessages.map((message, index) => (
                    <div key={index} data-testid={`message-${index}`}>
                        {message.role}: {(message.parts?.[0] as any)?.text || 'No text'}
                    </div>
                ))}
            </div>
        )
    }
})

// Mock useParams
jest.mock('next/navigation', () => ({
    useParams: () => ({ chat_id: 'chat-123' })
}))

// Mock fetch
global.fetch = jest.fn()

// Mock LoadingSpinner
jest.mock('@/components/ui/LoadingSpinner', () => {
    return function MockLoadingSpinner({ text }: { text?: string }) {
        return <div data-testid="loading-spinner">{text || 'Loading...'}</div>
    }
})

describe('ChatPageClient', () => {
    const mockServerMessages: TMessage[] = [
        {
            id: 'msg-1',
            role: 'user',
            parts: [{ type: 'text', text: 'Hello' }],
            createdAt: new Date().toISOString()
        },
        {
            id: 'msg-2',
            role: 'assistant',
            parts: [{ type: 'text', text: 'Hi there!' }],
            createdAt: new Date().toISOString()
        }
    ]

    const mockCachedMessages: TMessage[] = [
        {
            id: 'msg-1',
            role: 'user',
            parts: [{ type: 'text', text: 'Hello' }],
            createdAt: new Date().toISOString()
        },
        {
            id: 'msg-2',
            role: 'assistant',
            parts: [{ type: 'text', text: 'Hi there!' }],
            createdAt: new Date().toISOString()
        },
        {
            id: 'msg-3',
            role: 'user',
            parts: [{ type: 'text', text: 'How are you?' }],
            createdAt: new Date().toISOString()
        }
    ]

    beforeEach(() => {
        // Clear session storage before each test
        sessionStorage.clear()
            // Reset fetch mock
            ; (global.fetch as jest.Mock).mockClear()
    })

    it('should use server messages when no cached messages exist', async () => {
        // Mock successful API response
        ; (global.fetch as jest.Mock).mockResolvedValueOnce({
            json: () => Promise.resolve({
                success: true,
                data: mockServerMessages
            })
        })

        render(<ChatPageClient />)

        // Wait for the component to load
        await screen.findByTestId('chat-page-container')

        expect(screen.getByTestId('chat-id')).toHaveTextContent('chat-123')
        expect(screen.getByTestId('messages-count')).toHaveTextContent('2')
        expect(screen.getByTestId('message-0')).toHaveTextContent('user: Hello')
        expect(screen.getByTestId('message-1')).toHaveTextContent('assistant: Hi there!')
    })

    it('should use cached messages when available and clear cache', async () => {
        // Set up cached messages in session storage
        sessionStorage.setItem('chat_chat-123', JSON.stringify(mockCachedMessages))

        render(<ChatPageClient />)

        // Wait for the component to load
        await screen.findByTestId('chat-page-container')

        expect(screen.getByTestId('chat-id')).toHaveTextContent('chat-123')
        expect(screen.getByTestId('messages-count')).toHaveTextContent('3')
        expect(screen.getByTestId('message-0')).toHaveTextContent('user: Hello')
        expect(screen.getByTestId('message-1')).toHaveTextContent('assistant: Hi there!')
        expect(screen.getByTestId('message-2')).toHaveTextContent('user: How are you?')

        // Verify cache was cleared
        expect(sessionStorage.getItem('chat_chat-123')).toBeNull()
    })

    it('should handle invalid cached data gracefully', async () => {
        // Set up invalid cached data
        sessionStorage.setItem('chat_chat-123', 'invalid-json')

            // Mock successful API response
            ; (global.fetch as jest.Mock).mockResolvedValueOnce({
                json: () => Promise.resolve({
                    success: true,
                    data: mockServerMessages
                })
            })

        render(<ChatPageClient />)

        // Wait for the component to load
        await screen.findByTestId('chat-page-container')

        // Should fall back to server messages
        expect(screen.getByTestId('messages-count')).toHaveTextContent('2')
        expect(screen.getByTestId('message-0')).toHaveTextContent('user: Hello')
        expect(screen.getByTestId('message-1')).toHaveTextContent('assistant: Hi there!')
    })

    it('should handle empty cached data', async () => {
        // Set up empty cached data
        sessionStorage.setItem('chat_chat-123', '[]')

        render(<ChatPageClient />)

        // Wait for the component to load
        await screen.findByTestId('chat-page-container')

        // Should use empty cached messages
        expect(screen.getByTestId('messages-count')).toHaveTextContent('0')
    })
})
