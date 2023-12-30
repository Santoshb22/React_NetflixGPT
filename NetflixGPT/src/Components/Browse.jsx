import React from 'react'
import LoginHeader from './LoginHeader'
import usePlayingMovie from '../Hooks/useFetchPlayingMovies';
import MainMovieContainer from './MainMovieContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovie from '../Hooks/useFetchPopularMovies';
import useFetchTopRaterMovies from '../Hooks/useFetchTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';

const Browse = () => {

 usePlayingMovie();
 usePopularMovie()
 useFetchTopRaterMovies();
 useUpcomingMovies();

  return (
    <div className='relative ' >
      <LoginHeader/>
      <MainMovieContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse