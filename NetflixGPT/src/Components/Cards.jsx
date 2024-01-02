import React from 'react'
import { IMG_URL } from '../utils/constant'

const Cards = ( {imgPath, movieTitle} ) => {
  if(!imgPath) return null
  console.log(movieTitle)

  return (
    <div className=' w-24 px-2 sm:w-40 md:w-40'>
        <img className='rounded-md' src={ IMG_URL + imgPath} alt="MovieBanner" />
        <p className='text-white'>{movieTitle}</p>
    </div>
  )
}

export default Cards