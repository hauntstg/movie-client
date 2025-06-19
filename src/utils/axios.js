import axios from "axios";

/** base url to make request to the themoviedatabase */
const API_URL = process.env.REACT_APP_API_URL;
const instance = axios.create({
  // baseURL: "https://api.themoviedb.org/3",
  baseURL: API_URL + "/api/movies",
});

// instance.get('/foo-bar');
// https://api.themoviedb.org/3/foo-bar

export default instance;
