const { expect } = require('@playwright/test')

exports.CategoriaPage = class CategoriaPage {
    constructor(page) {
        this.page = page
    }

    async acessar() {
        await this.page.hover('.menuTop .fa-boxes-alt')
        await this.page.fill('#input-busca', 'Categorias')
        await this.page.click('#menu-sistema-produtos-categorias')
    }

    async cadastrar(desc, localizacao) {
        await this.page.click('#btn-novo')
        await this.page.fill('#input-descricao', desc)
        await this.page.fill('#input-localizacao', localizacao)
        await this.page.click('#btn-save-modal')
    }

    async validarCategoriaCriada(expectedMessage) {
        const alert = this.page.locator('.el-message--success')
        await expect(alert).toHaveText(expectedMessage)
    }

    async pesquisar(target) {
        await this.page.fill('#input-busca-listagem', target)

        const list = this.page.locator('div[role=treeitem]')
        await expect(list).toHaveCount(1)
    }

    async apagar() {
        await this.page.click('#btn-editar')

        const row = this.page.locator('div[role=treeitem]');
        await row.locator('#btn-apagar').click();
        await this.page.locator('button', { hasText: 'Sim, apagar' }).click();
    }

    async validaCategoriaApagada(expectedMessage) {
        const alert = this.page.locator('.el-message--success')
        await expect(alert).toHaveText(expectedMessage)
    }
}