import ErrorWrapper from '../utils/ErrorWraper.js';
import { config } from '../../../wdio.conf.js';

class Waiters {
  async waitElementIsDisplayed(elementLocator, timeout = config.timeouts.default) {
    const element = await $(elementLocator);
    try {
      await element.waitForDisplayed({ timeout });
    } catch (e) {
      throw ErrorWrapper.elementError(e, element);
    }
  }
}
export default new Waiters();
