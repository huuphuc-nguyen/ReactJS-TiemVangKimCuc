import {useContext, useEffect} from 'react'
import { FilterContext } from '../../context/FilterContext'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'
import { useGetProductsBySearchQuery } from '../../features/api/apiSlice'

const ProductList = () => {
    const {filterObj, paginationObj, setTotalPage} = useContext(FilterContext);
    const {data: productResponse, isProductLoading, refetch} = useGetProductsBySearchQuery({filterObj, paginationObj});
    
    useEffect(() => {
        if (!isProductLoading) {
            setTotalPage(productResponse?.totalPages);
        }
    }, [productResponse, isProductLoading, setTotalPage])   

    return (
    <div>
        {productResponse?.totalPages === 0 &&
            <div className='mt-5 text-lg h-10'>Không có sản phẩm phù hợp</div>}
        
        <div className='w-full flex flex-row flex-wrap items-center justify-evenly gap-10'>
        {isProductLoading ? 
            <Loading /> : 
            productResponse?.data.map((product) => (
                <ProductCard key={product.id} product={product} refetch={refetch}/>
            ))
        }
        </div>
    </div>
  )
}

export default ProductList
