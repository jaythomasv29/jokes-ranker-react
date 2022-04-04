import React, { Component } from 'react'
import axios from 'axios'
import './JokeList.css'
import Joke from './Joke';
import { v4 as uuid } from 'uuid';

export class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };
  constructor(props) {
    super(props);
    this.state = { jokes: [] }

    
  }


  async componentDidMount() {
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      // Load Jokes
      const res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: 'application/json' }
      }
      )
      jokes.push({id: uuid(), text: res.data.joke, votes: 0})
    }
    this.setState({ jokes: jokes })
    console.log(this.state.jokes)
  }

  handleVote(id, delta) {
    this.setState(
      prevState => ({
        jokes: prevState.jokes.map(joke => 
          joke.id === id ? {...joke, votes: joke.votes + delta } : joke )
      })
    )
  }
  render() {
    return (
      <div className="JokeList-dashboard">
        <h1>Jokes Ranker Dashboard</h1>
        <div className="JokeList">
          <div className="JokeList-sidebar">
            <h1 className="JokeList-title"><span>The</span> Jokes</h1>
            <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
            <button className="JokeList-getmore">Get More Jokes</button>
          </div>

          <div className="JokeList-jokes">
            {
              this.state.jokes.map(joke => (
                <Joke 
                upvote={() => this.handleVote(joke.id, 1)} 
                downvote={() => this.handleVote(joke.id, -1)}
                key={joke.id} text={joke.text} votes={joke.votes}/>
                ))
              }
          </div>
        </div>
      </div>
    )
  }


}

export default JokeList