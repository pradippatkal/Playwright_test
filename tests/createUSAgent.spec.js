import { test } from '@playwright/test';
import { IndexPage } from '../pages/indexPage.js';
import { LoginPage } from '../pages/loginPage.js';
import { agentData } from '../utils/generateAgent.js';
import { indexPageLocators, loginPageLocators,personalPageLocators } from '../utils/locators.js';
import { PersonalPage } from '../pages/personalPage.js';

// test(indexPageLocators.testName, async ({ page }) => {

  test('Create US Agent', async ({ page }) => {
  const indexPage = new IndexPage(page);
  const loginPage = new LoginPage(page);
  const createdAgent = await indexPage.createNewAgent(agentData, indexPageLocators);
  await loginPage.loginAsNewAgent(createdAgent.email, createdAgent.password, loginPageLocators);
  const PersonalPage1 = new PersonalPage(page);
   await PersonalPage1.FillPersonalPageDetails(agentData,personalPageLocators);



})
