import React from 'react'

export default function TotalScore(props) {

    return (
        <div className="scorecomponent">
            <h2 >Pisteet: {props.score}</h2>
        </div>
    )
}