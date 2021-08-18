import React, { useState } from "react";
import Movie from "./Movie";
function MovieList() {
  const [movies, setMovies] = useState([
    {
      name: "harry potter",
      price: "$10",
      id: 123
    },
    {
      name: "Money Heist",
      price: "$20",
      id: 456
    },

    {
      name: "Big bang theory",
      price: "$30",
      id: 789
    }
  ]);
  return (
    <div>
      {movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            name={movie.name}
            price={movie.price}
            id={movie.id}
          />
        );
      })}
    </div>
  );
}

export default MovieList;
