import { HiLocationMarker } from 'react-icons/hi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {FaFacebook} from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';
import location from '../../assets/images/location.png'
import logo from '../../assets/images/logo.png'



const Footer = () => {
  const position = [10.378104809476456, 105.43520745088773]
  const customIcon = new L.Icon({
    iconUrl: location,
    iconSize: [30, 30]
  })

  return (
    <div className='mt-10 lg:px-24 px-[2rem] bg-black text-white flex flex-col justify-center items-center py-10'>
      <div className='flex-col lg:flex-row flex justify-around items-start w-full h-full gap-10'>
        <div className='flex flex-col'>
          <h1 className='text-lg font-bold'>Liên hệ</h1>
          <a href='https://goo.gl/maps/4EAn5i3iKcuqgwpY9' target='_blank'>
            <p className='text-sm my-2'><HiLocationMarker className='inline mr-[14px]'/>4 Hà Hoàng Hổ, Mỹ Xuyên, TP.Long Xuyên, An Giang</p>
          </a>
          <a  href="mailto:tiemvangkimcuclx@gmail.com" target='_blank'>
            <p className='text-sm my-2'><MdEmail className='inline mr-4'/>tiemvangkimcuclx@gmail.com</p>
          </a>
          <a href="tel:0972456292" target='_blank'>
            <p className='text-sm my-2'><FaPhone size={12} className='inline ml-px mr-4'/>097 245 62 92</p>
          </a>
        </div>
        
        <div className='flex flex-col'>
          <h1 className='text-lg font-bold'>Theo dõi</h1>
          <a href="https://www.facebook.com/profile.php?id=100054235431878" target='_blank'>
            <p className='text-sm my-2'><FaFacebook className='inline mr-[14px]'/>Facebook</p>
          </a>
        </div>

        <div className='self-center'>
        <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              Tiệm vàng Kim Cúc Long Xuyên
            </Popup>
          </Marker>
        </MapContainer>
        </div>
      </div>

      <div className='text-center'>
        <img src={logo} width={180} height={180} className='mt-10 block mx-auto'/>
        <p className='text-primary font-semibold mt-2 lg:text-lg text-sm'>Trang sức Long Xuyên, nâng tầm phong cách</p>
      </div>
    </div>
  )
}

export default Footer
