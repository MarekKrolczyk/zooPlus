import { Page, Locator } from "@playwright/test";

export default class NavbarPage {
    readonly searchBar: Locator;
    readonly searchButton: Locator;
    readonly cartButton: Locator;

    constructor(page: Page) {
        this.searchBar = page.locator('[data-zta="search_form_input_desktop"]');
        this.searchButton = page.locator('[data-zta="search_form_button_desktop"]');
        this.cartButton = page.locator('[data-testid="MiniCartLink"]');
    }
    async findItem(itemName: string) {
        await this.searchBar.fill(itemName);
        await this.searchButton.click();
    };
    async clickCartButton() {
        await this.cartButton.click();
    };
}