const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

test('screenshot halaman login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  // Ambil screenshot dan simpan
  await page.screenshot({ path: 'screenshots/login-page.png', fullPage: true });

  // Cek file screenshot berhasil dibuat
  const exists = fs.existsSync('screenshots/login-page.png');
  expect(exists).toBeTruthy();
  console.log('Screenshot login berhasil disimpan!');
});

test('screenshot halaman products', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await page.screenshot({ path: 'screenshots/products-page.png', fullPage: true });

  const exists = fs.existsSync('screenshots/products-page.png');
  expect(exists).toBeTruthy();
  console.log('Screenshot products berhasil disimpan!');
});

test('screenshot element tombol login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  // Screenshot hanya tombol login
  await page.locator('#login-button').screenshot({ 
    path: 'screenshots/login-button.png' 
  });

  const exists = fs.existsSync('screenshots/login-button.png');
  expect(exists).toBeTruthy();
  console.log('Screenshot tombol login berhasil disimpan!');
});