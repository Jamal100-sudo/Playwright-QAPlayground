import { Page } from 'playwright';
import { expect } from '../fixtures/baseFixture';

export class DashboardPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForDashboardReady() {
        await expect(this.page.locator("#dashboard-page-container")).toHaveAttribute('data-loading', 'false');
    }

    async getTotalBalance(): Promise<number> {
        const totalText = await this.page.textContent("[data-testid='total-balance']");
        return this.parseCurrency(totalText);
    }

    async getAccountsCountStat(): Promise<number> {
        const countText = await this.page.textContent("[data-testid='accounts-count']");
        return Number(countText?.trim() ?? '0');
    }

    async navigateToAccounts() {
        await this.page.goto('/bank/accounts');
    }

    async getAccountBalances(): Promise<number[]> {
        const balanceElements = this.page.locator("[data-testid='account-balance']");
        const values = await balanceElements.allTextContents();
        return values.map(value => this.parseCurrency(value));
    }

    async getAccountRowCount(): Promise<number> {
        return await this.page.locator('table tbody tr').count();
    }

    private parseCurrency(value: string | null): number {
        if (!value) {
            return 0;
        }

        const cleaned = value.replace(/[^0-9.-]+/g, '');
        return parseFloat(cleaned) || 0;
    }
}
