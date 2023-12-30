import { createSlice } from "@reduxjs/toolkit";

const playingMovieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        trailerVideos: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
    },
    reducers: {
        addplayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideos: (state, action) => {
            state.trailerVideos = action.payload
        },

        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },

        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },

        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        }
    }
})

export const { addplayingMovies, addTrailerVideos, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = playingMovieSlice.actions
export default playingMovieSlice.reducer;
