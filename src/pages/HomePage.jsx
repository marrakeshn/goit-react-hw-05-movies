import { useState, useEffect } from 'react';
import { loadTrendList } from 'services/tmdb-api';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { Loader } from 'components/Loader';

const HomePage = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetch() {
      setIsLoading(true)
      try {
        const result = await loadTrendList(abortController);
        setMoviesList(result.data.results);
      } catch (err) {
        err.code !== 'ERR_CANCELED' && setError(err.message || err)
      }
      setIsLoading(false)
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
      {isLoading ? <Loader /> : (moviesList.length && <MoviesList data={moviesList} prefix="movies/" />)}
    </main>
  );
};

export default HomePage;