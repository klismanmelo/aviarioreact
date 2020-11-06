import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  height: 80vh;
`;

export const View = styled.h1`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  background: #312E38;
  border-radius: 10px;
  padding: 0 16px;
  > img {
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form {
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    h1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      font-size: 24px;
      color: #666360;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 16px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;
