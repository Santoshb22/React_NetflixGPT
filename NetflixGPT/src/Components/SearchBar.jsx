import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <input type="text" placeholder='Search movies' />
        <button className='px-3 py-2 bg-red-600'>Search</button>
    </div>
  )
}

export default SearchBar