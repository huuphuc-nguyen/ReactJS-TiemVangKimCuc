import TitleWrapper from "../Wrapper/TitleWrapper"
import ring from '../../assets/categoryIcons/ring3.png'
import ringMale from '../../assets/categoryIcons/ring1.png'
import backButton from '../../assets/categoryIcons/back-button.png'
import ringFemale from '../../assets/categoryIcons/ring2.png'
import ringCouple from '../../assets/categoryIcons/ring3.png'
import bracelet from '../../assets/categoryIcons/bracelet.png'
import pendant from '../../assets/categoryIcons/pendant.png'
import earrings from '../../assets/categoryIcons/earrings.png'
import necklace from '../../assets/categoryIcons/necklace.png'
import charm from '../../assets/categoryIcons/charm.png'
import allCate from '../../assets/categoryIcons/all-cate.png'
import { useState } from "react"
import Skeleton from "../Loading/Skeleton"
import CategoryCard from "./CategoryCard"
import { useGetListCategoriesQuery } from "../../features/api/apiSlice"

const CategoryNav = () => {

    const [showDefault,setShowDefault] = useState(true);
    const {data: categories, isLoading} = useGetListCategoriesQuery();

  return (
    <div>
        <TitleWrapper title='Danh mục sản phẩm'>
            {!isLoading ? 
                showDefault ? 
                    <ul key='default' className="animate-fade-in flex flex-wrap justify-between">
                        <li onClick={() => setShowDefault(false)}>
                            <CategoryCard img={ring} title='Nhẫn'/>
                        </li>
                        <li>
                            <CategoryCard img={bracelet} title='Vòng tay' href={`/san-pham/${categories[3].idForSEO}`}/>
                        </li>
                        <li>
                            <CategoryCard img={pendant} title='Lắc tay' href={`/san-pham/${categories[4].idForSEO}`}/>
                        </li>
                        <li>
                            <CategoryCard img={earrings} title='Bông tai' href={`/san-pham/${categories[5].idForSEO}`}/>
                        </li>
                        <li>
                            <CategoryCard img={necklace} title='Mặt dây' href={`/san-pham/${categories[6].idForSEO}`}/>
                        </li>
                        <li>
                            <CategoryCard img={charm} title='Hạt charm' href={`/san-pham/${categories[7].idForSEO}`}/>
                        </li>
                        <li>
                            <CategoryCard img={allCate} title='Tất cả' href='/san-pham/tat-ca-san-pham'/>
                        </li>
                    </ul>

                    :

                    <ul key='subNav' className="animate-fade-in flex flex-wrap justify-start gap-5">
                        <li onClick={() => setShowDefault(true)}>
                            <CategoryCard img={backButton} title='Trở lại'/>
                        </li>
                        <li>
                            <CategoryCard img={ringMale} title='Nhẫn nam' href={`/san-pham/${categories[0].idForSEO}`}/>
                        </li>
                        <li>
                            <CategoryCard img={ringFemale} title='Nhẫn nữ' href={`/san-pham/${categories[1].idForSEO}`}/>
                        </li>
                        <li>
                            <CategoryCard img={ringCouple} title='Nhẫn đôi' href={`/san-pham/${categories[2].idForSEO}`}/>
                        </li>
                    </ul>

            : <div className="duration-300 flex flex-wrap justify-between">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>   
            }

        </TitleWrapper>
    </div>
  )
}

export default CategoryNav
