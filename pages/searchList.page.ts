import { Page, Locator } from "@playwright/test";

export default class SearchList {
    addItemToCartButton(itemName: string) { return this.page.locator(`(//div[@data-zta="product-box-list" and .//*[contains(text(), '${itemName}')]])//*[contains(@data-zta, 'add-to-cart') and @data-zta="add-to-cart"]`) }
    itemName(itemName: string) { return this.page.locator(`(//div[@data-zta="product-box-list" and .//*[contains(text(), '${itemName}')]])//*[@data-zta="product-link"]`) }
    priceOfItem(itemName: string, itemPrice: string) { return this.page.locator(`(//div[@data-zta="product-box-list" and .//*[contains(text(), '${itemName}')]]//*[@data-zta="product-link"]/ancestor::div[@data-zta="product-box-list"]//*[@data-zta="productStandardPriceAmount" and contains(text(), '${itemPrice}')])`) }

    private page: Page;
    readonly firstListItem: Locator;
    readonly firstItemPrice: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstListItem = page.locator('(//*[@data-zta="product-link"])[1]');
        this.firstItemPrice = page.locator('(//*[@data-zta="productStandardPriceAmount"])[1]');
        this.firstItemPrice = page.locator('(//*[@data-zta="productStandardPriceAmount"])[1]');
    }
    async addThisItemToCard(itemName: string) {
        await this.addItemToCartButton(itemName).click();
    };
}