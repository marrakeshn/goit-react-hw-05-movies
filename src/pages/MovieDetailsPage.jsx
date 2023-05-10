import { Suspense, useState, useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { loadMovieFulInfo } from 'services/tmdb-api';
import {
  Title,
  Wraper,
  WraperInfo,
  GoBack,
  WraperBtn,
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const location = useLocation();
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const abortController = new AbortController();
    async function fetch() {
      try {
        setStatus('pending');
        const result = await loadMovieFulInfo(id, abortController);
        setData(result.data);
        setStatus('responded');
      } catch (err) {
        err.code !== 'ERR_CANCELED' && setError(err.message || err);
      }
    }

    fetch();

    return () => {
      abortController.abort();
    };
  }, [id]);

  const score = data => {
    return Math.round((data['popularity'] / data['vote_count']) * 100);
  };

  const genres = listGenres => {
    return listGenres.map(({ name }) => name).join(', ');
  };

  const { original_title, poster_path } = data;

  return (
    <main>
      {error && <p>{error}</p>}
      {status === 'responded' && (
      <>
      {Object.keys(data).length > 0 && (
        <div>
          <WraperBtn>
            <GoBack to={location.state?.from ?? '/'}>
              <AiOutlineArrowLeft />
              Go back
            </GoBack>
          </WraperBtn>
          <WraperInfo>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w400${poster_path}`
                    : 'https://via.placeholder.com/320x480'
                }
                alt={original_title}
              />
            <div>
              <h2>{data['original_title']}</h2>
              <p>{`User Score: ${score(data)}%`}</p>
              <h3>Overview</h3>
              <p>{data['overview']}</p>
              <h3>Genres</h3>
              <p>{genres(data['genres'])}</p>
            </div>
          </WraperInfo>
          <Wraper>
            <Title>Additional information</Title>
            <ul>
              <li>
                <Link
                  to="cast"
                  state={{ from: location?.state?.from ?? location }}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  state={{ from: location?.state?.from ?? location }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </Wraper>
          </div>)}</>)}
          {status === 'pending' && <Loader />}
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
    </main>
  );
};

export default MovieDetailsPage;