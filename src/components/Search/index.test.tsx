import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';

import { Search } from './index';

const onChange = jest.fn();

describe('Search component', () => {
  it('renders Search component', () => {
    render(
      <Search
        value=""
        placeholder="text"
        onChange={onChange}
      />
    );
    expect(screen.getByPlaceholderText('text')).toBeInTheDocument();
  });

  it('onchange works func', () => {
    render(
      <Search
        value=""
        placeholder="text"
        onChange={onChange}
      />
    );

    userEvent.type(screen.getByRole('textbox'), 'React');
    expect(onChange).toHaveBeenCalledTimes(5); // вызвана функция количество раз
    expect(onChange).toHaveBeenCalled(); // функция вызвана
  });
});
