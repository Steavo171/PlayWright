const { BasePage } = require('./basepage');

class ProductPage extends BasePage {
    constructor(page) {
        super(page);
        
        this.sortDropdown = page.locator('#products-orderby');
        this.expensiveProductBtn = page.locator('.product-item').filter({ hasText: "expensive" }).getByRole("button");
        this.computersDropDown = page.locator('//ul[@class="top-menu"]//a[@href="/computers"]');
        this.desktopOption = page.locator('//ul[@class="top-menu"]//a[@href="/desktops"]');
    }

    async goToDesktops(){
        await this.computersDropDown.click();
        await this.desktopOption.click();
    }

    async sortProducts(optionLabel) {
        await this.sortDropdown.waitFor({ state: 'visible', timeout: 10000 });
        await this.sortDropdown.selectOption({ label: optionLabel });
    }
    async addExpensiveProductToCart() {
        await this.expensiveProductBtn.click();
    }

}

module.exports = { ProductPage };