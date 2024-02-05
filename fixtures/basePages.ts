import { test as baseTest } from "@playwright/test";
import NavbarPage from "../pages/navbar.page";
import SearchListPage from "../pages/searchList.page";
import CookiesPage from "../pages/cookies.page.ts";
import CartPage from "../pages/cartPage.page.ts";

const test = baseTest.extend<{
    navbarPage: NavbarPage;
    searchListPage: SearchListPage;
    cookiesPage: CookiesPage;
    cartPage: CartPage;
}>({
    navbarPage: async ({ page }, use) => use(new NavbarPage(page)),
    searchListPage: async ({ page }, use) => use(new SearchListPage(page)),
    cookiesPage: async ({ page }, use) => use(new CookiesPage(page)),
    cartPage: async ({ page }, use) => use(new CartPage(page)),
});

export default test;
export const expect = test.expect