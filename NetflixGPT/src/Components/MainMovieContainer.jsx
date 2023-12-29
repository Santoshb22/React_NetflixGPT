import React from 'react'
import MainVideoTitle from './MainVideoTitle'
import MainVideoPlaying from './MainVideoPlaying'
import { useSelector } from 'react-redux'

const MainMovieContainer = () => {

    const movies = useSelector(store => store.movie?.nowPlayingMovies)
    if (!movies || movies.length === 0) {
        return null; // or return a loading state, an empty state, or handle it as per your requirements
      }
      
    const movieData = movies[0]
    console.log(movies[0])
    const {id, original_title, overview} = movieData;

  return (
    <div>
        <MainVideoTitle title={original_title} overview={overview} />
        <MainVideoPlaying movieId = {id} />
    </div>
  )
}

export default MainMovieContainer