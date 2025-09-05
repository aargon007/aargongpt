import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

// Mock dependencies first
jest.mock('@/services/chat.service')
jest.mock('@/lib/gettoken')
jest.mock('next/headers', () => ({
  cookies: jest.fn(() => ({
    get: jest.fn(() => ({ value: 'mock-token' })),
  })),
}))

import ChatInput from '@/components/layout/ChatInput'
import { createChat, saveMessage } from '@/services/chat.service'
import gettoken from '@/lib/gettoken'

// Get the mocked functions
const mockCreateChat = jest.mocked(createChat)
const mockSaveMessage = jest.mocked(saveMessage)
const mockGettoken = jest.mocked(gettoken)

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

    // Setup mock return values
    mockGettoken.mockResolvedValue({
      user: {
        id: 'test-user-id',
        email: 'test@example.com',
        first_name: 'Test',
        last_name: 'User',
        password: 'hashed-password',
        image: '',
        created_at: new Date(),
        updated_at: new Date(),
      }
    })
    mockCreateChat.mockResolvedValue({
      success: true,
      message: 'Chat created',
      data: { id: 'new-chat-id' }
    })
    mockSaveMessage.mockResolvedValue({
      success: true,
      message: 'Message saved',
      data: {}
    })
  })

  it('renders input form correctly', () => {
    render(<ChatInput {...defaultProps} />)

    expect(screen.getByPlaceholderText('Enter a message')).toBeInTheDocument()
    const submitButtons = screen.getAllByRole('button')
    const submitButton = submitButtons.find(button => button.getAttribute('type') === 'submit')
    expect(submitButton).toBeInTheDocument()
  })

  it('creates new chat when no chat_id provided', async () => {
    const user = userEvent.setup()

    render(<ChatInput {...defaultProps} />)

    const input = screen.getByPlaceholderText('Enter a message')
    const submitButtons = screen.getAllByRole('button')
    const submitButton = submitButtons.find(button => button.getAttribute('type') === 'submit')!

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

    render(<ChatInput {...propsWithChatId} />)

    const input = screen.getByPlaceholderText('Enter a message')
    const submitButtons = screen.getAllByRole('button')
    const submitButton = submitButtons.find(button => button.getAttribute('type') === 'submit')!

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

    const submitButtons = screen.getAllByRole('button')
    const submitButton = submitButtons.find(button => button.getAttribute('type') === 'submit')!

    await user.click(submitButton)

    expect(mockCreateChat).not.toHaveBeenCalled()
    expect(mockSaveMessage).not.toHaveBeenCalled()
  })

  it('clears input after successful submission', async () => {
    const user = userEvent.setup()

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

    const submitButtons = screen.getAllByRole('button')
    const submitButton = submitButtons.find(button => button.getAttribute('type') === 'submit')!
    expect(submitButton).toBeDisabled()
  })

  it('disables submit button when input is empty', () => {
    render(<ChatInput {...defaultProps} />)

    const submitButtons = screen.getAllByRole('button')
    const submitButton = submitButtons.find(button => button.getAttribute('type') === 'submit')!
    expect(submitButton).toBeDisabled()
  })
})
