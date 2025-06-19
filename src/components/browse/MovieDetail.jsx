import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

import "./MovieDetail.css";
import axios from "../../utils/axios";
import request from "../../utils/requests";
const opts = {
  height: "400",
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};

const MovieDetail = ({ movieTrailer, movieData }) => {
  const [trailer, setTrailer] = useState("");
  const { release_date, title, name, overview, vote_average } = movieData;

  useEffect(() => {
    async function fetchTrailer() {
      try {
        const req = await axios.post(request.fetchTrailer, {
          headers: { "Content-Type": "application/json" },
          data: { userToken: "8qlOkxz4wq", movieId: movieData.id },
        });
        setTrailer(req.data.moviesMatchPublishedAt.key);
        return req;
      } catch (err) {
        setTrailer();
      }
    }
    fetchTrailer();
  }, [movieData.id]);

  return (
    <div className="movie_detail">
      <div className="movie_detail_data">
        <h1>{title || name}</h1>
        <hr></hr>

        <h3>Release Date: {release_date}</h3>
        <h3>Vote: {vote_average} / 10</h3>
        <br></br>
        <p>{overview}</p>
      </div>
      <div className="movie_detail_trailer">
        {!trailer && (
          <img
            className="movie_detail_image"
            src={
              `https://image.tmdb.org/t/p/original/` + movieData.backdrop_path
            }
            alt="Poster film"
          />
        )}
        {trailer && <YouTube videoId={trailer} opts={opts} />}
      </div>
    </div>
  );
};

export default MovieDetail;
