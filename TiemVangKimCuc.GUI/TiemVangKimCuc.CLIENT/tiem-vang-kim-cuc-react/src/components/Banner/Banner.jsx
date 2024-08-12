import {useState, useEffect} from 'react'
import banner1 from '../../assets/images/banner1.png'
import banner2 from '../../assets/images/banner2.png'
import banner3 from '../../assets/images/banner.png'

const images = [banner1, banner2, banner3]

const Banner = () => {
    // States
    const [currentImage, setCurrentImage] = useState(0)

    // Hooks
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='grid place-content-center overflow-hidden transition m-0 mt-1 p-0'>
          <div
            className="w-[100vw] lg:w-[1140px] pt-[50%] transition-all duration-300 ease-linear hover:scale-105"
            style={{
              backgroundImage: `url(${images[currentImage]})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'contain',
            }}
          ></div>
        </div>
      );
}

export default Banner
