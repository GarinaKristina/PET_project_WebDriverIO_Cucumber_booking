import BasePage from './BasePage.js';
import ElementClicker from './helpers/ElementClicker.js';
import Waiters from './helpers/Waiters.js';

class MainPage extends BasePage {
  coockieButton = (locatorName) => `#onetrust-${locatorName}-btn-handler`;

  async clickOntheButton(locatorName) {
    await Waiters.waitElementIsDisplayed(this.coockieButton(locatorName));
    await ElementClicker.click(this.coockieButton(locatorName));
  }
}

export default new MainPage();

