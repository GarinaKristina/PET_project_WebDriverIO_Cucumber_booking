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

  searchBoxField = '.c-autocomplete__input sb-searchbox__input sb-destination__input';

  getButtonByName(buttonName, args) {
    for (const i in this.buttons) {
      if (typeof this.buttons[i].buttonName === 'string') {
        return args ? this.button[i].buttonLocator(args) : this.buttons[i].buttonLocator;
      }
    }
    throw new Error(`Unable to find button with name: ${buttonName}`);
  }

  async clickOntheButton(buttonName, args) {
    const locator = this.getButtonByName(buttonName, args);
    await Waiters.waitElementIsDisplayed(locator);
    await ElementClicker.click(locator);
  }

  async titleContains(title) {
    await expect(browser).toHaveTitleContaining(title);
  }

  async fillTheField(element, text) {
    await ElementClicker.setValue(element, text);
  }
}

export default new MainPage();

