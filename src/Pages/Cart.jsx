import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItems, updateDecrement, updateIncrement } from '../store/CartSlice';
import { totalprice } from '../store/Totalprice';

import {Link} from 'react-router-dom'


const Cart = () => {
    let dispatch = useDispatch();
    let store = useSelector((state)=>state.cart)
    console.log(store)

    
    let price = 0;
    let discount =0;
    store.arr.forEach((ele)=>{
      discount = discount +(ele.price * ele.discountPercentage/100);
      price = price+ele.price
    })
    // console.log(price)
    // console.log(discount)

    let tax = price * 4/100
    let shipping = price *5/100
    let finalprice = price - discount + tax + shipping
    // console.log(finalprice)
    dispatch(totalprice(finalprice))
    


    

  return (
    <>
    <div className="font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-white py-4 ">
 { store.arr.length>0 ?
  <div className="grid md:grid-cols-3 gap-4">
  <div className="md:col-span-2 bg-gray-100 p-4 rounded-md  flex flex-col gap-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
        <hr className="border-gray-300 mt-4 mb-8" />
    {
      store.arr.map((ele,index)=>{
        return  <div className="space-y-4">
          <div className="grid grid-cols-3 items-center gap-4">
            <div className="col-span-2 flex items-center gap-4">
              <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                <img src={ele.thumbnail} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-800">{ele.title}</h3>
                <button onClick={()=>dispatch(deleteItems(ele))} className="text-xs text-red-500 cursor-pointer mt-0.5">Remove</button>
                <div className="flex gap-4 mt-4">
                  
                  <div>
                    <div type="button" className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                      <svg onClick={()=>dispatch(updateDecrement(ele))} xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
                        <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
                      </svg> 
                      <span className="mx-2.5">{ele.quantity}</span>
                    
                      <svg  onClick={()=>dispatch(updateIncrement(ele))} xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
                        <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
                      </svg>
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-auto">
              <h4 className="text-base font-bold text-gray-800">${ele.price.toFixed(2)}</h4>
            </div>
          </div>
        </div>
      })
    }
    </div>
    <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
      <div className="flex border border-[#ff523b] overflow-hidden rounded-md">
        <input type="email" placeholder="Promo code" className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5" />
        <button type="button" className="flex items-center justify-center font-semibold tracking-wide bg-[#ff523b] hover:bg-[#ff523bee] px-4 text-sm text-white">
          Apply
        </button>
      </div>
      <ul className="text-gray-800 mt-8 space-y-4">
        <li className="flex flex-wrap gap-4 text-base">Discount <span className="ml-auto font-bold">${discount.toFixed(2)}</span></li>
        <li className="flex flex-wrap gap-4 text-base">Shipping <span className="ml-auto font-bold">${shipping.toFixed(2)}</span></li>
        <li className="flex flex-wrap gap-4 text-base">Tax <span className="ml-auto font-bold">${tax.toFixed(2)}</span></li>
        <li className="flex flex-wrap gap-4 text-base font-bold">Total <span className="ml-auto">${finalprice.toFixed(2)}</span></li>
      </ul>
      <div className="mt-8 space-y-2 flex flex-col ">
        <Link to={"/checkout"}   className="text-sm px-4 py-2.5 w-full text-center font-semibold tracking-wide bg-[#ff523b] hover:bg-[#ec4e39] text-white rounded-md">Checkout</Link>
        <Link to={"/"}   className="text-l px-4 py-2.5 w-full font-semibold tracking-wide bg-white  text-center border text-[#ff523b] border-gray-300 rounded-md">Continue Shopping</Link>
         
      </div>
    </div>
  </div> :
      <h1 className='text-center text-4xl mt-12'>Cart is empty</h1> 
    }
</div>

    </>
  )
}

export default Cart