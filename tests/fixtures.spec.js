const { test } = require('../fixtures/auth');
const { expect } = require('@playwright/test');
const { testData } = require('../fixtures/testData');

// Tidak perlu login lagi! authenticatedPage sudah handle itu
test('cek halaman products setelah login', async ({ authenticatedPage }) => {
  await expect(authenticatedPage.locator('.title')).toHaveText('Products');
});

test('add produk ke cart pakai test data', async ({ authenticatedPage }) => {
  await authenticatedPage
    .locator(`[data-test="${testData.products.backpack}"]`)
    .click();

  await expect(authenticatedPage.locator('.shopping_cart_badge')).toHaveText('1');
});

test('checkout pakai test data', async ({ authenticatedPage }) => {
  // Add produk
  await authenticatedPage
    .locator(`[data-test="${testData.products.backpack}"]`)
    .click();

  // Pergi ke cart
  await authenticatedPage.locator('.shopping_cart_link').click();

  // Checkout
  await authenticatedPage.locator('[data-test="checkout"]').click();

  // Isi form pakai testData
  await authenticatedPage
    .locator('[data-test="firstName"]')
    .fill(testData.checkoutInfo.firstName);
  await authenticatedPage
    .locator('[data-test="lastName"]')
    .fill(testData.checkoutInfo.lastName);
  await authenticatedPage
    .locator('[data-test="postalCode"]')
    .fill(testData.checkoutInfo.postalCode);

  await authenticatedPage.locator('[data-test="continue"]').click();
  await authenticatedPage.locator('[data-test="finish"]').click();

  await expect(
    authenticatedPage.locator('.complete-header')
  ).toHaveText('Thank you for your order!');
});