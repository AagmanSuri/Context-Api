import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
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
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
