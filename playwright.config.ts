import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    //reporter: [['html', { outputFolder: 'report' }]],
    globalSetup: require.resolve('./global-setup'),
    forbidOnly: !!process.env.CI,
    workers: 1,
    retries: process.env.CI ? 2 : 0,
    use: {
        storageState: 'storageState.json',
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
export default config;