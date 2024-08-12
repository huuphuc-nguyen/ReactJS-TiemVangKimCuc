import {Link} from 'react-router-dom'
import { scroller } from 'react-scroll'
import { useEffect } from 'react'

const NotFoundPage = () => {
    useEffect(() => {
        scroller.scrollTo('scrollhere', {
        duration: 300,
        smooth: true,
        })
    }, [])

  return (
    <div name="scrollhere"  className='w-full h-lvh bg-amber-100/50 flex flex-col items-center justify-center gap-10'>
        <h1 className='text-xl lg:text-4xl'>Trang bạn tìm kiếm không có ở đây</h1>
        <Link to='/' className='text-xl text-primary hover:underline'>Quay lại trang chủ</Link>
    </div>
  )
}

export default NotFoundPage
