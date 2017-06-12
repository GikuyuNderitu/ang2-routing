import { Ang2RoutingPage } from './app.po';

describe('ang2-routing App', () => {
  let page: Ang2RoutingPage;

  beforeEach(() => {
    page = new Ang2RoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
