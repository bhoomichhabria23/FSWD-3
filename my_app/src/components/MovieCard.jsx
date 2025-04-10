import React from "react";
import "../styles/MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className={`movie-card ${movie.rating >= 7 ? "good-rating" : "bad-rating"}`}>
      <><h3>{movie.title}</h3><p>⭐ {movie.rating} / 10</p></>
    </div>
  );
}

export default MovieCard;