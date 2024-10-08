import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import carSlice from './carSlice'
import sliderSlice from './sliderSlice'
const store = configureStore({
    reducer:{
        auth:authSlice,
        car:carSlice,
        slider:sliderSlice
    }
})
export default store