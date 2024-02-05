import { Page, Locator } from "@playwright/test";

export default class CookiesPage {
    readonly acceptCookiesButton: Locator;

    constructor(page: Page) {
        this.acceptCookiesButton = page.locator('[id="onetrust-accept-btn-handler"]');
    }
    async acceptCookies() {
        await this.acceptCookiesButton.click();
    };
}