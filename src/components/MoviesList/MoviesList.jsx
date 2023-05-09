import { Link, useLocation } from 'react-router-dom';
import { List } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ data, prefix }) => {
  const location = useLocation();

  return (
    { data } && (
      <List>
        {data.map(elem => (
          <li key={elem.id}>
            <Link to={`${prefix}${elem.id}`} state={{ from: location }}>
              {elem.title}
            </Link>
          </li>
        ))}
      </List>
    )
  );
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};