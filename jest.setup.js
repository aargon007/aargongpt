import '@testing-library/jest-dom';

// Mock Next.js router
jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            push: jest.fn(),
            replace: jest.fn(),
            prefetch: jest.fn(),
            back: jest.fn(),
            forward: jest.fn(),
            refresh: jest.fn(),
        };
    },
    useSearchParams() {
        return new URLSearchParams();
    },
    usePathname() {
        return '';
    },
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
        button: ({ children, ...props }) => (
            <button {...props}>{children}</button>
        ),
        form: ({ children, ...props }) => <form {...props}>{children}</form>,
        span: ({ children, ...props }) => <span {...props}>{children}</span>,
    },
    AnimatePresence: ({ children }) => children,
}));

// Mock Prisma - will be mocked in individual test files as needed

// Mock environment variables
process.env.TOKEN_SECRET = 'test-secret';
process.env.SALT_ROUND = '10';
process.env.EXPIRES_IN = '2592000';

// Global test utilities
global.mockUser = {
    id: 'test-user-id',
    email: 'test@example.com',
    first_name: 'Test',
    last_name: 'User',
    password: 'hashedpassword',
    image: '/avatar.png',
    created_at: new Date(),
    updated_at: new Date(),
};

global.mockChat = {
    id: 'test-chat-id',
    title: 'Test Chat',
    description: 'Test Description',
    user_id: 'test-user-id',
    created_at: new Date(),
    updated_at: new Date(),
};

global.mockMessage = {
    id: 'test-message-id',
    content: 'Test message content',
    role: 'user',
    chat_id: 'test-chat-id',
    createdAt: new Date(),
};
