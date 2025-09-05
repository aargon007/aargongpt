import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Start from the home page
    await page.goto('/');
  });

  test('should complete login flow within performance threshold', async ({ page }) => {
    // Measure login performance
    const startTime = Date.now();
    
    // Navigate to login page
    await page.click('text=Login');
    await expect(page).toHaveURL('/login');
    
    // Fill login form
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="password"]', 'password123');
    
    // Submit form and measure time to chat page
    await page.click('button[type="submit"]');
    
    // Wait for navigation to chat page
    await expect(page).toHaveURL('/chat');
    
    const endTime = Date.now();
    const loginTime = endTime - startTime;
    
    // Login should complete within 5 seconds (including navigation)
    expect(loginTime).toBeLessThan(5000);
    
    // Verify chat page elements are loaded
    await expect(page.locator('text=Welcome to AargonGPT')).toBeVisible();
  });

  test('should handle registration flow efficiently', async ({ page }) => {
    const startTime = Date.now();
    
    // Navigate to signup page
    await page.click('text=Sign Up');
    await expect(page).toHaveURL('/signup');
    
    // Fill registration form
    await page.fill('input[name="firstName"]', 'John');
    await page.fill('input[name="lastName"]', 'Doe');
    await page.fill('input[name="email"]', `test${Date.now()}@example.com`);
    await page.fill('input[name="password"]', 'securePassword123');
    await page.check('input[name="agreeTerms"]');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Should redirect to chat page after successful registration
    await expect(page).toHaveURL('/chat');
    
    const endTime = Date.now();
    const registrationTime = endTime - startTime;
    
    // Registration should complete within 6 seconds
    expect(registrationTime).toBeLessThan(6000);
  });

  test('should show proper error handling for invalid credentials', async ({ page }) => {
    await page.goto('/login');
    
    // Try login with invalid credentials
    await page.fill('input[name="email"]', 'invalid@example.com');
    await page.fill('input[name="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');
    
    // Should show error message
    await expect(page.locator('text=User not found')).toBeVisible();
    
    // Should remain on login page
    await expect(page).toHaveURL('/login');
  });

  test('should validate form inputs', async ({ page }) => {
    await page.goto('/login');
    
    // Try to submit empty form
    await page.click('button[type="submit"]');
    
    // Should show validation errors
    await expect(page.locator('input[name="email"]:invalid')).toBeVisible();
    await expect(page.locator('input[name="password"]:invalid')).toBeVisible();
  });
});
