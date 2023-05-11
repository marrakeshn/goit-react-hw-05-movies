import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadMovieReviews } from 'services/tmdb-api';
import { Fragment } from 'react';
import { Loader } from 'components/Loader';

const Reviews = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetch() {
      setIsLoading(true)
      try {
        const result = await loadMovieReviews(id, abortController);
        setData(result.data.results);
      } catch (err) {
        err.code !== 'ERR_CANCELED' && setError(err.message || err)
      }
      setIsLoading(false)
    }

    fetch();

    return () => {
      abortController.abort();
    };
  }, [id]);

  return (
    <Fragment>
      {error && <p>{error}</p>}
      {isLoading ? <Loader /> : (
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
    </Fragment>
  );
};

export default Reviews;