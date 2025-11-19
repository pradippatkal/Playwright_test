import { expect } from '@playwright/test';

export class IndexPage {

  constructor(page) {
    this.page = page;
  }

  async createNewAgent(agentData, indexPageLocators) {
    await this.page.goto(indexPageLocators.joinURL);
    await this.page.waitForSelector('text=Select your country', { timeout: 20000 });
    await this.page.locator(indexPageLocators.USLable).click()
    await this.page.waitForSelector('text=Create an account, or sign in.', { timeout: 10000 });
    await this.page.waitForSelector(indexPageLocators.neweXpRealtyAgentLable);
    await this.page.locator(indexPageLocators.firstNameXPath).fill(agentData.firstName);
    await this.page.locator(indexPageLocators.lastNameXPath).fill(agentData.lastName);
    await this.page.locator(indexPageLocators.emailXPath).fill(agentData.email);
    await this.page.locator(indexPageLocators.confirmedEmailXPath).fill(agentData.email);
    await this.page.locator(indexPageLocators.multipleLicensesXPath).selectOption({ label: 'No' });
    await this.page.locator(indexPageLocators.phoneXpath).fill(agentData.phone);
    await this.page.locator(indexPageLocators.stateDropdownXPath).click()
    await this.page.waitForSelector('text=Arizona', { timeout: 10000 });
    await this.page.locator(indexPageLocators.arizonaXPath).click()
    await this.page.locator(indexPageLocators.checkBox1XPath).click()
    await this.page.locator(indexPageLocators.checkBox2XPath).click()
    await this.page.locator(indexPageLocators.createAccountButtonXPath).click()
    await this.page.waitForSelector('text=Sign in to begin the application.', { timeout: 80000 });
    // await this.page.waitForTimeout(9000);
    await expect(this.page.getByText(indexPageLocators.successLable)).toBeVisible();

    return {
      email: agentData.email,
      password: "Overstuff8-Maximize-Choking"
    };

  }
}