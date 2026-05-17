import { Page, Locator } from '@playwright/test';

export class AccountPage {
  readonly page: Page;

  readonly createAccountBtn: Locator;
  readonly accountNameInput: Locator;
  readonly accountTypeSelect: Locator;
  readonly initialBalanceInput: Locator;
  readonly statusRadioBtn: Locator;
  readonly enableOverdraftCheckbox: Locator;
  readonly submitAccountBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.createAccountBtn = this.page.locator('[id="add-account-link"]');
    this.accountNameInput = this.page.locator('[id="account-name"]');
    this.accountTypeSelect = this.page.getByRole('combobox', { name: 'Account Type' });
    this.initialBalanceInput = this.page.locator('[data-testid="initial-balance-input"]');
    this.statusRadioBtn = this.page.getByRole('radio', { name: 'inactive' });
    this.enableOverdraftCheckbox = this.page.getByRole('checkbox', { name: 'Enable Overdraft Protection' });
    this.submitAccountBtn = this.page.getByText('Save Account');
  }

  async createNewAccount(accountName: string, initialBalance: string, accountType: string, accountStatus: string) {
    await this.createAccountBtn.click();

    await this.accountNameInput.fill(accountName);

    await this.accountTypeSelect.click();
    await this.page.getByRole('option', {name: accountType}).click();

    await this.initialBalanceInput.fill(initialBalance);

    await this.statusRadioBtn.check();

    await this.enableOverdraftCheckbox.check();

    await this.submitAccountBtn.click();
  }
}