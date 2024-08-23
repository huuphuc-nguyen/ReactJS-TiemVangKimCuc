import FilterList from '../FilterList/FilterList'
import Search from '../Search/Search'
import ReactPaginate from 'react-paginate';
import ProductList from '../ProductList/ProductList';

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

      {/* <ReactPaginate
        breakLabel='...'
        nextLabel='>'
        pageRangeDisplayed={1}
        pageCount={productResponse?.totalPages}
        previousLabel='<'
        renderOnZeroPageCount={null}

        onPageChange={(e) => {
            setPageIndex(e.selected + 1); 
            window.scrollTo({
              top: 550,
              behavior: 'smooth'
            }
            )}}

        className='flex justify-center mt-16 items-center gap-3'
        previousLinkClassName='shadow-md border border-[1px] border-primary grid place-items-center w-8 text-md rounded-md text-primary'
        pageLinkClassName='shadow-md border border-[1px] border-primary grid place-items-center w-8 text-md rounded-md'
        nextLinkClassName='shadow-md border border-[1px] border-primary grid place-items-center w-8 text-md rounded-md cursor-pointer text-primary'
        activeLinkClassName='shadow-md bg-primary text-white transition-all duration-300'
        /> */}
      
    </main>
  )
}

export default SanPhamDashboard