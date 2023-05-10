import { Suspense, useState, useEffect } from 'react';
import { loadTrendList } from 'services/tmdb-api';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { Loader } from 'components/Loader';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');


  useEffect(() => {
    const abortController = new AbortController();

    async function fetch() {
      try {
        setStatus('pending');
        const result = await loadTrendList(abortController);
        setMoviesList(result.data.results);
        setStatus('responded');
      } catch (err) {
        err.code !== 'ERR_CANCELED' && setError(err.message || err)
      }
    }

    fetch();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      {error && <p>{error}</p>}
      {status === 'responded' && (
        <>
          {moviesList.length > 0 && (
            <MoviesList data={moviesList} prefix="movies/" />
          )}
        </>)}
      {status === 'pending' && <Loader />}
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
    </main>
  );
};

export default HomePage;