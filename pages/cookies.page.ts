import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class CookiesPage extends BasePage {
  url = "cookie-policy";
  acceptCookiesButton = this.page.locator('[id="onetrust-accept-btn-handler"]');

  constructor(page: Page) {
    super(page);
  }

  async acceptCookies() {
    await this.acceptCookiesButton.click();
  }
}