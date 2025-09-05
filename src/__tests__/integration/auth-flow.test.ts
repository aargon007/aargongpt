/**
 * Integration tests for authentication flow
 * These tests verify the complete user authentication journey
 */

import { loginUser, createUser } from '@/services/user.service'
import { createChat } from '@/services/chat.service'
import { hash } from 'bcrypt'

// Mock Prisma for integration tests
jest.mock('@/lib/prisma', () => ({
  __esModule: true,
  default: {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
    chat: {
      create: jest.fn(),
    },
    message: {
      create: jest.fn(),
    },
    $transaction: jest.fn(),
  },
}))

jest.mock('next/headers', () => ({
  cookies: jest.fn(() => ({
    set: jest.fn(),
    get: jest.fn(),
  })),
}))

// Mock gettoken
jest.mock('@/lib/gettoken', () => ({
  __esModule: true,
  default: jest.fn(),
}))

import prisma from '@/lib/prisma'
const mockPrisma = jest.mocked(prisma)

describe('Authentication Flow Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Complete User Registration and Login Flow', () => {
    it('should register user, login, and create first chat', async () => {
      // Step 1: Register new user
      const registrationData = new FormData()
      registrationData.append('firstName', 'John')
      registrationData.append('lastName', 'Doe')
      registrationData.append('email', 'john.doe@example.com')
      registrationData.append('password', 'securePassword123')

      const hashedPassword = await hash('securePassword123', 10)
      const newUser = {
        id: 'user-123',
        email: 'john.doe@example.com',
        first_name: 'John',
        last_name: 'Doe',
        password: hashedPassword,
        image: '/avatar.png',
        created_at: new Date(),
        updated_at: new Date(),
      }

      // Mock user doesn't exist (for registration)
      mockPrisma.user.findUnique.mockResolvedValueOnce(null)
      // Mock user creation
      mockPrisma.user.create.mockResolvedValue(newUser)

      const registrationResult = await createUser(registrationData)

      expect(registrationResult.success).toBe(true)
      expect(mockPrisma.user.create).toHaveBeenCalledWith({
        data: {
          first_name: 'John',
          last_name: 'Doe',
          email: 'john.doe@example.com',
          password: expect.any(String),
        },
      })

      // Step 2: Login with the new user
      const loginData = new FormData()
      loginData.append('email', 'john.doe@example.com')
      loginData.append('password', 'securePassword123')

      // Mock user exists (for login)
      mockPrisma.user.findUnique.mockResolvedValueOnce(newUser)

      const loginResult = await loginUser(loginData)

      expect(loginResult.success).toBe(true)
      expect(loginResult.message).toBe('Login successful.')

      // Step 3: Create first chat after login
      const firstMessage = 'Hello, this is my first message!'
      const newChat = {
        id: 'chat-123',
        title: 'Hello, this is my first mess...',
        description: 'Hello, this is my first message!',
        user_id: 'user-123',
        created_at: new Date(),
        updated_at: new Date(),
      }

      const newMessage = {
        id: 'message-123',
        content: firstMessage,
        role: 'user',
        chat_id: 'chat-123',
        createdAt: new Date(),
      }

      // Mock transaction for chat creation
      mockPrisma.$transaction.mockImplementation(async (callback: any) => {
        return await callback({
          chat: {
            create: jest.fn().mockResolvedValue(newChat),
          },
          message: {
            create: jest.fn().mockResolvedValue(newMessage),
          },
        } as any)
      })

      // Mock getUser to return the logged-in user
      const mockGetUser = jest.fn().mockResolvedValue(newUser)
      jest.doMock('@/services/user.service', () => ({
        ...jest.requireActual('@/services/user.service'),
        getUser: mockGetUser,
      }))

      const chatResult = await createChat({ firstMessage })

      expect(chatResult.success).toBe(true)
      expect(chatResult.data).toEqual(newChat)
    })
  })

  describe('Login Performance Optimization', () => {
    it('should use optimized queries for login', async () => {
      const loginData = new FormData()
      loginData.append('email', 'test@example.com')
      loginData.append('password', 'password123')

      const user = {
        id: 'user-123',
        email: 'test@example.com',
        first_name: 'Test',
        last_name: 'User',
        password: await hash('password123', 10),
        image: '',
        created_at: new Date(),
        updated_at: new Date(),
      }

      mockPrisma.user.findUnique.mockResolvedValue(user)

      await loginUser(loginData)

      // Verify that the query uses select to optimize performance
      expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
        where: { email: 'test@example.com' },
        select: {
          id: true,
          email: true,
          password: true,
          first_name: true,
          last_name: true,
        }
      })
    })
  })

  describe('Error Handling in Auth Flow', () => {
    it('should handle database errors gracefully', async () => {
      const loginData = new FormData()
      loginData.append('email', 'test@example.com')
      loginData.append('password', 'password123')

      // Simulate database error
      mockPrisma.user.findUnique.mockRejectedValue(new Error('Database connection failed'))

      const result = await loginUser(loginData)

      expect(result.success).toBe(false)
      expect(result.message).toBe('Something went wrong. Please try again later.')
    })

    it('should validate input data', async () => {
      const invalidLoginData = new FormData()
      invalidLoginData.append('email', '')
      invalidLoginData.append('password', '')

      const result = await loginUser(invalidLoginData)

      expect(result.success).toBe(false)
      expect(result.message).toBe('Email and password are required.')
      expect(mockPrisma.user.findUnique).not.toHaveBeenCalled()
    })
  })

  describe('Security Measures', () => {
    it('should not expose sensitive user data', async () => {
      const loginData = new FormData()
      loginData.append('email', 'test@example.com')
      loginData.append('password', 'password123')

      const userWithSensitiveData = {
        id: 'user-123',
        email: 'test@example.com',
        first_name: 'Test',
        last_name: 'User',
        password: await hash('password123', 10),
        image: '',
        created_at: new Date(),
        updated_at: new Date(),
      }

      mockPrisma.user.findUnique.mockResolvedValue(userWithSensitiveData)

      const result = await loginUser(loginData)

      expect(result.success).toBe(true)
      // Verify that sensitive data is not included in the response
      expect(result).not.toHaveProperty('data.password')
      expect(result).not.toHaveProperty('data.resetToken')
      expect(result).not.toHaveProperty('data.lastLoginIp')
    })
  })
})
