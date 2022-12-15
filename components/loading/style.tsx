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
      color: #1a1a1a;
      background-color: #fae100;
      border-radius: 50%;

      svg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 2.4rem;
        height: 2.4rem;
        margin: auto;
        opacity: 0;
      }
    }
  }
`;
