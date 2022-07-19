
const endpointCategoria = process.env.URL_BASE + '/categorias'

export class RequestsAPI {
    async postCategoria(categoria: Object, request: any) {
        return await request.post(endpointCategoria, { data: categoria, });
    }
}