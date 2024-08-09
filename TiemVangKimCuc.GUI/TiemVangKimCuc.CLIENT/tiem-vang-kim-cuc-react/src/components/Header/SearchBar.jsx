import {useState, useEffect, useRef} from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { fetchAsyncGetListMaterials} from '../../features/product/productSlice'
import { useDispatch } from 'react-redux'
import { getListMaterials } from '../../features/product/productSlice'
import GroupCheckbox from './GroupCheckbox'
import Loading from '../Loading/Loading'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
import { useGetListCategoriesQuery } from '../../features/api/apiSlice'

const SearchBar = ({focus}) => {
    // States
    const [searchValue, setSearchValue] = useState('')
    const [showFilterPanel, setShowFilterPanel] = useState(false)
    const [isInputFocused, setIsInputFocused] = useState(false)
    const [isPannelHovered, setIsPannelHovered] = useState(false)
    // Props lifting here, let this parents hanlde selections of Checkbox
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedMaterials, setSelectedMaterials] = useState([])

    // Hooks
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    // Selectors from Redux
    const {data:listCategories, isLoading} = useGetListCategoriesQuery(); // Use for rendering GroupCheckbox
    const listMaterials = useSelector(getListMaterials); // Use for rendering GroupCheckbox

    // Focus input when focus prop is true (used for mobile search)
    useEffect(() => {
        if (focus) {
            inputRef.current.focus();
        }
    },[focus])

    // Fetch data
    useEffect(() => { 
        dispatch(fetchAsyncGetListMaterials());
     },[dispatch,])

    // Form submit
    const handleSubmit = e => {
        if (searchValue !== '' || selectedCategories.length !== 0 || selectedMaterials.length !== 0) {
            // This following object is used to submit to backend
            const submitObject = {
                searchKey: searchValue,
                chatLieus: selectedMaterials,
                loaiTrangSucs: selectedCategories,
            }

            // Convert object to string to pass as query params to ProductPage
            const filterParam = new URLSearchParams(submitObject).toString();

            // Send to ProductPage
            e.preventDefault();
            navigate(`/san-pham/tim-kiem?${filterParam}`)
            setSearchValue('');
            setShowFilterPanel(false);
        }
        else {
            e.preventDefault();
            setShowFilterPanel(false);
           toast.warning('Vui lòng điền thông tin tìm kiếm. ')
        }
    }
    
  return (
    <form onSubmit={handleSubmit} className='animate-fade-in block relative min-h-[36px] w-full lg:w-[500px]'>
        <input 
            ref={inputRef}
            type='text'
            placeholder='Tìm kiếm'
            className='rounded-full border focus:outline-none focus:border-primary focus:border-2 pl-3 pr-[36px] py-2 text-sm w-full bg-gray-100/80 shadow-sm'
            value={searchValue}
            onChange={e => {setSearchValue(e.target.value)}}
            onFocus={() => {
                setShowFilterPanel(true);
                setIsInputFocused(true);
            }}
            onBlur={() => {
                setIsInputFocused(false);
                
                if(!isPannelHovered) {
                    setShowFilterPanel(false)
                }
            }}
            // Need to use isInputFocused because if it is focused and mouse leaves panel
            // cannot trigger pannel appear again unless unfocused the input
        />
    
        <button type='submit' className='absolute right-4 top-1/2 transform -translate-y-1/2'>
            <FiSearch/>
        </button>


        <div className={`${!isLoading ? 'lg:grid-cols-2' : ''} animate-fade-in  grid-cols-1 p-3  grid absolute top-11 border-2 border-primary bg-white w-full rounded-xl shadow-sm transition-all duration-200 z-[999] ${showFilterPanel ? 'grid' : 'hidden'}`}
            onMouseEnter={() => {
                setIsPannelHovered(true);

                if (isInputFocused) {
                    setShowFilterPanel(true)
                }
                }}
            onTouchStart={() => {
                setIsPannelHovered(true);

                if (isInputFocused) {
                    setShowFilterPanel(true)
                }
                
            }}
            onMouseLeave={() => {
                setIsPannelHovered(false);

                if(!isInputFocused) {
                    setTimeout(() => {setShowFilterPanel(false)},200)
                }}}>
               { !isLoading ? <><GroupCheckbox options={listCategories} title="Phân Loại" setSelectedOptions={setSelectedCategories} />
                                                <GroupCheckbox options={listMaterials} title="Chất Liệu" setSelectedOptions={setSelectedMaterials} /></> 
                                            : <Loading />}

        </div>

    </form>
  )
}

export default SearchBar
