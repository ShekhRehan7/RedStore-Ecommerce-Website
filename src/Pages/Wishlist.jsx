import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/CartSlice'
import { Link } from 'react-router-dom'
import { deleteItems } from '../store/CartSlice'

const Wishlist = () => {
  let dispatch = useDispatch()
  let store = useSelector((state)=>state.cart)
  console.log(store)
  return (
    <>
     <div className="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-3xl">
     { store.likeCart.length>0 ?
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap sm:gap-6 ">
        {
          store.likeCart.map((ele,index)=>{
            return <div className="bg-white flex flex-col overflow-hidden cursor-pointer hover:shadow-md transition-all  shadow-xl">
            <div className="w-full" >
            <Link to={"/view"} state={ele}><img src={ele.thumbnail} alt="Image" className="w-full object-cover object-top aspect-[230/307]" /></Link>
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
              <button onClick={()=>dispatch(deleteItems(index))} className="text-sm px-2 min-h-[36px] w-28 bg-[#ff523b] hover:bg-[#ff442cd1] text-white tracking-wide ml-auto outline-none border-none rounded">Remove</button>
                <button onClick={()=>dispatch(addToCart(ele))} className="text-sm px-2 min-h-[36px] w-32 bg-[#ff523b] hover:bg-[#ff442cd1] text-white tracking-wide ml-auto outline-none border-none rounded">Add to cart</button>
              </div>
            </div>
          </div>
    
          })
        }
        
       
      </div> :
       <h1 className='text-center text-4xl mt-12 font-bold'>Wishlist is empty</h1>
       }
    </div>
    </>
  )
}

export default Wishlist