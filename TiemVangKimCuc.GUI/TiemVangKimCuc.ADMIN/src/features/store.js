import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import { productApi } from './api/apiSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productApi.middleware),
});