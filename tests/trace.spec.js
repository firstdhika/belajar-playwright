const { test, expect } = require('@playwright/test');

test('test berhasil - ada trace', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page.locator('.title')).toHaveText('Products');
});

test('test gagal - lihat trace untuk debug', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // Sengaja salah - harusnya 'Products' bukan 'Dashboard'
  await expect(page.locator('.title')).toHaveText('Dashboard');
});