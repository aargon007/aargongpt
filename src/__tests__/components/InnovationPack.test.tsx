import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InnovationPack from '@/components/chat/home/InnovationPack'

// Mock window.dispatchEvent
const mockDispatchEvent = jest.fn()
Object.defineProperty(window, 'dispatchEvent', {
  value: mockDispatchEvent,
})

describe('InnovationPack', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders welcome message and title', () => {
    render(<InnovationPack />)

    expect(screen.getByText('AargonGPT')).toBeInTheDocument()
    expect(screen.getByText('How can I help you today?')).toBeInTheDocument()
  })

  it('displays all example prompts', () => {
    render(<InnovationPack />)

    expect(screen.getByText('Explain quantum computing like I\'m 5')).toBeInTheDocument()
    expect(screen.getByText('Write a Python function to sort a list')).toBeInTheDocument()
    expect(screen.getByText('Help me write a professional email')).toBeInTheDocument()
    expect(screen.getByText('What are the latest trends in AI?')).toBeInTheDocument()
  })

  it('dispatches prompt selection event when prompt is clicked', async () => {
    const user = userEvent.setup()
    render(<InnovationPack />)

    const quantumPrompt = screen.getByText('Explain quantum computing like I\'m 5')
    await user.click(quantumPrompt)

    expect(mockDispatchEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'promptSelected',
        detail: {
          prompt: 'Explain quantum computing like I\'m 5'
        }
      })
    )
  })

  it('displays correct number of prompt cards', () => {
    render(<InnovationPack />)

    const promptButtons = screen.getAllByRole('button')
    expect(promptButtons).toHaveLength(4)
  })

  it('has proper styling for prompt cards', () => {
    render(<InnovationPack />)

    const promptButtons = screen.getAllByRole('button')
    promptButtons.forEach(button => {
      expect(button).toHaveClass('flex', 'items-center', 'gap-3', 'p-4')
      expect(button).toHaveClass('bg-noble-800', 'hover:bg-noble-700')
      expect(button).toHaveClass('border', 'border-noble-600', 'hover:border-noble-500')
      expect(button).toHaveClass('rounded-xl', 'text-left', 'transition-all', 'duration-200')
    })
  })

  it('renders icons for each prompt', () => {
    render(<InnovationPack />)

    // Check that each prompt button contains an icon (svg element)
    const promptButtons = screen.getAllByRole('button')
    promptButtons.forEach(button => {
      const icon = button.querySelector('svg')
      expect(icon).toBeInTheDocument()
    })
  })
})
