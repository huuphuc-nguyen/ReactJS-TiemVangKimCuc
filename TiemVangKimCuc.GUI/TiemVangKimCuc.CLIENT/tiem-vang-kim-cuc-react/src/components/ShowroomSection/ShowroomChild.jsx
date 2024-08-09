import { useGetProductsBySearchQuery } from '../../features/api/apiSlice'
import ProductList from '../Product/ProductList'
import TitleWrapper from '../Wrapper/TitleWrapper'
import SkeletonProduct from '../Loading/SkeletonProduct'

// CategoryId prop is used for fetching data

const ShowroomChild = ({category}) => {

    const paginationObj = {
        pageIndex: 1,
        pageSize: 4,
    }

    const filterObj = {
        searchKey: '',
        chatLieus: '',
        loaiTrangSucs: [category.id],
    }

    const {data} = useGetProductsBySearchQuery({filterObj, paginationObj});
    
    return(
        <TitleWrapper title={category.name} href={`/san-pham/${category.idForSEO}`}>
            {category ? 
                <div className="w-full gap-4">
                    <ProductList products={data?.data} category={category.idForSEO}/>
                </div> : <SkeletonProduct/>}
        </TitleWrapper>
    )
}

export default ShowroomChild