import { test, expect } from '@playwright/test';

test.describe('Chat Performance', () => {
  test.beforeEach(async ({ page }) => {
    // Mock authentication for faster testing
    await page.goto('/chat');
    
    // Wait for the page to load
    await expect(page.locator('text=Welcome to AargonGPT')).toBeVisible();
  });

  test('should load chat homepage within performance threshold', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto('/chat');
    
    // Wait for all key elements to be visible
    await expect(page.locator('text=Welcome to AargonGPT')).toBeVisible();
    await expect(page.locator('text=All')).toBeVisible(); // Category filter
    await expect(page.locator('text=UI/UX Design Review')).toBeVisible(); // First prompt card
    
    const endTime = Date.now();
    const loadTime = endTime - startTime;
    
    // Chat homepage should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });

  test('should handle prompt card interactions smoothly', async ({ page }) => {
    // Test category filtering performance
    const startTime = Date.now();
    
    // Click on different categories
    await page.click('text=Creative');
    await expect(page.locator('text=UI/UX Design Review')).toBeVisible();
    
    await page.click('text=Development');
    await expect(page.locator('text=Code Architecture Review')).toBeVisible();
    
    await page.click('text=All');
    await expect(page.locator('text=UI/UX Design Review')).toBeVisible();
    
    const endTime = Date.now();
    const filterTime = endTime - startTime;
    
    // Category filtering should be instant (< 500ms)
    expect(filterTime).toBeLessThan(500);
  });

  test('should create new chat efficiently', async ({ page }) => {
    const startTime = Date.now();
    
    // Click on a prompt card
    await page.click('text=UI/UX Design Review');
    
    // Input should be filled with the prompt
    const input = page.locator('textarea[placeholder="Enter a message"]');
    await expect(input).toHaveValue(/Please review this UI\/UX design/);
    
    // Submit the message
    await page.click('button[type="submit"]');
    
    // Should navigate to new chat page
    await expect(page).toHaveURL(/\/chat\/[a-zA-Z0-9-]+/);
    
    const endTime = Date.now();
    const chatCreationTime = endTime - startTime;
    
    // Chat creation should complete within 4 seconds
    expect(chatCreationTime).toBeLessThan(4000);
  });

  test('should handle code rendering without blocking UI', async ({ page }) => {
    // Navigate to a chat with code content
    await page.goto('/chat');
    
    // Type a message that will generate code
    const input = page.locator('textarea[placeholder="Enter a message"]');
    await input.fill('Show me a JavaScript function example');
    await page.click('button[type="submit"]');
    
    // Wait for navigation to chat page
    await expect(page).toHaveURL(/\/chat\/[a-zA-Z0-9-]+/);
    
    // The page should remain responsive during code rendering
    // Test by trying to interact with other elements
    const startTime = Date.now();
    
    // Try to click on sidebar elements while code might be rendering
    await page.click('text=All Chats');
    
    const endTime = Date.now();
    const interactionTime = endTime - startTime;
    
    // UI interactions should remain fast even during code rendering
    expect(interactionTime).toBeLessThan(1000);
  });

  test('should load sidebar efficiently', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto('/chat');
    
    // Wait for sidebar elements to be visible
    await expect(page.locator('text=AargonGPT')).toBeVisible(); // Logo
    await expect(page.locator('text=GENERAL')).toBeVisible(); // Section header
    await expect(page.locator('text=All Chats')).toBeVisible(); // Navigation item
    
    const endTime = Date.now();
    const sidebarLoadTime = endTime - startTime;
    
    // Sidebar should load within 2 seconds
    expect(sidebarLoadTime).toBeLessThan(2000);
  });

  test('should handle mobile responsiveness', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('/chat');
    
    // Mobile header should be visible
    await expect(page.locator('header')).toBeVisible();
    
    // Sidebar should be hidden on mobile initially
    const sidebar = page.locator('aside');
    await expect(sidebar).not.toBeVisible();
    
    // Test mobile menu toggle
    const menuButton = page.locator('button[aria-label="Toggle menu"]').first();
    await menuButton.click();
    
    // Sidebar should become visible
    await expect(sidebar).toBeVisible();
    
    // Test that interactions work on mobile
    await page.click('text=Creative');
    await expect(page.locator('text=UI/UX Design Review')).toBeVisible();
  });

  test('should maintain performance with multiple chat messages', async ({ page }) => {
    await page.goto('/chat');
    
    // Create a new chat
    const input = page.locator('textarea[placeholder="Enter a message"]');
    await input.fill('Hello, this is a test message');
    await page.click('button[type="submit"]');
    
    // Wait for navigation
    await expect(page).toHaveURL(/\/chat\/[a-zA-Z0-9-]+/);
    
    // Send multiple messages to test performance
    const startTime = Date.now();
    
    for (let i = 0; i < 3; i++) {
      await input.fill(`Test message ${i + 1}`);
      await page.click('button[type="submit"]');
      
      // Wait for message to appear
      await expect(page.locator(`text=Test message ${i + 1}`)).toBeVisible();
    }
    
    const endTime = Date.now();
    const multiMessageTime = endTime - startTime;
    
    // Multiple messages should be handled efficiently
    expect(multiMessageTime).toBeLessThan(10000); // 10 seconds for 3 messages
  });

  test('should handle network delays gracefully', async ({ page }) => {
    // Simulate slow network
    await page.route('**/api/chat', async route => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay
      await route.continue();
    });
    
    await page.goto('/chat');
    
    const input = page.locator('textarea[placeholder="Enter a message"]');
    await input.fill('Test message with network delay');
    
    const startTime = Date.now();
    await page.click('button[type="submit"]');
    
    // Should show loading state
    await expect(page.locator('button[disabled]')).toBeVisible();
    
    // Should eventually complete
    await expect(page).toHaveURL(/\/chat\/[a-zA-Z0-9-]+/, { timeout: 10000 });
    
    const endTime = Date.now();
    const totalTime = endTime - startTime;
    
    // Should handle the delay gracefully (within reasonable time)
    expect(totalTime).toBeLessThan(15000);
  });
});
