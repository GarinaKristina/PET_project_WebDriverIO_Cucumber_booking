import { config } from '../../wdio.conf.js';
import { expect as expectChai } from 'chai';

export default class BasePage {
  open() {
    return browser.url(config.baseUrl);
  }

  get enterKey() {
    return '\uE007';
  }

  async checkTitle(expectedTitle) {
    const actualTitle = await browser.getTitle();
    expectChai(actualTitle).to.include(expectedTitle);
  }
}
