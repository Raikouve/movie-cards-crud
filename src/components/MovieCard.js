import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.css';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath, genre, rating } } = this.props;
    return (
      <div data-testid="movie-card" className="w-96 bg-white flex flex-col rounded m-4">
        <img className="rounded-t h-64" src={ imagePath } alt={ title } />
        <div className="px-4 py-4">
          <p className="mb-4 font-bold">{title}</p>
          <p className="mb-8">{storyline}</p>
          <p className="mb-4 font-medium">
            {'Genre: '}
            <span>
              {genre}
            </span>
          </p>
          <p className="mb-4 font-medium">
            {'Rating: '}
            <span>
              {rating}
            </span>
          </p>
        <Link className="text-red-700 font-medium hover:text-red-600 transition duration-300 ease-in-out" to={ `movies/${id}` }>MOVIE DETAILS</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieCard;
