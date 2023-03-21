import { render, screen } from '@testing-library/react';
import axios from 'axios';
import * as reduxHooks from 'react-redux';

import MainPage from 'pages/MainPage';
import { postData } from '__mock__/mockAssets';
import { main } from 'store/main';
import userEvent from '@testing-library/user-event/dist';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('Component Main Page', () => {
  let mockStore = {
    main: {
      posts: postData,
      num: 0,
    },
  };

  beforeEach(() => {
    mockDispatch.mockImplementation(() => jest.fn());
    mockSelector.mockImplementation((selector) => selector(mockStore));
  });

  afterEach(() => {
    mockDispatch.mockClear();
    mockSelector.mockClear();
  });

  it('List render', async () => {
    const mockSelectorPost = jest.spyOn(main.selectors, 'posts');
    const { getAllByTestId } = render(<MainPage />);
    const list = getAllByTestId('target_list');

    expect(list.length).toBe(2);
    expect(mockSelectorPost).toBeCalledTimes(1);
  });

  it('Check cal thunk in useEffect', async () => {
    const mockThunks = jest.spyOn(main.thunks, 'getPosts');
    const dispatch: any = main.thunks.getPosts;
    mockDispatch.mockReturnValue(dispatch);

    render(<MainPage />);
    expect(mockThunks).toHaveBeenCalledTimes(2);
  });

  it('Check counter click', async () => {
    const dispatchPlus = jest.spyOn(main.actions, 'INCREMENT_PLUS');
    const dispatchMinus = jest.spyOn(main.actions, 'INCREMENT_MINUS');

    const { getByTestId } = render(<MainPage />);
    const plus = getByTestId('plus');
    const minus = getByTestId('minus');

    expect(plus).toBeInTheDocument();
    expect(minus).toBeInTheDocument();
    expect(dispatchPlus).toBeCalledTimes(0);

    userEvent.click(plus);
    expect(dispatchPlus).toBeCalledTimes(1);
    expect(dispatchPlus).toHaveBeenCalledWith(1);

    userEvent.click(minus);
    expect(dispatchMinus).toBeCalledTimes(1);
    expect(dispatchMinus).toHaveBeenCalledWith(2);
  });
});
