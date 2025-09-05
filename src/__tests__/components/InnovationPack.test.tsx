import { render, screen, fireEvent, waitFor } from '@testing-library/react'
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

  it('renders welcome message and categories', () => {
    render(<InnovationPack />)
    
    expect(screen.getByText('Welcome to')).toBeInTheDocument()
    expect(screen.getByText('AargonGPT')).toBeInTheDocument()
    expect(screen.getByText('Supercharge your creativity and productivity')).toBeInTheDocument()
    
    // Check categories
    expect(screen.getByText('All')).toBeInTheDocument()
    expect(screen.getByText('Creative')).toBeInTheDocument()
    expect(screen.getByText('Development')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.getByText('Strategy')).toBeInTheDocument()
  })

  it('displays all prompt cards by default', () => {
    render(<InnovationPack />)
    
    expect(screen.getByText('UI/UX Design Review')).toBeInTheDocument()
    expect(screen.getByText('Code Architecture Review')).toBeInTheDocument()
    expect(screen.getByText('Content Strategy')).toBeInTheDocument()
    expect(screen.getByText('Business Innovation')).toBeInTheDocument()
    expect(screen.getByText('API Documentation')).toBeInTheDocument()
    expect(screen.getByText('Marketing Campaign')).toBeInTheDocument()
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    expect(screen.getByText('Market Analysis')).toBeInTheDocument()
  })

  it('filters cards by category', async () => {
    const user = userEvent.setup()
    render(<InnovationPack />)
    
    // Click on Creative category
    await user.click(screen.getByText('Creative'))
    
    // Should show only creative cards
    expect(screen.getByText('UI/UX Design Review')).toBeInTheDocument()
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    
    // Should not show development cards
    expect(screen.queryByText('Code Architecture Review')).not.toBeInTheDocument()
    expect(screen.queryByText('API Documentation')).not.toBeInTheDocument()
  })

  it('dispatches prompt selection event when card is clicked', async () => {
    const user = userEvent.setup()
    render(<InnovationPack />)
    
    const designCard = screen.getByText('UI/UX Design Review')
    await user.click(designCard)
    
    expect(mockDispatchEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'promptSelected',
        detail: {
          prompt: expect.stringContaining('Please review this UI/UX design')
        }
      })
    )
  })

  it('shows active category styling', async () => {
    const user = userEvent.setup()
    render(<InnovationPack />)
    
    const creativeButton = screen.getByText('Creative')
    await user.click(creativeButton)
    
    // Check if the button has active styling (contains gradient classes)
    expect(creativeButton.closest('button')).toHaveClass('bg-gradient-to-r')
  })

  it('displays quick start section', () => {
    render(<InnovationPack />)
    
    expect(screen.getByText('Ready to get started?')).toBeInTheDocument()
    expect(screen.getByText('Type your message below or click on any prompt above')).toBeInTheDocument()
    expect(screen.getByText('Powered by advanced AI technology')).toBeInTheDocument()
  })

  it('shows correct number of cards for each category', async () => {
    const user = userEvent.setup()
    render(<InnovationPack />)
    
    // Development category should have 2 cards
    await user.click(screen.getByText('Development'))
    const developmentCards = screen.getAllByText(/Code Architecture Review|API Documentation/)
    expect(developmentCards).toHaveLength(2)
    
    // Strategy category should have 3 cards
    await user.click(screen.getByText('Strategy'))
    const strategyCards = screen.getAllByText(/Business Innovation|Marketing Campaign|Market Analysis/)
    expect(strategyCards).toHaveLength(3)
  })

  it('handles category switching correctly', async () => {
    const user = userEvent.setup()
    render(<InnovationPack />)
    
    // Start with All (8 cards)
    let cards = screen.getAllByText(/Review|Strategy|Innovation|Documentation|Campaign|Identity|Analysis/)
    expect(cards.length).toBeGreaterThanOrEqual(8)
    
    // Switch to Creative (2 cards)
    await user.click(screen.getByText('Creative'))
    await waitFor(() => {
      expect(screen.getByText('UI/UX Design Review')).toBeInTheDocument()
      expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    })
    
    // Switch back to All
    await user.click(screen.getByText('All'))
    await waitFor(() => {
      cards = screen.getAllByText(/Review|Strategy|Innovation|Documentation|Campaign|Identity|Analysis/)
      expect(cards.length).toBeGreaterThanOrEqual(8)
    })
  })
})
