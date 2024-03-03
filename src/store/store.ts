import filterCarSlice from './filterCarSlice';
import { rentalReducer, rentalSlice } from './rentalSlice';
import { signInReducer } from './signInSlice';
import {combineReducers, configureStore } from '@reduxjs/toolkit'

export function loadState(key: string, defaultState: any) {
  const stateInStorage = localStorage.getItem(key);
  if (!stateInStorage) return defaultState;
  try {
    return JSON.parse(stateInStorage);
  } catch {
    return defaultState;
  }
}

const preloadedState = {
  rental: loadState("rental", rentalSlice.getInitialState()),
};

const rootReducer = combineReducers({
  user:signInReducer,
  filter:filterCarSlice,
  rental:rentalReducer
});





export function storeState(key: string, state: any) {
  localStorage.setItem(key, JSON.stringify(state));
}


export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
})

store.subscribe(() => {
  storeState("rental", store.getState().rental);
});



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch