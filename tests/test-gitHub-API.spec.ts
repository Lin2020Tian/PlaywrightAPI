import { test, expect } from '@playwright/test';
import { request } from 'http';

/** test GitHub APIs */
// set the test repo name and the GitHub username (run command if not known: git config user.name)
const REPO = 'PlaywrightAPI';
const USER = 'Lin2020Tian';

// test API of creating Issue in GitHub repo
test('Create a bug report', async({ request }) => {
    const bugTitle = 'api test issue title';
    const bugDescription = 'api test issue description';

    // create a new issue
    // const newIssue = await request.post('/repos/${USER}/${REPO}/issues', {
    //     data: { title: bugTitle, body: bugDescription, }
    // })
    // expect(newIssue.ok()).toBeTruthy();

    // get the newly create issue
    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
        title: bugTitle, body:bugDescription
    }));
});
