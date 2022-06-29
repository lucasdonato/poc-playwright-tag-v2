import { Page } from '@playwright/test'

export class RequestsAPI {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async getJWT(user: string, pass: string) {
        const requestJWT = await this.page.request.post(
            `http://app.cavalo.q4dev.com.br/tagplus/api/login`,
            {
                data: {
                    username: user,
                    password: pass
                }
            }
        )

        let { token } = await requestJWT.json()
        process.env.token = token
    }

    async postCategoria(categoria: Object) {
        /*Cria a Categoria via API*/
        await this.page.request.post(
            `http://app.cavalo.q4dev.com.br/tagplus/api/categorias`,
            {
                data: categoria,
                headers: {
                    'Authorization': `Bearer ${process.env.token}`
                }
            });
    }

    async postProduto(produto: Object) {
        return this.page.request.post(
            `http://app.cavalo.q4dev.com.br/tagplus/api/produtos`,
            {
                data: produto,
                headers: {
                    'Authorization': `Bearer ${process.env.token}`
                }
            })
    }
}