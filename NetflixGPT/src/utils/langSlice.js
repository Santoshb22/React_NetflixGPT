import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: "lang",
    initialState: {
        langVal : "english"
    },
    reducers: {
        changeLang: (state, action) => {
           state.langVal = action.payload
        }
    }
})

export const {changeLang} = langSlice.actions;
export default langSlice.reducer;