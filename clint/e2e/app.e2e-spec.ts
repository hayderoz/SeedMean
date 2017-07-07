import { ClintPage } from './app.po';

describe('clint App', () => {
  let page: ClintPage;

  beforeEach(() => {
    page = new ClintPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
