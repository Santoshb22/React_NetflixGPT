import {configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import movieReducer from "./movieSlice"
import boolReducer from './boolSlice'
 const appStore = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        bool: boolReducer,
    },
 })

 export default appStore;