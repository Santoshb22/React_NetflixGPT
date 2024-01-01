import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SearchedMoviesResult = () => {
    const {searchedGptMovies, searchedApiMovies}  = useSelector(store => store.movie);
    console.log(searchedApiMovies);
  return (
    <div className='bg-black bg-opacity-80'>
        {
            searchedGptMovies.map((movie, index) => <MovieList key={index} title={movie} movies={searchedApiMovies[index]}/> )
        }
    
    </div>
  )
}

export default SearchedMoviesResult