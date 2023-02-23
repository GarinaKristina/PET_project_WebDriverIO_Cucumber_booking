import { Given, When, Then } from '@wdio/cucumber-framework';

import MainPage from '../pageobjects/MainPage.js';

Given(/^Open www.booking.com website$/, async () => {
  await MainPage.open();
});

When(/^Click on "([^"]*)" button$/, async (buttonName) => {
  await MainPage.clickOntheButton(buttonName);
});

When(/^Type "([^"]*)" in "([^"]*)" field$/, async (text, fieldName) => {
  await MainPage.fillTheField(fieldName, text);
});

Then(/^Check the title contains "([^"]*)"$/, async (title) => {
  await MainPage.titleContains(title);
});

