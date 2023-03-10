import ErrorWrapper from '../helpers/utils/ErrorWraper.js';
import { config } from '../../wdio.conf.js';

class Waiters {
  async waiteElementIsDisplayed(elementLocator, timeout = config.timeouts.default) {
    const element = await $(elementLocator);
    try {
      await element.waitForDisplayed({ timeout });
    } catch (e) {
      throw ErrorWrapper.elementError(e, element);
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
  async waitElementIsClickable(elementLocator, timeout = config.timeouts.default) {
    const element = await $(elementLocator);
    try {
      await element.waitForClickable({ timeout });
    } catch (e) {
      throw ErrorWrapper.elementError(e, element);
    }
  }
}
export default new Waiters();
