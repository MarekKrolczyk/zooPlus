import { Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class NavbarPage extends BasePage {
  searchBar = this.page.locator('[data-zta="search_form_input_desktop"]');
  searchButton = this.page.locator('[data-zta="search_form_button_desktop"]');
  cartButton = this.page.locator('[data-testid="MiniCartLink"]');

  constructor(page: Page) {
    super(page);
  }

  async findItem(itemName: string) {
    await this.searchBar.fill(itemName);
    await this.searchButton.click();
  }
  async clickCartButton() {
    await this.cartButton.click();
  }
}