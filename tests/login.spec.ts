import test, { expect } from "../fixtures/page-object.fixture";
import userData from "../configs/usersData.json";
import errorMessages from "../errorMessages/400Messages.json";

test.beforeEach(async ({loginPage,cookiesPage }) => {
  // Navigate to the login page before each test
  await loginPage.goto();
  await cookiesPage.acceptCookies();
});

test.describe("User Login Tests", () => {
  test("User can successfully log in with correct credentials", async ({ loginPage }) => {
    // Fill in the username and password fields with valid data
    await loginPage.fillUsername(userData.users.UserLogin);
    await loginPage.fillPassword(userData.users.UserPassword);
    // Click the login button
    await loginPage.clickLoginButton();

    // Verify that there is error messages displayed after successful login (bot protection)
    await expect(loginPage.errorMessage).toContainText(errorMessages[400].Title);
  });
    test("User can login with reusable function", async ({ loginPage }) => {
    // This function can be used in all other tests in case login is needed.
    await loginPage.loginUser(userData.users.UserLogin, userData.users.UserPassword);
    await expect(loginPage.errorMessage).toContainText(errorMessages[400].Title);
  });
});