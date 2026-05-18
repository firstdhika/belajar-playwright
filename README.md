# 🎭 Playwright Automation Testing

![Playwright Tests](https://github.com/firstdhika/belajar-playwright/actions/workflows/playwright.yml/badge.svg)

Project automation testing menggunakan Playwright JS mencakup UI Testing, API Testing, dan Cross-browser Testing.

## 🛠️ Tech Stack
- Playwright JS
- JavaScript
- GitHub Actions (CI/CD)

## 📋 Test Coverage

### UI Testing (saucedemo.com)
| Test Case | Status |
|---|---|
| Login berhasil | ✅ |
| Login gagal - password salah | ✅ |
| Login gagal - username kosong | ✅ |
| Login user di-lock | ✅ |
| Sort produk A-Z | ✅ |
| Sort produk Z-A | ✅ |
| Sort harga terendah | ✅ |
| Add multiple produk ke cart | ✅ |
| Remove produk dari cart | ✅ |
| Checkout tanpa isi form | ✅ |
| Alur lengkap login → cart → checkout | ✅ |
| Logout berhasil | ✅ |

### API Testing (jsonplaceholder.typicode.com)
| Test Case | Status |
|---|---|
| GET list posts | ✅ |
| GET single post | ✅ |
| POST buat post baru | ✅ |
| PUT update post | ✅ |
| DELETE hapus post | ✅ |

## 🚀 Cara Menjalankan

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
npx playwright test checkout.spec.js --headed
```

Lihat laporan:
```bash
npx playwright show-report
```

## 📁 Struktur Project
```
belajar-playwright/
├── pages/
│   ├── LoginPage.js        # Page Object - Login
│   └── CartPage.js         # Page Object - Cart & Checkout
├── tests/
│   ├── login.spec.js       # UI test dasar
│   ├── login-pom.spec.js   # UI test dengan POM
│   ├── checkout.spec.js    # Cart, checkout, logout
│   └── api.spec.js         # API testing
├── .github/
│   └── workflows/
│       └── playwright.yml  # CI/CD GitHub Actions
├── playwright.config.js
└── README.md
```

## 🌐 Cross-browser Testing
Test dijalankan otomatis di 3 browser:
- Chromium
- Firefox  
- WebKit (Safari)