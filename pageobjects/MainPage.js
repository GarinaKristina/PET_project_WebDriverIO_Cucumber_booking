import BasePage from './BasePage.js';
import ElementAction from './helpers/ElementAction.js';
import Waiters from './helpers/Waiters.js';

class MainPage extends BasePage {
  buttons = {
    CookieButton: {
      buttonName: 'Accept cookie',
      buttonLocator: '#onetrust-accept-btn-handler',
    },
    StartDateTripButton: {
      buttonName: 'Travel start date',
      buttonLocator: 'button[data-testid="date-display-field-start"]',
    },
    SubmitButton: {
      buttonName: 'Submit',
      buttonLocator: '//button[@type="submit"] | //*[class="sb-searchbox__button"]',
    },
    CalendarButton: {
      buttonName: 'Calendar',
      buttonLocator: '.ed2ff9f661',
    },
  };

  firstLocation = (locationName) => `//*[normalize-space()="${locationName}"]`;
  dataInCalendar = (data) => `//*[@aria-label="${data}"]`;

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
    await ElementAction.click(locator);
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
    await Waiters.waitElementIsDisplayed(element);
    await ElementAction.setValueInField(element, text);
    await ElementAction.click(this.firstLocation(text));
    await ElementAction.click(element);
    await ElementAction.sendKeys('\uE007');
  }

  async titleContains(title) {
    await expect(browser).toHaveTitleContaining(title);
  }

  async chooseTheDataFromCalendar(dataOne, dataTwo) {
    const dataFrom = this.dataInCalendar(dataOne);
    await Waiters.waitElementIsDisplayed(dataFrom);
    await ElementAction.click(dataFrom);

    const dataTo = this.dataInCalendar(dataTwo);
    await Waiters.waitElementIsDisplayed(dataTo);
    await ElementAction.click(dataTo);
  }
}
export default new MainPage();

