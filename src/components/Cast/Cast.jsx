import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadMovieCast } from 'services/tmdb-api';
import { Loader } from 'components/Loader';
import {
  List,
  ListItem,
  WraperInfo,
  ActorName,
  Character,
  ActorImg,
} from './Cast.styled';

const Cast = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [ error, setError ] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetch() {
      setIsLoading(true)
      try {
        const result = await loadMovieCast(id, abortController);
        setData(result.data.cast);
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
  <>
    {error && <p>{error}</p>}
      {isLoading ? <Loader /> : (
       <>
        {data.length > 0 ? (
          <List>
            {data.map(({ character, name, profile_path, cast_id }) => {
              return (
                <ListItem key={cast_id}>
                    <ActorImg
                      src={
                        profile_path
                          ? `https://image.tmdb.org/t/p/w200${profile_path}`
                          : 'https://via.placeholder.com/100x150'
                      }
                      width="100"
                      alt={name}
                    />
                    <WraperInfo>
                      <ActorName>{name} </ActorName>
                      <Character> {character}</Character>
                    </WraperInfo>
                </ListItem>
              )
            })}
          </List>
        ) : (
          <p>We don't have any cast for this movie :( </p>
        )}
       </>
      )}
  </>
);
}

export default Cast;


