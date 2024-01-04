import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/');
  await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/login');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'name@host.com' }).click();
  await page.getByRole('textbox', { name: 'name@host.com' }).fill('hemalatha@echortech.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('H');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Hema@122');
  await page.getByRole('button', { name: 'submit' }).click();
  await page.getByText('HE', { exact: true }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => { });
  });
  await page.getByRole('button', { name: 'Log out' }).click();
});