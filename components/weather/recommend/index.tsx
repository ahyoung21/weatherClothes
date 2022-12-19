import React, { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterState } from '../../../store/modules/counterSlice';

import { RecommendBox } from './style';
import TempData from './TempData.json';

export default function Recommend() {
  const dispatch = useDispatch();
  const { data } = useSelector(getCounterState);

  const TempMap = [
    '겨울 야상 / 패딩 필수',
    '코트',
    '트렌치코트 단품 / 간절기 야상 단품 / 자켓 단품 (14도부터 살색스타킹 가능)',
    '니트 + 원피스',
    '가디건 / 후드+티+스키니',
    '반팔 스키니 / 얇은셔츠 반바지 / 얇은 긴팔 스키니',
    '민소매 원피스 / 상,하체 동시 노출 가능',
  ];

  const tempToClothes = (temp: number) => {
    const score = Math.min(Math.max(Math.floor(temp / 5), 0), 6);
    return TempMap[score];
  };

  return (
    <RecommendBox>
      <div>
        <strong>{data?.name}</strong>
        <span>{data.main.temp}&deg;</span>
        <span>추천 옷 : {tempToClothes(data.main.temp)}</span>
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
