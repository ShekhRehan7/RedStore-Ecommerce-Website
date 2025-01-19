import { createSlice } from '@reduxjs/toolkit'
import {toast} from 'react-toastify'


const initialState = {
 
  arr:[],
  likeCart:[]
}

export const CartSlice = createSlice({
  name: 'castslice',
  initialState,
  reducers: {
    addToCart: (state,action)=>{
      console.log(action)
      let find = state.arr.find((obj)=> obj.id == action.payload.id);
      if(find){
        toast.warning("Item Already Added",{position:"top-right"})
        
      }
      else{
        let copyObj = {...action.payload}
       copyObj.quantity= 1;
        state.arr.push(copyObj)
        // state.likeCart = state.likeCart.filter((item) => item.id !== action.payload.id);
        toast.success("Item Added Successfully",{position:"top-right"})

      }

    },
    likeCart:(state,action)=>{
      console.log(action)
      let find = state.likeCart.find((obj)=> obj.id == action.payload.id);
      if(find){
        toast.warning("Item Already Added",{position:"top-right"})
        
      }
      else{
        state.likeCart.push(action.payload)
        toast.success("Item Like Successfully",{position:"top-right"})
        
      }
    },
    
    deleteItems:(state,action)=>{
      console.log(action);
      // state.arr.splice(action.payload,1)
      state.arr = state.arr.filter(item => item.id !== action.payload.id)
      // state.likeCart.splice(action.payload,1)
      state.likeCart = state.likeCart.filter(item => item.id !== action.payload.id);
    },
    updateIncrement:(state,action)=>{
      let obj = {...action.payload}
      obj.price = obj.price + (obj.price/ obj.quantity)
      obj.quantity = obj.quantity +1
      console.log(obj)
      let index = state.arr.findIndex((ele)=> ele.id === action.payload.id)
      console.log(index)
      state.arr[index] = obj  

      
    },
    updateDecrement:(state,action)=>{
      let obj = {...action.payload}
      obj.price = obj.price - (obj.price/obj.quantity)
      if(obj.quantity <= 1){
        return
    }
      obj.quantity = obj.quantity-1;
      console.log(obj);
       let index = state.arr.findIndex((ele)=> ele.id === action.payload.id);
       console.log(index);
       state.arr[index]= obj;
     
    },
  
   
  },
})


export const { addToCart , likeCart, deleteItems, updateIncrement, updateDecrement } = CartSlice.actions

export default CartSlice.reducer