import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movie)
    const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies} = movies
  return (
    movies.nowPlayingMovies &&
    <div className='absolute w-screen bg-black'>
      <div className=' -mt-72 '>
      <MovieList title = {"Now Playing Movies"} movies = {nowPlayingMovies} />
      <MovieList title = {"Top Rated Movies"} movies = {topRatedMovies} />
      <MovieList title = {"Upcoming Movies"} movies = {upcomingMovies} />
      <MovieList title = {"English Movies"} movies = {nowPlayingMovies} />
      <MovieList title = {"Popular Movies"} movies = {popularMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer

// {
//     mainContainer
//      - MovieList 
//       -cards 
//       -title
//   }