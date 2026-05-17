# 🎭 Playwright-QAPlayground

A comprehensive QA testing framework built with **Playwright** and **TypeScript**, implementing the Page Object Model (POM) pattern for maintainable, scalable end-to-end testing.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [Resources](#resources)

## 🎯 Overview

Playwright-QAPlayground is a modern QA automation testing framework designed for web application testing. It leverages Playwright's powerful browser automation capabilities combined with TypeScript's type safety to create robust, maintainable test suites.

## ✨ Features

- **Playwright Integration**: Cross-browser testing (Chromium, Firefox, WebKit)
- **TypeScript**: Full type safety and excellent IDE support
- **Page Object Model**: Clean, maintainable test structure
- **Modular Page Classes**: Reusable components for different application pages
- **Type-Safe Locators**: Strongly-typed element locators and interactions
- **Easy to Extend**: Simple pattern for adding new page objects

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager (comes with Node.js)
- **Git** - For version control

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jamal100-sudo/Playwright-QAPlayground.git
   cd Playwright-QAPlayground
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or with yarn:
   ```bash
   yarn install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## 📁 Project Structure

```
Playwright-QAPlayground/
├── pages/
│   ├── AccountPage.ts          # Account management page object
│   └── ...                     # Additional page objects
├── tests/
│   ├── account.spec.ts         # Account-related tests
│   └── ...                     # Additional test files
├── playwright.config.ts        # Playwright configuration
├── package.json               # Project dependencies
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## 🧪 Running Tests

### Run all tests:
```bash
npm test
```

### Run tests in UI mode (interactive):
```bash
npm run test:ui
```

### Run tests in headed mode (see browser):
```bash
npm run test:headed
```

### Run specific test file:
```bash
npx playwright test tests/account.spec.ts
```

### Run tests with specific browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Debug tests:
```bash
npx playwright test --debug
```

### View test report:
```bash
npx playwright show-report
```

## ⚙️ Configuration

The project uses `playwright.config.ts` for Playwright configuration. Key settings include:

- **Base URL**: Set the application's base URL for all tests
- **Browsers**: Configure which browsers to test against
- **Timeout**: Set test and action timeouts
- **Screenshots/Videos**: Capture evidence on test failures
- **Retries**: Automatic retry failed tests

Modify `playwright.config.ts` to customize these settings for your needs.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

### Guidelines

- Follow the existing code style and naming conventions
- Add TypeScript types for all new code
- Create page objects for new pages/features
- Write clear, descriptive test names
- Include comments for complex logic

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Test Documentation](https://playwright.dev/docs/intro)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)
- [Best Practices](https://playwright.dev/docs/best-practices)

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Testing! 🎉**
