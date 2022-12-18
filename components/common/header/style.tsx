import styled from 'styled-components';

export const HeaderBox = styled.header`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 6rem;
  margin: 0;
  padding: 1rem 2rem;
  background-color: #000;
  box-sizing: border-box;

  h1 {
    color: #fff;
  }

  a {
    padding: 1rem 0;
    font-weight: 400;
    font-size: 1.8rem;
    color: #fff;

    strong {
      color: #fff;
    }
  }

  & + main {
    min-height: calc(100vh - 12rem);
    margin-top: 6rem;
    padding: 0 2rem;

    .react-loading-skeleton {
      margin-top: 2.2rem;
    }
  }
`;
