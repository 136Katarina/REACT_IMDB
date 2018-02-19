import React, { Component } from 'react';
import MovieList from '../components/MovieList.js';
import '../css/movie-box.css';

class MovieBox extends Component{
  constructor(){
    super();
    this.state = {
      // heading: "UK Opening this week"
      movies: [
        {id: 1 , title: "Sausage Party", url: "http://www.imdb.com/title/tt1700841/?ref_=nv_sr_1"},
        {id: 2 , title: "Cafe Society", url:"http://www.imdb.com/title/tt4513674/"},
        {id: 3 , title: "Morgan", url:"http://www.imdb.com/title/tt4520364/?ref_=fn_al_tt_1"},
        {id: 4 , title: "The 9th Life of ", url:"http://www.imdb.com/title/tt3991412/?ref_=fn_al_tt_1"},
        {id: 5 , title: "Naam Hai Akira", url:"http://www.imdb.com/title/tt5465370/?ref_=fn_al_tt_1"},
        {id: 6 , title: "Equity", url:"http://www.imdb.com/title/tt3958780/?ref_=fn_al_tt_1"},
        {id: 7 , title: "Things to Come", url:"http://www.imdb.com/title/tt4120176/?ref_=fn_al_tt_1"}
      ]
    }
  }

  getShowTimes(){
    return console.log("no showtime");
  };

  render(){
    return <div id="box" className="movie-box">
      <h3 id="title-name">{this.props.title}</h3>
      <MovieList movies = { this.state.movies} />
      <a href="http://www.imdb.com/"> See more opening this week </a>
      <hr id="break"></hr>
      <button id="display" onClick={this.getShowTimes.bind(this)}>GET SHOWTIMES >></button>
    </div>;
  }
}

export default MovieBox;
