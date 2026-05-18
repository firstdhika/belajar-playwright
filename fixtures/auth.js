const { test: base } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

// Custom fixture - login otomatis sebelum setiap test
const test = base.extend({
  authenticatedPage: async ({ page }, use) => {
    // Setup — login dulu sebelum test
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    // Jalankan test
    await use(page);

    // Teardown — tidak perlu logout manual
  }
});

module.exports = { test };