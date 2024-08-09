// Combine with apiSLice.js, this file is for practicing purpose

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import productApis from "../../api/productApis";

export const fetchAsyncGetListMaterials = createAsyncThunk(
    "product/getListMaterials",
    async () => {
        const data = productApis.getListProducts()
        return data;
    }
);

export const fetchAsyncGetProductsBySearch = createAsyncThunk(
    "product/getProductsBySearch",
    async ({filterObj, paginationObj}) => {
        const data = productApis.getProductsBySearch(filterObj, paginationObj)
        return data;
    }
);

export const fetchAsyncGetProductById = createAsyncThunk(
    "product/getProductById",
    async (id) => {
        const data = productApis.getProductById(id)
        return data;
    }
);

const initialState = {
    products: [],
    selectedProduct: {},
    listMaterials: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        removeSelectedProduct: (state) => {
            state.selectedProduct = {};
        },
        removeProducts: (state) => {
            state.products = [];
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchAsyncGetListMaterials.fulfilled, (state, action) => {
            return {...state, listMaterials: action.payload}
        });
        builder.addCase(fetchAsyncGetProductsBySearch.fulfilled, (state, action) => {
            return {...state, products: action.payload}
        });
        builder.addCase(fetchAsyncGetProductById.fulfilled, (state, action) => {
            return {...state, selectedProduct: action.payload}
        });
    }
});

export default productSlice.reducer;

export const { removeSelectedProduct, removeProducts } = productSlice.actions;

export const getProducts = (state) => state.product.products;
export const getSelectedProduct = (state) => state.product.selectedProduct || [];
export const getListMaterials = (state) => state.product.listMaterials || [];