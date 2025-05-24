import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {

  return (
    <div className='search'>
      <div>
        <img src="search.svg" alt="search" />

        <input className='text-center'
        type="text" 
        placeholder='Explore thousands of movies across the globe'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>
    </div>
  )
}

export default Search