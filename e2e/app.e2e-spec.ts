import { CoolAppPage } from './app.po';

describe('cool-app App', () => {
  let page: CoolAppPage;

  beforeEach(() => {
    page = new CoolAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
