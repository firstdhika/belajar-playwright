const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { CartPage } = require('../pages/CartPage');

// ==============================
// LOGIN TEST
// ==============================
test('login dengan user yang di-lock', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('locked_out_user', 'secret_sauce');
  await expect(loginPage.errorMessage).toContainText('locked out');
});

// ==============================
// SORT PRODUK
// ==============================
test('sort produk A-Z', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await page.locator('[data-test="product-sort-container"]').selectOption('az');
  const firstProduct = await page.locator('.inventory_item_name').first().textContent();
  expect(firstProduct).toBe('Sauce Labs Backpack');
});

test('sort produk Z-A', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await page.locator('[data-test="product-sort-container"]').selectOption('za');
  const firstProduct = await page.locator('.inventory_item_name').first().textContent();
  expect(firstProduct).toBe('Test.allTheThings() T-Shirt (Red)');
});

test('sort produk harga terendah', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
  const firstPrice = await page.locator('.inventory_item_price').first().textContent();
  expect(firstPrice).toBe('$7.99');
});

// ==============================
// CART TEST
// ==============================
test('add multiple produk ke cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Add 3 produk
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

  // Cek badge cart angka 3
  await expect(page.locator('.shopping_cart_badge')).toHaveText('3');
});

test('remove produk dari cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Add produk dulu
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Pergi ke cart
  await page.locator('.shopping_cart_link').click();

  // Remove produk
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

  // Cek cart kosong
  await expect(page.locator('.cart_item')).toHaveCount(0);
});

// ==============================
// CHECKOUT VALIDASI
// ==============================
test('checkout tanpa isi form - validasi error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Add produk & pergi ke cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('.shopping_cart_link').click();
  await page.locator('[data-test="checkout"]').click();

  // Klik continue tanpa isi form
  await page.locator('[data-test="continue"]').click();

  // Cek muncul error
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');
});

// ==============================
// LOGOUT
// ==============================
test('logout berhasil', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Buka menu burger
  await page.locator('#react-burger-menu-btn').click();

  // Klik logout
  await page.locator('#logout_sidebar_link').click();

  // Cek kembali ke halaman login
  await expect(page.locator('#login-button')).toBeVisible();
});