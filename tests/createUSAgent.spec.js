import { test } from '@playwright/test';
import { IndexPage } from '../pages/indexPage.js';
import { LoginPage } from '../pages/loginPage.js';
import { agentData,sponsorData } from '../utils/generateAgent.js';
import { indexPageLocators, loginPageLocators,personalPageLocators,sponsorPageSelector } from '../utils/locators.js';
import { PersonalPage } from '../pages/personalPage.js';
import { SponsorPage } from '../pages/sponsorPage.js';

// test(indexPageLocators.testName, async ({ page }) => {

  test('Create US Agent', async ({ page }) => {
  const indexPage = new IndexPage(page);
  const loginPage = new LoginPage(page);
  const createdAgent = await indexPage.createNewAgent(agentData, indexPageLocators);
  await loginPage.loginAsNewAgent(createdAgent.email, createdAgent.password, loginPageLocators);
  const PersonalPage1 = new PersonalPage(page);
   await PersonalPage1.FillPersonalPageDetails(agentData,personalPageLocators);

   //fill Sponsor Page details
   const sponsorPage1 = new SponsorPage(page);
   await sponsorPage1.FillSponsorPageDetails(sponsorData, sponsorPageSelector);


})
