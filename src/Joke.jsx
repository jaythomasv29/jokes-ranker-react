import React, { Component } from 'react';
import './Joke.css'

class Joke extends Component {

  getColorEmoji() {
    if(this.props.votes >= 9) {
      return ['#4CAF50', `em em-rolling_on_this_floor_laughing`]
    } else if (this.props.votes >= 7) {
      return ['#8BC34A', `em em-laughing`]
    } else if (this.props.votes >= 5) {
      return ['#FFEB3B', `em em-smiley`]
    } else if( this.props.votes >= 3) {
      return ['#FFC107', `em em-slightly_smiling_face`]
    } else if ( this.props.votes >= 2) {
      return ['#FF9800', `em em-neutral_face`]
    } else {
      return ['#f44336', `em em-confused`]
    }
  }

  
  render() {
    return (
      <div className='Joke'>
        <div className="Joke-buttons">
          <i className="fa-solid fa-arrow-up" onClick={this.props.upvote}></i>
          <span className='Joke-votes'style={{borderColor: this.getColorEmoji()[0]}} >{this.props.votes}</span>
          <i className="fa-solid fa-arrow-down" onClick={this.props.downvote}></i>
        </div>
        <div className="Joke-text">
          {this.props.text}
        </div>
        <div className="Joke-emoji"><i className={this.getColorEmoji()[1]} aria-role="presentation" aria-label="ROLLING ON THE FLOOR LAUGHING"></i>
</div>
      </div>
    );
  }
}

export default Joke;