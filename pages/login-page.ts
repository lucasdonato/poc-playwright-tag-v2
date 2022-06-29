import { Page, expect } from '@playwright/test'

export class LoginPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async go() {
        await this.page.goto('http://app.cavalo.q4dev.com.br:3001/tagplus/login')
    }

    async sigIn(user: string, password: string) {
        await this.page.fill('input[placeholder=Usuário]', user)
        await this.page.fill('input[placeholder=Senha]', password)
        await this.page.click('input[type=submit]')
    }

    async userLoggedIn() {
        const title = this.page.locator('.el-card__body .title')
        await expect(title).toHaveText('Bem-vindo ao TagPlus 2.0')
    }
}