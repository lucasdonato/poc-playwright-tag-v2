const { expect } = require('@playwright/test')

exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page
    }

    async go() {
        await this.page.goto('http://app.cavalo.q4dev.com.br:3001/tagplus/login')
    }

    async sigIn(user, password) {
        await this.page.fill('input[placeholder=Usuário]', user)
        await this.page.fill('input[placeholder=Senha]', password)
        await this.page.click('input[type=submit]')
    }

    async userLoggedIn() {
        const title = this.page.locator('.el-card__body .title')
        await expect(title).toHaveText('Bem-vindo ao TagPlus Beta')
    }
}