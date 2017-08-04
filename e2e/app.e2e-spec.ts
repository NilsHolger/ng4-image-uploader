import { Ng4ImageUploaderPage } from './app.po';

describe('ng4-image-uploader App', () => {
  let page: Ng4ImageUploaderPage;

  beforeEach(() => {
    page = new Ng4ImageUploaderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
