import styled from 'styled-components';

export const WeatherBox = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 12rem);
  margin: 5.4rem auto 0;
  padding: 0 2rem;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #000;

  button {
    display: block;
    width: 100%;
    margin-top: 2rem;
    padding: 1.8rem;
    border-radius: 1.2rem;
    background-color: #1b1a1e;
    color: #82818d;
    text-transform: uppercase;
    font-size: 2rem;
    white-space: pre;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      color: #ffffff;
      background-color: #1b5bff;
    }
  }

  ul {
    li {
      position: relative;
      overflow: hidden;

      & + li {
        border-top: 1px solid rgb(244, 244, 244);
      }

      &.active {
        dl {
          padding-right: 2rem;
          transform: translate3d(-14rem, 0, 0);
        }
      }
    }
  }

  dl {
    display: flex;
    position: relative;
    z-index: 5;
    padding: 2rem 0;
    font-weight: 400;
    font-size: 1.4rem;
    transition-duration: 0.3s;
    transform: translate3d(0, 0, 0);
    background-color: #fff;

    strong {
      margin-left: 1.5rem;
    }

    dd {
      margin-left: auto;
    }

    & + div {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 14rem;

      button {
        width: 7rem;
        height: 100%;
        font-size: 1.4rem;
        color: #333;
        background-color: #eeeeee;

        & + button {
          color: #fff;
          background-color: #ff0038;
        }
      }
    }
  }
`;
