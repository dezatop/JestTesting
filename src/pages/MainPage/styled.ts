import styled from '@emotion/styled';

const Wrapper = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  color: red;

  &:hover {
    li {
      color: blue;
    }
  }
`;

const Content = styled.li`
  cursor: pointer;
  display: flex;
  width: 400px;
  border: 1px solid;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  color: black;

  &:hover {
    color: red;
  }
`;
export { Wrapper, Content };
