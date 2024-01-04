import { test, expect } from '@playwright/test'
//group of all tests
test.describe('All my tests', () => {

//hooks for each action
test.beforeEach(async ({ page }) => {
    await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/')
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'name@host.com' }).fill('hemalatha@echortech.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Hema@122');
    await page.getByRole('button', { name: 'submit' }).click();
})
test.afterAll(async ({ page }) => {
    await page.close()
})

test('homepage', async ({ page }) => {
    await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/')
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'name@host.com' }).fill('hemalatha@echortech.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Hema@122');
    await page.getByRole('button', { name: 'submit' }).click();
    await page.getByText('Binance').click();
    await page.getByText('BTCUSDT').click();
    await page.getByRole('button', { name: 'QTY/USDT' }).click();
    await page.getByText('mins').click();
    await page.getByPlaceholder('Select a date').first().click();
    await page.getByPlaceholder('Select a date').nth(1).click();
})

test('logout', async ({ page }) => {
    await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/')
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'name@host.com' }).fill('hemalatha@echortech.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Hema@122');
    await page.getByRole('button', { name: 'submit' }).click();
    await page.getByRole('button', { name: 'Log out' }).click();
    await page.locator('.d-flex > svg').click();
    await page.getByRole('link', { name: 'View Profile' }).click();



});

})
