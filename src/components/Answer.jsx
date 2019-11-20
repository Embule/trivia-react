import React from 'react'

export default function Answer(props) {
    var style = {
        width: "100%",
        height: 50,
        color: "black"
    }
    return (
        <div>
            <button style={style} onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
        </div>
    )
}