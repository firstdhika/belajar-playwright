const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('login berhasil', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(loginPage.pageTitle).toHaveText('Products');
});

test('login gagal - password salah', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'password_salah');
  await expect(loginPage.errorMessage).toBeVisible();
});

test('login gagal - username kosong', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('', '');
  await expect(loginPage.errorMessage).toBeVisible();
});