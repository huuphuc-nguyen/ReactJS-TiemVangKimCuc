import {useState} from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useGetListCategoriesQuery } from '../../features/api/apiSlice';

const MenuItem = ({href='/', children, childClass}) => {
  return (
        <Link to={href}>
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
        {!isLoading &&
          <>
            {/* item 1 */}
            <li className='cursor-pointer relative flex gap-1' onClick={() => setShowSubmenu(!showSubmenu)} onMouseEnter={()=>setShowSubmenu(true)} onMouseLeave={() => { const id = setTimeout(()=>{setShowSubmenu(false)},300); setTimeoutId(id)}}>
              Nhẫn
              <MdOutlineKeyboardArrowDown className={`mt-1 ${showSubmenu ? 'rotate-180' : ''} transition-all duration-300`}/>
              
              {/* subMenu */}
              {showSubmenu && 
                <div className='animate-fade-in absolute top-9 -left-12 w-[180px] bg-white rounded-lg shadow-md text-black'>
                  <ul className='my-2 flex flex-col gap-2' onMouseLeave={()=>setShowSubmenu(false)} onMouseEnter={()=>clearTimeout(timeoutId)}>
                    {categories
                      .filter(cat => cat.id < 4) // Filter out the first 3 categories. id start with 1
                      .map(cat => 
                        <MenuItem 
                          key={cat.id} 
                          href={`/san-pham/${cat.idForSEO}`} 
                          childClass='w-full hover:bg-primary hover:text-white py-2 px-8 font-normal transition-all duration-400'>
                            {cat.name}
                        </MenuItem>)}
                  </ul>
                </div>}
              </li>
              
              {/* Other items */}
              {categories
                .filter(cat => cat.id > 3) // Filter out the first 3 categories. id start with 1
                .map(cat => 
                  <MenuItem 
                    key={cat.id} 
                    href={`/san-pham/${cat.idForSEO}`}>
                      {cat.name}
                  </MenuItem>)}
          </>}
      </ul>
    </nav> 
  </>
  )
}

export default HeaderNav
