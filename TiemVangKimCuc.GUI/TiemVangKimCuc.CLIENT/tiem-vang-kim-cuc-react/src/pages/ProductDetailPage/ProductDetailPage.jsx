import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {fetchAsyncGetProductById, getSelectedProduct, removeSelectedProduct} from '../../features/product/productSlice'
import Tooltip from '../../components/CustomComponent/Tooltip/Tooltip'
import Loading from '../../components/Loading/Loading'
import Magnifier from '../../components/CustomComponent/Magnifier/Magnifier'


const ProductDetailPage = () => {

  useEffect(() => {window.scrollTo(0,0)},[])

    const { id } = useParams();
    const product = useSelector(getSelectedProduct);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncGetProductById(id));

        return () => {
          dispatch(removeSelectedProduct());
        }
    }, [dispatch, id])

  return (
    <main className='lg:px-24 px-[2rem] py-12'>

      {/* Product Detail */}
      <section className=' flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8'>
        
        <div className=' rounded-lg h-[300px] w-[240px] shadow-md grid place-items-center p-0 m-0'>
          {product.imgUrl ? 
              <Magnifier imgUrl={product.imgUrl}/> :
            <Loading />}
        </div>

        <div className="flex flex-col gap-5 w-full lg:max-w-[320px]">
          <h2 className='text-3xl font-bold text-primary leading-8'>
            {product.tenSanPham}
          </h2>
                <img className='object-cover'/>
          <div>
            <div className="grid grid-cols-2 py-3 text-sm border-b-[1px]">
                <h3 className="font-semibold">Loại trang sức:</h3>
                <span className="text-primary">{product.loaiTrangSuc}</span>
            </div>
            <div className="grid grid-cols-2 py-3 text-sm border-b-[1px]">
                <h3 className="font-semibold">Chất liệu:</h3>
                <span className="text-primary">{product.chatLieu}</span>
            </div>
            <div className="grid grid-cols-2 py-3 text-sm border-b-[1px]">
                <h3 className="font-semibold">Trọng lượng:</h3>
                <span className="text-primary">{product.trongLuongSanPham}</span>
            </div>
          </div>
          
          <div className='shadow-md hover:opacity-80 transition-all duration-200 w-full'>
            <Tooltip message='Liên hệ qua Zalo để biết thêm chi tiết' offset='true'>
              <a href="https://zalo.me/0972456292" target='_blank'>
                <button className="w-full rounded-lg bg-gradient-to-b from-[#fd6e1d] to-[#f59000] text-white text-lg font-bold px-2 py-3">
                              Liên hệ
                </button>
              </a>
            </Tooltip>
          </div>
        </div>

      </section>

      {/* Description */}
      <section className='flex flex-col gap-3 mt-10'>
        <h2 className="bg-[#c1932c] text-lg font-bold leading-5 p-3 w-fit text-white rounded-md">
          Mô tả
        </h2>
        <h3 className="text-2xl font-bold text-primary leading-8">
          {product.tenSanPham}
        </h3>
        <p>{product.moTa}</p>
      </section>
    </main>
  )
}

export default ProductDetailPage
