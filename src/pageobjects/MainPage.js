import BasePage from './BasePage.js';
import ElementAction from '../helpers/ElementAction.js';

class MainPage extends BasePage {
  get ['Accept cookie button']() {
    return '#onetrust-accept-btn-handler';
  }
  get ['Where you want to move field']() {
    return '//input[@name="ss"]';
  }
  ['menu sections'](options) {
    return `//span[contains(text(), "${options}")]`;
  }
  chooseLocation = locationName => `//*[normalize-space()="${locationName}"]`;

  async chooseLocationFromSearchField(selector, text) {
    await ElementAction.setInputValue(selector, text);
    await ElementAction.click(this.chooseLocation(text));
    await ElementAction.click(selector);
  }
}
export default new MainPage();
