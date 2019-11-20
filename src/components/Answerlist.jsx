import React from 'react'
import Answer from './Answer'

export default function AnswerList(props) {
    var answers = []
    if (!props.dataSet) {
        return <p>Loading...</p>
    }
    for (let i = 0; i < props.dataSet.answers.length; i++) {
        answers.push(<Answer key={i} choice={props.dataSet.answers[i]} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
    }
    return (
        <div>
            {answers}
        </div>
    )
}