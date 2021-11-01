import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.css';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath } } = this.props;
    return (
      <div data-testid="movie-card" className="w-80 bg-white flex flex-col rounded m-4">
        <img className="rounded-t" src={ imagePath } alt={ title } />
        <div className="px-4 py-4">
          <p className="mb-4 font-bold">{title}</p>
          <p className="mb-8">{storyline}</p>
        <Link className="text-red-700 font-medium hover:text-red-600 transition duration-300 ease-in-out" to={ `movies/${id}` }>VER DETALHES</Link>
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
