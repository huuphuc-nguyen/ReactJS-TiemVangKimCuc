import { useState, useMemo, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncGetProductsBySearch, getProducts, removeProducts } from '../../features/product/productSlice';
import ProductList from '../../components/Product/ProductList';
import useDeviceType from '../../hooks/useDeviceType';
import ReactPaginate from 'react-paginate';
import { useGetListCategoriesQuery } from '../../features/api/apiSlice';

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
  const products = useSelector(getProducts)
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
        setCategoryId(0);
      }

      if (category === 'tat-ca-san-pham') {
        setTitle('Tất cả sản phẩm');
        // Allow fetching data when categoryId is !null
        setCategoryId(0);
      }
    }
    else {
      setTitle('');
    }

  }, [category, categories, isLoading]);

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

  // Handle variables for searching
  useEffect(() => {
    if (!isLoading && category === 'tim-kiem') {
      setSearchKey(searchParams.get('searchKey') || '');
      setChatLieus(searchParams.get('chatLieus') ? searchParams.get('chatLieus').split(',') : '');
      setLoaiTrangSucs(searchParams.get('loaiTrangSucs') ? searchParams.get('loaiTrangSucs').split(',') : '');
    }

    if (!isLoading && category === 'tat-ca-san-pham') {
      setLoaiTrangSucs('');
    }

    if (!isLoading && category !== 'tim-kiem' && category !== 'tat-ca-san-pham') {
      setLoaiTrangSucs([categoryId]);
    }
  }, [searchParams, category, isLoading, categories, categoryId]);

  // Fetch data
  useEffect(() => {
     // This condition is important !!: if categoryId is null and still fetching data -> a rapid call will be made after useParam is updated 
     // -> if the anwser for first call (categoryId = '') is returned after 2nd call -> the productlist will erase and empty
    if(categoryId !== null && !isLoading) { 
      console.log('fetching data')
      console.log(filter)
      dispatch(fetchAsyncGetProductsBySearch({ filterObj: filter, paginationObj: pagination }));
    }

    return () => {dispatch(removeProducts())}
  }, [dispatch, filter, pagination, categoryId, loaiTrangSucs, isLoading]);

  return (
    <div className='lg:px-24 px-[2rem]'>
      <h1 className='w-full text-center font-bold text-3xl mt-5 mb-10'>
        {title}
      </h1>
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
        previousLinkClassName='shadow-md border border-[1px] border-primary grid place-items-center w-8 text-md rounded-md'
        pageLinkClassName='shadow-md border border-[1px] border-primary grid place-items-center w-8 text-md rounded-md'
        nextLinkClassName='shadow-md border border-[1px] border-primary grid place-items-center w-8 text-md rounded-md cursor-pointer'
        activeLinkClassName='shadow-md bg-primary text-white transition-all duration-300'
      />
    </div>
  )
}

export default ProductPage
