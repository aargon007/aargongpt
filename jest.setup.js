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

// Mock Prisma
jest.mock('@/lib/prisma', () => ({
    __esModule: true,
    default: {
        user: {
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
        chat: {
            findMany: jest.fn(),
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
        message: {
            findMany: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
        $transaction: jest.fn(),
    },
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }) => {
            const {
                animate,
                initial,
                transition,
                whileHover,
                whileTap,
                layout,
                ...restProps
            } = props;
            return <div {...restProps}>{children}</div>;
        },
        button: ({ children, ...props }) => {
            const {
                animate,
                initial,
                transition,
                whileHover,
                whileTap,
                layout,
                ...restProps
            } = props;
            return <button {...restProps}>{children}</button>;
        },
        form: ({ children, ...props }) => {
            const {
                animate,
                initial,
                transition,
                whileHover,
                whileTap,
                layout,
                ...restProps
            } = props;
            return <form {...restProps}>{children}</form>;
        },
        span: ({ children, ...props }) => {
            const {
                animate,
                initial,
                transition,
                whileHover,
                whileTap,
                layout,
                ...restProps
            } = props;
            return <span {...restProps}>{children}</span>;
        },
    },
    AnimatePresence: ({ children }) => children,
}));

// Mock marked
jest.mock('marked', () => {
    const mockMarked = jest.fn((text) => text);
    mockMarked.lexer = jest.fn((text) => [{ type: 'text', raw: text }]);
    return {
        marked: mockMarked,
    };
});

// Mock react-markdown
jest.mock('react-markdown', () => {
    return function MockReactMarkdown({ children }) {
        return <div>{children}</div>;
    };
});

// Mock react-syntax-highlighter
jest.mock('react-syntax-highlighter', () => ({
    Prism: function MockPrism({ children, ...props }) {
        return (
            <pre data-testid="syntax-highlighter" {...props}>
                {children}
            </pre>
        );
    },
}));

// Mock react-syntax-highlighter styles
jest.mock('react-syntax-highlighter/dist/esm/styles/prism', () => ({
    oneDark: {},
}));

// Mock rehype-raw
jest.mock('rehype-raw', () => ({
    __esModule: true,
    default: () => {},
}));

// Mock remark-gfm
jest.mock('remark-gfm', () => ({
    __esModule: true,
    default: () => {},
}));

// Mock Next.js cache
jest.mock('next/cache', () => ({
    unstable_cache: jest.fn((fn) => fn),
}));

// Mock Prisma - will be mocked in individual test files as needed

// Mock environment variables
process.env.TOKEN_SECRET = 'test-secret';
process.env.SALT_ROUND = '10';
process.env.EXPIRES_IN = '2592000';

// Add TextEncoder/TextDecoder for Node.js environment
if (typeof global.TextEncoder === 'undefined') {
    const { TextEncoder, TextDecoder } = require('util');
    global.TextEncoder = TextEncoder;
    global.TextDecoder = TextDecoder;
}

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
