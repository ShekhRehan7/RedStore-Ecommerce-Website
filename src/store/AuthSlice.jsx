import { createSlice } from '@reduxjs/toolkit'

let details = JSON.parse(localStorage.getItem("ecomLogin"))

const initialState = {
    login: details? true : false,
    email: details? details.email: ""
  
}

export const AuthSlice = createSlice({
  name: 'authslice',
  initialState,
  reducers: {
    setLogin:(state,actions)=>{
        console.log(actions)
        state.login = true,
        state.email = actions.payload.email
    },
   setLogout:(state)=>{
    localStorage.removeItem("ecomLogin")
    state.login=false
    state.email=""
   },

   
  },
})


export const { setLogin, setLogout} = AuthSlice.actions

export default AuthSlice.reducer