import { Suspense, useState, useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
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

  useEffect(() => {
    const abortController = new AbortController();
    async function fetch() {
      try {
        const result = await loadMovieFulInfo(id, abortController);
        setData(result.data);
      } catch (err) {}
    }

    fetch();

    // return () => {
    //   abortController.abort();
    // };
  }, [id]);

  const score = data => {
    return Math.round((data['popularity'] / data['vote_count']) * 100);
  };

  const genres = listGenres => {
    return listGenres.map(({ name }) => name).join(', ');
  };

  const poster = posterPath => {
    if (posterPath !== null && posterPath.length > 0) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    }
    return 'https://via.placeholder.com/320x480';
  };

  return (
    <main>
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
              width="320"
              src={poster(data['poster_path'])}
              alt={`poster ${data['title']}`}
            />
            <div>
              <h2>{data['title']}</h2>
              <p>{`User Score: ${score(data)}%`}</p>
              <h3>Overview</h3>
              <p>{data['overview']}</p>
              <h3>Gemres</h3>
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
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </main>
  );
};

export default MovieDetailsPage;