import { Link } from "react-router-dom"


const ProductCard = ({product, category}) => {  

  return (
    <Link to={`/san-pham/${category}/${product.id}`}
      className="border-primary border-[1px] lg:border-2 cursor-pointer group max-w-[240px] w-[150px] lg:w-[240px] overflow-hidden flex flex-col h-[230px] lg:h-[320px] justify-center items-center gap-2 text-primary shadow-lg rounded-lg">
      
      <div className="rounded-lg overflow-hidden w-[100px] lg:w-[160px] h-[180px] lg:h-[180px] group mt-4">
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
  )
}

export default ProductCard
