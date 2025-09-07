import { createChat, saveMessage, getChat } from '@/services/chat.service'
import prisma from '@/lib/prisma'
import { getUser } from '@/services/user.service'

// Mock dependencies
jest.mock('@/lib/prisma')
jest.mock('@/services/user.service')

const mockPrisma = prisma as jest.Mocked<typeof prisma>
const mockGetUser = getUser as jest.MockedFunction<typeof getUser>

describe('Chat Service', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('createChat', () => {
    it('should create chat successfully', async () => {
      const firstMessage = 'Hello, this is my first message'
      const chat_id = `test-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`

      mockGetUser.mockResolvedValue((global as any).mockUser)
      mockPrisma.$transaction.mockImplementation(async (callback: any) => {
        return await callback({
          chat: {
            create: jest.fn().mockResolvedValue({ ...(global as any).mockChat, id: chat_id }),
          },
          message: {
            create: jest.fn().mockResolvedValue((global as any).mockMessage),
          },
          messagePart: {
            create: jest.fn().mockResolvedValue((global as any).mockMessagePart),
          },
        } as any)
      })

      const result = await createChat({ firstMessage, chat_id })

      expect(result.success).toBe(true)
      expect(result.message).toBe('Chat created successfully.')
      expect(result.data).toEqual({ ...(global as any).mockChat, id: chat_id })
    })

    it('should fail to create chat without user', async () => {
      const firstMessage = 'Hello, this is my first message'
      const chat_id = `test-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`

      mockGetUser.mockResolvedValue(null)

      const result = await createChat({ firstMessage, chat_id })

      expect(result.success).toBe(false)
      expect(result.message).toBe('Missing required fields.')
    })

    it('should fail to create chat without message', async () => {
      const firstMessage = ''
      const chat_id = `test-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`

      mockGetUser.mockResolvedValue((global as any).mockUser)

      const result = await createChat({ firstMessage, chat_id })

      expect(result.success).toBe(false)
      expect(result.message).toBe('Missing required fields.')
    })

    it('should handle database errors', async () => {
      const firstMessage = 'Hello, this is my first message'
      const chat_id = `test-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`

      mockGetUser.mockResolvedValue((global as any).mockUser)
      mockPrisma.$transaction.mockRejectedValue(new Error('Database error'))

      const result = await createChat({ firstMessage, chat_id })

      expect(result.success).toBe(false)
      expect(result.message).toBe('Failed to create chat.')
    })
  })

  describe('saveMessage', () => {
    it('should save message successfully', async () => {
      const messageData = {
        chat_id: 'test-chat-id',
        content: 'Test message',
        role: 'user' as const,
      }

      mockPrisma.$transaction.mockImplementation(async (callback: any) => {
        return await callback({
          message: {
            create: jest.fn().mockResolvedValue((global as any).mockMessage),
          },
          messagePart: {
            create: jest.fn().mockResolvedValue((global as any).mockMessagePart),
          },
        } as any)
      })

      const result = await saveMessage(messageData)

      expect(result.success).toBe(true)
      expect(result.message).toBe('Message saved successfully.')
    })

    it('should fail to save message without content', async () => {
      const messageData = {
        chat_id: 'test-chat-id',
        content: '',
        role: 'user' as const,
      }

      const result = await saveMessage(messageData)

      expect(result.success).toBe(false)
      expect(result.message).toBe('Missing required fields.')
    })
  })

  describe('getChat', () => {
    it('should get chat messages successfully', async () => {
      const chatId = 'test-chat-id'
      const mockMessages = [(global as any).mockMessage]

        ; (mockPrisma.message.findMany as jest.Mock).mockResolvedValue(mockMessages)

      const result = await getChat(chatId)

      expect(result.success).toBe(true)
      expect(result.message).toBe('Chat loaded successfully.')
      expect(result.data).toEqual(mockMessages)
      expect(mockPrisma.message.findMany).toHaveBeenCalledWith({
        where: { chat_id: chatId },
        include: {
          parts: {
            orderBy: { createdAt: 'asc' }
          }
        },
        orderBy: { createdAt: 'asc' },
      })
    })

    it('should fail to get chat without chat_id', async () => {
      const result = await getChat('')

      expect(result.success).toBe(false)
      expect(result.message).toBe('Chat ID is required.')
      expect(result.data).toEqual([])
    })

    it('should handle database errors', async () => {
      const chatId = 'test-chat-id'

        ; (mockPrisma.message.findMany as jest.Mock).mockRejectedValue(new Error('Database error'))

      const result = await getChat(chatId)

      expect(result.success).toBe(false)
      expect(result.message).toBe('Failed to load chat.')
      expect(result.data).toEqual([])
    })
  })
})
