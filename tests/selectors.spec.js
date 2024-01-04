import{test,expect} from'@playwright/test'
test('selectors', async({page}) => {

await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/login')
await page.getByRole('button', { name: 'Login' }).click()
// await page.pause()
// await page.getByRole('textbox', { name: 'name@host.com' }).click()
await page.getByRole('textbox', { name: 'name@host.com' }).fill('hemalatha@echortech.com')
// await page.getByRole('textbox', { name: 'Password' }).click()
await page.getByRole('textbox', { name: 'Password' }).fill('Hema@122')
await page.getByRole('button', { name: 'submit' }).click()
await page.pause()


});