import React from 'react'
import Home from './Pages/Home'
import { ToastContainer} from 'react-toastify';
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ViewDetails from './Pages/ViewDetails'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Checkout from './Pages/Checkout';
import About from './Pages/About';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';
import Forget from './Pages/Forget';


const App = () => {
   let authStore = useSelector((state)=> state.auth)
  console.log(authStore)
  let login = authStore.login
  return (
    <>
    
     <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path='/' element={login===true? <Home /> : <Navigate to="/login"/> }/>
   <Route path='/about' element={ login===true? <About /> : <Navigate to="/login"/> }/>
   <Route path='/cart' element={login===true? <Cart /> : <Navigate to="/login"/>}/>
   <Route path='/likelist' element={login===true? <Wishlist/> : <Navigate to="/login"/>}/>
   <Route path='/view' element={login===true? <ViewDetails /> : <Navigate to="/login"/>}/>
   <Route path='/register' element={login===false? <SignUp /> : <Navigate to="/"/>}/>
   <Route path='/login' element={login===false? <Login /> : <Navigate to="/"/>}/>
   <Route path='/forget' element={<Forget/>}/>
   <Route path='/checkout' element={login===true?<Checkout/>: <Navigate to={"/login"}/>}/>
   </Routes>
   <Footer/>
   <ToastContainer/>
   </BrowserRouter>
    </>
  )
}

export default App