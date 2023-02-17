import BasePage from './BasePage.js';
import ElementClicker from './helpers/ElementClicker.js';
import Waiters from './helpers/Waiters.js';

class MainPage extends BasePage {
  cockieButton = (locatorName) => `#onetrust-${locatorName}-btn-handler`;

  async clickOnModalWindowButton(locatorName) {
    await Waiters.waitElementIsDisplayed(this.cockieButton(locatorName));
    await ElementClicker.click(this.cockieButton(locatorName));
  }
}

export default new MainPage();

