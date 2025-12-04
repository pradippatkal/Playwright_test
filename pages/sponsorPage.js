import { expect } from '@playwright/test';

export class SponsorPage {

  constructor(page) {
    this.page = page;
  } 


  async FillSponsorPageDetails(sponsorData, sponsorPageLocators) {
    await expect(this.page.locator("text=Sponsor Information (Step 2 of 6)")).toBeVisible({ timeout: 20000 });
         await this.page.locator(sponsorPageLocators.understandTheSponsorshipPolicy).click();
        await this.page.locator(sponsorPageLocators.SelectOrDeclineSponsorButton).click();
       await this.page.locator('text=Select your sponsor)').waitFor();
    sponsorEXPEmailInputBox : '//input[@id="88.SponsorManagement.Applicant_SponsorSelect_XD.textBox4_pso_7"]',
       await this.page.locator(sponsorPageLocators.sponsorEXPEmailInputBox).fill(sponsorData.sponsorEmail);
         await this.page.locator(sponsorPageLocators.SearchSponsorButton).click();
            await this.page.locator(sponsorPageLocators.selectSponsor).click();
      
      

  }

}

// async FillSponsorPageDetails(sponsorData, sponsorPageLocators) {

    
//     await expect(this.page.locator("text=Select your sponsor")).toBeVisible({ timeout: 20000 });
// }
