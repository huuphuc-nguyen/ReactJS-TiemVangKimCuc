import {useContext} from 'react'
import ReactPaginate from 'react-paginate';
import { FilterContext } from '../../context/FilterContext';

const Pagination = () => {

    const {setPageIndex, totalPage} = useContext(FilterContext);

  return (
        <ReactPaginate
        breakLabel='...'
        nextLabel='>'
        pageRangeDisplayed={1}
        pageCount={totalPage}
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
        />
  )
}

export default Pagination
