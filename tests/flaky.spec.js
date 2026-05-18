const { test, expect } = require('@playwright/test');

// Simulasi test yang butuh waktu loading
test('tunggu element muncul - dengan timeout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  // Tunggu sampai tombol login muncul (max 10 detik)
  await expect(page.locator('#login-button')).toBeVisible({ timeout: 10000 });
});

// Simulasi test dengan retry
test('cek jumlah produk di halaman', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // Tunggu semua produk loaded
  await page.waitForSelector('.inventory_item');

  // Cek ada 6 produk
  const products = page.locator('.inventory_item');
  await expect(products).toHaveCount(6);
});

// Simulasi waitForResponse - tunggu API selesai
test('tunggu API response selesai', async ({ page }) => {
  // Tunggu network request selesai sebelum lanjut
  await page.goto('https://www.saucedemo.com');

  await Promise.all([
    page.waitForLoadState('networkidle'), // tunggu semua request selesai
    page.locator('#user-name').fill('standard_user'),
  ]);

  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page.locator('.title')).toHaveText('Products');
});