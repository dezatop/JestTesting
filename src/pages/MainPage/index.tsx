import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { main } from 'store/main';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { Wrapper, Content, Counter } from './styled';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const tests = useSelector(main.selectors.posts);
  const num = useSelector(main.selectors.num);

  const incrementPlus = () => {
    dispatch(main.actions.INCREMENT_PLUS(1));
  };

  const incrementMinus = () => {
    dispatch(main.actions.INCREMENT_MINUS(2));
  };

  useEffect(() => {
    dispatch(main.thunks.getPosts());
  }, []);

  return (
    <div data-testid="main-page">
      <Counter>
        <div
          data-testid="minus"
          onClick={incrementMinus}
        >
          -(-2)
        </div>
        <h1 data-testid="sum">{num}</h1>
        <div
          data-testid="plus"
          onClick={incrementPlus}
        >
          +(+1)
        </div>
      </Counter>
      <Wrapper data-testid="test">
        {tests?.map((el) => (
          <Content
            data-testid="target_list"
            key={el.id}
          >
            <p>ID:_{el.id}</p>
            <p>Title:_{el.title}</p>
            <p>USER_ID:_{el.userId}</p>
          </Content>
        ))}
      </Wrapper>
    </div>
  );
};

export default MainPage;
