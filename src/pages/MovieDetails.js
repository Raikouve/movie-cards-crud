import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = async () => {
    const { match: { params } } = this.props;
    const movie = await movieAPI.getMovie(params.id);
    this.setState({
      movie,
      loading: false,
    });
  }

  render() {
    const { loading, movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    const deleteMovie = () => { movieAPI.deleteMovie(id); };

    return (
      !loading ? (
        <section className="w-full h-full flex justify-center items-center bg-black">
          <div data-testid="movie-details" className="container w-2/6 h5/6 bg-white flex flex-col rounded m-4">
            <img className="rounded-t" alt="Movie Cover" src={imagePath} />
            <div className="flex flex-col">
              <h1 className="m-2 mt-4 font-bold text-xl">{ `Title: ${title}` }</h1>
              <p className="m-2 font-semibold text-lg">{ `Subtitle: ${subtitle}` }</p>
              <p className="m-2">{ `Storyline: ${storyline}` }</p>
              <p className="m-2 font-medium">{ `Genre: ${genre}` }</p>
              <p className="m-2 font-medium">{ `Rating: ${rating}` }</p>
              <div className="flex justify-around mt-8 mb-4">
                <Link className="text-red-700 font-medium hover:text-red-600 transition duration-300" to={ `/movies/${id}/edit` }>EDITAR</Link>
                <Link
                  className="text-red-700 font-medium hover:text-red-600 transition duration-300"
                  to="/movie-cards-crud"
                  onClick={ deleteMovie }
                >
                  DELETAR
                </Link>
                <Link className="text-red-700 font-medium hover:text-red-600 transition duration-300" to="/movie-cards-crud">VOLTAR</Link>
              </div>
            </div>
          </div>
        </section>
      ) : <Loading />
    );
  }
}

MovieDetails.propTypes = ({
  match: PropTypes.objectOf(PropTypes.string).isRequired,
});

export default MovieDetails;
