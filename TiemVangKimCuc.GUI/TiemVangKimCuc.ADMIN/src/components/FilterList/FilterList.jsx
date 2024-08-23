import FilterCard from '../FilterCard/FilterCard'
import { useGetListCategoriesQuery, useGetListMaterialsQuery } from '../../features/api/apiSlice'
import { useContext} from 'react';
import { FilterContext } from '../../context/FilterContext';

const FilterList = ({type}) => {
  // Fetch initial data
  const { data: categories, isLoading: cateIsLoading } = useGetListCategoriesQuery();
  const { data: materials, isLoading: matIsLoading } = useGetListMaterialsQuery();
  let list = [];

  // Get context
  const { setSelectedCategoryId, setSelectedMaterialId } = useContext(FilterContext);

  if (type === 'category' && !cateIsLoading) {
    list = categories;
  }
  if (type === 'material' && !matIsLoading) {
    list = materials;
  }

  return (
    <div className='w-full flex flex-row  items-cemter flex-wrap justify-center gap-5 xl:grid xl:grid-cols-7 3xl:grid 3xl:grid-cols-10'>
      {list.length !== 0 && list.map(item => (
            <FilterCard 
                key={item.id} 
                item={item} 
                setSelectedId={type === 'category' ? setSelectedCategoryId : setSelectedMaterialId}
                />))}
    </div>
  )
}

export default FilterList
