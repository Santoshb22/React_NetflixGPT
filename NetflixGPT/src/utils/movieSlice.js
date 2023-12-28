import { createSlice } from "@reduxjs/toolkit";

const playingMovieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null
    },
    reducers: {
        addplayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload
        }
    }
})

export const { addplayingMovies } = playingMovieSlice.actions
export default playingMovieSlice.reducer;
