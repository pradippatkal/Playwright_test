import { expect } from '@playwright/test';
import {sponsorPageSelector} from '../utils/locators.js';

export class SponsorPage {

  constructor(page) {
    this.page = page;
  } 


  async FillSponsorPageDetails(sponsorData, sponsorPageLocators)
   {   
  console.log("Start Filling Sponsor Page details...");

// 1. Initial page check
await expect(this.page.locator("text=Sponsor Information (Step 2 of 6)")).toBeVisible({ timeout: 20000 });
await this.page.locator(sponsorPageLocators.understandTheSponsorshipPolicy).click();

// 2. Click the button that redirects
await this.page.locator(sponsorPageLocators.SelectOrDeclineSponsorButton).click();

// --- THE FIX ---
// You MUST wait for the new page/element to load after the click.
// I fixed the typo in your selector (removed the extra parenthesis)
await expect(this.page.locator("text=Select your sponsor")).toBeVisible({ timeout: 30000 });

// 3. Now it is safe to fill the email
await this.page.locator(sponsorPageLocators.sponsorEXPEmailInputBox).fill(sponsorData.sponsorEmail);
await this.page.locator(sponsorPageLocators.SearchSponsorButton).click();
await this.page.locator(sponsorPageLocators.selectSponsor).click();
await this.page.locator(sponsorPageLocators.proceedButton).click();
console.log("Sponsor selected successfully.");        
await expect(this.page.locator("text=ian Anderson")).toBeVisible({ timeout: 30000 });
await this.page.locator(sponsorPageSelector.yesButton).click();
//await this.page.locator(sponsorPageLocators.).check();
await this.page.locator(sponsorPageLocators.saveAndContinueButtonXPath).click();
console.log("Sponsor Page details filled successfully.");
await expect(this.page.locator("text=License Information (Step 3 of 6)")).toBeVisible({ timeout: 20000 });
}

}