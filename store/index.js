import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    network: userReducer, // Map network to the same reducer for simplicity
  },
});
