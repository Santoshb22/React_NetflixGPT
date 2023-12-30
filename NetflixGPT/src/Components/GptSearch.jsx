import React from 'react'
import SearchBar from './SearchBar'
import { BG_IMG } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={BG_IMG} alt="Background Image" />
      </div>
        <SearchBar />
    </div>
  )
}

export default GptSearch