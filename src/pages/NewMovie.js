import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      shouldRedirect: false,
    };
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/movie-cards-crud" />;
    }
    return (
      <div data-testid="new-movie" className="w-full mt-16 flex justify-center items-center">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
