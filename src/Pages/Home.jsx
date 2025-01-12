import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import {addToCart}  from '../store/CartSlice';
import { likeCart } from '../store/CartSlice';
import {Link} from 'react-router-dom'

const Home = () => {
  const [produts, setProducts] = useState([]);
  let dispatch = useDispatch()

 

  const fetchData = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products?limit=0');
      const data = await res.json();
      // console.log(data.products)
      setProducts(data.products)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData();
  }, [])



  

  return (
   <>
   <div className="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-3xl">
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap sm:gap-6 ">
    
    {
      produts.map((ele,index)=>{
        return <div className="bg-white flex flex-col overflow-hidden cursor-pointer hover:shadow-md transition-all  shadow-xl" >
        <div className="w-full" key={index} >
         <Link to={"/view"} state={ele}> <img src={ele.thumbnail} alt="Image" className="w-full object-cover object-top aspect-[230/307]" /></Link>
        </div>
        <div className="p-2 flex-1 flex flex-col">
          <div className="flex-1">
            <h5 className="text-sm sm:text-base font-bold text-gray-800 truncate">{ele.title}</h5>
            <p className="mt-1 text-gray-500 truncate">{ele.brand}</p>
            <div className="flex flex-wrap justify-between gap-2 mt-2">
              <div className="flex gap-2">
                <h6 className="text-sm sm:text-base font-bold text-gray-800">${ele.price}</h6>
              </div>
              
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
         <button onClick={()=>dispatch(likeCart(ele))}>
         <div className="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer" title="Wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-pink-600 inline-block" viewBox="0 0 64 64">
                <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
              </svg>
            </div>
         </button>
          
            <button onClick={()=>dispatch(addToCart(ele))} className="text-sm px-2 min-h-[36px] w-full bg-[#ff523b] hover:bg-[#ff442cd1] text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
          </div>
        </div>
      </div>

      })
    }
    
   
  </div>
</div>

   </>
  )
}

export default Home