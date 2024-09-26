import { createSlice,nanoid } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:{users:[]},
    reducers:{
        //pure functions
        ADD_USER:(state,action)=>{
            console.log(action.payload)
            // state.users.push({...action.payload,id:Date.now()})
            state.users.push({...action.payload,id:nanoid()})
        },
        REMOVE_USER(state,action){
            // console.log(action.payload) //user id 

            //index - splice
            // const ItemIndex =  state.users.findIndex(item=>item.id==action.payload)
            // state.users.splice(ItemIndex,1)

            //filter
            const filters = state.users.filter(item=>item.id !=action.payload) 
            state.users = filters
        },
        REMOVE_ALL_USER(state,action){
            state.users = []
        }
    }
})

// console.log(userSlice.actions)
export const {ADD_USER,REMOVE_USER,REMOVE_ALL_USER} = userSlice.actions

export default userSlice

export const selectUsers = (state)=>state.user.users