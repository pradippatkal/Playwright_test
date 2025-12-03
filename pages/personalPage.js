import { expect } from '@playwright/test';

export class PersonalPage {

  constructor(page) {
    this.page = page;
  }

  async FillPersonalPageDetails(personalData, personalPageLocators) {
    //await  (this.page.waitForSelector('text=Let\'s Go!', { timeout: 20000 }));
    await expect(this.page.locator("text=Let's Go!")).toBeVisible({ timeout: 20000 });
    await this.page.waitForTimeout(9000);
    await this.page.locator(personalPageLocators.letsGoXPathButton).click();
    await this.page.waitForSelector(personalPageLocators.mailingAddLine1XPath);
    await this.page.locator(personalPageLocators.mailingAddLine1XPath).fill(personalData.mailingAddressLine1);
    await this.page.locator(personalPageLocators.cityXPath).fill(personalData.city);
    await this.page.locator(personalPageLocators.stateDropdownXPath).selectOption({ label: 'Arizona' });
    // await this.page.waitForSelector('text=Arizona', { timeout: 10000 });
    // await this.page.locator(personalPageLocators.ArizonaXPath).click();
    await this.page.locator(personalPageLocators.zipCodeXPath).fill(personalData.zipCode);
    await this.page.locator(personalPageLocators.emergencyContactNameXPath).fill(personalData.emergencyContactName);
    await this.page.locator(personalPageLocators.relationshipTContractorXpath).fill(personalData.relationshipToContractor);
    await this.page.locator(personalPageLocators.emergencyContactPhoneXPath).fill(personalData.emergencyContactPhone);
    await this.page.locator(personalPageLocators.emergencyContactEmailXPath).fill(personalData.emergencyContactemail);
    await this.page.locator(personalPageLocators.checkBox1Xpath).click();
    await this.page.locator(personalPageLocators.WhatbringsyoutoeXpRealtyXpah).click();
    await this.page.locator(personalPageLocators.selectAllXPath).check();
    await this.page.locator(personalPageLocators.saveAndContinueButtonXPath).click(); 
  }
}