
exports.RequestsAPI = class RequestsAPI {
    constructor(page) {
        this.page = page
    }

    async getJWT(user, pass) {
        /*Pega o Token JWT*/
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

    async postCategoria(categoria) {
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
}