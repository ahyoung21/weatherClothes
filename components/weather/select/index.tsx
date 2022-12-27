import React, { ReactNode, MouseEvent } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { getCounterState, asyncWeatherFetch } from '../../../store/modules/counterSlice';
import Loading from '../../loading';

import { WeatherBox } from './style';

type MyComponentProps = {
  children: ReactNode;
};

const MyComponent = ({ children }: MyComponentProps) => {
  return <>{children}</>;
};

export default function Weather() {
  const cityNameData = ['seoul', 'Incheon', 'Jeonju', 'busan', 'Daegu', 'Jeju'];
  const dispatch = useDispatch();
  const { status } = useSelector(getCounterState);

  const onClickCity = (e: MouseEvent<HTMLButtonElement>, city: string) => {
    Router.push(`/${city}`);
    dispatch(asyncWeatherFetch(city));
  };

  return (
    <>
      {status === 'Loading' ? (
        <Loading />
      ) : (
        <WeatherBox>
          <MyComponent>
            {cityNameData.map((item, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  onClickCity(e, item);
                }}
              >
                {item}
              </button>
            ))}
          </MyComponent>
        </WeatherBox>
      )}
      {status === 'fail' && <>에러가 발생했습니다. 다시 시도해주세요.</>}
    </>
  );
}
