import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movie)
    const { nowPlayingMovies } = movies
    // console.log(movies.nowPlayingMovies)
  return (
    movies.nowPlayingMovies &&
    <div className='bg-black w-screen bg-gradient-to-t from-black to-transparent -mt-72'>
      <MovieList title = {"Now Playing Movies"} movies = {nowPlayingMovies} />
      <MovieList title = {"Top Pick for You"} movies = {nowPlayingMovies} />
      <MovieList title = {"New Releaase"} movies = {nowPlayingMovies} />
      <MovieList title = {"Trending Now"} movies = {nowPlayingMovies} />
      <MovieList title = {"English Movies"} movies = {nowPlayingMovies} />
      <MovieList title = {"Now Playing Movies"} movies = {nowPlayingMovies} />
      
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