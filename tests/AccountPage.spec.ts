import { expect, test } from '../fixtures/baseFixture';
import { testData } from '../utils/testData';
import { AccountPage } from '../pages/AccountPage';

test('TC-ACCOUNT-01: Create a new account and verify it appears in the accounts list', async ({ page, loginPage }) => {
    const accountPage = new AccountPage(page);

    await loginPage.navigate();
    await loginPage.enterUsernameAndPassword(testData.Username, testData.password);
    await loginPage.clickLogin();
    await loginPage.assertRedirect();

    await accountPage.createNewAccount('Test Savings', '2500', 'Savings Account');

    await expect(page.locator('text=Test Savings')).toBeVisible();
});
