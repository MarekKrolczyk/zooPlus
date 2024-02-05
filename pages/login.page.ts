import { Page } from "@playwright/test";
import { BasePage } from '../pages/base.page';

export class LoginPage extends BasePage {
    // URL for the login page
    url = 'https://login.zooplus.pl/auth/realms/zooplus/protocol/openid-connect/auth?response_type=code&client_id=shop-myzooplus-prod-zooplus&redirect_uri=https%3A%2F%2Fwww.zooplus.pl%2Fweb%2Fsso-myzooplus%2Flogin&state=80c5476e-ed2e-4077-979d-4a45aca81998&login=true&ui_locales=pl-PL&scope=openid';

    // Locator for the login button
    loginButton = this.page.locator('[id="login-btn"]');
    
    // Locators for username and password input fields
    usernameInput = this.page.locator('[id="username"]');
    passwordInput = this.page.locator('[id="password"]');
    
    // Locator for error message
    errorMessage = this.page.locator('[data-zta="errorPageTitle"]');

    constructor(page: Page) {
        // Call the constructor of the parent class
        super(page);
    }

    // Clicks the login button
    async clickLoginButton() {
        await this.loginButton.click();
    }

    // Fills the username input field with the provided username
    async fillUsername(username: string) {
        await this.usernameInput.fill(username);
    }

    // Fills the password input field with the provided password
    async fillPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    // Logs in the user using the provided username and password
    async loginUser(username: string, password: string) {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLoginButton();
    }
}