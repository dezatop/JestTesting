import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/dist';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

import { listType } from 'type/assetsTypes';
import { postData } from '__mock__/mockAssets';
import JestComponent from './index';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

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



// act - гарантирует, что все обновления,  были обработаны и применены к DOM
// все, что может занять время — рендеринг, пользовательские события, выборка данных — внутри него будет завершено до запуска тестовых утверждений.

describe('Example test component JetsComponent', () => {
  let response: listType[];

  beforeEach(() => {
    response = postData;
  });

  it('Render component', async function () {
    await act(async () => {
      await render(<JestComponent />);
    });
    expect(screen.getByTestId('component')).toHaveStyle({ color: 'blue' });
    expect(screen.getByTestId('component')).toBeInTheDocument();
    expect(screen.getByText(/test component/i)).toBeInTheDocument();
  });

  it('Test hide text', async () => {
    await act(async () => {
      await render(<JestComponent />);
    });
    const trigger = screen.getByText(/Trigger/);
    expect(screen.queryByText(/Hide Text/)).toBeNull();
    userEvent.click(trigger);
    expect(screen.getByText('Hide Text')).toBeInTheDocument();
    userEvent.click(trigger);
    expect(screen.queryByText(/Hide Text/)).toBeNull();
  });

  it('test input change', async () => {
    await act(async () => {
      await render(<JestComponent />);
    });
    const input = screen.getByTestId('input');
    expect(screen.getByPlaceholderText(/Placeholder/)).toBeInTheDocument();
    userEvent.type(input, 'qwerty');
    expect(screen.getByTestId('input')).toContainHTML('qwerty');
  });

  it('Logic button click with input', async () => {
    await act(async () => {
      await render(<JestComponent />);
    });
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
    mockedAxios.get.mockResolvedValue({ data: response });

    await act(async () => {
      await render(<JestComponent />);
    });

    const lists = screen.getAllByTestId('list-item');
    expect(lists.length).toBe(2);
    expect(axios.get).toBeCalledTimes(1);
  });

  it('Reject List from api', async () => {
    mockedAxios.get.mockRejectedValue('Network error: Something went wrong');
    await act(async () => {
      await render(<JestComponent />);
    });
    expect(screen.queryByTestId('list-item')).toBeNull();
  });

  it('Click GET POST', async () => {

    await act(async () => {
      await render(<JestComponent />);
    });

    const target = screen.getByTestId('get_post');

    expect(target).toBeInTheDocument();
    expect(screen.queryByTestId('list-item')).toBeNull();

    mockedAxios.get.mockResolvedValue({ data: response });
    userEvent.click(target);

    const list = await screen.findAllByTestId('list-item');
    expect(list.length).toBe(2);
  });
});
