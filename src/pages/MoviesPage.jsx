import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
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
  const [status, setStatus] = useState('idle');

  const fetch = async (query) => {
      try {
        setStatus('pending');
        const result = await loadSearchList(query, abortController);
        setMoviesList(result.data.results);
        setStatus('responded');
      } catch (err) {
        err.code !== 'ERR_CANCELED' && setError(err.message || err)
      }
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
      {status === 'responded' && (
        <>
          {moviesList.length > 0 && <MoviesList data={moviesList} prefix="" />}
        </>)}
      {status === 'pending' && <Loader />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
    </main>
  );
};

export default MoviesPage;