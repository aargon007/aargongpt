import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { jest, describe, it, beforeEach, expect } from '@jest/globals'
import '@testing-library/jest-dom/jest-globals'
import ChatInput from '@/components/layout/ChatInput'
import { createChat, saveMessage } from '@/services/chat.service'

// Mock dependencies
jest.mock('@/services/chat.service')
jest.mock('@/components/ui/AutoResizeTextarea', () => {
  return {
    AutoResizeTextarea: ({ onChange, onKeyDown, value, placeholder, className, ...props }: any) => (
      <textarea
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        value={value}
        placeholder={placeholder}
        className={className}
        {...props}
      />
    ),
  }
})

const mockCreateChat = createChat as jest.MockedFunction<typeof createChat>
const mockSaveMessage = saveMessage as jest.MockedFunction<typeof saveMessage>
const mockPush = jest.fn()

// Mock useRouter
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}))

describe('ChatInput', () => {
  const defaultProps = {
    chat_id: '',
    append: jest.fn(),
    isLoading: false,
    setIsLoading: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders input form correctly', () => {
    render(<ChatInput {...defaultProps} />)

    expect(screen.getByPlaceholderText('Enter a message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('creates new chat when no chat_id provided', async () => {
    const user = userEvent.setup()
    const mockResponse = {
      success: true,
      message: 'Chat created',
      data: { id: 'new-chat-id' }
    }

    mockCreateChat.mockResolvedValue(mockResponse)

    render(<ChatInput {...defaultProps} />)

    const input = screen.getByPlaceholderText('Enter a message')
    const submitButton = screen.getByRole('button', { name: /send/i })

    await user.type(input, 'Hello, this is a new chat')
    await user.click(submitButton)

    expect(mockCreateChat).toHaveBeenCalledWith({
      firstMessage: 'Hello, this is a new chat'
    })
    expect(mockPush).toHaveBeenCalledWith('/chat/new-chat-id')
  })

  it('saves message to existing chat', async () => {
    const user = userEvent.setup()
    const propsWithChatId = { ...defaultProps, chat_id: 'existing-chat-id' }

    mockSaveMessage.mockResolvedValue({
      success: true,
      message: 'Message saved',
      data: {}
    })

    render(<ChatInput {...propsWithChatId} />)

    const input = screen.getByPlaceholderText('Enter a message')
    const submitButton = screen.getByRole('button', { name: /send/i })

    await user.type(input, 'This is a message to existing chat')
    await user.click(submitButton)

    expect(mockSaveMessage).toHaveBeenCalledWith({
      chat_id: 'existing-chat-id',
      content: 'This is a message to existing chat',
      role: 'user'
    })
    expect(defaultProps.append).toHaveBeenCalledWith({
      content: 'This is a message to existing chat',
      role: 'user'
    })
  })

  it('handles Enter key submission', async () => {
    const user = userEvent.setup()
    const mockResponse = {
      success: true,
      message: 'Chat created',
      data: { id: 'new-chat-id' }
    }

    mockCreateChat.mockResolvedValue(mockResponse)

    render(<ChatInput {...defaultProps} />)

    const input = screen.getByPlaceholderText('Enter a message')

    await user.type(input, 'Hello world')
    await user.keyboard('{Enter}')

    expect(mockCreateChat).toHaveBeenCalledWith({
      firstMessage: 'Hello world'
    })
  })

  it('prevents submission with Shift+Enter', async () => {
    const user = userEvent.setup()

    render(<ChatInput {...defaultProps} />)

    const input = screen.getByPlaceholderText('Enter a message')

    await user.type(input, 'Hello world')
    await user.keyboard('{Shift>}{Enter}{/Shift}')

    expect(mockCreateChat).not.toHaveBeenCalled()
  })

  it('does not submit empty messages', async () => {
    const user = userEvent.setup()

    render(<ChatInput {...defaultProps} />)

    const submitButton = screen.getByRole('button', { name: /send/i })

    await user.click(submitButton)

    expect(mockCreateChat).not.toHaveBeenCalled()
    expect(mockSaveMessage).not.toHaveBeenCalled()
  })

  it('clears input after successful submission', async () => {
    const user = userEvent.setup()
    const mockResponse = {
      success: true,
      message: 'Chat created',
      data: { id: 'new-chat-id' }
    }

    mockCreateChat.mockResolvedValue(mockResponse)

    render(<ChatInput {...defaultProps} />)

    const input = screen.getByPlaceholderText('Enter a message') as HTMLTextAreaElement

    await user.type(input, 'Test message')
    expect(input.value).toBe('Test message')

    await user.keyboard('{Enter}')

    await waitFor(() => {
      expect(input.value).toBe('')
    })
  })

  it('listens for prompt selection events', async () => {
    render(<ChatInput {...defaultProps} />)

    const input = screen.getByPlaceholderText('Enter a message') as HTMLTextAreaElement

    // Simulate prompt selection event
    const promptEvent = new CustomEvent('promptSelected', {
      detail: { prompt: 'Selected prompt text' }
    })

    window.dispatchEvent(promptEvent)

    await waitFor(() => {
      expect(input.value).toBe('Selected prompt text')
    })
  })

  it('shows loading state correctly', () => {
    const loadingProps = { ...defaultProps, isLoading: true }

    render(<ChatInput {...loadingProps} />)

    const submitButton = screen.getByRole('button', { name: /send/i })
    expect(submitButton).toBeDisabled()
  })

  it('disables submit button when input is empty', () => {
    render(<ChatInput {...defaultProps} />)

    const submitButton = screen.getByRole('button', { name: /send/i })
    expect(submitButton).toBeDisabled()
  })
})
