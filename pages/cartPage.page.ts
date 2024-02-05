import { Page } from "@playwright/test";
import { BasePage } from '../pages/base.page';

export class CartPage extends BasePage {
    productName(productName: string) { return this.page.locator(`(//*[@data-zta="productName" and contains(text(), '${productName}')])`) };
    productPrice(productName: string) { return this.page.locator(`(//*[@data-zta="productName" and contains(text(), '${productName}')])`) };
    productTotalPrice(priceWithShipment: string) { return this.page.locator(`(//span[@data-zta="productStandardPriceAmount" and contains(text(), '${priceWithShipment}')])`);
}
    constructor(page: Page) {
        super(page);
      }
}