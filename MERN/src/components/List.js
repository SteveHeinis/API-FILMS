import React, { Component } from 'react';
import Button from './Button';

import './List.css';


class List extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.movies.map((movie, index) =>
            <ul key={index}>{movie.title}, {movie.release}, {movie.director}
              <br/>
              <img src={movie.image} />
              <Button id={movie._id}/>
            </ul>
          )}
        </ul>
      </div>
    );
  }

}

export default List ;