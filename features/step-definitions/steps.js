import { Given, When, Then } from '@wdio/cucumber-framework';

import MainPage from '../pageobjects/MainPage.js';

Given(/^Open www.booking.com website$/, async () => {
  await MainPage.open();
});

When(/^Click on "([^"]*)" button$/, async (locatorName) => {
  await MainPage.clickOntheButton(locatorName);
});

Then(/^Check the title contains "([^"]*)"$/, async (title) => {
  await expect(browser).toHaveTitleContaining(title);
});

