import { screen } from '@testing-library/react';
import MainPage from 'pages/MainPage';
import { renderWidthRedux } from '_tests/renderWidthRedux';

const dataPost = [
  {
    body: 'qweqe',
    id: 2,
    title: 'qweqweqwe',
    userId: 4,
  },
];

describe('Component Main Page', () => {
  it('List render', () => {
    renderWidthRedux(<MainPage posts={dataPost} />, {
      main: {
        posts: [
          {
            body: 'qweqe',
            id: 2,
            title: 'qweqweqwe',
            userId: 4,
          },
        ],
      },
    });
    expect(screen.getByTestId('test')).toBeInTheDocument();
  });

  it('render data empty', () => {
    renderWidthRedux(<MainPage />)
    expect(screen.queryByTestId('list')).toBeNull();
  });

  it('snapshot component', () => {
    renderWidthRedux(<MainPage posts={dataPost}/>)
    const element = screen.getByTestId('test');
    expect(element).toHaveStyle({ color: 'red' });
    expect(element).toBeInTheDocument();
    // expect(main).toMatchSnapshot();
  });

  it('empty snapshot component', () => {
    renderWidthRedux(<MainPage />)
    const wrapper = screen.getByTestId('test');
    expect(wrapper).toHaveStyle({ color: 'red' });
    expect(wrapper).toBeInTheDocument();
    // expect(main).toMatchSnapshot();
  });
});
