import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadMovieReviews } from 'services/tmdb-api';

const Reviews = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    async function fetch() {
      try {
        const result = await loadMovieReviews(id, abortController);
        setData(result.data.results);
      } catch (err) {}
    }

    fetch();

    // return () => {
    //   abortController.abort();
    // };
  }, [id]);

  return (
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
        "We don't have any reviews for this movie."
      )}
    </>
  );
};

export default Reviews;