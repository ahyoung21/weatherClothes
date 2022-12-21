import styled from 'styled-components';

export const RecommendBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: calc(100vh - 12rem);
  padding: 0 2rem;
  background-image: url('https://source.unsplash.com/PEm_sLmJT-w/1600x900');
  animation: weather-motion 40s linear infinite;

  div {
    strong {
      font-size: 3rem;
      color: #fff;
      text-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
    }

    span {
      display: block;
      margin: 2rem 0;
      font-weight: 300;
      font-size: 8rem;
      color: #fff;
      text-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.3);

      & + span {
        font-size: 2rem;
      }
    }

    p {
      font-weight: 300;
      font-size: 2rem;
      color: #fff;
      line-height: 1.4;
      text-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
    }
  }

  &.weather-clouds {
    background-image: url('https://source.unsplash.com/v9bnfMCyKbg/1600x900');
  }
  &.weather-thunderstorm {
    background-image: url('https://source.unsplash.com/jh2KTqHLMjE/1600x900');
  }
  &.weather-rain {
    background-image: url('https://source.unsplash.com/22x7fxFpl_8/1600x900');
  }
  &.weather-mist {
    background-image: url('/bg_mist.png');
  }
  &.weather-snow {
    background-image: url('/bg_snow.jpg');
  }

  @keyframes weather-motion {
    0% {
      background-position: 0;
    }
    100% {
      background-position: 100%;
    }
  }
`;
