import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="h-screen bg-black overflow-x-hidden">
          <nav className="flex justify-center items-center align-middle text-white text-2xl font-extrabold h-24 bg-red-700"><Link exact to="/">Movie Card Library CRUD</Link></nav>
          <Switch>
            <Route path="movie-cards-crud/movies/new" component={ NewMovie } />
            <Route path="movie-cards-crud/movies/:id/edit" component={ EditMovie } />
            <Route exact path="/movie-cards-crud" component={ MovieList } />
            <Route path="movie-cards-crud/movies/:id" component={ MovieDetails } />
            <Route exact component={ NotFound } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
