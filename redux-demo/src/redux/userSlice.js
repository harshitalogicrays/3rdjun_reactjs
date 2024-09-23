import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:{},
    reducers:{
        //pure functions
        ADD_USER:(state,action)=>{},
        REMOVE_USER(state,action){}
    }
})

export default userSlice