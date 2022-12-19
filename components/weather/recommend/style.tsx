import styled from 'styled-components';

export const RecommendBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: calc(100vh - 12rem);

  div {
    strong {
      font-size: 3rem;
      color: #fff;
    }

    span {
      display: block;
      margin: 2rem 0;
      font-weight: 300;
      font-size: 8rem;
      color: #fff;

      & + span {
        font-size: 2rem;
      }
    }

    p {
      font-weight: 300;
      font-size: 2rem;
      color: #fff;
      line-height: 1.4;
    }
  }

  .weather-clear {
    background-image: url('https://source.unsplash.com/PEm_sLmJT-w/1600x900');
  }
  .weather-clouds {
    background-image: url('https://source.unsplash.com/78wDBw9ajUk/1600x900');
  }
  .weather-thunderstorm {
    background-image: url('https://source.unsplash.com/jh2KTqHLMjE/1600x900');
  }
  .weather-rain {
    background-image: url('https://source.unsplash.com/22x7fxFpl_8/1600x900');
  }
  .weather-snow {
    background-image: url('https://source.unsplash.com/2V30zQZAIPs/1600x900');
  }
`;
