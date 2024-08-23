import {useState, useContext} from 'react'
import { FilterContext } from '../../context/FilterContext';
import { FiSearch } from "react-icons/fi";

const Search = () => {
    const [userInput, setUserInput] = useState('');
    const { setSearchKey } = useContext(FilterContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchKey(userInput);
    }   
  return (
    <form className='relative w-2/3' onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Tìm kiếm tên sản phẩm, chất liệu trang sức, loại trang sức, mô tả,...' 
        onChange={(e)=>{setUserInput(e.target.value)}}
        className='w-full h-12 px-5 rounded-xl shadow-md outline-none pr-14 focus:border-primary border-[1px]'/>
        <FiSearch className='absolute top-4 right-10 text-primary'/>
    </form>
)
}

export default Search
