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
                    return {data: data.dataResult};
                }
                catch (error) {
                    return {error: error.message};
                }
            },
        }),
        getListCategories: builder.query({
            queryFn: async () => {
                try{
                    const data = await productApis.getListCategories();

                    const response = data.dataResult.map((item) => ({
                        ...item,
                        name: item.loaiTrangSuc 
                        }))

                    return {data: response};
                }
                catch (error) {
                    return {error: error.message};
                }
            },
        }),
        getListMaterials: builder.query({
            queryFn: async () => {
                try{
                    const data = await productApis.getListMaterials()

                    const response = data.dataResult.map((item) => ({
                        ...item,
                        name: item.chatLieu 
                        }))

                    return {data: response};
                }
                catch (error) {
                    return {error: error.message};
                }
            },
        }),
        deleteProduct: builder.query({
            queryFn: async (id) => {
                try{
                    const data = await productApis.deleteProductById(id)

                    return {data};
                }
                catch (error) {
                    return {error: error.message};
                }
            },
        }),
        getProductsById: builder.query({
            queryFn: async (id) => {
                try{
                    if(id) {
                        const data = await productApis.getProductById(id);
                        return {data: data.dataResult};
                    }
                    else {
                        return {data: null}
                    }
                }
                catch (error) {
                    return {error: error.message};
                }
            },
        }),
    }),
}); 

export const { 
    useGetProductsBySearchQuery, 
    useGetListCategoriesQuery, 
    useLazyGetProductsBySearchQuery, 
    useGetListMaterialsQuery,
    useDeleteProductQuery,
    useLazyDeleteProductQuery,
    useGetProductsByIdQuery} = productApi;