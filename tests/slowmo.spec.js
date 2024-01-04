import{test,expect} from '@playwright/test'

test('slowmo', async()=>{
    const browser= await chromium.launch({
        slowMo : 500,
        headless : false
    });
    const context = await browser.newContext({
        recordVideo :{
            dir : 'videos/',
            size:{ width: 800,height : 600}
        }
    });
    const page = await context.newPage();
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
    await context.close();
    
 

})