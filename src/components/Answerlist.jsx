import React from 'react'
import Answer from './Answer'

export default function AnswerList(props) {
    var answers = []

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }


    if (!props.dataSet) {
        return <p>Loading...</p>
    }
    for (let i = 0; i < props.dataSet.answers.length; i++) {
        answers.push(<Answer key={i} choice={props.dataSet.answers[i]} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
        shuffle(answers);
    }
    return (
        <div>
            {answers}
        </div>
    )
}