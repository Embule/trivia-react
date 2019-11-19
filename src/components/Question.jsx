import React, { Component } from 'react';

class Question extends Component {
    render() {
        const {question, answers} = this.props.question;
        return (
            <div>
            <p>{question}</p>
            <p>{answers}</p>
            </div>
        );
    }
}

export default Question;