import ErrorWrapper from '../helpers/utils/ErrorWraper.js';
import Waiters from './Waiters.js';

class GetData {
  async getElement(elementLocator, visible = true) {
    try {
      const element = await $(elementLocator);
      await Waiters.waitElementIsExist(elementLocator);
      await element.scrollIntoView({ block: 'center', inline: 'center' });
      if (visible) {
        await Waiters.waitElementIsDisplayed(elementLocator);
        var a;
      }
      return element;
    } catch (e) {
      throw ErrorWrapper.elementError(e, elementLocator);
    }
  }
}
export default new GetData();
