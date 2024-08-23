import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import { Toaster } from 'sonner'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import NotFoundPage from './pages/NotFound/NotFoundPage'

import AOS from 'aos'
import 'aos/dist/aos.css'; 

function App() {

  React.useEffect(() => {
    AOS.init({
      duration: 500, // duration of the animation in milliseconds
      easing: 'ease-in-out', // easing for the animation
    });
  }, []);

  return (
    <>
      <Toaster position='top-right' richColors closeButton toastOptions={{
        style: { padding: '20px' },
      }} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route element={<PrivateRoute />}>
            <Route path="/admin/dashboard/*" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
