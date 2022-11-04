import { render } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import createStore from '../store';

export const renderWidthRedux = (component: ReactElement, initialState:any = {}) => {
  return render(
    <Provider store={createStore(initialState)}>{component}</Provider>
  );
};
