import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import JestComponent from './index';

jest.mock('axios');

// beforeEach(() => {
//   // Перед каждым
// })
// beforeAll(() => {
// // Один раз перед всеми тестами
// })
// afterEach(() => {
// Перед каждым
// })
// afterAll(() => {
// // Один раз перед всеми тестами
// })

describe('Example test component JetsComponent', () => {
  let response: {
    data: { userId: number; id: number; title: string; body: string }[];
  };
  beforeEach(() => {
    response = {
      data: [
        {
          userId: 1,
          id: 1,
          title: 'test',
          body: 'test body',
        },
        {
          userId: 2,
          id: 2,
          title: 'test',
          body: 'test body',
        },
      ],
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Render component', function () {
    render(<JestComponent />);
    expect(screen.getByTestId('component')).toHaveStyle({ color: 'blue' });
    expect(screen.getByTestId('component')).toBeInTheDocument();
    expect(screen.getByText(/test component/i)).toBeInTheDocument();
  });

  it('Test hide text', () => {
    render(<JestComponent />);
    const trigger = screen.getByText(/Trigger/);
    expect(screen.queryByText(/Hide Text/)).toBeNull();
    userEvent.click(trigger);
    expect(screen.getByText('Hide Text')).toBeInTheDocument();
    userEvent.click(trigger);
    expect(screen.queryByText(/Hide Text/)).toBeNull();
  });

  it('test input change', () => {
    render(<JestComponent />);
    const input = screen.getByTestId('input');
    expect(screen.getByPlaceholderText(/Placeholder/)).toBeInTheDocument();
    userEvent.type(input, 'qwerty');
    expect(screen.getByTestId('input')).toContainHTML('qwerty');
  });

  it('Logic button click with input', () => {
    render(<JestComponent />);
    const input = screen.getByTestId('input');
    const trigger = screen.getByText(/Trigger/);
    expect(screen.queryByTestId('input-p')).toBeNull();
    userEvent.type(input, 'qwerty');
    userEvent.click(trigger);
    expect(screen.getByTestId('input-p')).toBeInTheDocument();
    userEvent.click(trigger);
    expect(screen.queryByTestId('input-p')).toBeNull();
  });

  it('Render List from api', async () => {
    await act(async () => {
      // @ts-ignore
      await axios.get.mockReturnValue(response);
      await render(<JestComponent />);
    });
    const lists = await screen.findAllByTestId('list-item');
    expect(lists.length).toBe(2);
    expect(axios.get).toBeCalledTimes(1);
  });
});
