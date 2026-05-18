# Belajar Playwright - Automation Testing

Project automation testing menggunakan Playwright JS.

## Tech Stack
- Playwright JS
- JavaScript
- GitHub Actions (CI/CD)

## Test Coverage
- UI Testing (Login - saucedemo.com)
- API Testing (jsonplaceholder.typicode.com)
- Cross-browser: Chromium, Firefox, WebKit

## Cara Menjalankan

Install dependencies:
```bash
npm ci
```

Jalankan semua test:
```bash
npx playwright test
```

Jalankan test tertentu:
```bash
npx playwright test login-pom.spec.js --headed
npx playwright test api.spec.js --project=chromium
```

Lihat laporan:
```bash
npx playwright show-report
```

## Struktur Project