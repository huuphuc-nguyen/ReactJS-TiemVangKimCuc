import FilterList from '../FilterList/FilterList'
import Search from '../Search/Search'
import ProductList from '../ProductList/ProductList';
import Pagination from '../Pagination/Pagination';

const SanPhamDashboard = () => {
  
  return (
    <main className='w-full bg-slate-50 px-10 py-10 flex flex-col gap-8 items-center'>
      
      <h1 className='text-3xl font-semibold text-primary'>
        Sản Phẩm
      </h1>

      <Search />

      <h1 className='self-start text-primary ml-2 text-xl animate-fade-in font-semibold'>
        Loại trang sức
      </h1>
      <FilterList type='category'/>

      <h1 className='self-start text-primary ml-2 text-xl animate-fade-in font-semibold'>
        Chất liệu
      </h1>
      <FilterList type='material'/>

      <h1 className='self-start text-primary ml-2 text-xl animate-fade-in font-semibold'>
        Danh sách sản phẩm
      </h1>
      <ProductList />

      <Pagination />
      
    </main>
  )
}

export default SanPhamDashboard