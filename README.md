# Playwright Automation Framework (BDD + POM)

## 📌 Overview

This project is a hybrid test automation framework built using Playwright.
It supports:

*  BDD testing using Cucumber (Gherkin syntax)
*  Standard Playwright test runner
*  Page Object Model (POM) design pattern
*  Hooks for setup and teardown
*  Data-driven testing support

---

## 🛠️ Tech Stack

* Playwright
* Cucumber (BDD)
* JavaScript (Node.js)

---

## 📁 Project Structure

```
.
├── tests/              # Playwright test files (non-BDD)
├── features/           # Cucumber feature files, Step definitions,# Hooks (Before, After)
├── pages/              # Page Object Model classes
├── testdata/           # Test data files
├── playwright.config.js
├── package.json
└── README.md
```

---

## ⚙️ Prerequisites

* Node.js (v16 or higher)
* npm

Check versions:

```
node -v
npm -v
```

---

## 📦 Installation

1. Clone the repository:

```
git clone https://github.com/Steavo171/PlayWright.git
cd '.\Web Automation Testing\'
```

2. Install dependencies:

```
npm install
```

3. Install Playwright browsers:

```
npx playwright install
```

---

## ▶️ Running Tests

### 🔹 Run Playwright tests (non-BDD)

```
npx playwright test
```

---

### 🔹 Run Cucumber (BDD) tests

```
npx cucumber-js
```

---

### 🔹 Run BDD tests with tags

```
npx cucumber-js --tags "@DemoWebShop"
```

---

## 🧪 Framework Features

### Page Object Model (POM)

* Reusable page classes
* Separation of test logic and UI interactions

### Hooks

* Centralized setup/teardown
* Browser initialization handled efficiently

### BDD (Cucumber)

* Feature files written in Gherkin
* Step definitions mapped with Playwright actions

---

## 📊 Reports

Generated after execution:

```
playwright-report/
test-results/
```