const { test } = require('@playwright/test')
const { LoginPage } = require('../pages/login-page')
const { CategoriaPage } = require('../pages/categoria-page')

test.beforeEach(async ({ page }) => {
    this.loginPage = new LoginPage(page)
    this.categoriaPage = new CategoriaPage(page)

    await this.loginPage.go()
    await this.loginPage.sigIn('admin', '123456')
    await this.loginPage.userLoggedIn()
})

test('devo criar categoria', async () => {
    await this.categoriaPage.acessar()
    await this.categoriaPage.cadastrar('Categoria Playwright', 'sem localização')
    await this.categoriaPage.validarCategoriaCriada('Categoria salva com sucesso')
})