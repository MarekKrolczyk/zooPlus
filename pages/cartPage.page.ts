import { Page, Locator } from "@playwright/test";

export default class CartPage {
    productName(productName: string) { return this.page.locator(`(//*[@data-zta="productName" and contains(text(), '${productName}')])`) };
    productPrice(productName: string) { return this.page.locator(`(//*[@data-zta="productName" and contains(text(), '${productName}')])`) };

    productTotalPrice(priceWithShipment: string) { return this.page.locator(`(//*[@data-zta="productStandardPriceAmount" and contains(text(), '${priceWithShipment}')])`) };

    private page: Page;
    readonly acceptCookiesButton: Locator;

    constructor(page: Page) {
        this.page = page;
    }
}