import React from 'react'
import TotalCorrect from './Totalcorrect'
import TotalLives from './TotalLives'

export default function ScoreArea(props) {
    var style = {
        width: "100%",
        display: "block",
        textAlign: "left",
        float: "left",
        padding: "2em"
    }
    return (
        <div style={style} >
            <TotalCorrect correct={props.correct} />
            <TotalLives lives={props.lives} />
        </div>
    )
}