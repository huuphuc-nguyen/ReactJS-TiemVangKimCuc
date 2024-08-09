import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import {Routes, Route} from 'react-router-dom'
import ProductPage from './pages/ProductPage/ProductPage'
import NotFoundPage from './pages/NotFound/NotFoundPage'
import { Toaster } from 'sonner';
import ProducDetailPage from './pages/ProductDetailPage/ProductDetailPage'

// Hardcode these product categories at: 
//  Header -> Mobile Navbar
//  Header -> Header Nav (don't use map here)
//  CategoryNav (due to using thumbnail)
//  ShowroomSection 

function App() {
  return (
    <>
      <Header />
      <Toaster position='top-right' expand={false} richColors closeButton/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/san-pham/:category" element={<ProductPage />} />
        <Route path="/san-pham/:category/:id" element={<ProducDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
