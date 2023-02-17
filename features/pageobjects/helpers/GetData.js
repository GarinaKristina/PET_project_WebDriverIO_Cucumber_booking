import ErrorWrapper from '../utils/ErrorWraper.js';
import Waiters from './Waiters.js';

class GetData {
  async getElement(elementLocator, visible = true) {
    try {
      const element = await $(elementLocator);
      await Waiters.waitElementIsExist(elementLocator);
      await element.scrollIntoView({ block: 'center', inline: 'center' });
      if (visible) {
        await Waiters.waitElementIsDisplayed(elementLocator);
      }
      return element;
    } catch (e) {
      throw ErrorWrapper.elementError(e, elementLocator);
    }
  }
  async waitElementIsExist(elementLocator, timeout = config.timeouts.default) {
    const element = await $(elementLocator);
    try {
      await element.waitForExist({ timeout });
    } catch (e) {
      throw ErrorWrapper.elementError(e, element);
    }
  }
}
export default new GetData();
