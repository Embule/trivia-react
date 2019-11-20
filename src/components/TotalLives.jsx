import React from 'react'

export default function TotalLives(props) {
    var style = {
        display: "inline-block",
        padding: "1em",
        background: "#eee",
        margin: "0 0 0 1em"
    }
    return (
        <h2 style={style}>Elämiä jäljellä: {props.lives}</h2>
    )
}