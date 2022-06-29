import { request } from '@playwright/test';

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

    // Save signed-in state to 'storageState.json'.
    await requestContext.storageState({ path: 'storageState.json' });
    await requestContext.dispose();
}

export default globalSetup;