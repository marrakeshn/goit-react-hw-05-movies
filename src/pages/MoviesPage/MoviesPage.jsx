import { useState, useEffect, useCallback } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader';
import {
  SearchField,
  SearchLabel,
  SearchWraper,
  SearchBtn,
} from './MoviesPage.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { loadSearchList } from 'services/tmdb-api';

const MoviesPage = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const fetch = useCallback(async (query) => {
      setIsLoading(true)
      try {
        const result = await loadSearchList(query);
        setMoviesList(result.data.results);
      } catch (err) {
        err.code !== 'ERR_CANCELED' && setError(err.message || err)
      }
      setIsLoading(false)
    }, [])

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams(`searchValue=${searchValue}`);
  };

  const handleChange = ({ target }) => {
    setSearchValue(target.value)
  }

  useEffect(() => {
    fetch(searchParams.get('searchValue'));
  }, [fetch, searchParams])
  
  return (
    <main>
      <SearchWraper>
        <form onSubmit={handleSubmit}>
          <SearchLabel>
            <SearchField
              name="search"
              type="text"
              autocomplete="off"
              autoFocus
              placeholder="Search movies"
              onChange={handleChange}
              value={searchValue}
            />
            <SearchBtn type="submit">
              <AiOutlineSearch style={{ width: '24px', height: '24px' }} />
            </SearchBtn>
          </SearchLabel>
        </form>
      </SearchWraper>
      {error && <p>{error}</p>}
      {isLoading ? <Loader /> : (
        <>
          {moviesList.length > 0 && <MoviesList data={moviesList} prefix="" />}
        </>)}
    </main>
  );
};

export default MoviesPage;