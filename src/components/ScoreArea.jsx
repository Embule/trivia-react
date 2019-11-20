import React from 'react'
import TotalScore from './TotalScore'
import TotalLives from './TotalLives'
import Countdown from 'react-countdown-now';

export default function ScoreArea(props) {
    var style = {
        width: "100%",
        display: "block",
        textAlign: "left",
        float: "left",
        padding: "2em"
    }

    var styleC = {
        display: "inline-block",
        padding: "1em",
        background: "#eee",
        margin: "0 0 0 2em"
    }

    return (
        <div style={style} >
            <TotalScore score={props.score} />
            <TotalLives lives={props.lives} />
            <h2 style={styleC}>Aikaa jäljellä: <Countdown date={props.date} renderer={props.renderer}/></h2>
        </div>
    )
}