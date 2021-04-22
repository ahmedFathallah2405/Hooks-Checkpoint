import React from 'react'
import StarRating from './StarRating'

const MovieCard = ({cards}) => {
    return (
        <div className='movie-card'>
          <StarRating rating={cards.rating}/>
          <img src={cards.image} alt={cards.name}/>
          <h3> {cards.name} </h3>
          <h3> {cards.date} </h3>
        </div>
    )
}

export default MovieCard
