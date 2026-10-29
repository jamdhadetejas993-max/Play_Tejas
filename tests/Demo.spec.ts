import {test, expect} from '@playwright/test';

test('Launch the Brower', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.getByRole('searchbox',{name:'Search Amazon.in'}).fill('Laptop');
    await page.getByRole('button', { name: 'Go', exact: true }).click();

});