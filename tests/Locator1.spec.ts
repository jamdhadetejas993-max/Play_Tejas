import { test, expect } from '@playwright/test';

test('Locators2', async ({ page }) => {
    await page.goto('https://www.amazon.in/');

    await page.getByRole('link', { name: 'Electronics', exact: true }).click();
});
