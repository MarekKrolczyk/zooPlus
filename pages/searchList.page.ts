import { Page } from "@playwright/test";
import { BasePage } from "./base.page"

export  class SearchListPage extends BasePage {
    addItemToCartButton(itemName: string) { return this.page.locator(`(//div[@data-zta="product-box-list" and .//*[contains(text(), '${itemName}')]])//*[contains(@data-zta, 'add-to-cart') and @data-zta="add-to-cart"]`) }
    itemName(itemName: string) { return this.page.locator(`(//div[@data-zta="product-box-list" and .//*[contains(text(), '${itemName}')]])//*[@data-zta="product-link"]`) }
    priceOfItem(itemName: string, itemPrice: string) { return this.page.locator(`(//div[@data-zta="product-box-list" and .//*[contains(text(), '${itemName}')]]//*[@data-zta="product-link"]/ancestor::div[@data-zta="product-box-list"]//*[@data-zta="productStandardPriceAmount" and contains(text(), '${itemPrice}')])`) }
    
    firstListItem = this.page.locator('(//*[@data-zta="product-link"])[1]');
    firstItemPrice = this.page.locator('(//*[@data-zta="productStandardPriceAmount"])[1]');

  constructor(page: Page) {
    super(page);
  }
    async addThisItemToCart(itemName: string) {
        await this.addItemToCartButton(itemName).click();
    };
}