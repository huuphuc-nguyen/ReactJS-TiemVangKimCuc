import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import SearchBar from "./SearchBar"
import Tooltip from "../CustomComponent/Tooltip/Tooltip"
import { AiFillFacebook } from "react-icons/ai"
import { SiZalo } from "react-icons/si"
import { FiPhone } from "react-icons/fi"
import MobileSearchBar from "./MobileSearchBar"
import MobileNavBar from "./MobileNavBar"

const HeaderBody = () => {
  return (
    <div className="flex justify-around items-center text-md my-1">
        <MobileNavBar />    
        
        <Link to="/" className="hover:underline cursor-pointer">
            <img src={logo} alt="logo" className="w-full h-[100px]" />
        </Link>

        {/* Handle hdiden here beacuase SearchBar is reused for mobile search, cannot be hidden itself */}
        <div className="hidden lg:block">  
            <SearchBar/>
        </div>

        {/* SNS */}
        <ul className="hidden lg:flex items-center text-primary gap-3">
        
            {/* Facebook */}
            <Tooltip message={"Follow Facebook: Tiệm Vàng Kim Cúc"} position={'top'}>
                <li>
                    <a className="hover:text-sky-600" href="https://www.facebook.com/profile.php?id=100054235431878" target="_blank">
                        <AiFillFacebook size={20}/>
                    </a> 
                </li>
            </Tooltip>

            {/* Zalo */}
            <Tooltip message={"Liên hệ Zalo: Mai Ngoc Man"} position={'top'}>
                <li>
                    <a className="hover:text-sky-600" href="https://zalo.me/0972456292" target="_blank">
                        <SiZalo size={20}/>
                    </a> 
                </li>
            </Tooltip>

            {/* Phone */}
            <Tooltip message={"Liên hệ: 097 245 62 92"} position={'top'}>
                <li>
                    <a className="hover:text-sky-600" href="tel:0972456292" target="_blank">
                        <FiPhone size={20} />
                    </a> 
                </li>
            </Tooltip>
        </ul>

        <MobileSearchBar/>

    </div>
  )
}

export default HeaderBody
