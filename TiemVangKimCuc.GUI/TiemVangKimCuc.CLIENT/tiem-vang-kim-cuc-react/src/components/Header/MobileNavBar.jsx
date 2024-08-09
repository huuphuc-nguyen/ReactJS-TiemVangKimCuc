import {useState, useEffect} from 'react'
import { FiMenu } from 'react-icons/fi'
import { FiX } from 'react-icons/fi'
import { SiZalo } from 'react-icons/si'
import { FiPhone } from 'react-icons/fi'
import { AiFillFacebook, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const MenuItems = ({ children, handleClick, className, href }) => {
    const classes = `hover:bg-gray-50 py-5 px-4 ${className || ''}`;
  
    return href ? (
      <Link to={href}>
        <li className={classes} onClick={handleClick}>
          {children}
        </li>
      </Link>
    ) : (
      <li className={classes} onClick={handleClick}>
        {children}
      </li>
    );
  };

const MobileNavBar = () => {
    // States
    const [showDialog, setShowDialog] = useState(false)
    const [showPage1, setShowPage1] = useState(true)
    const [is1Mounted, set1IsMounted] = useState(true)
    const [is2Mounted, set2IsMounted] = useState(false)

    // Hooks
    useEffect(() => {
        if (showDialog) {
          document.body.style.overflow = 'hidden'
        }
        else {
          document.body.style.overflow = 'auto'
        }
      }, [showDialog])

    // Functions set Sates
    const handleCloseDialog = () => { setShowDialog(false);}
    const handleShowDialog = () => { setShowDialog(true); }

  return (
    <div className='lg:hidden'>
        <div className='lg:hidden bg-primary rounded-full p-2'>
            <FiMenu size={20} className='text-white' onClick={handleShowDialog}/>
        </div>

        {showDialog &&
            // Dialog overlay background
            <div className='w-full h-full bg-white/60 backdrop-blur-sm fixed top-0 left-0 z-10' onClick={handleCloseDialog}></div>
        }
        
        <div className={`z-20 fixed left-0 top-0 h-lvh transform -translate-x-full bg-white w-2/3 shadow-xl flex flex-col px-6 transition-all duration-500 ${showDialog ? 'translate-x-0' : '-translate-x-full'} `}>
            <FiX size={20} className='text-primary self-end -mr-3 mt-3' onClick={handleCloseDialog}/>
            

            {showPage1 ? 
                <div className={` select-none ${is1Mounted ? 'animate-fade-in' : 'animate-fade-out'}`} onAnimationEnd={() => {if (!is1Mounted) setShowPage1(false)}}>
                <ul>
                    <MenuItems className='relative' handleClick={() => {set1IsMounted(false); set2IsMounted(true)}}>
                        Nhẫn 
                        <AiOutlineRight size={16} className='absolute right-4 top-1/2 -translate-y-1/2'/>
                    </MenuItems>
                    <MenuItems handleClick={handleCloseDialog} href='/san-pham/vong-tay'>Vòng tay</MenuItems>
                    <MenuItems handleClick={handleCloseDialog} href='/san-pham/lac-tay'>Lắc tay</MenuItems>
                    <MenuItems handleClick={handleCloseDialog} href='/san-pham/bong-tai'>Bông tai</MenuItems>
                    <MenuItems handleClick={handleCloseDialog} href='/san-pham/mat-day'>Mặt dây</MenuItems>
                    <MenuItems handleClick={handleCloseDialog} href='/san-pham/hat-charm'>Hạt charm</MenuItems>
                </ul>

                <div className='flex w-full justify-center items-center gap-5 mt-3'>
                    <a href='https://www.facebook.com/profile.php?id=100054235431878' target='_blank' rel='noreferrer'>
                        <AiFillFacebook size={36} className='text-black'/>
                    </a>
                    <a href='https://zalo.me/0972456292' target='_blank' rel='noreferrer'>
                        <SiZalo size={36} className='text-black'/>
                    </a>
                    <a href='tel:0972456292' target='_blank' rel='noreferrer'>
                        <FiPhone size={36} className='text-black'/>
                    </a>
                </div>
                </div>
            
            : <div className={` select-none ${is2Mounted ? 'animate-fade-in' : 'animate-fade-out'}`} onAnimationEnd={()=>{if (!is2Mounted) setShowPage1(true)}}>
                <h1 className='relative font-semibold text-lg px-6 mb-2' onClick={() => {set1IsMounted(true); set2IsMounted(false);}}>Nhẫn <AiOutlineLeft className='absolute left-0 top-1'/> </h1>
                <ul>
                    <MenuItems handleClick={handleCloseDialog} href='/san-pham/nhan-nam'>Nhẫn nam</MenuItems>
                    <MenuItems handleClick={handleCloseDialog} href='/san-pham/nhan-nu'>Nhẫn nữ</MenuItems>
                    <MenuItems handleClick={handleCloseDialog} href='/san-pham/nhan-doi'>Nhẫn đôi</MenuItems>
                </ul>
            </div>
            }
        </div>
    </div>
  )
}

export default MobileNavBar
