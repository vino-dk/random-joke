import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokeObject: {},
      error: null
    };
  }

  componentDidMount() {
    axios.get('https://official-joke-api.appspot.com/random_joke')
      .then(res =>
        this.setState({ jokeObject: res.data})
      )
      .catch(error => this.setState({ error }));
  }

  render() {
    const { jokeObject } = this.state
    return (
      <>
        <div className="App">
          <header className="title">
            App to fetch a string
          </header>
          <div className="content">
            <div key={this.state.id} className="content">
              <p className="content">{jokeObject.setup}</p>
              <p className="content">{jokeObject.punchline}</p>
            </div>
          </div>
        </div>
      </>
    );
  };
};

/*
const Joke = (props) => {

  return (
    <>
      <div className="content">{props.setup}</div>
    </>
  )
}
*/

export default App;
