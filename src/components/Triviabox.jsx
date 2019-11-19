import React, { Component } from 'react'
import Highscore, {Component} from './Highscore';


export default class Triviabox extends Component {

  constructor(props) {
    super(props);
    this.restartGame = this.restartGame.bind(this);
  }

  componentDidMount() {
    getSession().then(session => {
      this.sessionToken = session.token;
    })
  }

restartGame() {
  const {resetGame} = this.props;
  resetGame();
}

  render() {
    return (
      <div>
        
        <Highscore score={rightAnswers} refresh={this.restartGame}/>
      </div>
    )
  }
}
