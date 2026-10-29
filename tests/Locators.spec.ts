import {test, expect} from '@playwright/test';

test('Launch the Brower', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

});