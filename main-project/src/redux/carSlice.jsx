import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name:"car",
    initialState:{carsData:[]},
    reducers:{
        STORE_CARS(state,action){
            state.carsData=action.payload
        }
    }
})
export const {STORE_CARS}=carSlice.actions
export default carSlice.reducer
export const selectCars= state=>state.car.carsData