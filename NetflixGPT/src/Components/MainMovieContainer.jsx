import React from 'react'
import MainVideoTitle from './MainVideoTitle'
import MainVideoPlaying from './MainVideoPlaying'
import { useSelector } from 'react-redux'

const MainMovieContainer = () => {

  const num = Math.floor(Math.random() * 20 );  
    const movies = useSelector(store => store.movie?.nowPlayingMovies)
    if (!movies || movies.length === 0) {
        return null; // or return a loading state, an empty state, or handle it as per your requirements
      }
      
    const movieData = movies[num]
    
    const {id, original_title, overview} = movieData;

  return (
    <div>
        <MainVideoTitle title={original_title} overview={overview} />
        <MainVideoPlaying movieId = {id} />
    </div>
  )
}

export default MainMovieContainer