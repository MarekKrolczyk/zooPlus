import test, { expect } from "../fixtures/basePages";
import items from "../items/items.json";

test.beforeEach(async ({ page, cookiesPage }) => {
  await page.goto('/');
  await cookiesPage.acceptCookies();
});

test.describe("User can find, view details, add to cart, and verify prices in the cart", () => {
  test("Should successfully find, view details, add to cart, and verify prices in the cart for a specific item", async ({ navbarPage, searchListPage, cartPage }) => {
    // User finds the item using the search bar
    await navbarPage.findItem(items.DinoToy.name);
    await expect(searchListPage.itemName(items.DinoToy.name)).toBeVisible();

    // User views details of the item
    await expect(searchListPage.priceOfItem(items.DinoToy.name, items.DinoToy.price)).toBeVisible();

    // User adds the item to the cart from the search list
    await searchListPage.addThisItemToCard(items.DinoToy.name);

    // User clicks on the cart button
    await navbarPage.clickCartButton();

    // User verifies the item in the cart
    await expect(cartPage.productName(items.DinoToy.name)).toBeVisible();
    await expect(cartPage.productTotalPrice(items.DinoToy.priceWithShipment)).toBeVisible();
  });
});
