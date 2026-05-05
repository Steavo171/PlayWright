import{test,expect} from '@playwright/test'

test('End to End DWS',async ({page}) => {
    
    await page.goto("https://demowebshop.tricentis.com/login");
    await page.locator('#Email').fill('maxplank@gmail.com');
    await page.locator('#Password').fill('1234567890');
    await page.locator('[value = "Log in"]').click();

    expect (page.getByRole("link",{name:"maxplank@gmail.com"})).toBeVisible();    //asserting

    await page.click('text=Computers');
    await page.click('text=Desktops');

    const dropDown = page.locator('#products-orderby');       //another way using third varaible 
    await dropDown.selectOption({label:'Name: Z to A'});

    await page.locator('.product-item').filter({hasText:"expensive"}).getByRole("button").click();
    // await page.getByRole('link', { name: 'Build your own expensive computer', exact: true }).click();

    await page.locator('#add-to-cart-button-74').click();
    await page.locator('#topcartlink').click();
    await page.locator('#termsofservice').click();
    await page.locator('#checkout').click();

    
    await page.locator('div#billing-buttons-container input').click();
    await page.locator('div#shipping-buttons-container input').click();
    await page.locator('div#shipping-method-buttons-container input').click();
    await page.locator('div#payment-method-buttons-container input').click();
    // await page.locator('div #payment-method-please-wait input').click();
    await page.locator('div#payment-info-buttons-container input').click();
    await page.locator('div#confirm-order-buttons-container input').click();

    await page.pause();
    
})
