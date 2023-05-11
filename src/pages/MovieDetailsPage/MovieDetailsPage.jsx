import { useState, useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { loadMovieFulInfo } from 'services/tmdb-api';
import {
  Title,
  Wraper,
  WraperInfo,
  GoBack,
  WraperBtn,
} from '../MovieDetailsPage/MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const location = useLocation();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    async function fetch() {
      setIsLoading(true)
      try {
        const result = await loadMovieFulInfo(id, abortController);
        setData(result.data);
      } catch (err) {
        err.code !== 'ERR_CANCELED' && setError(err.message || err);
      }
      setIsLoading(false)
    }

    fetch();

    return () => {
      abortController.abort();
    };
  }, [id]);

  const score = Math.round((data.popularity / data.vote_count) * 100);
  
  return (
    <main>
      {error && <p>{error}</p>}
      {isLoading ? <Loader /> :
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
                  data.poster_path
                    ? `https://image.tmdb.org/t/p/w400${data.poster_path}`
                    : 'https://via.placeholder.com/320x480'
                }
                alt={data.original_title}
              />
            <div>
              <h2>{data.original_title}</h2>
              <p>{`User Score: ${score}%`}</p>
              <h3>Overview</h3>
              <p>{data.overview}</p>
              <h3>Genres</h3>
              <p>{data.genres.map(({ name }) => name).join(', ')}</p>
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
          </div>)}</>}
    </main>
  );
};

export default MovieDetailsPage;