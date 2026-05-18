# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: trace.spec.js >> test gagal - lihat trace untuk debug
- Location: tests/trace.spec.js:11:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.title')
Expected: "Dashboard"
Received: "Products"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.title')
    14 × locator resolved to <span class="title" data-test="title">Products</span>
       - unexpected value "Products"

```

```yaml
- text: Products
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('test berhasil - ada trace', async ({ page }) => {
  4  |   await page.goto('https://www.saucedemo.com');
  5  |   await page.locator('#user-name').fill('standard_user');
  6  |   await page.locator('#password').fill('secret_sauce');
  7  |   await page.locator('#login-button').click();
  8  |   await expect(page.locator('.title')).toHaveText('Products');
  9  | });
  10 | 
  11 | test('test gagal - lihat trace untuk debug', async ({ page }) => {
  12 |   await page.goto('https://www.saucedemo.com');
  13 |   await page.locator('#user-name').fill('standard_user');
  14 |   await page.locator('#password').fill('secret_sauce');
  15 |   await page.locator('#login-button').click();
  16 | 
  17 |   // Sengaja salah - harusnya 'Products' bukan 'Dashboard'
> 18 |   await expect(page.locator('.title')).toHaveText('Dashboard');
     |                                        ^ Error: expect(locator).toHaveText(expected) failed
  19 | });
```