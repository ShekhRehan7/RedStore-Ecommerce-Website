import { configureStore } from '@reduxjs/toolkit'
import  CartSlice  from './CartSlice'
import AuthSlice from "./AuthSlice"
import Totalprice  from './Totalprice'

export const store = configureStore({
  reducer: {
    cart:CartSlice,
    auth:AuthSlice,
    total:Totalprice,
  },
})