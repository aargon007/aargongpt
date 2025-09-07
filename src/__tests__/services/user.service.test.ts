import { loginUser, createUser, getUser } from '@/services/user.service'

// TypeScript declarations for global mocks
declare global {
  var mockUser: any
  var mockChat: any
  var mockMessage: any
  var mockMessagePart: any
}

// Mock dependencies
jest.mock('@/lib/prisma', () => ({
  __esModule: true,
  default: {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
    }
  }
}))

jest.mock('bcrypt', () => ({
  compare: jest.fn(),
  hash: jest.fn(),
}))

jest.mock('@/lib/jwt', () => ({
  createToken: jest.fn(),
}))

jest.mock('next/headers', () => ({
  cookies: jest.fn(() => ({
    set: jest.fn(),
    get: jest.fn(),
  })),
}))

jest.mock('@/lib/gettoken', () => ({
  __esModule: true,
  default: jest.fn(),
}))

// Get the mocked functions
import prisma from '@/lib/prisma'
import { compare, hash } from 'bcrypt'
import { createToken } from '@/lib/jwt'
import getToken from '@/lib/gettoken'

const mockPrisma = prisma as any
const mockCompare = compare as jest.MockedFunction<any>
const mockHash = hash as jest.MockedFunction<any>
const mockCreateToken = createToken as jest.MockedFunction<any>
const mockGetToken = getToken as jest.MockedFunction<any>

describe('User Service', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('loginUser', () => {
    it('should login user successfully with valid credentials', async () => {
      const formData = new FormData()
      formData.append('email', 'test@example.com')
      formData.append('password', 'password123')

      mockPrisma.user.findUnique.mockResolvedValue(global.mockUser)
      mockCompare.mockResolvedValue(true)
      mockCreateToken.mockReturnValue('mock-token')

      const result = await loginUser(formData)

      expect(result.success).toBe(true)
      expect(result.message).toBe('Login successful.')
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

    it('should fail login with invalid email', async () => {
      const formData = new FormData()
      formData.append('email', 'nonexistent@example.com')
      formData.append('password', 'password123')

      mockPrisma.user.findUnique.mockResolvedValue(null)

      const result = await loginUser(formData)

      expect(result.success).toBe(false)
      expect(result.message).toBe('User not found.')
    })

    it('should fail login with invalid password', async () => {
      const formData = new FormData()
      formData.append('email', 'test@example.com')
      formData.append('password', 'wrongpassword')

      mockPrisma.user.findUnique.mockResolvedValue(global.mockUser)
      mockCompare.mockResolvedValue(false)

      const result = await loginUser(formData)

      expect(result.success).toBe(false)
      expect(result.message).toBe('Invalid password.')
    })

    it('should fail login with missing credentials', async () => {
      const formData = new FormData()
      formData.append('email', '')
      formData.append('password', '')

      const result = await loginUser(formData)

      expect(result.success).toBe(false)
      expect(result.message).toBe('Email and password are required.')
    })
  })

  describe('createUser', () => {
    it('should create user successfully', async () => {
      const formData = new FormData()
      formData.append('firstName', 'John')
      formData.append('lastName', 'Doe')
      formData.append('email', 'john@example.com')
      formData.append('password', 'password123')

      mockPrisma.user.findUnique.mockResolvedValue(null) // No existing user
      mockHash.mockResolvedValue('hashedpassword')
      mockPrisma.user.create.mockResolvedValue(global.mockUser)
      mockCreateToken.mockReturnValue('mock-token')

      const result = await createUser(formData)

      expect(result.success).toBe(true)
      expect(mockPrisma.user.create).toHaveBeenCalledWith({
        data: {
          first_name: 'John',
          last_name: 'Doe',
          email: 'john@example.com',
          password: 'hashedpassword',
        },
      })
    })

    it('should fail to create user with existing email', async () => {
      const formData = new FormData()
      formData.append('firstName', 'John')
      formData.append('lastName', 'Doe')
      formData.append('email', 'existing@example.com')
      formData.append('password', 'password123')

      mockPrisma.user.findUnique.mockResolvedValue(global.mockUser)

      const result = await createUser(formData)

      expect(result.success).toBe(false)
      expect(result.message).toBe('Email already in use. Please log in or use another.')
    })
  })

  describe('getUser', () => {
    it('should get user successfully', async () => {
      mockGetToken.mockResolvedValue({ id: 'test-user-id' })
      mockPrisma.user.findUnique.mockResolvedValue(global.mockUser)

      const result = await getUser()

      expect(result).toEqual(global.mockUser)
      expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
        where: { id: 'test-user-id' },
        select: {
          id: true,
          email: true,
          first_name: true,
          last_name: true,
          image: true,
          created_at: true,
          updated_at: true,
        }
      })
    })

    it('should return null when no token', async () => {
      mockGetToken.mockResolvedValue(null)

      const result = await getUser()

      expect(result).toBeNull()
    })
  })
})
