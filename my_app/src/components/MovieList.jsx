import React from "react";
import MovieCard from "./MovieCard"; 


function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))
      ) : (
        <p>No movies added yet. Add some!</p>
      )}
    </div>
  );
}

export default MovieList;