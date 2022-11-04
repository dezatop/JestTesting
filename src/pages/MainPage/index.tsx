import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { main } from 'store/main';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { Wrapper, Content } from './styled';

type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

interface IProps {
  posts?: Post[];
}

const MainPage: FC<IProps> = ({ posts }) => {
  const dispatch = useAppDispatch();
  const tests = useSelector(main.selectors.posts);

  useEffect(() => {
    dispatch(main.thunks.getPosts());
  }, []);

  return (
    <div data-testid="main-page">
      <Wrapper data-testid="test">
        {posts?.map((el) => (
          <Content key={el.id}>
            <p>ID:_{el.id}</p>
            <p>Title:_{el.title}</p>
            <p>USER_ID:_{el.userId}</p>
          </Content>
        ))}
        {tests?.map((el) => (
          <Content key={el.id}>
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
