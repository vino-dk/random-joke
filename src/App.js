import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokeObject: {},
      error: null,
      punchState: false,
      isLoading: true 
    };

    // necessary to make 'this' work in the callback
    this.handleSetUpClick = this.handleSetUpClick.bind(this);
    this.handleFetchDataClick = this.handleFetchDataClick.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({isLoading: true})
    axios.get('https://official-joke-api.appspot.com/random_joke')
      .then(res =>
        this.setState({ 
          jokeObject: res.data,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  handleSetUpClick = () => {
    this.setState({ punchState: true });
  }

  handleFetchDataClick = () => {
    this.fetchData()
    this.setState({ punchState: false })
  }

  render() {
    const { jokeObject, punchState } = this.state
    return (
      <>
        <div className="App">
          <header className="title">
            Take a joke.
          </header>
          <button className="new-joke-button" onClick={this.handleFetchDataClick}>New Joke</button>
          <div>
            <div key={this.state.id}>
              <p className="content">{jokeObject.setup}</p>
            </div>
            <div>
              {punchState ? (
                <p className="punchline">{jokeObject.punchline}</p>
              ) : (
                  <button className="new-joke-button" onClick={this.handleSetUpClick}>Reveal punchline!</button>
                )}
            </div>
          </div>
        </div>
      </>
    );
  };
};

export default App;
