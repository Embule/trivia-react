import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      difficulty,
      question,
      duration,
      wrongAnswers,
      checkAnswer
    } = this.props;
    const answers = [correctAnswer].concat(wrongAnswers).sort();
    return (
      <article className="card">
        <div id="question"><p>{question}Kysymys</p></div>
        <div id="choices">
          {choices.map((answer, i)=> {
            return (
            <button key={i} onClick={checkAnswer(answer, correctAnswer)}>Answer{answer}</button>
            )
          })}
        </div>
        
      </article>
    )
  }
}
