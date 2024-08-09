import { AiOutlineArrowRight } from "react-icons/ai"
import { Link } from "react-router-dom"

const TitleWrapper = ({title, children, href}) => {
  return (
    <div className= 'mt-10'>
        <div className='border-b-2 border-primary w-full flex h-[34px] relative mb-6'>
            <h2 className='uppercase text-xl text-white font-medium bg-primary px-4 py-1 w-fit'>{title}</h2>
            <span className='w-0 h-0 transform -translate-x-px border-b-primary border-b-[33px] border-r-[33px] border-r-transparent'></span>
            {href && 
                <Link to={href} className="flex-grow text-end">
                <h3 className='text-primary py-1 text-md font-medium  cursor-pointer'>
                    Xem tất cả <AiOutlineArrowRight className="inline mb-[1px] ml-1"/>
                </h3>
                </Link>
            }
        </div>
        {children}
    </div>
  )
}

export default TitleWrapper
