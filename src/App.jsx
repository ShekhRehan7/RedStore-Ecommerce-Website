import React from 'react'
import Home from './Pages/Home'
import { ToastContainer} from 'react-toastify';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ViewDetails from './Pages/ViewDetails'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'

const App = () => {
  return (
    <>
    
     <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path='/' element={<Home />}/>
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/likelist' element={<Wishlist/>}/>
   <Route path='/view' element={<ViewDetails />}/>
     
   </Routes>
   <ToastContainer/>
   </BrowserRouter>
    </>
  )
}

export default App