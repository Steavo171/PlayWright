import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { ProductPage } from '../pages/productpage';
import { CartPage } from '../pages/cartpage';

test.describe.serial('Demo Web Shop E2E Tests', () => {

    let page;
    let login;
    let product;
    let cart;

    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();

    
        login = new LoginPage(page);
        product = new ProductPage(page);
        cart = new CartPage(page);

        await login.navigate('https://demowebshop.tricentis.com/');
        await login.clickLogin();
        await login.login('maxplank@gmail.com','1234567890');
        await expect(login.logoutButton).toBeVisible();
    });

    test('Navigate Desktops and Add Product', async () => {
        await page.click('text=Computers');
        await page.click('text=Desktops');
        await product.sortProducts('Name: Z to A');
        await product.addExpensiveProductToCart();
    });

    test('Open Cart and Checkout', async () => {
        await cart.openCart();
        await cart.proceedToCheckout();
    });

    test.afterAll(async () => {
        await page.close();
    });
});