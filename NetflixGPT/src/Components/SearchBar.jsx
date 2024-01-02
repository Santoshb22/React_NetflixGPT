import React, { useRef } from 'react'
import lang from '../utils/langConstant'
import { useSelector } from 'react-redux'
import openai from '../utils/gptApiKey'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addSearchedApiMovies, addSearchedGptMovies } from '../utils/movieSlice'

const SearchBar = () => {
  const searchText = useRef(null)
  const dispatch = useDispatch(); 
  const langVal = useSelector(store => store.lang.langVal)

  const getSearchMovies = async(movies) => {
    
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movies+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
    const jsonData = await data.json()
    return jsonData.results
  }

const handleSearchGPT = async () => {
const query = "Give a 5 movie name related to this" +
 searchText.current.value + 
 "I want movies like this comma seperated, Example: Don, Aquaman, Dhoom, Animal, Jawaan"
const getResult = await openai?.chat?.completions?.create({
  messages: [{ role: 'user', content: query}],
  model: 'gpt-3.5-turbo',
});

if(!getResult) return

const movies = getResult.choices[0].message.content;
const arrayMovies = movies.split(",");

const promiseArr = arrayMovies.map((arrayMovies) => getSearchMovies(arrayMovies.trim()));
const finalMovieResult = await Promise.all(promiseArr);

// console.log("from search bar:",finalMovieResult )
dispatch(addSearchedApiMovies(finalMovieResult))
dispatch(addSearchedGptMovies(arrayMovies))
}

  return (
    <div className=' pt-24 text-center'>
      <form onSubmit={(e) => e.preventDefault()}>
        <input 
        ref={searchText}
        className=' py-2 md:py-3 px-2 rounded-l text-sm md:text-md w-52 md:w-80 '
        type="text"
        placeholder= {lang[langVal].placeHolder} />
        <button 
        onClick={handleSearchGPT}
        className='px-3 py-2 md:py-3 font-bold text-white rounded-r text-sm md:text-md md:text-md bg-red-600 '>
          {lang[langVal].search}
        </button>
      </form>
    </div>
  )
}

export default SearchBar