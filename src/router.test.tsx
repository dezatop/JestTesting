import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event/dist';
import { Provider } from 'react-redux';
import App from './App';
import createStore from "./store";

describe('Tests router app', () => {
  it('router', () => {
    render(
      <Provider store={createStore()}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    const linkMain = screen.getByTestId('link-main');
    const linkJest = screen.getByTestId('link-jest');
    userEvent.click(linkJest);
    expect(screen.getByTestId('jest-page')).toBeInTheDocument();
    userEvent.click(linkMain);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
});
