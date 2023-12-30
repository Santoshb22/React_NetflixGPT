import React from 'react'
import LoginHeader from './LoginHeader'
import usePlayingMovie from '../Hooks/useFetchPlayingMovies';
import MainMovieContainer from './MainMovieContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovie from '../Hooks/useFetchPopularMovies';
import useFetchTopRaterMovies from '../Hooks/useFetchTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const gptSearch = useSelector(store => store.bool.btnValue )
 usePlayingMovie();
 usePopularMovie()
 useFetchTopRaterMovies();
 useUpcomingMovies();

  return (
    <div className='relative ' >
      <LoginHeader/>
      {
        gptSearch ? <>
        <MainMovieContainer/>
          <SecondaryContainer/>
        </> :
          <GptSearch/> 
      }
    </div>
  )
}

export default Browse