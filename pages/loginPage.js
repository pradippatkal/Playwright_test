import { expect } from '@playwright/test';
export class LoginPage {

  constructor(page) {
    this.page = page;
  }
  async loginAsNewAgent(email, password, loginPageLocators) {
    await this.page.goto(loginPageLocators.joinLoginURL);
    await this.page.fill(loginPageLocators.usernameFieldXPath, email);
    await this.page.fill(loginPageLocators.passwordFieldXPath, password);
    await this.page.click(loginPageLocators.signInButtonXPath);
   // await this.page.waitForSelector('text=eXp Join Process', { timeout: 80000 });
    await this.page.waitForTimeout(9000);
    await expect(this.page.locator("text=Let's Go!")).toBeVisible();
  }

}