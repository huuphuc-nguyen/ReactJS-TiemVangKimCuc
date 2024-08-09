import { HiLocationMarker } from 'react-icons/hi';
import { FiMail, FiPhone, FiClock } from 'react-icons/fi';
import Tooltip from '../CustomComponent/Tooltip/Tooltip';

const HeaderContact = () => {
  return (
    <div className='hidden lg:flex w-full
                    container flex-wrap justify-end items-center gap-2 
                    text-primary font-medium '>
      
      <Tooltip message='Xem trên bản đồ'>
        <a  href='https://goo.gl/maps/4EAn5i3iKcuqgwpY9'
            target='_blank' rel='noreferrer'
            className='flex items-center text-sm hover:underline cursor-pointer gap-1'>

          <HiLocationMarker className='-translate-y-[2px]'/>
          <span>4 Đ. Hà Hoàng Hổ, Phường Mỹ Xuyên, Thành phố Long Xuyên, An Giang</span>
          
        </a>
      </Tooltip>

      <div className='w-[1px] h-4 opacity-50 bg-primary'></div>

      <Tooltip message ="Gởi email">
        <a
            href="mailto:tiemvangkimcuclx@gmail.com"
            target='_blank' rel='noreferrer'
            className='flex items-center text-sm hover:underline cursor-pointer gap-1'
        >
            <FiMail/>
            <span>tiemvangkimcuclx@gmail.com</span>
        </a>
      </Tooltip>

      <div className='w-[1px] h-4 opacity-50 bg-primary'></div>

      <Tooltip message ="Giờ mở cửa">
        <div className='flex items-center text-sm hover:underline cursor-pointer gap-1'>
            <FiClock/>
            <span>Mở cửa 8:00-20:00</span>
        </div>
      </Tooltip>

      <div className='w-[1px] h-4 opacity-50 bg-primary'></div>

      <Tooltip message ="Liên hệ">
        <a
            href="tel:0972456292"
            target='_blank' rel='noreferrer'
            className='flex items-center text-sm hover:underline cursor-pointer gap-1'
        >
            <FiPhone/>
            <span>Hotline: 097 245 62 92</span>
        </a>
      </Tooltip>
    </div>
  )
}

export default HeaderContact
