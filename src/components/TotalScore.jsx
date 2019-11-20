import React from 'react'

export default function TotalScore(props) {
    var style = {
        display: "inline-block",
        padding: "1em",
        background: "#eee",
        margin: "0 1em 0 0"
    }
    return (
        <h2 style={style}>Pisteet: {props.score}</h2>
    )
}