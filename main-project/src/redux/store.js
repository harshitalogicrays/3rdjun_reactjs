import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import carSlice from './carSlice'
const store = configureStore({
    reducer:{
        auth:authSlice,
        car:carSlice
    }
})
export default store