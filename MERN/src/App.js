import React, { Component } from 'react';
import request from 'request';
import Form from './components/Form';
import List from './components/List';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies : []
    };
  }

  componentDidMount() {
    request('http://localhost:8083/', (error, response, body) => {
      if(error) {console.log(error)}
      console.log(body);
      if (body) {
        this.setState({
          movies: JSON.parse(body)
        });
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>API Movies</h1>
        <Form/>
        <List movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
