import React from 'react'
import SearchBar from './SearchBar'
import { BG_IMG } from '../utils/constant'
import SearchedMoviesResult from './SearchedMoviesResult'

const GptSearch = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed z-[-10]'>
        <img className='object-cover w-full h-full' src={BG_IMG} alt="Background Image" />
      </div>
       <SearchBar />  
       <SearchedMoviesResult/>
    </div>
  )
}

export default GptSearch