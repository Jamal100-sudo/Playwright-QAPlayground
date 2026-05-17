import { test } from '../fixtures/baseFixture';
import { testData } from '../utils/testData';

test('TC-LOGIN-01: Successful login with admin credentials', async ({ page,loginPage  }) => {
        await loginPage.navigate();
        await loginPage.enterUsernameAndPassword(testData.Username, testData.password);
        await loginPage.clickLogin();
        await loginPage.assertRedirect();
        await loginPage.assertPageTitle();
});

test('TC-LOGIN-02: Failed Login shows error alert for invalid credentials', async ({ page,loginPage  }) => {
        await loginPage.navigate();
        await loginPage.enterIncorrectUsernameAndPassword(testData.IncorrectUsername, testData.IncorrectPassword);
        await loginPage.clickLogin();
        await loginPage.assertErrorMessageUponIncorrectLogin();
});

test('TC-LOGIN-03: Toggle password visibility hides and reveals password text', async ({ page, loginPage }) => {
        await loginPage.navigate();
        await loginPage.enterUsernameAndPassword(testData.Username, testData.password);
        
        // Assert initial state is 'password' (text is hidden)
        await loginPage.assertPasswordInputType('password');
        
        // Click toggle button to reveal password
        await loginPage.clickTogglePasswordBtn();
        
        // Assert input type is now 'text' (text is visible)
        await loginPage.assertPasswordInputType('text');
});
