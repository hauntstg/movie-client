import React, { useState, useEffect } from "react";

import axios from "../../utils/axios";
import requests from "../../utils/requests";

import Modal from "./Modal";

import "./SearchResult.css";

const base_url = "https://image.tmdb.org/t/p/original";

const SearchResult = ({ query, onSetActive }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const url = `${requests.fetchSearch}?keyword=${query.keywordInput}&genre=${query.genreInput}&year=${query.yearInput}&mediaType=${query.mediaTypeInput}&language=${query.languageInput}`;

  // console.log(url);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.post(url, {
        headers: { "Content-Type": "application/json" },
        data: { userToken: "RYoOcWM4JW" },
      });
      setMovies(request.data.results);
      return request;
    }

    if (query) {
      fetchData();
    } else {
      setMovies([]);
    }
  }, [url, query]);

  function handleClick(movie) {
    if (selectedMovie && selectedMovie.id === movie.id) {
      setSelectedMovie(null);
    } else {
      setSelectedMovie(movie);
      onSetActive(true);
    }
  }

  function handleClose() {
    setSelectedMovie(null);
    onSetActive(false);
  }

  return (
    <div className="wrap-search">
      {selectedMovie && <Modal data={selectedMovie} onClose={handleClose} />}
      <div className="row">
        <h2>Search Result</h2>
        <div className="row_posters search-resul-container sc2">
          {movies.map((movie) => {
            return (
              <img
                key={movie.id}
                className={`row_poster row_posterLarge`}
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name}
                onClick={() => {
                  handleClick(movie);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
