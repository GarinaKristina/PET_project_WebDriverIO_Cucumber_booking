import ErrorWrapper from '../utils/ErrorWraper.js';
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
}
export default new ElementAction();
