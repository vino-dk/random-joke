import React from 'react'

const JokeList = ({jokeArray}) => {

    return(
        <div>
        {jokeArray.map(joke => (
          <div key={joke.id}>
            <p>{joke.setup} Punchline: {joke.punchline}</p>
            
          </div>
        ))}
      </div>
    )
}

export default JokeList