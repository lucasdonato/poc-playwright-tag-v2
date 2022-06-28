const { test } = require('@playwright/test')
const { LoginPage } = require('../pages/login-page')
const { CategoriaPage } = require('../pages/categoria-page')
const  categoriaFactory  = require('../factories/categoria')
const { RequestsAPI } = require('../requests/requestsAPI')

test.beforeEach(async ({ page }) => {

    this.loginPage = new LoginPage(page)
    this.categoriaPage = new CategoriaPage(page)
    this.requestsAPI = new RequestsAPI(page)

    await this.requestsAPI.getJWT('admin', '123456')
    await this.requestsAPI.postCategoria(categoriaFactory)
    await this.loginPage.go()
    await this.loginPage.sigIn('admin', '123456')
    await this.loginPage.userLoggedIn()
})

test('devo apagar categoria com sucesso', async () => {
    await this.categoriaPage.acessar()
    await this.categoriaPage.pesquisar(categoriaFactory.descricao)
    await this.categoriaPage.apagar()
    await this.categoriaPage.validaCategoriaApagada('Categoria apagada com sucesso')
});