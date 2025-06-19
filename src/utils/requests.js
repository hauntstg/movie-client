// const API_KEY = '504b85f6fe0a10a9c7f35945e14e7ddf';

// const requests = {
// 	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
// 	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
// 	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
// 	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
// 	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
// 	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
// 	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
// 	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
// 	fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
// };

const requests = {
  fetchTrending: `/trending/1`,
  fetchNetflixOriginals: `/discover/28/1`,
  fetchTopRated: `/top-rate/1`,
  fetchActionMovies: `/discover/28/1`,
  fetchComedyMovies: `/discover/35/1`,
  fetchHorrorMovies: `/discover/27/1`,
  fetchRomanceMovies: `/discover/10749/1`,
  fetchDocumentaries: `/discover/99/1`,
  // fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
  fetchTrailer: `/video`,
  fetchSearch: `/search`,
};

export default requests;
