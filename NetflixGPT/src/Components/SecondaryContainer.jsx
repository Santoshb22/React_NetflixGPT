import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movie)
    const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies} = movies
  return (
    movies.nowPlayingMovies &&
    <div className='absolute w-full bg-black
  
    '>
      <div className=' -mt-11 sm:-mt-0 md:pt-16 lg:-mt-80  '>
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
 
