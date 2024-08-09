import {useState} from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useGetListCategoriesQuery } from '../../features/api/apiSlice';

const MenuItem = ({id, children, childClass}) => {
  const {data:categories} = useGetListCategoriesQuery();

  return (
        <Link to={`/san-pham/${categories[id].idForSEO}`}>
          <li className={`cursor-pointer ${childClass}`}>{children}</li>
        </Link>
  )
}

const HeaderNav = () => {
  // States
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const {data:categories, isLoading} = useGetListCategoriesQuery();

  return (<>
      <nav className='hidden lg:block '>
      <ul className='select-none flex justify-center items-center text-white text-sm font-medium bg-primary h-10 w-full gap-9'>
        {!isLoading ?
          <>
            {/* item 1 */}
            <li className='cursor-pointer relative flex gap-1' onClick={() => setShowSubmenu(!showSubmenu)} onMouseEnter={()=>setShowSubmenu(true)} onMouseLeave={() => { const id = setTimeout(()=>{setShowSubmenu(false)},300); setTimeoutId(id)}}>
              Nhẫn
              <MdOutlineKeyboardArrowDown className={`mt-1 ${showSubmenu ? 'rotate-180' : ''} transition-all duration-300`}/>
              
              {/* subMenu */}
              {showSubmenu && 
                <div className='animate-fade-in absolute top-9 -left-12 w-[180px] bg-white rounded-lg shadow-md text-black'>
                  <ul className='my-2 flex flex-col gap-2' onMouseLeave={()=>setShowSubmenu(false)} onMouseEnter={()=>clearTimeout(timeoutId)}>
                    <MenuItem id={0} childClass='w-full hover:bg-primary hover:text-white py-2 px-8 font-normal transition-all duration-400'>Nhẫn nam</MenuItem>
                    <MenuItem id={1} childClass='w-full hover:bg-primary hover:text-white py-2 px-8 font-normal transition-all duration-400'>Nhẫn nữ</MenuItem>
                    <MenuItem id={2} childClass='w-full hover:bg-primary hover:text-white py-2 px-8 font-normal transition-all duration-400'>Nhẫn đôi</MenuItem>
                  </ul>
                </div>}
              </li>

              <MenuItem id={3}>Vòng tay</MenuItem>
              <MenuItem id={4}>Lắc tay</MenuItem>
              <MenuItem id={5}>Bông tai</MenuItem>
              <MenuItem id={6}>Mặt dây</MenuItem>
              <MenuItem id={7}>Hạt Charm</MenuItem>
          </> : null}
      </ul>
    </nav> 
  </>
  )
}

export default HeaderNav
