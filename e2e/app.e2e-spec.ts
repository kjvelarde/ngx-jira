import { NgxJiraPage } from './app.po';

describe('ngx-jira App', () => {
  let page: NgxJiraPage;

  beforeEach(() => {
    page = new NgxJiraPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
