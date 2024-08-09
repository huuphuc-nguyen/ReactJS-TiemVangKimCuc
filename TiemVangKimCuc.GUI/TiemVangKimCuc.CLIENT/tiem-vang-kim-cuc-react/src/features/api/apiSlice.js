// This is for practicing using RTK-Query

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import productApis from '../../api/productApis';

const baseUrl = import.meta.env.VITE_BASE_URL

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints:  (builder) => ({
        getProductsBySearch: builder.query({
            queryFn: async ({filterObj, paginationObj}) => {
                try{
                    const data = await productApis.getProductsBySearch(filterObj, paginationObj)
                    return {data};
                }
                catch (error) {
                    return {error: error.message};
                }
            },
        }),
        getListCategories: builder.query({
            queryFn: async () => {
                try{
                    const data = await productApis.getListCategories()
                    return {data};
                }
                catch (error) {
                    return {error: error.message};
                }
            },
        }),

    }),
}); 

export const { useGetProductsBySearchQuery, useGetListCategoriesQuery } = productApi;