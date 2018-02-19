import React, { Component} from 'react';

class Movie extends Component{

  render() {
    return <ul >
      <li class="movie-title">{this.props.title}</li>
      <li class="movie-showtime"><a href={this.props.url}>Showtime</a></li>
    </ul>
  }
}
export default Movie;
