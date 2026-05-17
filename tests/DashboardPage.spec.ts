import { expect, test } from '../fixtures/baseFixture';
import { testData } from '../utils/testData';

test('TC-DASH-01: Stat card values match actual account and transaction data', async ({ page, loginPage, dashboardPage }) => {
     await loginPage.navigate();
    await loginPage.enterUsernameAndPassword(
        testData.Username,
        testData.password
    );

    await loginPage.clickLogin();
    await loginPage.assertRedirect();

    // Wait for dashboard load
    await dashboardPage.waitForDashboardReady();

    // Read dashboard stats BEFORE navigation
    const dashboardTotalBalance =
        await dashboardPage.getTotalBalance();

    const dashboardAccountsCount =
        await dashboardPage.getAccountsCountStat();

    // Navigate to accounts page
    await dashboardPage.navigateToAccounts();

    // Fetch account balances
    const accountBalances =
        await dashboardPage.getAccountBalances();

    // Calculate actual total
    const actualBalanceSum =
        accountBalances.reduce(
            (sum, balance) => sum + balance,
            0
        );

    // Count rows
    const accountRowCount =
        await dashboardPage.getAccountRowCount();

    // Assertions
    expect(dashboardTotalBalance)
        .toBeCloseTo(actualBalanceSum, 2);

    expect(dashboardAccountsCount)
        .toBe(accountRowCount);
});
