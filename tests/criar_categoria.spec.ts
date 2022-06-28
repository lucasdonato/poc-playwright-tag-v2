import { test } from '@playwright/test'
import { LoginPage } from '../pages/login-page'
import { CategoriaPage } from '../pages/categoria-page'

let loginPage: LoginPage
let categoriaPage: CategoriaPage

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    categoriaPage = new CategoriaPage(page)

    await loginPage.go()
    await loginPage.sigIn('admin', '123456')
    await loginPage.userLoggedIn()

    // await page.evaluate(() => {
    //     window.localStorage.setItem('_tagplus-sa', JSON.stringify([{ sistemaAtual: 'tagplus' }]))
    // })
})

test('devo criar categoria', async () => {
    await categoriaPage.acessar()
    await categoriaPage.cadastrar('Categoria Playwright', 'sem localização')
    await categoriaPage.validarCategoriaCriada('Categoria salva com sucesso')
})