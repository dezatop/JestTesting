import { useEffect, useState } from 'react';

import axios from 'axios';
import { Wrapper, Content, Container } from './styled';

interface IAxios {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const JestComponent = () => {
  const [hideText, setHideText] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [data, setData] = useState<IAxios[]>([]);

  const getData = async () => {
    try {
      const res = await axios.get<IAxios[]>(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setData(res?.data);
    } catch (e) {}
  };

  const triggerBtn = () => {
    setData([]);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div data-testid="jest-page">
      <Wrapper data-testid="component">
        <h1 data-testid="get_post" onClick={triggerBtn}>GET POSTS</h1>
        <div>
          <input
            data-testid="input"
            placeholder="Placeholder"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
          />
          <button
            type="button"
            onClick={() => setHideText(!hideText)}
          >
            Trigger
          </button>
        </div>
        <div>
          <p>Test Component</p>
        </div>
        {hideText && <p>Hide Text</p>}
        {hideText && (
          <p data-testid="input-p">Hide Text-input value: {value}</p>
        )}
        <Container>
          {data?.map((el) => (
            <Content
              data-testid="list-item"
              key={el.id + el.title}
            >
              <p>ID:_{el.id}</p>
              <p>title:_{el.title}</p>
              <p>body:_{el.body}</p>
            </Content>
          ))}
        </Container>
      </Wrapper>
    </div>
  );
};

export default JestComponent;
