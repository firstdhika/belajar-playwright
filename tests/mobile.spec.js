const { test, expect, devices } = require('@playwright/test');

// iPhone 13
test('cek tampilan login di iPhone 13', async ({ browser }) => {
  const context = await browser.newContext({ ...devices['iPhone 13'] });
  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com');
  await expect(page.locator('#login-button')).toBeVisible();
  await page.screenshot({ path: 'screenshots/mobile-iphone-login.png' });
  console.log('Screenshot iPhone berhasil!');
  await context.close();
});

test('login di iPhone 13', async ({ browser }) => {
  const context = await browser.newContext({ ...devices['iPhone 13'] });
  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page.locator('.title')).toHaveText('Products');
  await page.screenshot({ path: 'screenshots/mobile-iphone-products.png' });
  await context.close();
});

// Samsung Galaxy
test('cek tampilan login di Samsung Galaxy', async ({ browser }) => {
  const context = await browser.newContext({ ...devices['Galaxy S9+'] });
  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com');
  await expect(page.locator('#login-button')).toBeVisible();
  await page.screenshot({ path: 'screenshots/mobile-samsung-login.png' });
  console.log('Screenshot Samsung berhasil!');
  await context.close();
});

test('login di Samsung Galaxy', async ({ browser }) => {
  const context = await browser.newContext({ ...devices['Galaxy S9+'] });
  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page.locator('.title')).toHaveText('Products');
  await page.screenshot({ path: 'screenshots/mobile-samsung-products.png' });
  await context.close();
});