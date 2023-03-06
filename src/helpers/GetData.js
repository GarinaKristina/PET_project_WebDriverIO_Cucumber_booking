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
      }
      return element;
    } catch (e) {
      throw ErrorWrapper.elementError(e, elementLocator);
    }
  }
  async getTitle(text) {
    await expect(browser).toHaveTitleContaining(text);
  }
}
export default new GetData();
