import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokeSetUp: [],
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    axios.get('https://official-joke-api.appspot.com/random_joke')
      .then(res =>
        res.data.map(joke => ({
          setup: `${joke.setup}`,
          punchline: `${joke.punchline}`,
          id: `${joke.id}`
        }))
      )
      .then(jokeSetUp => {
        this.setState({
          jokeSetUp,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, jokeSetUp } = this.state
    return (
      <>
      <div className="App">
        <header className="title">
          App to fetch a string
          </header>
        <div>
          {!isLoading ? (
            jokeSetUp.map(joke => {
              const { setup, punchline, id } = joke;
              console.log(setup, punchline);
              return (
                <div key={id} className="content">
                  <p className="content">{setup}</p>
                  <p className="content">{punchline}</p>
                </div>
              );
            })
          ) : (
              <p>Loading...</p>
            )}
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
