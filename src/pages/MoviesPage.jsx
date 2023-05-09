import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  SearchField,
  SearchLabel,
  SearchWraper,
  SearchBtn,
} from './MoviesPage.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { loadSearchList } from 'services/tmdb-api';

const MoviesPage = () => {
  const [search, setSearch] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: search });
  };

  useEffect(() => {
    const query = searchParams.get('query');
    const abortController = new AbortController();

    async function fetch() {
      try {
        const result = await loadSearchList(query, abortController);
        setMoviesList(result.data.results);
      } catch (err) {}
    }

    fetch();

    // return () => {
    //   abortController.abort();
    // };
  }, [searchParams]);

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
              value={search}
              onChange={event => setSearch(event.target.value)}
            />
            <SearchBtn type="submit">
              <AiOutlineSearch style={{ width: '24px', height: '24px' }} />
            </SearchBtn>
          </SearchLabel>
        </form>
      </SearchWraper>
      {moviesList.length > 0 && <MoviesList data={moviesList} prefix="" />}
    </main>
  );
};

export default MoviesPage;