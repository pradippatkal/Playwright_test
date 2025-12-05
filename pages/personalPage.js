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
    await this.page.locator(personalPageLocators.WhatbringsyoutoeXpRealtyXpah).click();
    await this.page.locator(personalPageLocators.selectAllXPath).check();
    await this.page.locator(personalPageLocators.checkBox1Xpath).click();
    await this.page.locator(personalPageLocators.saveAndContinueButtonXPath).click();
    console.log("testing");
//     if (await this.page.locator('text=Use Original Address').isVisible()) {
//     await this.page.locator(personalPageLocators.useOriginalAddress).click();
//     console.log("Using Original Address...");
// }
    try {
    // 1. Define the button locator
    // It's safer to use the exact text or the variable you already created
    const originalAddressBtn = this.page.locator('text=Use Original Address');

    // 2. Wait up to 5 seconds for it to become visible
    // If it doesn't appear in 5s, it throws an error and jumps to 'catch'
    await originalAddressBtn.waitFor({ state: 'visible', timeout: 5000 });

    // 3. If we are here, the button exists and is visible. Click it.
    await originalAddressBtn.click();
    console.log("Using Original Address...");

} catch (e) {
    // 4. If the popup didn't appear within 5 seconds, just ignore and continue
    console.log("Address popup did not appear, proceeding...");
}
   

    if (await this.page.locator('text=Sponsor Information (Step 2 of 6)').isVisible()) {
    console.log("Personal Page details filled successfully.");
  }
}
}