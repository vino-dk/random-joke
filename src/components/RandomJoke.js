import React, { Component } from 'react'
import '../../src/App.css';

export class RandomJoke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            punchState: false
        }
    }

    handleSetUpClick = () => {
        this.setState({ punchState: true });
    }

    handleFetchDataClick = () => {
        this.fetchData()
        this.setState({ punchState: false })
    }

    render() {
        return (
            <>
                <button className="new-joke-button" onClick={this.handleFetchDataClick}>New Joke</button>
                <div>
                    {!this.props.state.isLoading ? (
                        <>
                            <div>
                                <div key={this.state.id}>
                                    <p className="content">{this.props.jokeObject.setup}</p>
                                </div>

                                <div>
                                    {this.punchState ? (
                                        <p className="punchline">{this.props.jokeObject.punchline}</p>
                                    ) : (
                                            <button className="new-joke-button" onClick={this.handleSetUpClick}>Reveal punchline!</button>
                                        )}
                                </div>
                            </div>

                        </>
                    ) : (
                            <p className="loading">Loading...</p>
                        )}
                </div>
            </>
        )
    }
}



export default RandomJoke