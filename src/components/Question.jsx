import React from 'react'

export default function Question(props) {

    if (!props.dataSet) {
        return <p>Loading...</p>
    }
    return (
        <h2 className="questiontitle">{props.dataSet.question}</h2>
    )
}