import React, { Component } from 'react';
import Movie from "./Movie.js";

class MovieList extends Component {

  render() {

    const movieNodes = this.props.movies.map(movie => {
      return (
        <Movie id="movie" title={movie.title} url={movie.url} key={movie.id}/>

      )
    })

    return <div className="movie-list">{movieNodes}</div>;
  }
}
export default MovieList;
