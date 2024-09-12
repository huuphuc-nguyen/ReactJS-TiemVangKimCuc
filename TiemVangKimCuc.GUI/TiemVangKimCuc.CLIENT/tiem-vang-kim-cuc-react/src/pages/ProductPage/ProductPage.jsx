import { useState, useMemo, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { removeProducts } from '../../features/product/productSlice';
import ProductList from '../../components/Product/ProductList';
import useDeviceType from '../../hooks/useDeviceType';
import ReactPaginate from 'react-paginate';
import { useGetListCategoriesQuery, useLazyGetProductsBySearchQuery } from '../../features/api/apiSlice';

// This component handle fetching data for product list
// There are 2 tasks:
// 1. Get category from params to handle title
// 1.1. If category is found, set categoryId to fetch data
// 2. Fetch data

// This componenet is navigated in 3 cases and perform 3 different fetching data params:
// 1. Click on category in navbar
// 2. Click on search button
// 3. Click on 'Tất cả sản phẩm'

const ProductPage = () => {

  useEffect(() => {window.scrollTo(0,0)},[])

  // States
  const [pageIndex, setPageIndex] = useState(1);
  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState(null); // this is used for fetching data in case this component is navigated by navbar

  const [searchKey, setSearchKey] = useState('');
  const [chatLieus, setChatLieus] = useState('');
  const [loaiTrangSucs, setLoaiTrangSucs] = useState('');

  // Hooks
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const {data:categories, isLoading} = useGetListCategoriesQuery();
  const deviceType = useDeviceType();

  // Extract category from params to handle title
  const { category } = useParams();
  
  // 1st Task: Set title
  useEffect(() => {
    if (!isLoading && category) { // Check if categories is loaded
      const foundCategory = categories.find(cat => cat.idForSEO === category);

      if(foundCategory) {
        setTitle(foundCategory.name);
        setCategoryId(foundCategory.id);
      }

      if (category === 'tim-kiem') {
        setTitle('Kết quả tìm kiếm');
      }

      if (category === 'tat-ca-san-pham') {
        setTitle('Tất cả sản phẩm');
      }
    }
    else {
      setTitle('');
    }

  }, [category, categories, isLoading]);

  useEffect(() => {
    return () => {dispatch(removeProducts())}
  }
  , [dispatch])

  // 2nd Task: Fetch data

  // Declare variables for fetching data
    // Pagination vars
    const itemsPerPage = useMemo(() => {
      switch (deviceType) {
        case 'mobile':
          return 6;
        case 'tablet':  
          return 12;
        default:
          return 20;
      }
    }, [deviceType]);
 
    const pagination = useMemo(() => ({
      pageIndex: pageIndex,
      pageSize: itemsPerPage,
    }), [pageIndex, itemsPerPage]);

    const filter = useMemo(() => ({
      searchKey: searchKey,
      chatLieus: chatLieus,
      loaiTrangSucs: loaiTrangSucs,
    }), [searchKey, chatLieus, loaiTrangSucs]);

    // Fetch data
    const [searchProduct, {data: products, isLoading: isProductsLoading}] = useLazyGetProductsBySearchQuery();

  useEffect(() => {
    if (!isLoading && category === 'tim-kiem') {
      setSearchKey(searchParams.get('searchKey') || '');
      setChatLieus(searchParams.get('chatLieus') ? searchParams.get('chatLieus').split(',') : '');
      setLoaiTrangSucs(searchParams.get('loaiTrangSucs') ? searchParams.get('loaiTrangSucs').split(',') : '');
      searchProduct({ filterObj: filter, paginationObj: pagination });
    }

    if (!isLoading && category === 'tat-ca-san-pham') {
      setLoaiTrangSucs('');
      searchProduct({ filterObj: filter, paginationObj: pagination });
    }

  }, [searchParams, category, isLoading, pagination]);

  useEffect(() => {
    if (!isLoading && category !== 'tim-kiem' && category !== 'tat-ca-san-pham') {
      setSearchKey('');
      setChatLieus('');
      if (categoryId !== null) {
        setLoaiTrangSucs(prev => {
          if (prev.length === 1 && prev[0] === categoryId) {
            return prev;
          }
          return [categoryId];
        });
      }
    }
  }, [searchParams, category, categoryId, isLoading]);

  useEffect(() => {
    if (!isLoading && filter) {
      searchProduct({ filterObj: filter, paginationObj: pagination });
      console.log('filter', filter);
    }
  }, [searchParams, loaiTrangSucs, pagination, isLoading]);

  return (
    <div className='lg:px-24 px-[2rem]'>
      <h1 className='w-full text-center font-bold text-3xl mt-5 mb-10'>
        {title}
      </h1>

      {/* Apply product loading to prevent user use navigation bar continuosly cause interupt fetching data */}
      {(!isProductsLoading && products) &&  
       <>
        <ProductList products={products.data} category={category}/>

        <ReactPaginate
        breakLabel='...'
        nextLabel='>'
        pageRangeDisplayed={1}
        pageCount={products.totalPages}
        previousLabel='<'
        renderOnZeroPageCount={null}

        onPageChange={(e) => {setPageIndex(e.selected + 1)}}

        className='flex justify-center mt-16 items-center gap-3'
        previousLinkClassName='shadow-md border border-[1px] border-primary grid place-items-center w-8 text-md rounded-md text-primary'
        pageLinkClassName='shadow-md border border-[1px] border-primary grid place-items-center w-8 text-md rounded-md'
        nextLinkClassName='shadow-md border border-[1px] border-primary grid place-items-center w-8 text-md rounded-md cursor-pointer text-primary'
        activeLinkClassName='shadow-md bg-primary text-white transition-all duration-300'
        />
       </>}
      


    </div>
  )
}

export default ProductPage
