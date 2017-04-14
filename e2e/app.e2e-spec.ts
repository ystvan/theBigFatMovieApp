import { TheBigFatMovieAppPage } from './app.po';

describe('the-big-fat-movie-app App', () => {
  let page: TheBigFatMovieAppPage;

  beforeEach(() => {
    page = new TheBigFatMovieAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
