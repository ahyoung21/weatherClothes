import React, { useState, ChangeEvent, useEffect } from 'react';
import { AccountInterface } from '../../../interfaces/user.interface';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { UserState } from '../../../state';
import ModalRegister from '../../modalRegister';

import { WeatherBox } from './style';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import axios from 'axios';

export default function Weather() {
  const [modalFlag, setModalFlag] = useState(false);
  const intl = new Intl.NumberFormat('ko', { style: 'currency', currency: 'KRW' });
  const [accountData, setAccountData] = useState();
  const [selectValue, setSelectValue] = useState({ select: 'seoul' });
  const [weatherData, setWeatherData] = useState(null);

  const onClickOpenModal = () => {
    setModalFlag(true);
  };

  const onClickCloseModal = () => {
    setModalFlag(false);
  };

  const handleSelectValue = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setSelectValue({
      ...selectValue,
      [name]: value,
    });
  };

  const getWeatherInfo = (cityName: string) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.NEXT_PUBLIC_APIKEY}`
      )
      .then((response) => {
        console.log(response.data);
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (selectValue.select) {
      getWeatherInfo(selectValue.select);
    }
  }, [selectValue]);

  return (
    <WeatherBox>
      <select name="select" id="selectBox" onChange={handleSelectValue}>
        <option value="seoul">seoul</option>
        <option value="london">london</option>
      </select>
      {weatherData &&
        weatherData?.weather.map((item: any, idx: number) => {
          return (
            <div key={idx}>
              <dl>
                <dt>{item.description}</dt>
                <dd>{item.icon}</dd>
                <dd>{item.main}</dd>
              </dl>
            </div>
          );
        })}
      <button onClick={onClickOpenModal}>모달오픈</button>
      {modalFlag && <ModalRegister onClose={onClickCloseModal} accountData={accountData} />}
    </WeatherBox>
  );
}
