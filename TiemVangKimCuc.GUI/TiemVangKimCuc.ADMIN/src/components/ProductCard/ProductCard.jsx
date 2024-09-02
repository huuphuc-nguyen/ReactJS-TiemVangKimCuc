import { Link } from "react-router-dom"
import { GoPencil } from "react-icons/go";
import { RiDeleteBin4Line } from "react-icons/ri";
import Tooltip from '../CustomComponent/Tooltip/Tooltip'
import { useState} from "react";
import Modal from "../Modal/Modal";
import {useLazyDeleteProductQuery, useGetListCategoriesQuery} from '../../features/api/apiSlice'
import { toast } from "sonner";

const ProductCard = ({product, refetch}) => {  

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [deleteProduct, {data, error, isLoading: isDeleting}] = useLazyDeleteProductQuery();

  // This is used to navigate to the product detail page
  const categories = useGetListCategoriesQuery().data;
  const currentCategory = categories?.find(cat => cat.id === product.loaiTrangSucId).idForSEO;

  const handleDeleteProduct = async () => {
      await deleteProduct(product.id)

      if (error) {
        toast.error("Xóa sản phẩm thất bại. Vui lòng liên hệ Phúc để được hỗ trợ");
      }
      else {
        toast.success("Xóa sản phẩm thành công");
        setIsModalOpen(false);
        refetch();
      }
  }

  return (
  <div className="flex flex-col">
    {isModalOpen && 
      <Modal showModal={isModalOpen} setShowModal={setIsModalOpen}> 
        <div className="flex flex-col w-full h-full items-center justify-around">
          <h1 className="text-primary font-bold text-2xl">Xác nhận xóa sản phẩm</h1>
          

          <div className=" w-1/2 grid grid-cols-2 gap-5">
            <div className="text-primary font-semibold">Tên sản phẩm</div>
            <div>{product.tenSanPham}</div>

            <div className="text-primary font-semibold">Loại trang sức</div>
            <div>{product.loaiTrangSuc}</div>

            <div className="text-primary font-semibold">Chất liệu</div>
            <div>{product.chatLieu}</div>
          </div>

          <div className="flex flex-row gap-5">
            <button className="text-white font-semibold hover:bg-red-700 focus:ring focus:ring-red-600 focus:ring-offset-2 bg-red-500 px-5 py-2 rounded-lg" onClick={() => {setIsModalOpen(false)}}>Hủy</button>
            <button className="text-white font-semibold hover:bg-primary focus:ring focus:ring-primary focus:ring-offset-2 bg-primary/90 px-5 py-2 rounded-lg" onClick={handleDeleteProduct}>
              {isDeleting?"Đang xóa..." : "Xác nhận"}
            </button>
          </div>

        </div>
      </Modal>}

    <div
        data-aos='zoom-in' data-aos-anchor-placement='center-bottom'
        data-aos-once={true}>

      <Link to={`https://tiemvangkimcuclx.com/san-pham/${currentCategory}/${product.id}`}
          className=" border-primary border-[1px] lg:border-2 cursor-pointer group max-w-[240px] w-[150px] lg:w-[240px] overflow-hidden flex flex-col h-[270px] lg:h-[370px] justify-center items-center gap-2 text-primary shadow-lg rounded-lg">
      
        <div  className="rounded-lg overflow-hidden w-[100px] lg:w-[160px] h-[180px] lg:h-[180px] group mt-4">
          <img src={product.imgUrl}
              alt={product.tenSanPham}
              className="w-full object-fill h-full group-hover:scale-110 transition-all duration-300"
          />
        </div>
      
        <div className="px-2 py-3 w-full h-[120px] flex flex-col justify-around">
          <span className="lg:text-md text-sm font-bold truncate text-center">{product.tenSanPham}</span>
          <span className="lg:text-md text-sm font-medium truncate text-center">
              {product.loaiTrangSuc} - {product.chatLieu}
          </span>
          <span className="text-red-700 text-sm lg:text-md font-medium truncate text-center">
              {product.trongLuongSanPham}
          </span>
        </div>
      </Link>

      <div className="flex flex-row items-center justify-end gap-3 mr-5 cursor-pointer" >
        <Tooltip message='Chỉnh sửa' className='-mt-12' offset>
          <Link to={`/admin/dashboard/san-pham/chinh-sua/${product.id}`}> 
            <GoPencil size={20} className="z-20 text-primary"/>
          </Link>
        </Tooltip>
        <Tooltip message='Xóa sản phẩm' className='-mt-12' offset>
          <RiDeleteBin4Line size={20} className="z-20 text-red-500" onClick={() => {setIsModalOpen(true)}}/>
        </Tooltip>
      </div>

    </div>
  </div>
  )
}

export default ProductCard
