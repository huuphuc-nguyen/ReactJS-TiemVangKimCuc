import {useState, useEffect} from 'react'
import { FiSearch } from 'react-icons/fi'
import { FiX } from 'react-icons/fi';
import SearchBar from './SearchBar'

const MobileSearchBar = () => {
  // States
  const [showDialog, setShowDialog] = useState(false)

  // Hooks
  useEffect(() => {
    if (showDialog) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'auto'
    }
  }, [showDialog])

  // Functions set Sates
  const handleCloseDialog = () => { setShowDialog(false); }

  const handleShowDialog = () => { setShowDialog(true); }

  return (
    <div className='lg:hidden'>
      <FiSearch size={24} className='text-primary' onClick={handleShowDialog}/>

      {showDialog && 
        // This is the background of dialog
        <><div className='w-full h-lvh bg-white/60 backdrop-blur-sm fixed top-0 left-0 z-10' onClick={handleCloseDialog}></div>
        <div className='w-full px-5 h-24 shadow-2xl bg-white flex justify-center items-center flex-col left-0 top-10 fixed z-20'>
            <FiX size={18} className='absolute top-1 right-3' onClick={handleCloseDialog}/>
            <SearchBar focus={true}/>
        </div></>} 

    </div>
  )
}

export default MobileSearchBar
