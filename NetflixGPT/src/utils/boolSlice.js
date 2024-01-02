import { createSlice } from "@reduxjs/toolkit";

const boolSlice = createSlice({
    name: "bool",
    initialState: {
        btnValue: true,
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.btnValue = !state.btnValue
        }
    }
})
export const {toggleGptSearch} = boolSlice.actions
export default boolSlice.reducer;