import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SearchedMoviesResult = () => {
    const {searchedGptMovies, searchedApiMovies}  = useSelector(store => store.movie);
    if (!searchedApiMovies) return
    if (!searchedGptMovies) return
    console.log(searchedApiMovies);
  return (
    <div className='bg-black bg-opacity-80 px-3 py-3 rounded-md '>
        {
            searchedGptMovies.map((movie, index) => <MovieList key={index} title={movie} movies={searchedApiMovies[index]}/> )
        }
    
    </div>
  )
}

export default SearchedMoviesResult