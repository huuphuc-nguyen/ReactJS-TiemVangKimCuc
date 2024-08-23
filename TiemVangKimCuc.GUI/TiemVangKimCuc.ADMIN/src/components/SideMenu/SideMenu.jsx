import { useState, useEffect } from 'react'
import { fetchAsyncLoadUser, getUserData } from '../../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../features/auth/authSlice'
import logo from '../../assets/images/logo.png'
import { RiShoppingBag4Line } from "react-icons/ri";
import { TbHammer } from "react-icons/tb";
import { Link, useLocation } from 'react-router-dom';


const MenuItemLayout = ({children, href, id, selectedId, onClick}) => {

    return (
        <Link to={href} className='w-full'>
            <div 
                className={`text-gray-500 flex flex-row items-center w-full px-10 py-3 mt-1 gap-8 rounded-xl
                    hover:cursor-pointer select-none
                    transition-all duration-100
                    animate-slide-in
                    ${selectedId === id ? 'bg-primary text-white font-semibold' : ''}`}
             onClick={onClick}>
                {children}
            </div>
        </Link>
    )
}

const SideMenu = () => {
    const dispatch = useDispatch();
    const [selectedId, setSelectedId] = useState('1');

    useEffect(() => {
        dispatch(fetchAsyncLoadUser());
    },[dispatch])

  return (
    <aside className='lg:w-[18rem] fixed h-lvh lg:block hidden bg-slate-100/70 px-8 py-5 pb-10 border-r-[1px] shadow-sm'>
        <div className='flex flex-col items-center justify-between h-full w-full'>
            
            <div className='w-full text-center'>
                <img src={logo} alt='logo' className='w-28 rounded-full block mx-auto animate-fade-in'/>
                <h1 className='text-primary font-semibold text-xl mt-2 mb-8 animate-fade-in'>Tiệm vàng Kim Cúc</h1>
                <MenuItemLayout
                    href='/admin/dashboard/san-pham' id='1' selectedId={selectedId} onClick={()=>{setSelectedId('1')}}>
                    <RiShoppingBag4Line className='text-lg'/>
                    <p className='text-md'>Sản phẩm</p>
                </MenuItemLayout>
                <MenuItemLayout href='/admin/dashboard/chat-lieu' id='2' selectedId={selectedId} onClick={()=>setSelectedId('2')}>
                    <TbHammer className='text-lg'/>
                    <p className='text-md'>Chất Liệu</p>
                </MenuItemLayout>
            </div>

            <button
                className='rounded-lg px-10 h-12 mt-20 bg-primary text-white hover:bg-primary/80' 
                onClick={()=>{ dispatch(logout())}}>Đăng xuất
            </button>

        </div>
    </aside>
  )
}

export default SideMenu
