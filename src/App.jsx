import React, { useState } from 'react'
import Search from './components/search'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main>
      <div className='pattern' />

      <div className='wrapper'>
      <header>
        <img src="./hero.png" alt="Hero Banner" />

        <h1>You Love <span className='text-gradient'>Movies</span>? We Do Too!</h1>
      </header>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h1 className='text-white'></h1>
      </div>
    </main>
  )
}

export default App