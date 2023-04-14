import "./MovieCard.css";
import React from 'react';

const MovieCard = ({ movie }) => {
    const { name, nam, nu, imdb_rating, duration } = movie;
    return (
        <div className="cardContainer">
            <div className="cardImgContainer">
                <img className="cardImgNam" src={nam} alt="movie-card" />
                <img className="cardImgNu" src={nu} alt="movie-card" />
            </div>
           
        </div>
    )
}

export default MovieCard;