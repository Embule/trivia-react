import React from 'react'
import Question from './Question'
import AnswerList from './Answerlist'

export default function QuizArea(props) {
    var style = {
        width: "100%",
        display: "block",
        textAlign: "center",
        boxSizing: "border-box",
        float: "left",
        padding: "0 2em"
    }
    return (
        <div style={style}>
            <h2>Kysymys: </h2>
            <Question dataSet={props.dataSet} />
            <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
        </div>
    )
}