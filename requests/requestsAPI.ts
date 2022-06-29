import { request } from '@playwright/test';
export class RequestsAPI {
    async postCategoria(categoria: Object) {
        const requestContext = await request.newContext();

        return await requestContext.post(
            `http://app.cavalo.q4dev.com.br/tagplus/api/categorias`,
            {
                data: categoria,
                headers: {
                    'Authorization': `Bearer ${process.env.token}`
                }
            });
    }

    async postProduto(produto: Object) {
        const requestContext = await request.newContext();

        return await requestContext.post(
            'http://app.cavalo.q4dev.com.br/tagplus/api/produtos',
            {
                data: produto,
                headers: {
                    'Authorization': `Bearer ${process.env.token}`
                }
            }
        );
    }
}