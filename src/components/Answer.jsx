import React from 'react'

export default function Answer(props) {

    return (
        <div>
            <button className="answerbutton" onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
        </div>
    )
}