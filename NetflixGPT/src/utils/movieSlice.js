import { createSlice } from "@reduxjs/toolkit";

const playingMovieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        trailerVideos: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        searchedGptMovies: null,
        searchedApiMovies:null
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
        },

        addSearchedGptMovies: (state, action) => {
           state.searchedGptMovies = action.payload
        },

        addSearchedApiMovies: (state, action) => {
            state.searchedApiMovies = action.payload
        }
    }
})

export const { addplayingMovies, addTrailerVideos, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addSearchedApiMovies, addSearchedGptMovies} = playingMovieSlice.actions
export default playingMovieSlice.reducer;
