exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
        this.login_button = page.getByRole('button', { name: 'Login' })
        this.username_testbox = page.getByRole('textbox', { name: 'name@host.com' })
        this.password_testbox = page.getByRole('textbox', { name: 'Password' })
        this.signin_button = page.getByRole('button', { name: 'submit' })

    }
    async gotoLoginPage(){
        await this.page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/login');

    }
    async login(username, password) {
        await this.login_button.click()
        await this.username_testbox.fill(username)
        await this.password_testbox.fill(password)
        await this.signin_button.click()

    }
}