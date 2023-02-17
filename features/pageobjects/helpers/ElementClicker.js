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
}
export default new ElementClicker();
