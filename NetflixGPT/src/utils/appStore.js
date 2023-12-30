import {configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import movieReducer from "./movieSlice"
import boolReducer from './boolSlice'
import langReducer from "./langSlice"
 const appStore = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        bool: boolReducer,
        lang: langReducer
    },
 })

 export default appStore;