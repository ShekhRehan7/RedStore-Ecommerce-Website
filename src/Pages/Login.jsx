import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import { setLogin } from '../store/AuthSlice';

const Login = () => {
  let dispatch = useDispatch()
  let navigate =useNavigate()
  let emailref =useRef();
  let passwordref =useRef();
  let datahandle = JSON.parse(localStorage.getItem('data_ecom')) || [];
  const handleSubmit = ()=>{
    
    let obj = {
      email:emailref.current.value,
      password:passwordref.current.value,
    }
    if (!obj.email && !obj.password){
      toast.error("Please fill all the fields",{position:"top-center"})
    }
    else{
    let findUser = datahandle.find((ele)=> ele.email === obj.email)
    if(findUser){
      if(findUser.password=== obj.password){
        localStorage.setItem("ecomLogin",JSON.stringify({email:obj.email}))
        dispatch(setLogin({email:obj.email}))
        // navigate("/")
      }
      else{
        toast.error("Wrong Password",{position:"top-center"})
      }
    }
    else{
      toast.error("User not registered",{position:"top-center"})
    }
  }
  }
  return (
    <>
   <div className="font-[sans-serif]">
  <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
    <div className="grid md:grid-cols-2 items-center gap-20 max-w-6xl w-full">
    <div className="max-md:order-1 p-4">
      <img src="https://readymadeui.com/signin-image.webp" className="lg:max-w-[85%] w-full h-full aspect-square object-contain block mx-auto" alt="login-image" />
    </div>
      <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
        <form className="space-y-4">
          <div className="mb-8">
            <h3 className="text-gray-800 text-3xl font-bold">Sign in</h3>
            <p className="text-gray-500 text-sm mt-4 leading-relaxed">Sign in to your account to access exclusive deals, personalized recommendations, and a seamless shopping experience.</p>
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Email</label>
            <div className="relative flex items-center">
              <input name="email" type="email" ref={emailref} required className="w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-[#ff523b]" placeholder="Enter email" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                <circle cx={10} cy={7} r={6} data-original="#000000" />
                <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000" />
              </svg>
            </div>
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Password</label>
            <div className="relative flex items-center">
              <input name="password" type="password" ref={passwordref} required className="w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-[#ff523b]" placeholder="Enter password" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000" />
              </svg>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="jajvascript:void(0);" className="text-[#ff523b] hover:underline font-semibold">
                Forgot your password?
              </a>
            </div>
          </div>
          <div className="!mt-8">
            <button type="button" onClick={handleSubmit} className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-lg text-white bg-[#ff523b] hover:bg-[#ff4b34cb] focus:outline-none">
              Sign in
            </button>
          </div>
          <p className="text-sm !mt-8 text-center text-gray-500">Don't have an account <Link to={"/register"}  className="text-[#ff523b] font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
        </form>
      </div>
     
    </div>
  </div>
</div>

    </>
  )
}

export default Login