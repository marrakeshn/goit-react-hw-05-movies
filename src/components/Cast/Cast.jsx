import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadMovieCast } from 'services/tmdb-api';
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

  useEffect(() => {
    const abortController = new AbortController();

    async function fetch() {
      try {
        const result = await loadMovieCast(id, abortController);
        setData(result.data.cast);
      } catch (err) {}
    }

    fetch();

    return () => {
      abortController.abort();
    };
  }, [id]);

  const getPathToImg = cartInfo => {
    if (
      cartInfo['profile_path'] !== null &&
      cartInfo['profile_path'].length > 0
    ) {
      return `https://image.tmdb.org/t/p/w500${cartInfo['profile_path']}`;
    }
    return 'https://via.placeholder.com/100x150';
  };

  return (
    <>
      {data.length > 0 ? (
        <List>
          {data.map(elem => (
            <ListItem key={elem.id}>
              <WraperInfo>
                <ActorName>{elem.name}</ActorName>
                <Character>{`Character: ${elem.character}`}</Character>
              </WraperInfo>
              <ActorImg
                width="100"
                src={getPathToImg(elem)}
                alt={`foto ${elem.name}`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        "We don't have any cast for this movie."
      )}
    </>
  );
};

export default Cast;