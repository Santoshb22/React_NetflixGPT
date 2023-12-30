import React from 'react'
import lang from '../utils/langConstant'
import { useSelector } from 'react-redux'

const SearchBar = () => {

  const langVal = useSelector(store => store.lang.langVal)

  return (
    <div className=' pt-24 text-center'>
      <form onSubmit={(e) => e.preventDefault()}>
        <input 
        className='py-3 px-2 rounded-l w-80 '
        type="text"
        placeholder= {lang[langVal].placeHolder} />
        <button className='px-3 py-3 font-bold text-white rounded-r bg-red-600 '>
          {lang[langVal].search}
        </button>
      </form>
    </div>
  )
}

export default SearchBar