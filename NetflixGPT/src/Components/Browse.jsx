import React from 'react'
import LoginHeader from './LoginHeader'
import usePlayingMovie from '../Hooks/useFetchPlayingMovies';
import MainMovieContainer from './MainMovieContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

 usePlayingMovie();

  return (
    <div className='relative ' >
      <LoginHeader/>
      <MainMovieContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse