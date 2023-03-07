import { Given, When, Then } from '@wdio/cucumber-framework';
import ElementAction from '../helpers/ElementAction.js';
import Pages from '../pageobjects/PageFactory.js';

Given(/^Open www.booking.com website$/, async () => {
  await Pages['Main Page'].open();
});

When(/^Click on "([^"]*)" on "([^"]*)"$/, async (buttonName, pageName) => {
  const locator = Pages[pageName][buttonName];
  await ElementAction.click(locator);
});

When(/^Type "([^"]*)" on Main Page in "([^"]*)"$/, async (text, fieldName) => {
  const locator = Pages['Main Page'][fieldName];
  await Pages['Main Page'].chooseLocationFromSearchField(locator, text);
});

Then(/^Check the title contains "([^"]*)"$/, async (expectedTitle) => {
  await Pages['Main Page'].checkTitle(expectedTitle);
});
