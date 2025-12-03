


export const indexPageLocators = {
  testName: "USJoinApp - agentRegistration",
  joinURL: 'https://joinapp-accp.exprealty.com/index.html',
  USLable: '.mx-name-ee1f139b85314830aac88c74dea4102a',
  neweXpRealtyAgentLable: '.mx-name-text6',
  firstNameXPath: '.mx-name-USResidential_Input_FirstName input',
  lastNameXPath: '.mx-name-USResidential_Input_LastName input',
  emailXPath: '.mx-name-USResidential_Input_Email input',
  confirmedEmailXPath: '.mx-name-USResidential_Input_Email_Confirmed input',
  multipleLicensesXPath: '.mx-name-USResidential_dropDown_MultipleLicenses select',
  arizonaXPath: "//div[text()='Arizona']",
  phoneXpath: '.mx-name-USResidential_Input_Phone input',
  stateDropdownXPath: "//span[text()='Select a state from the dropdown']",
  checkBox1XPath: '.mx-name-container8 input',
  checkBox2XPath: '.mx-name-container10 input',
  createAccountButtonXPath: '.mx-name-container18 button',
  successLable: 'Awesome! You have successfully created your account.',
};
export const loginPageLocators = {
  testName: "Login As New Agent",
  joinLoginURL: "https://joinapp-accp.exprealty.com/login.html",
  usernameFieldXPath: "//input[@placeholder='User name']",
  passwordFieldXPath: "//input[@placeholder='Password']",
  signInButtonXPath: "//button[@id='loginButton']",
};

export const personalPageLocators = {

  testName: "Agen ",
  personalPageHeaderXPath: 'Personal Information (Step 1 of 6)',
  letsGoXPathButton: '//button[text()="Let\'s Go!"]',
  mailingAddLine1XPath: '//input[@Placeholder="Mailing address line 1"]',
  cityXPath: '//input[@placeholder="City"]',
  stateDropdownXPath: '//select[option[text()="-- State --"]]',
  ArizonaXPath: "//option[text()='Arizona']",
  zipCodeXPath: '//input[@placeholder="Zip/Postal code"]',
  emergencyContactNameXPath: '//input[@placeholder="Emergency Contact Name*"]',
  relationshipTContractorXpath: '//input[@placeholder="Relationship to Contractor*"]',
  emergencyContactPhoneXPath: '//input[@placeholder="Emergency Contact Phone Number*"]',
  emergencyContactEmailXPath: '//input[@placeholder="Emergency Contact Email Address*"]',
  checkBox1Xpath: '.mx-name-eaf86e0ed3bf4720bb602ca04ff61fca div:nth-child(2)',
 WhatbringsyoutoeXpRealtyXpah: "//button[@title='None Selected']",
 selectAllXPath: "//input[@value='multiselect-all']",
 saveAndContinueButtonXPath: '.mx-name-c5dc692b26364015864fdaec9047143d',


  // "
};