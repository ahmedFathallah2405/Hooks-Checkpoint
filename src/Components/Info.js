import React from 'react'
import { Link } from 'react-router-dom'


const Info = ({data , match}) => {
    let movie = data.find((el)=> el.name===match.params.name)
    console.log(match)
    return (
        <div className="movie-card">
            <h3 >{movie.name}</h3>
            <h3>{movie.date} </h3>
            <h3>{movie.description} </h3>
            <button className= "btn">
                <Link to='/'> Come Back </Link>
            </button>
        </div>
    )
}

export default Info
