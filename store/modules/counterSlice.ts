// *** counterSlice.ts 파일
// slice(액션+슬라이스 통합본) 생성한다.

import { createSlice, PayloadAction, Draft, createAsyncThunk } from '@reduxjs/toolkit';

// initalState 타입 정의
export interface CounterState {
  value: number;
  status: string;
  data: {
    weather: [];
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
    };
  };
}

// initalState 생성
const initialState: CounterState = {
  value: 0,
  status: 'Loading',
  data: {
    weather: [],
    main: {
      temp: 0,
      temp_min: 0,
      temp_max: 0,
    },
  },
};

const asyncWeatherFetch = createAsyncThunk(
  'counterSlice/asyncWeatherFetch',
  async (cityName: string) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=kr&appid=${process.env.NEXT_PUBLIC_APIKEY}&units=metric`
    );
    const data = await response.json();
    return data;
  }
);

// 슬라이스생성
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // action의 타입은 PayloadAction<제네릭> 으로 정의해준다.
    plusCounter: (state: Draft<typeof initialState>, action: PayloadAction<number>) => {
      // immer가 내장되어 있어서, 불변성 신경 쓰지 않고 바로 수정해주면 된다.
      state.value += action.payload;
    },
    minusCounter: (state: Draft<typeof initialState>, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncWeatherFetch.pending, (state, action) => {
      state.status = 'Loading';
    });
    builder.addCase(asyncWeatherFetch.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'complete';
    });
    builder.addCase(asyncWeatherFetch.rejected, (state, action) => {
      state.status = 'fail';
    });
  },
});

export const getCounterState = (state: { counter: CounterState }) => state.counter;

// 액션을 export 해준다.
export const { plusCounter, minusCounter } = counterSlice.actions;

// 슬라이스를 export 해준다.
export default counterSlice.reducer;
export { asyncWeatherFetch };
