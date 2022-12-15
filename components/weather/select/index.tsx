import React, { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserState, setEmail, setName } from '../../../store/modules/userSlice';
import { getCounterState, plusCounter, minusCounter } from '../../../store/modules/counterSlice';
import { AccountInterface } from '../../../interfaces/user.interface';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { UserState } from '../../../state';
import ModalRegister from '../../modalRegister';
import Loading from '../../loading';

import { WeatherBox } from './style';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import axios from 'axios';

export default function Weather() {
  const dispatch = useDispatch();
  const { name, email } = useSelector(getUserState);
  const { value } = useSelector(getCounterState);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [modalFlag, setModalFlag] = useState(false);
  const intl = new Intl.NumberFormat('ko', { style: 'currency', currency: 'KRW' });
  const [accountData, setAccountData] = useState();
  const [selectValue, setSelectValue] = useState({ select: 'seoul' });
  const [weatherData, setWeatherData] = useState(null);
  const onDispatch = () => {
    dispatch(setName('ahyoung'));
    dispatch(setEmail('ahyoung.db@gmail.com'));
  };

  const onDispatch2 = () => {
    dispatch(plusCounter(1));
  };

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
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=kr&appid=${process.env.NEXT_PUBLIC_APIKEY}&units=metric`
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

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [selectValue]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <WeatherBox>
          <select name="select" id="selectBox" onChange={handleSelectValue}>
            <option value="seoul">seoul</option>
            <option value="Incheon">Incheon</option>
            <option value="Jeonju">Jeonju</option>
            <option value="busan">busan</option>
            <option value="Daegu">Daegu</option>
            <option value="Jeju">Jeju</option>
          </select>
          {weatherData &&
            weatherData?.weather.map((item: any, idx: number) => {
              return (
                <div key={idx}>
                  <dl>
                    <dt>날씨 설명 : {item.description}</dt>
                    <dd>아이콘 : {item.main}</dd>
                  </dl>
                </div>
              );
            })}
          {weatherData && (
            <div>
              <dl>
                <dt>현재 기온 : {weatherData.main.temp}</dt>
                <dd>최저 기온 : {weatherData.main.temp_min}</dd>
                <dd>최고 기온 : {weatherData.main.temp_max}</dd>
              </dl>
            </div>
          )}
          <button type="button" onClick={onDispatch2}>
            plus button
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch(minusCounter(1));
            }}
          >
            minus button
          </button>
          count: {value}
          <br />
          <br />
          <button type="button" onClick={onDispatch}>
            이름, 이메일 버튼
          </button>
          <br />
          name:{name}
          email:{email}
          {/* <button onClick={onClickOpenModal}>모달오픈</button>
      {modalFlag && <ModalRegister onClose={onClickCloseModal} accountData={accountData} />} */}
        </WeatherBox>
      )}
    </>
  );
}
