import React from 'react'
import LoginHeader from './LoginHeader'
import usePlayingMovie from '../Hooks/useFetchPlayingMovies';
import MainMovieContainer from './MainMovieContainer';

const Browse = () => {

 usePlayingMovie();

  return (
    <div>
      <LoginHeader/>
      <MainMovieContainer/>
    </div>
  )
}

export default Browse