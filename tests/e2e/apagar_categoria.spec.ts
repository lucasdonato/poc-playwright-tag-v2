import { test } from '@playwright/test'
import { LoginPage } from '../../pages/login-page'
import { CategoriaPage } from '../../pages/categoria-page'
import { categoriaFactory } from '../../factories/categoria'
import { RequestsAPI } from '../../requests/requestsAPI'

let requestsAPI: RequestsAPI
let loginPage: LoginPage
let categoriaPage: CategoriaPage

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    categoriaPage = new CategoriaPage(page)
    requestsAPI = new RequestsAPI(page)

    await requestsAPI.getJWT('admin', '123456')
    await requestsAPI.postCategoria(categoriaFactory)

    await loginPage.go()
    await loginPage.sigIn('admin', '123456')
    await loginPage.userLoggedIn()
})

test('devo apagar categoria com sucesso', async () => {
    await categoriaPage.acessar()
    await categoriaPage.pesquisar(categoriaFactory.descricao)
    await categoriaPage.apagar()
    await categoriaPage.validaCategoriaApagada('Categoria apagada com sucesso')
});