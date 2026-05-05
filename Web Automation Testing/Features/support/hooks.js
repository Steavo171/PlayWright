const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

Before({ tags: "@DemoWebShop" }, async function () {

    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    await this.page.goto("https://demowebshop.tricentis.com/login");
});

After({ tags: "@DemoWebShop" }, async function () {

    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
});