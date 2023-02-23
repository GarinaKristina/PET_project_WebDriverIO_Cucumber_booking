import BasePage from './BasePage.js';
import ElementClicker from './helpers/ElementClicker.js';
import Waiters from './helpers/Waiters.js';

class MainPage extends BasePage {
  buttons = {
    CookieButton: {
      buttonName: 'Accept cookie',
      buttonLocator: '#onetrust-accept-btn-handler',
    },
  };

  fields = {
    SearchBoxField: {
      fieldName: 'Where you want to move',
      fieldLocator: '//input[@name="ss"]',
    },
  };

  getButtonByName(buttonName, args) {
    for (const i in this.buttons) {
      if (typeof this.buttons[i].buttonName === 'string') {
        return args ? this.buttons[i].buttonLocator(args) : this.buttons[i].buttonLocator;
      }
    }
    throw new Error(`Can not find button with name: ${buttonName}`);
  }

  async clickOntheButton(buttonName, args) {
    const locator = this.getButtonByName(buttonName, args);
    await Waiters.waitElementIsDisplayed(locator);
    await ElementClicker.click(locator);
  }

  getFieldByName(fieldName) {
    for (const i in this.fields) {
      if (typeof this.fields[i].fieldName === 'string') {
        return this.fields[i].fieldLocator;
      }
    }
    throw new Error(`Can not find button with name: ${fieldName}`);
  }

  async fillTheField(fieldName, text) {
    const element = this.getFieldByName(fieldName);
    console.log(element);
    await Waiters.waitElementIsDisplayed(element);
    await ElementClicker.setValueInField(element, text);
  }

  async titleContains(title) {
    await expect(browser).toHaveTitleContaining(title);
  }
}

export default new MainPage();

