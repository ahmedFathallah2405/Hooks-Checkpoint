import React from 'react'
import StarRating from './StarRating'

const Search = ({searchValue,searchRating , handleRating, handleSearch}) => {
    return (
        <div className="header-container">
          <h1> these are our movies</h1> 
          <div className="search-container">
             <input type="text" className="inp" placeholder="enter your movie" value={searchValue} onChange={handleSearch} />
             <StarRating rating={searchRating} handleRating={handleRating}/>
          </div>
        </div>

    )
}

export default Search
