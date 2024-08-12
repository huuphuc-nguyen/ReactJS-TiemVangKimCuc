import ProductCard from './ProductCard'
import SkeletonProduct from '../Loading/SkeletonProduct'

const ProductList = ({products, category}) => {
  return (
      <div className=' w-full gap-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 px-3 place-items-center'>
        {products ? products.map(product => <ProductCard key={product.id} product={product} category={category} />) : 
          <>
            <SkeletonProduct/>
          </>}
      </div>
  )
}

export default ProductList
