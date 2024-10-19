import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import carSlice from './carSlice'
import sliderSlice from './sliderSlice'
import filterSlice from './filterSlice'
const store = configureStore({
    reducer:{
        auth:authSlice,
        car:carSlice,
        slider:sliderSlice,
        filter:filterSlice
    }
})
export default store