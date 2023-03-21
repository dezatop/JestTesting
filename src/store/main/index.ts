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
  num: number;
}

const initialState: IState = {
  posts: [],
  num: 0,
};

const slice = createSlice({
  name: 'main',
  initialState: { ...initialState },
  reducers: {
    INCREMENT_PLUS: (state, { payload }) => {
      state.num += payload;
    },
    INCREMENT_MINUS: (state, { payload }) => {
      state.num -= payload;
    },
  },
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
