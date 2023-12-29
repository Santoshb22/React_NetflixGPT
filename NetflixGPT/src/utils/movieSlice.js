import { createSlice } from "@reduxjs/toolkit";

const playingMovieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        trailerVideos: null
    },
    reducers: {
        addplayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideos: (state, action) => {
            state.trailerVideos = action.payload
        }
    }
})

export const { addplayingMovies, addTrailerVideos } = playingMovieSlice.actions
export default playingMovieSlice.reducer;
