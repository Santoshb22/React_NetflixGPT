import React from 'react'
import Cards from './Cards'

const MovieList = ( { movies, title } ) => {
  return (
    <div  >
        <h3 className=' text-sm sm:text-3xl md:text-2xl font-semibold  mx-2 sm:mx-3 mt-5 mb-2 text-white' >{title}</h3>
        <div className='flex overflow-x-auto'>
            <div className='flex gap-6 '>
                {
                    movies?.map(movie =>  <Cards key={movie.id} imgPath = {movie.poster_path} />)
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList