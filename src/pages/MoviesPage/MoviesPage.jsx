import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
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
  const abortController = new AbortController();
  const [isLoading, setIsLoading] = useState(false);

  const fetch = async (query) => {
      setIsLoading(true)
      try {
        const result = await loadSearchList(query, abortController);
        setMoviesList(result.data.results);
      } catch (err) {
        err.code !== 'ERR_CANCELED' && setError(err.message || err)
      }
      setIsLoading(false)
    }

  const handleSubmit = event => {
    event.preventDefault();
    const searchValue = event.target[0].value;
    fetch(searchValue)
  };

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