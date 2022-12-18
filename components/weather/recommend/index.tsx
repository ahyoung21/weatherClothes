import React, { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterState } from '../../../store/modules/counterSlice';

import { RecommendBox } from './style';

export default function Recommend() {
  const dispatch = useDispatch();
  const { data } = useSelector(getCounterState);

  console.log('data', data);

  return (
    <RecommendBox>
      <div>
        <strong>{data?.name}</strong>
        <span>{data.main.temp}&deg;</span>
        {data &&
          data?.weather.map((item: any, idx: number) => {
            return <p key={idx}>{item.description}</p>;
          })}
        <p>
          최고: {data.main.temp_max}&deg; 최저 : {data.main.temp_min}&deg;
        </p>
      </div>
    </RecommendBox>
  );
}
