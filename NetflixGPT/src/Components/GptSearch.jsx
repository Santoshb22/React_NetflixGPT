import React from 'react'
import SearchBar from './SearchBar'
import { BG_IMG } from '../utils/constant'
import { useSelector } from 'react-redux'
import SearchedMoviesResult from './SearchedMoviesResult'

const GptSearch = () => {
  return (
    <div>
      <div className='fixed -z-10'>
        <img src={BG_IMG} alt="Background Image" />
      </div>
       <SearchBar />  
       <SearchedMoviesResult/>
    </div>
  )
}

export default GptSearch