import React from 'react'
import { IMG_URL } from '../utils/constant'

const Cards = ( {imgPath } ) => {

  if(!imgPath) return null

  return (
    <div className=' w-24 px-2 sm:w-40 md:w-40'>
        <img className='rounded-md' src={ IMG_URL + imgPath} alt="MovieBanner" />
    </div>
  )
}

export default Cards