const { test, expect } = require('@playwright/test');

test('login berhasil', async ({ page }) => {
  // 1. Buka website
  await page.goto('https://www.saucedemo.com');

  // 2. Isi username
  await page.locator('#user-name').fill('standard_user');

  // 3. Isi password
  await page.locator('#password').fill('secret_sauce');

  // 4. Klik tombol login
  await page.locator('#login-button').click();

  // 5. Cek berhasil masuk ke halaman produk
  await expect(page.locator('.title')).toHaveText('Products');
});

test('login gagal - password salah', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('password_salah');
  await page.locator('#login-button').click();

  // Cek muncul pesan error
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('login gagal - username kosong', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('#login-button').click();

  // Cek muncul pesan error
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});