import { test as baseTest } from "@playwright/test";
import { NavbarPage } from "../pages/navbar.page.ts";
import { SearchListPage } from "../pages/searchList.page.ts";
import { CookiesPage } from "../pages/cookies.page.ts";
import { CartPage } from "../pages/cartPage.page.ts";
import { LoginPage } from "../pages/login.page.ts";

// Custom test object extended with page objects
const pageObjectTest = baseTest.extend<{
    navbarPage: NavbarPage;
    searchListPage: SearchListPage;
    cookiesPage: CookiesPage;
    cartPage: CartPage;
    loginPage: LoginPage;
}>({
    // Create instances of page objects for each test
    navbarPage: async ({ page }, use) => use(new NavbarPage(page)),
    searchListPage: async ({ page }, use) => use(new SearchListPage(page)),
    cartPage: async ({ page }, use) => use(new CartPage(page)),
    cookiesPage: async ({ page }, use) => use(new CookiesPage(page)),
    loginPage: async ({ page }, use) => use(new LoginPage(page)),
});

// Export the customized test object
export default pageObjectTest;

// Export expect function from the customized test object
export const expect = pageObjectTest.expect;