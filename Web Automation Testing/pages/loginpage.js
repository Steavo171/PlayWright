const  { BasePage }  = require( "./basepage")

class LoginPage extends BasePage{

    constructor(page){
        super(page);

        this.loginLink = page.locator('.ico-login');

        this.email = page.locator('#Email');
        this.password = page.locator('#Password');
        this.loginBtn = page.locator('input.button-1.login-button');
        this.errorMessage = page.locator('.validation-summary-errors');
        this.logoutButton = page.locator('.ico-logout');
    }

    async navigate(){
        await this.page.goto('https://demowebshop.tricentis.com/login');
    }

    async enterEmail(email){
        await this.email.fill(email);
    }

    async enterPassword(password){
        await this.password.fill(password);
    }

    async clickLogin(){
        await this.loginLink.click();
    }

    async login(email,password){
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginBtn.click();
    }



    // verifyLoginSuccess(){
    //     return this.logoutButton;
    // }

    // verifyLoginFailure(){
    //     return this.errorMessage;
    // }

}
module.exports = { LoginPage };