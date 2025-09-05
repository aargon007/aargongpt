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
      
      mockGetUser.mockResolvedValue(global.mockUser)
      mockPrisma.$transaction.mockImplementation(async (callback) => {
        return await callback({
          chat: {
            create: jest.fn().mockResolvedValue(global.mockChat),
          },
          message: {
            create: jest.fn().mockResolvedValue(global.mockMessage),
          },
        })
      })

      const result = await createChat({ firstMessage })

      expect(result.success).toBe(true)
      expect(result.message).toBe('Chat created successfully.')
      expect(result.data).toEqual(global.mockChat)
    })

    it('should fail to create chat without user', async () => {
      const firstMessage = 'Hello, this is my first message'
      
      mockGetUser.mockResolvedValue(null)

      const result = await createChat({ firstMessage })

      expect(result.success).toBe(false)
      expect(result.message).toBe('Missing required fields.')
    })

    it('should fail to create chat without message', async () => {
      const firstMessage = ''
      
      mockGetUser.mockResolvedValue(global.mockUser)

      const result = await createChat({ firstMessage })

      expect(result.success).toBe(false)
      expect(result.message).toBe('Missing required fields.')
    })

    it('should handle database errors', async () => {
      const firstMessage = 'Hello, this is my first message'
      
      mockGetUser.mockResolvedValue(global.mockUser)
      mockPrisma.$transaction.mockRejectedValue(new Error('Database error'))

      const result = await createChat({ firstMessage })

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

      mockPrisma.message.create.mockResolvedValue(global.mockMessage)

      const result = await saveMessage(messageData)

      expect(result.success).toBe(true)
      expect(result.message).toBe('Message saved successfully.')
      expect(mockPrisma.message.create).toHaveBeenCalledWith({
        data: messageData,
      })
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
      const mockMessages = [global.mockMessage]

      mockPrisma.message.findMany.mockResolvedValue(mockMessages)

      const result = await getChat(chatId)

      expect(result.success).toBe(true)
      expect(result.message).toBe('Chat loaded successfully.')
      expect(result.data).toEqual(mockMessages)
      expect(mockPrisma.message.findMany).toHaveBeenCalledWith({
        where: { chat_id: chatId },
        select: {
          id: true,
          content: true,
          role: true,
          createdAt: true,
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
      
      mockPrisma.message.findMany.mockRejectedValue(new Error('Database error'))

      const result = await getChat(chatId)

      expect(result.success).toBe(false)
      expect(result.message).toBe('Failed to load chat.')
      expect(result.data).toEqual([])
    })
  })
})
