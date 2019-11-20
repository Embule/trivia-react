import React from 'react'
import TotalScore from './TotalScore'
import TotalLives from './TotalLives'
import Countdown from 'react-countdown-now';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons';

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
            <h2 style={styleC}><FontAwesomeIcon icon={faClock} /> <Countdown date={props.date} renderer={props.renderer}/></h2>
        </div>
    )
}