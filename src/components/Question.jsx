import React from 'react'

export default function Question(props) {
    var style = {
        color: "red",
    }
    if (!props.dataSet) {
        return <p>Loading...</p>
    }
    return (
        <h1 style={style}>{props.dataSet.question}</h1>
    )
}