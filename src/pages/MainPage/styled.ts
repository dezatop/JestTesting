import styled from '@emotion/styled';

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  gap: 16px;
  padding: 16px 32px;
  color: red;

  li {
    color: blue;
    height: 100%;
  }
`;

const Content = styled.li`
  cursor: pointer;
  display: flex;
  border: 1px solid;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  color: black;

  &:hover {
    color: red;
  }
`;

const Counter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export { Wrapper, Content, Counter };
