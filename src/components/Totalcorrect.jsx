import React from 'react'

export default function TotalCorrect(props) {
    var style = {
        display: "inline-block",
        padding: "1em",
        background: "#eee",
        margin: "0 1em 0 0"
    }
    return (
        <h2 style={style}>Oikeita vastauksia: {props.correct}</h2>
    )
}