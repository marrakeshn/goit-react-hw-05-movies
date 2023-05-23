import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';

const API_KEY = 'f341564f871ad54342c422dd44d9e8b4';

const addParams = abort => {
  return {
    signal: abort.signal,
    params: { api_key: API_KEY },
  };
};

export const loadTrendList = async abort => {
  return await axios.get('/3/trending/movie/week', addParams(abort));
};

export const loadSearchList = async (search) => {
  return await axios.get(`3/search/movie`, {
    params: { api_key: API_KEY, query: search },
  });
};

export const loadMovieFulInfo = async (id, abort) => {
  return await axios.get(`3/movie/${id}`, addParams(abort));
};

export const loadMovieCast = async (id, abort) => {
  return await axios.get(`3/movie/${id}/credits`, addParams(abort));
};

export const loadMovieReviews = async (id, abort) => {
  return await axios.get(`3/movie/${id}/reviews`, addParams(abort));
};