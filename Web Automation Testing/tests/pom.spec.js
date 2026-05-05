import { test ,expect} from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { ProductPage } from '../pages/productpage';
import { CartPage } from '../pages/cartpage';

test.describe.serial('Login Tests', () => {

    let page;
    let login;
    let product;
    let cart;

    test('Demo Web Shop End to End Test', async ({page}) => {

        login = new LoginPage(page);
        product = new ProductPage(page);
        cart = new CartPage(page);

        await login.navigate('https://demowebshop.tricentis.com/');
        await login.clickLogin();
        await login.login('maxplank@gmail.com','1234567890');
        await expect(login.logoutButton).toBeVisible();

        await page.click('text=Computers');
        await page.click('text=Desktops');
        await product.sortProducts('Name: Z to A');
        await product.addExpensiveProductToCart();

        await cart.openCart();
        await cart.proceedToCheckout();

        await page.pause();
    });

    
    // test('Invalid credentials', async ({page}) => {

    //     login = new LoginPage(page);

    //     await login.navigate('https://demowebshop.tricentis.com/');
    //     await login.clickLogin();
    //     await login.login('maxplank@gmail.com','12345678900');

    //     await expect(login.errorMessage).toBeVisible();
    // });

});