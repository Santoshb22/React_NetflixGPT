import React from 'react'
import { IMG_URL } from '../utils/constant'

const Cards = ( {imgPath } ) => {

  if(!imgPath) return null

  return (
    <div className='w-44'>
        <img className='rounded-md' src={ IMG_URL + imgPath} alt="MovieBanner" />
    </div>
  )
}

export default Cards