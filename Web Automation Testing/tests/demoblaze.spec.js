import{test,expect} from '@playwright/test';


test.describe.serial('Demo Blaze',()=>{

  let page;
  let context;

  test.beforeAll(async({browser})=>{
    context = await browser.newContext();
    page = await context.newPage();
  });

  test('launch application',async()=>{
    await page.goto('https://www.demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
  });

  test('Login Into Application',async()=>{
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('automation.qa');
    await page.locator('#loginpassword').fill('automation@123');
    await page.getByRole('button',{name:'Log in'}).first().click();
    await expect(page.locator('#nameofuser')).toContainText('Welcome automation.qa');

  });

  test('search dell laptop',async()=>{
    await page.getByRole('link',{name:'Laptops'}).click();

    await page.getByRole('link',{name:'Dell i7 8gb'}).click();
    await page.getByRole('link',{name:'Add to cart'}).click();
    
  
  })

  test('purchase product',async()=>{
    await page.locator('text=Cart').first().click();
    await page.getByRole('button',{name:'Place Order'}).click();

    await page.locator('#name').fill('Rahul');
    await page.locator('#country').fill('US');
    await page.locator('#city').fill('LA');
    await page.locator('#card').fill('1234567887654321');
    await page.locator('#month').fill('June');
    await page.locator('#year').fill('2026');
    await page.getByRole('button',{name:'Purchase'}).click();
    await page.getByRole('button',{name:'OK'}).click();

    await page.getByRole('button',{name:'Close'}).first().click();

  })


  test('Logout from application',async()=>{
    await page.locator('#logout2').click();

    await expect(page.locator('#login2')).toContainText('Log in');

  })


  test.afterAll(async () => {
    await page.close();
    await context.close();
  });

});