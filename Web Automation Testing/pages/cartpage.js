const { BasePage } = require('./basepage');

class CartPage extends BasePage {
    constructor(page) {
        super(page);

        this.shoppingCartLink = page.locator('#add-to-cart-button-74');
        this.topcart = page.locator('#topcartlink');
        this.termsCheckbox = page.locator('#termsofservice');
        this.checkoutBtn = page.locator('#checkout');

        this.one = page.locator('div#billing-buttons-container input');
        this.two = page.locator('div#shipping-buttons-container input');
        this.three = page.locator('div#shipping-method-buttons-container input');
        this.four = page.locator('div#payment-method-buttons-container input');
        // await page.locator('div #payment-method-please-wait input');
        this.five = page.locator('div#payment-info-buttons-container input');
        this.six = page.locator('div#confirm-order-buttons-container input');

    }

    async openCart() {
        await this.shoppingCartLink.click();
        await this.topcart.first().click();
        await this.topcart.click();
    }

    async proceedToCheckout() {
        await this.termsCheckbox.check();
        await this.checkoutBtn.click();
        await this.one.click();
        await this.two.click();
        await this.three.click();
        await this.four.click();
        await this.five.click();
        await this.six.click();

    }
}

module.exports = { CartPage };