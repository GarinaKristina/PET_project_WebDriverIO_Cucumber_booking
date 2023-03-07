import ErrorWrapper from '../helpers/utils/ErrorWraper.js';
import GetData from './GetData.js';

class ElementAction {
  async click(selector, visible = true) {
    try {
      const element = await GetData.getElement(selector, visible);
      await element.click();
    } catch (error) {
      throw ErrorWrapper.elementError(error, selector);
    }
  }

  async setValueInField(selector, text, visible = true) {
    try {
      const element = await GetData.getElement(selector, visible);
      await element.setValue(text);
    } catch (error) {
      throw ErrorWrapper.elementError(error, element);
    }
  }
  async sendKeys(keyText) {
    try {
      await browser.keys(keyText);
    } catch (error) {
      throw ErrorWrapper.elementError(error, keyText);
    }
  }
  async fillField(selector, text) {
    await this.setValueInField(selector, text);
  }
}
export default new ElementAction();
