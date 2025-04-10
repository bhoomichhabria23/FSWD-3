import React, { useState } from "react";
import Header from "./components/Header";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import "./styles/App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="container">
      <Header />
      <MovieForm addMovie={addMovie} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;