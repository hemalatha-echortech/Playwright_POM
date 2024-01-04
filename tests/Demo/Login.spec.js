import { test, expect } from '@playwright/test';
import{LoginPage} from '../../pages/login'

test('login', async ({ page }) => {

    const Login=new LoginPage(page)
    await Login.gotoLoginPage()
    await Login.login('hemalatha@echortech.com','Hema@122')
    // await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/login');
    // await page.getByRole('button', { name: 'Login' }).click();
    // await page.getByRole('textbox', { name: 'name@host.com' }).click();
    // await page.getByRole('textbox', { name: 'name@host.com' }).fill('hemalatha@echortech.com');
    // await page.getByRole('textbox', { name: 'Password' }).click();
    // await page.getByRole('textbox', { name: 'Password' }).fill('Hema@122');
    // await page.getByRole('button', { name: 'submit' }).click();

})
