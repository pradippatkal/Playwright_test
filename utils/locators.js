
export const indexPageLocators = {
  testName: "USJoinApp - agentRegistration",
  joinURL: 'https://joinapp-accp.exprealty.com/index.html',
  Cookeis:'//button[text()="Accept All"]',
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
  outside: '//span[text()="Are you an eXp Realty Corporate Staff member?"]',
  saveAndContinueButtonXPath: '.mx-name-c5dc692b26364015864fdaec9047143d',
  useOriginalAddress : '.mx-name-b3d25102636f4a1e89f20f9fd07bb8f9',
};

 export const sponsorPageSelector = {
    sponsorPageHeaderXPath: 'Sponsor Information (Step 2 of 6)',
    understandTheSponsorshipPolicy:'.mx-name-VideoAcknowledgementResidential',
    SelectOrDeclineSponsorButton : '.mx-name-o9de890050724b62b5b8813549e45154',
    sponsorEXPEmailInputBox : "//div[contains(@class,'mx-name-textBox4 xd-search-input')]//input",
    SearchSponsorButton : '//button[text()="Search"]',
    selectSponsor: '//button[text()="Select"]',
    proceedButton: '//button[text()="Proceed"]',
    yesButton:'//input[@value="Yes"]',
    xyx:'//input[@value="Yes"]',
    saveAndContinueButtonXPath: ".mx-name-SwobSaveAndContinue",
 };

  export const licensePageLocators = {
    licensePageHeaderXPath: '.mx-name-PrimaryLicense_Text1_Desktop',
    licenseDurationDropdownXPath: ' .mx-name-PrimaryLicense_Dropdown1_Desktop select',
    licenseNumberXpath: 'mx-name-PrimaryLicense_Textbox2_Desktop_US input',
    selectPrimaryAssociationDropdownXPath: 'mx-name-PrimaryLicense_Selector1_Desktop_US',
    anyAdditionalAssociationXPath: "//span[normalize-space()='Are you associated with any additional Associations?']/following::label[normalize-space()='No'][1]",
    pleaseSelectTheMlsYouArePrimarilyAffiliatedWithXpath: "//select[id*='PrimaryLicense_Selector2_Desktop_US']",
    //primaryMlsNotListedAboveCheckHere: 


  };
