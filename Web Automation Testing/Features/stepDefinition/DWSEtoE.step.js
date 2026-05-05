const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginpage');
const { ProductPage } = require('../../pages/productpage');
const { CartPage } = require('../../pages/cartpage');

let login, product, cart;

Given('open the Demo Web Shop login page', async function () {
    
    login = new LoginPage(this.page);
    product = new ProductPage(this.page);
    cart = new CartPage(this.page);

    await login.navigate();
});

When('login with valid credentials', async function () {
    await login.login('maxplank@gmail.com', '1234567890');
});

When('navigate to Desktops under Computers', async function () {
    // await this.page.click('text=Computers');
    // await this.page.click('text=Desktops');
    await product.goToDesktops();
});

When('sort products by {string}', async function (option) {
    await product.sortProducts(option);
});

When('add the expensive product to the cart', async function () {
    await product.addExpensiveProductToCart();
});

When('open the cart and proceed to checkout',{ timeout: 20000 }, async function () {
    await cart.openCart();
    await cart.proceedToCheckout();
});

Then('should see the logout button', async function () {
    await expect(login.logoutButton).toBeVisible();
});