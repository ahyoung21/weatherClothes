import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import userSlice from './modules/userSlice';
import counterSlice from './modules/counterSlice';
import { useDispatch as useDispatchBase, useSelector as useSelectorBase } from 'react-redux';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  user: userSlice,
  counter: counterSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

/**
 * Creates a store and includes all the slices as reducers.
 */
export const store = configureStore({
  reducer: persistedReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: { users: UsersState}
type AppDispatch = typeof store.dispatch;

// Since we use typescript, lets utilize `useDispatch`
export const useDispatch = () => useDispatchBase<AppDispatch>();

// And utilize `useSelector`
export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
): TSelected => useSelectorBase<RootState, TSelected>(selector);
