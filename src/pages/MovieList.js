import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import '../styles/styles.css';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      loading: false,
    });
  }

  render() {
    const { loading, movies } = this.state;
    return (
      <section data-testid="movie-list" className="w-full container mx-auto flex flex-col flex-wrap px-4 py-4 bg-black">
        <div>
          { loading ? <Loading />
            : <div className="w-full container mx-auto flex flex-wrap bg-black">
              { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
            </div> 
          }
        </div>
        <div className="w-full flex justify-center items-center text-white" >
          <Link className="bg-red-700 px-2 py-2 rounded hover:bg-red-600 transition duration-200 ease-linear" to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </section>
    );
  }
}

export default MovieList;
