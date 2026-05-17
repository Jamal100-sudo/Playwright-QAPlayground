import { Page } from 'playwright';
import { expect } from '../fixtures/baseFixture';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('/bank');
    }

    async enterUsernameAndPassword(username: string,password: string) {
        await this.page.fill("[id='username']", username);
        await this.page.fill("[id='password']", password);
    }

    async enterIncorrectUsernameAndPassword(incorrectusername: string, incorrectpassword: string) {
        await this.page.fill("[id='username']", incorrectusername);
        await this.page.fill("[id='password']", incorrectpassword);
    }
        
    async clickLogin() {
        await this.page.click("[id='login-btn'], [data-testid='login-button']");
    }

    async assertErrorMessageUponIncorrectLogin() {
        const errorMessage = await this.page.locator("[id='alert-message']").textContent();
        expect(errorMessage?.trim()).toContain('Invalid username or password');
    }

    async assertRedirect() {
        await this.page.waitForURL('/bank/dashboard');
    }

    async assertPageTitle() {
        const title = await this.page.textContent("[data-testid='page-title']");
        if (title !== 'SecureBank Dashboard — QA Automation Practice') {
            throw new Error(`Expected title to be 'SecureBank Dashboard — QA Automation Practice', but got '${title}'`);
        }
    }

    async getPasswordInputType() {
        return await this.page.getAttribute("[data-testid='password-input']", 'type');
    }

    async clickTogglePasswordBtn() {
        await this.page.click("[data-testid='toggle-password-btn'], [aria-label='Toggle password visibility']");
    }

    async assertPasswordInputType(expectedType: string) {
        const actualType = await this.getPasswordInputType();
        if (actualType !== expectedType) {
            throw new Error(`Expected password input type to be '${expectedType}', but got '${actualType}'`);
        }
    }
}
