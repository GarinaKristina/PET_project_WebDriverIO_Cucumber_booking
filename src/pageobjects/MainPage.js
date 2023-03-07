import BasePage from './BasePage.js';
import ElementAction from '../helpers/ElementAction.js';
import Waiters from '../helpers/Waiters.js';

class MainPage extends BasePage {
  get ['Accept cookie button']() {
    return '#onetrust-accept-btn-handler';
  }
  get ['Where you want to move field']() {
    return '//input[@name="ss"]';
  }

  chooseLocation = (locationName) => `//*[normalize-space()="${locationName}"]`;

  async chooseLocationFromSearchField(selector, text) {
    await ElementAction.fillField(selector, text);
    await ElementAction.click(this.chooseLocation(text));
    await ElementAction.click(selector);
    await ElementAction.sendKeys(BasePage.enterKey);
  }
}
export default new MainPage();
