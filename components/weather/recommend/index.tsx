import React, { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserState, setEmail, setName } from '../../../store/modules/userSlice';
import {
  getCounterState,
  plusCounter,
  minusCounter,
  asyncWeatherFetch,
} from '../../../store/modules/counterSlice';
import Loading from '../../loading';

import { RecommendBox } from './style';

export default function Recommend() {
  const dispatch = useDispatch();
  const { name, email } = useSelector(getUserState);
  const { value, status, data } = useSelector(getCounterState);

  return (
    <RecommendBox>
      {data &&
        data?.weather.map((item: any, idx: number) => {
          return (
            <div key={idx}>
              <dl>
                <dt>날씨 설명 : {item.description}</dt>
                <dd>아이콘 : {item.main}</dd>
              </dl>
            </div>
          );
        })}
      {data && (
        <div>
          <dl>
            <dt>현재 기온 : {data.main.temp}</dt>
            <dd>최저 기온 : {data.main.temp_min}</dd>
            <dd>최고 기온 : {data.main.temp_max}</dd>
          </dl>
        </div>
      )}
    </RecommendBox>
  );
}
