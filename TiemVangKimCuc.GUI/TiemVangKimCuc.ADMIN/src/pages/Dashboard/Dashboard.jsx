import {Routes, Route} from 'react-router-dom'
import SideMenu from '../../components/SideMenu/SideMenu'
import SanPhamDashboard from '../../components/SanPhamDashboard/SanPhamDashboard'
import NotFoundPage from '../NotFound/NotFoundPage'
import ChatLieuDashboard from '../../components/ChatLieuDashboard/ChatLieuDashboard'
import { FilterProvider } from '../../context/FilterContext'
import EditDashboard from '../../components/EditDashboard/EditDashboard'

const Dashboard = () => {
  return (
    <div className='w-full lg:flex lg:flex-row'>
            <SideMenu/>
        <div className='lg:ml-[18rem] w-full h-full'>
            <FilterProvider>
              <Routes>
                  <Route path='/san-pham' element={<SanPhamDashboard/>}/>
                  <Route path='/san-pham/chinh-sua/:id' element={<EditDashboard/>}/>
                  <Route path='/san-pham/them-san-pham' element={<EditDashboard/>}/>
                  <Route path='/chat-lieu' element={<ChatLieuDashboard/>} />
                  <Route path='*' element={<NotFoundPage/>} />
              </Routes>
            </FilterProvider>
        </div>
    </div>
  )
}

export default Dashboard
