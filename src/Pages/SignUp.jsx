import React, { useRef } from 'react'
import {toast} from 'react-toastify'
import {Link, useNavigate} from 'react-router-dom'

const SignUp = () => {
  let navigate = useNavigate()
  let nameref =useRef();
  let emailref =useRef();
  let passwordref =useRef();

  let arr = JSON.parse(localStorage.getItem('data_ecom')) || [];

  const handleSubmit =()=> {
    let obj = {
      name:nameref.current.value,
      email:emailref.current.value,
      password:passwordref.current.value,
    }
    if(obj.name && obj.email && obj.password){
      let find = arr.find((ele)=> ele.email === obj.email)
      if(find){
        toast.warning("User already registered",{position:"top-center"});
      }
      else{
        arr.push(obj)
        localStorage.setItem('data_ecom',JSON.stringify(arr));
        navigate('/login')
      }

    }
    else{
      toast.error("Please fill all the fields",{position:"top-center"})
    }
  }

  return (
    <>
      <div className="font-[sans-serif] bg-white md:h-screen">
        <div className="grid md:grid-cols-2 items-center gap-8 h-full">
          <div className="max-md:order-1 p-4 flex justify-center items-center text-center">
            <div>
              <div className='pl-10'><img src="logo.png" alt="" /></div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-5">Welcome to RedStore!</h2>
              <p className="text-gray-600 mb-6 text-left">Join us today and explore a world of exclusive deals,<br/>personalized shopping experiences, and much more! </p>
              <ul className="text-left text-gray-600 mb-6">
                <li className="mb-2 text-center">- Exclusive Offers & Discounts</li>
                <li className="mb-2 text-center">- Personalized Product Recommendations</li>
                <li className="mb-2 text-center">- Fast & Easy Checkout Process</li>
              </ul>
              <p className="text-sm text-gray-500">By signing up, you agree to our <a href="javascript:void(0);" className="text-[#ff523b] font-semibold hover:underline">Terms and Conditions</a></p>
            </div>
          </div>

          <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
            <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
              <div className="text-center mb-12">
                <a href="javascript:void(0)"><img src="logo.png" alt="logo" className="w-40 inline-block" /></a>
              </div>
              <form>
                <div className="space-y-6">
                  <div>
                    <label className="text-gray-800 text-sm mb-2 block">Name</label>
                    <input name="name" type="text" ref={nameref} className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#ff523b]" placeholder="Enter name" />
                  </div>
                  <div>
                    <label className="text-gray-800 text-sm mb-2 block">Email</label>
                    <input name="email" type="email" ref={emailref} className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#ff523b]" placeholder="Enter email" />
                  </div>
                  <div>
                    <label className="text-gray-800 text-sm mb-2 block">Password</label>
                    <input name="password" type="password" ref={passwordref} className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#ff523b]" placeholder="Enter password" />
                  </div>
                  <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="remember-me" className="text-gray-800 ml-3 block text-sm">
                      I accept the <a href="javascript:void(0);" className="text-[#ff523b] font-semibold hover:underline ml-1">Terms and Conditions</a>
                    </label>
                  </div>
                </div>
                <div className="!mt-8">
                  <button type="button" onClick={handleSubmit} className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-[#ff523b] hover:bg-[#e44b37] focus:outline-none">
                    Create an account
                  </button>
                </div>
                <p className="text-gray-800 text-sm mt-6 text-center">Already have an account? <Link to={"/login"} className="text-[#ff523b] font-semibold hover:underline ml-1">Login here</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
