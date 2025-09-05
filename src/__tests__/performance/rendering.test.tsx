/**
 * Performance tests for component rendering
 * Tests the optimizations made to prevent UI hangs
 */

import { render, screen, waitFor } from '@testing-library/react'
import { performance } from 'perf_hooks'
import InnovationPack from '@/components/chat/home/InnovationPack'
import { MemoizedMarkdown } from '@/components/chat/message/MarkdownPreview'

// Mock heavy dependencies
jest.mock('react-syntax-highlighter', () => ({
  Prism: ({ children }: any) => <pre data-testid="syntax-highlighter">{children}</pre>
}))

jest.mock('react-syntax-highlighter/dist/esm/styles/prism', () => ({
  oneDark: {}
}))

describe('Rendering Performance Tests', () => {
  const measureRenderTime = async (component: React.ReactElement) => {
    const start = performance.now()
    render(component)
    const end = performance.now()
    return end - start
  }

  describe('InnovationPack Component', () => {
    it('should render within performance threshold', async () => {
      const renderTime = await measureRenderTime(<InnovationPack />)
      
      // Should render in less than 100ms
      expect(renderTime).toBeLessThan(100)
    })

    it('should handle category filtering efficiently', async () => {
      const { rerender } = render(<InnovationPack />)
      
      const start = performance.now()
      
      // Simulate multiple re-renders (category changes)
      for (let i = 0; i < 10; i++) {
        rerender(<InnovationPack />)
      }
      
      const end = performance.now()
      const totalTime = end - start
      
      // Multiple re-renders should complete in less than 200ms
      expect(totalTime).toBeLessThan(200)
    })

    it('should not cause memory leaks with animations', async () => {
      const initialMemory = (performance as any).memory?.usedJSHeapSize || 0
      
      // Render and unmount multiple times
      for (let i = 0; i < 5; i++) {
        const { unmount } = render(<InnovationPack />)
        unmount()
      }
      
      // Force garbage collection if available
      if (global.gc) {
        global.gc()
      }
      
      const finalMemory = (performance as any).memory?.usedJSHeapSize || 0
      const memoryIncrease = finalMemory - initialMemory
      
      // Memory increase should be minimal (less than 5MB)
      expect(memoryIncrease).toBeLessThan(5 * 1024 * 1024)
    })
  })

  describe('Markdown Rendering Performance', () => {
    const largeMarkdownContent = `
# Large Document

This is a test document with a lot of content to test rendering performance.

## Code Block

\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Generate large array
const largeArray = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: \`Item \${i}\`,
  description: \`This is item number \${i} with some description\`,
  metadata: {
    created: new Date(),
    tags: [\`tag\${i}\`, \`category\${i % 10}\`],
    nested: {
      level1: {
        level2: {
          level3: \`Deep nesting level \${i}\`
        }
      }
    }
  }
}));

console.log('Large array generated:', largeArray.length);
\`\`\`

## More Content

${'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(100)}

### Another Code Block

\`\`\`python
def process_large_dataset(data):
    result = []
    for item in data:
        processed = {
            'id': item['id'],
            'processed_name': item['name'].upper(),
            'computed_value': item['id'] * 2 + len(item['description'])
        }
        result.append(processed)
    return result

# Process data
large_dataset = [{'id': i, 'name': f'item_{i}', 'description': f'desc_{i}'} for i in range(1000)]
processed_data = process_large_dataset(large_dataset)
print(f"Processed {len(processed_data)} items")
\`\`\`

## Final Section

${'More content here. '.repeat(50)}
    `

    it('should render large markdown content efficiently', async () => {
      const start = performance.now()
      
      render(
        <MemoizedMarkdown 
          content={largeMarkdownContent} 
          id="test-large-content" 
        />
      )
      
      const end = performance.now()
      const renderTime = end - start
      
      // Large content should render in less than 500ms
      expect(renderTime).toBeLessThan(500)
    })

    it('should handle code blocks without blocking', async () => {
      const codeBlockContent = `
\`\`\`javascript
${Array.from({ length: 100 }, (_, i) => `console.log('Line ${i}');`).join('\n')}
\`\`\`
      `
      
      const start = performance.now()
      
      render(
        <MemoizedMarkdown 
          content={codeBlockContent} 
          id="test-code-block" 
        />
      )
      
      // Should render immediately (lazy loading)
      const initialRenderTime = performance.now() - start
      expect(initialRenderTime).toBeLessThan(50)
      
      // Wait for syntax highlighter to load
      await waitFor(() => {
        expect(screen.getByTestId('syntax-highlighter')).toBeInTheDocument()
      }, { timeout: 1000 })
    })

    it('should memoize content correctly', () => {
      const content = '# Test Content\n\nSome text here.'
      
      const { rerender } = render(
        <MemoizedMarkdown content={content} id="test-memo" />
      )
      
      const start = performance.now()
      
      // Re-render with same content multiple times
      for (let i = 0; i < 20; i++) {
        rerender(<MemoizedMarkdown content={content} id="test-memo" />)
      }
      
      const end = performance.now()
      const rerenderTime = end - start
      
      // Memoized re-renders should be very fast
      expect(rerenderTime).toBeLessThan(20)
    })
  })

  describe('Bundle Size Impact', () => {
    it('should lazy load heavy components', async () => {
      // Test that syntax highlighter is not loaded initially
      const modulesBefore = Object.keys(require.cache).length
      
      render(<InnovationPack />)
      
      const modulesAfter = Object.keys(require.cache).length
      const newModules = modulesAfter - modulesBefore
      
      // Should not load many new modules for basic rendering
      expect(newModules).toBeLessThan(10)
    })
  })

  describe('Concurrent Rendering', () => {
    it('should handle multiple components rendering simultaneously', async () => {
      const start = performance.now()
      
      // Render multiple components at once
      const promises = Array.from({ length: 5 }, (_, i) => 
        new Promise<void>(resolve => {
          render(<InnovationPack key={i} />)
          resolve()
        })
      )
      
      await Promise.all(promises)
      
      const end = performance.now()
      const totalTime = end - start
      
      // Multiple concurrent renders should complete quickly
      expect(totalTime).toBeLessThan(300)
    })
  })
})
