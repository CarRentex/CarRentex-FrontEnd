import filterCarSlice from './filterCarSlice';
import { rentalReducer, rentalSlice } from './rentalSlice';
import { signInReducer } from './signInSlice';
import {combineReducers, configureStore } from '@reduxjs/toolkit'


const rootReducer = combineReducers({
  user:signInReducer,
  filter:filterCarSlice,
  rental:rentalReducer
});








export const store = configureStore({
  reducer: rootReducer
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch