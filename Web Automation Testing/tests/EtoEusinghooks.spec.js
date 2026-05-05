import { test, expect } from '@playwright/test';

// const tesdat = JSON.parse(JSON.stringify(require('../testData/login.json')));

test.describe.serial('End to End automation testing', () => {       //  ,{tag:'@regression'} , 

    let page;
    let context;

    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://demowebshop.tricentis.com");
    });

    test('Login into the application', async () => {

        await page.getByRole('link', { name: 'Log in' }).click();
        // await page.locator('#Email').fill(tesdat.Email);
        // await page.locator('#Password').fill(tesdat.Password);
        await page.locator('#Email').fill('maxplank@gmail.com');
        await page.locator('#Password').fill('1234567890');
        await page.locator('[value="Log in"]').click();

        await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();

        // expect(page.locator('.account')).toHaveText('maxplank@gmail.com');
        // const accountLocator = page.locator('.account');
        // const accountName = await accountLocator.textContent();
        // console.log("Login successful. Logged in as:", accountName);
        // expect(accountName).toContain('maxplank@gmail.com');

    });

    test('Navigate computers and select sorting', async () => {
        await page.click('text=Computers');
        await page.click('text=Desktops');

        const dropDown = page.locator('#products-orderby');
        await dropDown.selectOption({ label: 'Created on' });
        await page.locator('.product-item').filter({hasText:"expensive"}).getByRole("button").click();
        await page.locator('#add-to-cart-button-74').click();
        await page.locator('#topcartlink').click();
        await page.locator('#termsofservice').click();
        await page.locator('#checkout').click();

        // await expect(dropDown).toHaveValue('15');
        // const selectedValue = await dropDown.inputValue();
        // console.log("Dropdown selected value:", selectedValue);
    });
    test('checkout',async()=>{
        await page.locator('div#billing-buttons-container input').click();
        await page.locator('div#shipping-buttons-container input').click();
        await page.locator('div#shipping-method-buttons-container input').click();
        await page.locator('div#payment-method-buttons-container input').click();
        // await page.locator('div #payment-method-please-wait input').click();
        await page.locator('div#payment-info-buttons-container input').click();
        await page.locator('div#confirm-order-buttons-container input').click();
    })

    test.afterAll(async () => {
        await page.close();
        await context.close();
    });

});
