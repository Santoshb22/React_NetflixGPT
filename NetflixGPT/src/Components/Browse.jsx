import React from 'react'
import LoginHeader from './LoginHeader'
import usePlayingMovie from '../Hooks/useFetchPlayingMovies';


const Browse = () => {

 usePlayingMovie();

  return (
    <div>
      <LoginHeader/>
    </div>
  )
}

export default Browse