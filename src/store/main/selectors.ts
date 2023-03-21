import { AppState } from 'store';

const selectors = {
  posts: (state: AppState) => state.main.posts,
  num: (state: AppState) => state.main.num,
};

export { selectors };
