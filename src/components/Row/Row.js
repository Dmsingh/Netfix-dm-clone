import React, { useState, useEffect } from "react";
import axios from "../../Important/axios";
import "./Row.css";
import { NavLink } from "react-router-dom";
const baseURL = "https://image.tmdb.org/t/p/original";
const baseMURL = "/movies/movie_category";

function Row({ movieType, title, fetchUrl, isLargeRow }) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  

 
  return (
    <div className="row">
      <h2 style={{ color: "white", fontSize: "1.2rem" }}>{title}</h2>

      <div className="posters">
        {movies.map((movie) => (
          <NavLink to={`${baseMURL}/${movieType}/${title}/${movie.id}/`}>
         
            <img
             
              key={movie.id}
              className={`poster ${isLargeRow && "largeposter"}`}
              src={`${baseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          </NavLink>
        ))}
      </div>
      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} >} */}
    </div>
  );
}

export default Row;
