import test, { expect } from "../fixtures/page-object.fixture";
import items from "../items/items.json";

test.beforeEach(async ({ cookiesPage, cartPage }) => {
  // Navigate to the cart page and accept cookies before each test
  await cartPage.goto();
  await cookiesPage.acceptCookies();
});

test.describe("Shopping Cart Functionality Tests", () => {
  test("User can find, view details, add to cart, and verify prices in the cart for a specific item", async ({ navbarPage, searchListPage, cartPage }) => {
    // User finds the item using the search bar
    await navbarPage.findItem(items.DinoToy.name);
    // Verify that the item is visible in the search list
    await expect(searchListPage.itemName(items.DinoToy.name)).toBeVisible();

    // User views details of the item
    await expect(searchListPage.priceOfItem(items.DinoToy.name, items.DinoToy.price)).toBeVisible();

    // User adds the item to the cart from the search list
    await searchListPage.addThisItemToCart(items.DinoToy.name);

    // User clicks on the cart button in the navigation bar
    await navbarPage.clickCartButton();

    // User verifies the item in the cart
    await expect(cartPage.productName(items.DinoToy.name)).toBeVisible();
    // Verify the total price of the item in the cart, including shipment
    await expect(cartPage.productTotalPrice(items.DinoToy.priceWithShipment)).toBeVisible();
  });
});
