import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/productSlice";
import { productApi } from "./api/apiSlice";

export const store = configureStore({
    reducer :{
        product: productReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productApi.middleware),
}); 