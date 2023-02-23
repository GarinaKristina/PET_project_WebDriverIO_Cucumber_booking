import ErrorWrapper from '../utils/ErrorWraper.js';
import GetData from './GetData.js';

class ElementClicker {
  async click(selector, visible = true) {
    try {
      const element = await GetData.getElement(selector, visible);
      await element.click();
    } catch (error) {
      throw ErrorWrapper.elementError(error, selector);
    }
  }

  async setValueInField(element, text) {
    try {
      await element.setValue(text);
      console.log(await element.getValue());
    } catch (error) {
      throw ErrorWrapper.elementError(error, element);
    }
  }
}
export default new ElementClicker();
