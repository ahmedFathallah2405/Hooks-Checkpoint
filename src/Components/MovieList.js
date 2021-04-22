import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movie}) => {
    return (
        <div className='movie-list'>
          {movie.map((film)=>
          <MovieCard cards={film} />
          )}  
        </div>
    )
}

export default MovieList

