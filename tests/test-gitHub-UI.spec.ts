import { test, expect } from '@playwright/test'

test('Test the git hub UI', async({ page }) => {
    // go to git hub and should have already authenticated
    await page.goto(`https://github.com/${process.env.GITHUB_USER}`)
    await page.waitForURL(`https://github.com/${process.env.GITHUB_USER}`);
    // should see the profile button
    await expect(page.getByRole('button', { name: 'Edit profile' })).toBeVisible();
});