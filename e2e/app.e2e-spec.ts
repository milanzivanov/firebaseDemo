import { FbDemoPage } from './app.po';

describe('fb-demo App', () => {
  let page: FbDemoPage;

  beforeEach(() => {
    page = new FbDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
