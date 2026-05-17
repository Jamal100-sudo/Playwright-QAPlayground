import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { AccountPage } from '../pages/AccountPage';


type MyFixtures = {

    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    accountPage: AccountPage;
};

export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {

        await use(new LoginPage(page));
    },

    dashboardPage: async ({ page }, use) => {

        await use(new DashboardPage(page));
    },

    accountPage: async ({ page }, use) => {

        await use(new AccountPage(page));
    },
});

export { expect } from '@playwright/test';