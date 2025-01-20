import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setLogout } from '../store/AuthSlice';
import { useState } from 'react';


const Navbar = () => {
  let store = useSelector((ele)=>ele.cart);
  let authStore = useSelector((state)=> state.auth)
  let dispatch = useDispatch();
  const [toggleButton,setToggleButton]=useState(false)
  const handleToogle= ()=>{
    setToggleButton(!toggleButton)
    console.log("first")
  }
  const handleRemove = ()=>{
    setToggleButton(false)
  }

  return (

    <>
     <header className="flex bg-white border-b py-3 sm:px-6 px-4 font-[sans-serif] min-h-[75px] tracking-wide relative z-50 w-full  ">
  <div className="flex max-w-screen-xl mx-auto w-full ">
    <div className="flex flex-wrap items-center lg:gap-y-2 gap-4 w-full">
      <Link to={"/"} className="w-28 lg:w-36 md:36"><img src="logo.png" alt="logo" className=" h-10" />
      </Link>
      <div id="collapseMenu" className={`lg:ml-6 ${toggleButton=== true? "max-lg:block": "max-lg:hidden"} lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}>
        <button id="toggleClose" onClick={handleRemove}  className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
            <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000" />
            <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000" />
          </svg>
        </button>
        <ul className="lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
          <li className="mb-6 hidden max-lg:block">
            <div className="flex items-center justify-between gap-4">
              <Link to={"/"}><img src="logo.png" alt="logo" className="w-36" />
              </Link>
            </div>
          </li>
          <li className="max-lg:border-b max-lg:py-3 px-3"><Link to={"/"} className="text-[#ff523b] hover:text-[#ff523b] text-[19px] block font-semibold">Home</Link></li>
          <li className="max-lg:border-b max-lg:py-3 px-3"><Link to={"/about"} className="text-[#333] hover:text-[#ff523b] text-[19px] block font-semibold">About</Link></li>
          
          {authStore.login === false && <button  className=" lg:hidden  px-4 py-2 text-sm rounded-full text-white border-2 border-[#ff523b] bg-[#ff523b] hover:bg-[#e64b36] w-full"><Link to={"/register"}>Sign Up</Link> </button>}
          {authStore.login === false && <button  className="lg:hidden px-4 py-2 text-sm rounded-full text-white border-2 border-[#ff523b] bg-[#ff523b] hover:bg-[#e64b36] w-full"><Link to={"/login"}>Login</Link> </button>}
         {authStore.login === true &&  <li className="lg:hidden max-lg:border-b max-lg:py-3 px-3"><h1  className="text-[#333] hover:text-[#ff523b] text-[19px] block font-semibold">User Email:- <span className='text-[#ff523b]'>{authStore.email}</span></h1></li>}
         {authStore.login === true && <button onClick={()=>dispatch(setLogout())} className=" lg:hidden px-4 py-2 text-sm rounded-full text-white border-2 border-[#ff523b] bg-[#ff523b] hover:bg-[#e64b36] w-full">Logout</button>}
        </ul>
      </div>
      <div className="flex items-center gap-x-6 gap-y-4 ml-auto">
        <div className="flex items-center sm:space-x-8 space-x-6">
          <Link to={"/likelist"}>
          <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer fill-[#333] inline w-5 h-5" viewBox="0 0 64 64">
                <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
              </svg>
              <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">{store.likeCart.length}</span>
            </div>
            <span className="text-[13px] font-semibold text-[#333]">Wishlist</span>
          </div>
          </Link>

          <Link to={"/cart"}><div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="cursor-pointer fill-[#333] inline" viewBox="0 0 512 512">
                <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0" data-original="#000000" />
              </svg>
              <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">{store.arr.length}</span>
            </div>
            <span className="text-[13px] font-semibold text-[#333]">Cart</span>
          </div> </Link>

        { authStore.login === false && <Link to={"/register"} className="max-lg:hidden px-4 py-2 text-sm rounded-full text-center text-white border-2 border-[#ff523b] bg-[#ff523b] hover:bg-[#ff452db2]">Sign
          Up</Link>}
       {  authStore.login === false && <Link to={"/login"} className="max-lg:hidden px-4 py-2 text-sm rounded-full text-white text-center border-2 border-[#ff523b] bg-[#ff523b] hover:bg-[#ff452db2] w-20">Login
            </Link>}
          {
            authStore.login=== true && <h1 className='  text-[19px] lg:block xl:block 2xl:block  font-semibold  hidden'>User Email:- <span className='text-[#ff523b]'>{authStore.email}</span> </h1>
          }  
        { authStore.login=== true &&  <button onClick={()=>dispatch(setLogout())} className="max-lg:hidden px-4 py-2 text-sm rounded-full text-white border-2 border-[#ff523b] bg-[#ff523b] hover:bg-[#ff452db2] w-20">Logout 
          </button>
          }
          <button id="toggleOpen" onClick={handleToogle} className="lg:hidden">
            <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>


    </>
  )
}

export default Navbar