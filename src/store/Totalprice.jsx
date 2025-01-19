import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  total:0,
}

export const Totalprice = createSlice({
  name: 'totalprice',
  initialState,
  reducers: {
    totalprice:(state,action)=>{
      // console.log(action.payload)
      state.total = action.payload
    },
   
  },
})


export const {  totalprice } = Totalprice.actions

export default Totalprice.reducer