import styled from 'styled-components';

export const LoadingBox = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    span {
      display: inline-block;
      position: relative;
      width: 5rem;
      height: 5rem;
      padding: 1.2rem;
      color: #1a1a1a;
      background-color: #fae100;
      box-sizing: border-box;
      border-radius: 50%;

      svg {
        position: absolute;
        top: 1.3rem;
        left: 1.3rem;
        right: 1.3rem;
        bottom: 1.3rem;
        opacity: 0;
      }
    }
  }
`;
