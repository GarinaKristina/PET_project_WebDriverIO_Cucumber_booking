import MainPage from './MainPage.js';

class PageFactory {
  constructor() {
    this['Main Page'] = MainPage;
  }
}
export default new PageFactory();
