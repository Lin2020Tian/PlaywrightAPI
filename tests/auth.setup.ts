import { test as setup, expect } from '@playwright/test'

const authFile = process.env.AUTH_USER_FILEPATH;
const PWD = process.env.GITHUB_Password;
const USER = process.env.GITHUB_USER;

setup('authenticate', async({ page }) => {
    // perform authentication steps
    await page.goto('https://github.com/login');
    await page.getByLabel('Username or email address').fill(`${USER}`);
    await page.getByLabel('Password').fill(`${PWD}`);
    await page.getByRole('button', { name: 'Sign in' }).click();
    // Wait until the page receives the cookies.
    // Sometimes login flow sets cookies in the process of several redirects.
    // Wait for the final URL to ensure that the cookies are actually set.
    await page.waitForURL('https://github.com/');
    
    // End of authentication steps.
    await page.context().storageState({ path: authFile });
});