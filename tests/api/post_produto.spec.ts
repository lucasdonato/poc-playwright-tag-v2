import { test, expect } from '@playwright/test'
import { RequestsAPI } from '../../requests/requestsAPI'
import { produtoFactory } from '../../factories/produto'

let requestsAPI: RequestsAPI

test.beforeEach(async ({ page }) => {
    requestsAPI = new RequestsAPI(page)

    await requestsAPI.getJWT('admin', '123456')
})

test('devo criar produto', async () => {
    const reqProduto = await requestsAPI.postProduto(produtoFactory)
    const body = await reqProduto.json()

    expect(body.descricao).toEqual(produtoFactory.descricao)
    expect(reqProduto.status()).toBe(201)
})