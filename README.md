# AargonGPT

A modern, high-performance AI chat application built with Next.js 16, featuring real-time messaging, session storage optimization, and comprehensive performance optimizations.

## 🚀 Features

### Core Functionality

- **Real-time AI Chat** - Powered by AI SDK with streaming responses
- **Session Management** - Persistent chat history with optimized navigation
- **Project Organization** - Organize chats into projects with color coding
- **User Authentication** - Secure login/signup with JWT tokens
- **Responsive Design** - Mobile-first design with glassmorphism UI

### Performance Optimizations

- **Zero Layout Shift** - Optimized navigation with session storage caching
- **Comprehensive Memoization** - All components memoized for maximum performance
- **Efficient State Management** - Zustand stores for optimal re-renders
- **Smart Caching** - Session storage prevents unnecessary server requests
- **Optimized Rendering** - React.memo, useCallback, and useMemo throughout

## 🛠 Tech Stack

### Frontend

- **Next.js 16** - App Router with Server Components
- **React 19.2** - With concurrent features and Suspense
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **AI SDK** - Real-time AI streaming

### Backend

- **Prisma** - Type-safe database ORM
- **PostgreSQL** - Relational database
- **Next.js API Routes** - Serverless API endpoints
- **JWT** - Secure authentication

### UI Components

- **Glassmorphism Design** - Modern glass-effect components
- **Auto-resizing Textarea** - Dynamic input sizing
- **Syntax Highlighting** - Code blocks with copy functionality
- **Markdown Rendering** - Rich text support
- **Responsive Modals** - Animated modal system

## 🏗 Architecture

### Performance-First Design

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Chat Page     │───▶│ Session Storage │───▶│  Chat ID Page   │
│                 │    │   (Cached)      │    │   (Instant)     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                        │                        │
         ▼                        ▼                        ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│  Memoized       │    │   Optimized      │    │  Memoized       │
│  Components     │    │   Navigation     │    │  Components     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### Component Optimization Strategy

- **ChatPageClient** - Memoized with session storage integration
- **ChatPageContainer** - Memoized with useCallback for handlers
- **MessageCard** - Individual message memoization
- **ChatInput** - Memoized with optimized typing performance
- **AutoResizeTextarea** - Memoized with useCallback for onChange
- **Modal** - Memoized with useCallback for click handlers
- **All UI Components** - Comprehensive memoization

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd aargongpt
    ```

2. **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables**

    ```bash
    cp .env.example .env
    ```

    Configure your environment variables:

    ```env
    DATABASE_URL="postgresql://username:password@localhost:5432/aargongpt"
    NEXTAUTH_SECRET="your-secret-key"
    NEXTAUTH_URL="http://localhost:3000"
    ```

4. **Set up the database**

    ```bash
    npx prisma generate
    npx prisma db push
    ```

5. **Run the development server**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (main)/            # Main layout group
│   ├── api/               # API routes
│   ├── chat/              # Chat pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── auth/              # Authentication components
│   ├── chat/              # Chat-related components
│   ├── common/            # Shared components
│   ├── layout/            # Layout components
│   ├── ui/                # UI components (memoized)
│   └── projects/          # Project management
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── services/              # API services
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

## 🎯 Performance Features

### Session Storage Optimization

- **Instant Navigation** - Cached messages prevent layout shifts
- **Smart Caching** - Automatic cache cleanup prevents stale data
- **Fallback Strategy** - Server data when cache unavailable

### Component Memoization

- **React.memo** - Prevents unnecessary re-renders
- **useCallback** - Optimizes event handlers
- **useMemo** - Caches expensive calculations
- **Custom Comparison** - Precise memoization control

### Rendering Optimizations

- **Virtual Scrolling** - Efficient long message lists
- **Lazy Loading** - On-demand component loading
- **Code Splitting** - Optimized bundle sizes
- **Image Optimization** - Next.js automatic optimization

## 🧪 Testing

### Run Tests

```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e

# Performance tests
npm run test:performance
```

### Test Coverage

- **Component Tests** - React Testing Library
- **Integration Tests** - API and database
- **E2E Tests** - Playwright automation
- **Performance Tests** - Rendering benchmarks

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📊 Performance Metrics

### Optimizations Implemented

- ✅ **Zero Layout Shift** - Smooth navigation experience
- ✅ **Memoized Components** - 15+ components optimized
- ✅ **Session Storage** - Instant chat loading
- ✅ **Efficient Re-renders** - Minimal unnecessary updates
- ✅ **Optimized Animations** - Smooth Framer Motion
- ✅ **Code Splitting** - Reduced initial bundle size

### Performance Benefits

- **Faster Navigation** - Instant chat switching
- **Smoother Typing** - Optimized input handling
- **Reduced CPU Usage** - Efficient rendering
- **Better Memory Management** - Optimized component lifecycle
- **Improved Responsiveness** - Faster UI interactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **AI SDK** - For seamless AI integration
- **Prisma** - For excellent database tooling
- **Tailwind CSS** - For beautiful styling utilities
- **Framer Motion** - For smooth animations

---

Built with ❤️ using modern web technologies and performance best practices.
