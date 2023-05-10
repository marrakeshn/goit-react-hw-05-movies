import { Suspense, useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { loadMovieReviews } from 'services/tmdb-api';
import { Fragment } from 'react';
import { Loader } from 'components/Loader';

const Reviews = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const abortController = new AbortController();

    async function fetch() {
      try {
        setStatus('pending');
        const result = await loadMovieReviews(id, abortController);
        setData(result.data.results);
        setStatus('responded');
      } catch (err) {
        err.code !== 'ERR_CANCELED' && setError(err.message || err)
      }
    }

    fetch();

    return () => {
      abortController.abort();
    };
  }, [id]);

  return (
    <Fragment>
      {error && <p>{error}</p>}
      {status === 'responded' && (
      <>
      {data.length > 0 ? (
        <ul>
          {data.map(elem => (
            <li key={`${elem.id}`}>
              <p>{`Author: ${elem.author}`}</p>
              <p>{elem.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie :(</p>
      )}</>)}
      {status === 'pending' && <Loader />}
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
    </Fragment>
  );
};

export default Reviews;