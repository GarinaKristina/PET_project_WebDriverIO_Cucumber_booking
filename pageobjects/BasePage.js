import { config } from '../wdio.conf.js';
export default class BasePage {
  open() {
    return browser.url(config.baseUrl);
  }
}

