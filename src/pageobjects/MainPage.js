import BasePage from './BasePage.js';
import ElementAction from '../helpers/ElementAction.js';
import GetData from '../helpers/GetData.js';
import Waiters from '../helpers/Waiters.js';

class MainPage extends BasePage {
  // acceptCookieButton = '#onetrust-accept-btn-handler';
  // get acceptCookieButton() {
  //   return '#onetrust-accept-btn-handler';
  // }

  get ['Accept cookie button']() {
    return '#onetrust-accept-btn-handler';
  }

  travelStartDateButton = 'button[data-testid="date-display-field-start"]';
  submitButton = '//button[@type="submit"] | //*[class="sb-searchbox__button"]';
  calendarButton = '.ed2ff9f661';
  searchBoxField = '//input[@name="ss"]';
  getFirstLocation = (locationName) => `//*[normalize-space()="${locationName}"]`;
  getDataInCalendar = (data) => `//*[@aria-label="${data}"]`;

  // async clickOnButton(buttonName) {
  //   let locator = await GetData.getElement(buttonName);
  //   await ElementAction.click(locator);
  // }

  async fillTheField(fieldName, text) {
    const element = this.getFieldByName(fieldName);
    await Waiters.waitElementIsDisplayed(element);
    await ElementAction.setValueInField(element, text);
    await ElementAction.click(this.getFirstLocation(text));
    await ElementAction.click(element);
    await ElementAction.sendKeys(BasePage.enterKey);
  }

  async checkTheTitle(text) {
    await GetData.getTitle(text);
  }

  async selectTheDataFromCalendar(dataOne, dataTwo) {
    const dataFrom = this.dataInCalendar(dataOne);
    await Waiters.waitElementIsDisplayed(dataFrom);
    await ElementAction.click(dataFrom);

    const dataTo = this.dataInCalendar(dataTwo);
    await Waiters.waitElementIsDisplayed(dataTo);
    await ElementAction.click(dataTo);
  }
}
export default new MainPage();
