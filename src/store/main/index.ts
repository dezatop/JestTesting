import { createSlice } from '@reduxjs/toolkit';

import { thunks } from './thunks';
import { selectors } from './selectors';

type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

interface IState {
  posts: Post[] | [];
}

const initialState: IState = {
  posts: [],
};

const slice = createSlice({
  name: 'main',
  initialState: { ...initialState },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.getPosts.fulfilled, (state, { payload }) => {
      state.posts = payload;
    });
  },
});

const main = {
  actions: slice.actions,
  thunks,
  selectors,
};

export { main };
export default slice.reducer;
