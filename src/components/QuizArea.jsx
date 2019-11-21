import React from 'react'
import Question from './Question'
import AnswerList from './Answerlist'

export default function QuizArea(props) {
    return (
        <div>
            <Question dataSet={props.dataSet} />
            <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
        </div>
    )
}