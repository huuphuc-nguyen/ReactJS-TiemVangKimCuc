import { Link } from "react-router-dom"
const CategoryCard = ({img, title, href}) => {
    return(
        <Link to={href} className="lg:mb-0 mb-4 flex flex-col lg:h-[172px] lg:w-[172px] w-[158px] h-[172px] justify-center items-center gap-7 border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 text-primary">
            <img src={img} alt={title} className="w-[60px] h-[60px]"/>
            <h3 className="text-center text-md font-medium">{title}</h3>
        </Link>
    )
}

export default CategoryCard
