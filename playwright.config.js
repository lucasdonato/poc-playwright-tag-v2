const { devices } = require('@playwright/test');

const config = {
    //reporter: [['html', { outputFolder: 'report' }]],
    forbidOnly: !!process.env.CI,
    workers: 1,
    retries: process.env.CI ? 2 : 0,
    use: {
        baseURL: 'http://app.cavalo.q4dev.com.br/tagplus/api',
        headless: true,
        trace: 'on-first-retry',
        screenshot: 'on',
        video: 'on-first-retry'
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
};
module.exports = config