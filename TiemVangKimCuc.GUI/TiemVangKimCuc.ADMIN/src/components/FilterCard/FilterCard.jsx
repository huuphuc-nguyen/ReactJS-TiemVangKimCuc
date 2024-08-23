import {useState} from 'react'

const FilterCard = ({item, setSelectedId}) => {
    const [selected, setSelected] = useState(false);

    const handleOnClick = () => {
        setSelected(!selected);

        if(selected){
          setSelectedId(prev => prev.filter(id => id !== item.id));
        }
        else {
          setSelectedId(prev => [...prev, item.id]);
        }
    }

  return (
    <div className={` w-[8rem] h-14 grid place-items-center rounded-xl shadow-md 
                    hover:cursor-pointer hover:scale-105 transition-all duration-150 select-none animate-fade-in
                    ${selected ? 'border-2 border-primary text-primary font-semibold' : 'bg-white'}`}
            onClick={()=>{handleOnClick()}}>
      {item.name}
    </div>
  )
}

export default FilterCard
