import React, { useState } from "react";
import "../styles/MovieForm.css";

function MovieForm({ addMovie }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && rating) {
      addMovie({ title, rating: parseFloat(rating) });
      setTitle("");
      setRating("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating (1-10)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="10"
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default MovieForm;