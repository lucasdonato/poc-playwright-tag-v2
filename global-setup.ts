import { request } from '@playwright/test';

const endpointToken = process.env.URL_BASE + '/categorias'

async function globalSetup() {
    const requestContext = await request.newContext();
    let requestJWT = await requestContext.post('http://app.cavalo.q4dev.com.br/tagplus/api/login', {
        form: {
            'username': 'admin',
            'password': '123456'
        }
    });

    let { token } = await requestJWT.json()
    process.env.token = token
}

export default globalSetup;